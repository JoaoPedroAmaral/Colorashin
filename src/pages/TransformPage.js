import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function TransformPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };
  return (
    <>
      <NavBar />
      <div
        className="bodyTransform"
        style={{
          marginTop: "80px",
          minHeight: "calc(100vh - 80px - 200px)",
          padding: "40px",
        }}
      >
        <h1 className="titleTransform">Transforme Imagem em Desenho</h1>
        <p className="legendTransform">
          Envie uma foto e veja a mágica acontecer!
        </p>

        <label
          className="upload-box"
          htmlFor="fileInput"
          style={{ cursor: "pointer", position: "relative" }}
        >
          <div className="coisas">Escolher imagem</div>

          {selectedFiles.length > 0 && (
            <div id="imagePreviewContainer" style={{ marginTop: "20px" }}>
              <p>Imagens selecionadas: {selectedFiles.length}</p>
              <div
                id="previewList"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                {selectedFiles.map((fileData, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <img
                      src={fileData.preview}
                      alt={`Preview ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFile(index);
                      }}
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        background: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                      }}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </label>

        <input
          style={{ display: "none" }}
          type="file"
          id="fileInput"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <button
          className="transformButton"
          style={{ marginTop: "32px" }}
          id="transformButton"
        >
          Transformar Imagem
        </button>
      </div>
      <Footer />
    </>
  );
}
