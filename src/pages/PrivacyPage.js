import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArrowNavButton from "../components/ArrowNavButton";
import { Shield, Lock, Eye, Database, Trash2, Mail } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-start items-center gap-8 py-10 mt-[60px] m-auto px-4 sm:px-8 max-w-[900px]">
        <div className="text-center w-full mt-10 md:mt-20">
          <h1 className="text-brandPink font-chango text-3xl md:text-5xl m-0 p-0 drop-shadow-sm">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-mainText text-lg md:text-xl font-sans max-w-[800px] mx-auto leading-relaxed">
            Última atualização: Março de 2026
          </p>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brandPink/15 text-brandPink flex items-center justify-center flex-shrink-0">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="font-bold text-mainText">Seus Dados, Sua Propriedade</h3>
              <p className="text-sm text-[#555] mt-1">
                Você controla suas informações e pode solicitá-las a qualquer momento.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brandPink/15 text-brandPink flex items-center justify-center flex-shrink-0">
              <Lock size={20} />
            </div>
            <div>
              <h3 className="font-bold text-mainText">Segurança Garantida</h3>
              <p className="text-sm text-[#555] mt-1">
                Utilizamos criptografia e medidas de segurança para proteger seus dados.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-10 text-mainText font-sans">
          <p className="mb-8 leading-relaxed">
            A sua privacidade é importante para nós. Esta Política de
            Privacidade explica como coletamos, usamos, protegemos e
            compartilhamos suas informações quando você utiliza o Colorashin.
          </p>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4 flex items-center gap-2">
              <Eye size={20} />
              Informações que Coletamos
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              <span className="font-bold text-mainText">
                Informações de Conta:
              </span>{" "}
              Quando você se cadastra, coletamos seu email e nome para criação
              da conta.
            </p>
            <p className="leading-relaxed text-[#555] mb-3">
              <span className="font-bold text-mainText">Imagens Enviadas:</span>{" "}
              As imagens que você envia para processamento são armazenadas
              temporariamente em nossos servidores.
            </p>
            <p className="leading-relaxed text-[#555]">
              <span className="font-bold text-mainText">
                Dados de Uso:
              </span>{" "}
              Coletamos informações anonimamente sobre como você usa o
              serviço para melhorar nossa plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4 flex items-center gap-2">
              <Database size={20} />
              Como Usamos suas Informações
            </h2>
            <ul className="list-disc list-inside pl-4 text-[#555] space-y-2">
              <li>Fornecer e manter nossos serviços</li>
              <li>Processar suas imagens e gerar downloads</li>
              <li>Comunicar com você sobre sua conta</li>
              <li>Melhorar e personalizar sua experiência</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4 flex items-center gap-2">
              <Lock size={20} />
              Proteção de Dados
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              Implementamos medidas de segurança robustas para proteger suas
              informações:
            </p>
            <ul className="list-disc list-inside pl-4 text-[#555] space-y-2">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Acesso restrito a informações pessoais</li>
              <li>Monitoramento contínuo de我们的 sistemas</li>
              <li>Backups regulares de dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              Compartilhamento de Informações
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              Não vendemos suas informações pessoais. Compartilhamos dados
              apenas nas seguintes situações:
            </p>
            <ul className="list-disc list-inside pl-4 text-[#555] space-y-2">
              <li>
                <span className="font-bold text-mainText">Prestadores de Serviço:</span>{" "}
                Empresas que nos auxiliam a operar o serviço (hospedagem,
                processamento de pagamentos)
              </li>
              <li>
                <span className="font-bold text-mainText">Requisitos Legais:</span>{" "}
                Quando necessário para cumprir a lei ou proteger direitos
              </li>
              <li>
                <span className="font-bold text-mainText">Consentimento:</span>{" "}
                Com sua autorização explícita
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4 flex items-center gap-2">
              <Trash2 size={20} />
              Retenção e Exclusão de Dados
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              <span className="font-bold text-mainText">
                Imagens Processadas:
              </span>{" "}
              As imagens enviadas são automaticamente excluídas após o
              processamento e download.
            </p>
            <p className="leading-relaxed text-[#555] mb-3">
              <span className="font-bold text-mainText">Dados de Conta:</span>{" "}
              Você pode solicitar a exclusão da sua conta a qualquer momento.
              Seus dados serão removidos em até 30 dias.
            </p>
            <p className="leading-relaxed text-[#555]">
              <span className="font-bold text-mainText">
                Dados de backup:
              </span>{" "}
              Informações podem permanecer em backups por até 60 dias após a
              exclusão.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              Seus Direitos
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              Você tem os seguintes direitos sobre seus dados:
            </p>
            <ul className="list-disc list-inside pl-4 text-[#555] space-y-2">
              <li>
                <span className="font-bold text-mainText">Acesso:</span>{" "}
                Solicitar uma cópia dos seus dados
              </li>
              <li>
                <span className="font-bold text-mainText">Correção:</span>{" "}
                Solicitar correção de dados incorretos
              </li>
              <li>
                <span className="font-bold text-mainText">Exclusão:</span>{" "}
                Solicitar a remoção dos seus dados
              </li>
              <li>
                <span className="font-bold text-mainText">
                  Portabilidade:
                </span>{" "}
                Receber seus dados em formato legível
              </li>
              <li>
                <span className="font-bold text-mainText">Objecção:</span>{" "}
                Opor-se ao tratamento dos seus dados
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              Cookies e Tecnologias de Rastreamento
            </h2>
            <p className="leading-relaxed text-[#555] mb-3">
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc list-inside pl-4 text-[#555] space-y-2">
              <li>Manter você conectado à sua conta</li>
              <li>Lembrar suas preferências</li>
              <li>Entender como você usa nosso serviço</li>
              <li>Melhorar nossa plataforma</li>
            </ul>
            <p className="leading-relaxed text-[#555] mt-3">
              Você pode desativar cookies através das configurações do seu
              navegador, mas isso pode afetar algumas funcionalidades do
              serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              Crianças
            </h2>
            <p className="leading-relaxed text-[#555]">
              Nosso serviço não é direcionado a crianças menores de 13 anos.
              Não coletamos intencionalmente informações de crianças. Se você
              acredita que coletamos dados de uma criança, entre em contato
              conosco imediatamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4">
              Alterações nesta Política
            </h2>
            <p className="leading-relaxed text-[#555]">
              Podemos atualizar esta Política de Privacidade ocasionalmente.
              Notificaremos você sobre alterações significativas através do
              email cadastrado ou por um aviso em nosso site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-brandPink font-chango text-xl mb-4 flex items-center gap-2">
              <Mail size={20} />
              Contato
            </h2>
            <p className="leading-relaxed text-[#555]">
              Se você tiver dúvidas sobre esta Política de Privacidade ou
              quiser exercer seus direitos, entre em contato através da{" "}
              <a href="/help" className="text-brandPink hover:underline">
                página de Ajuda e Contato
              </a>
              .
            </p>
          </section>

          <div className="border-t border-[#eee] pt-6 mt-8">
            <p className="text-sm text-[#777]">
              Ao usar o Colorashin, você reconhece ter leído e entendido esta
              Política de Privacidade.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <ArrowNavButton />
    </>
  );
}
