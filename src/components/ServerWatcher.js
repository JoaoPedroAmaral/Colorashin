import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ServerCrash, CheckCircle } from "lucide-react";
import api from "../services/api";

const PING_TIMEOUT_MS = 3000;
const PING_INTERVAL_MS = 10 * 60 * 1000;

export default function ServerWatcher() {
  const [status, setStatus] = useState("idle");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let intervalId;

    const performPing = async () => {
      const fetchPromise = api.get("/");
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), PING_TIMEOUT_MS),
      );

      try {
        await Promise.race([fetchPromise, timeoutPromise]);
        return "fast";
      } catch (error) {
        if (error.message === "timeout") {
          return "slow";
        }
        return "error";
      }
    };

    const pingServer = async () => {
      const result = await performPing();

      if (result === "fast" && status !== "online") {
        setStatus("online");
        if (status === "waking" || status === "error") {
          setVisible(true);
          setTimeout(() => setVisible(false), 3000);
        }
      } else if (result === "slow") {
        setStatus("waking");
        setVisible(true);
        try {
          await api.get("/");
          setStatus("online");
          setTimeout(() => setVisible(false), 3000);
        } catch {
          setStatus("error");
          setVisible(true);
        }
      } else if (result === "error") {
        setStatus("error");
        setVisible(true);
      }
    };

    pingServer();
    intervalId = setInterval(pingServer, PING_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [status]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        style={{ zIndex: 10001 }}
        className="fixed bt-4 -translate-x-1/2 z-50 flex items-center shadow-lg rounded-xl px-4 py-3 bg-white border border-[#EBEBEB]"
      >
        {status === "waking" && (
          <div className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 text-brandPink animate-spin" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-mainText">
                Despertando o Servidor...
              </span>
              <span className="text-xs text-[#666]">
                O Render pode levar ~50s para ligar.
              </span>
            </div>
          </div>
        )}

        {status === "online" && (
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-mainText">
                Servidor Pronto!
              </span>
              <span className="text-xs text-[#666]">Tudo operando normal.</span>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-3">
            <ServerCrash className="w-5 h-5 text-red-500" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-mainText">
                Erro de Conexão
              </span>
              <span className="text-xs text-[#666]">
                O servidor backend está inacessível.
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
