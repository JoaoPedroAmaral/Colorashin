const uploadBox = document.querySelector('.upload-box');
const fileInput = document.getElementById('fileInput');
const previewList = document.getElementById('previewList');
const previewContainer = document.getElementById('imagePreviewContainer');
const coisasLabel = document.querySelector('.coisas');

// 1. Previne comportamento padrão
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  uploadBox.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
  }, false);
});

// 2. Efeito visual de destaque
['dragenter', 'dragover'].forEach(eventName => {
  uploadBox.addEventListener(eventName, () => uploadBox.classList.add('highlight'), false);
});

['dragleave', 'drop'].forEach(eventName => {
  uploadBox.addEventListener(eventName, () => uploadBox.classList.remove('highlight'), false);
});

// 3. Drop de múltiplos arquivos
uploadBox.addEventListener('drop', (e) => {
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files; 
    handleFiles(files); // Passa a lista toda
  }
});

// 4. Clique normal para múltiplos arquivos
fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    handleFiles(e.target.files); // Passa a lista toda
  }
});

// 5. Função para ler e mostrar múltiplas imagens
function handleFiles(files) {
  // Limpa as prévias anteriores
  previewList.innerHTML = '';
  
  // Transforma a FileList em Array para usar o forEach
  Array.from(files).forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        // Cria um elemento de imagem para cada arquivo
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = "150px"; // Tamanho da miniatura
        img.style.height = "150px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.border = "2px solid #ccc";
        
        previewList.appendChild(img);
      };
      
      reader.readAsDataURL(file);
    }
  });

  // Mostra o container e esconde o texto original
  previewContainer.style.display = 'block';
  coisasLabel.style.display = 'none';
}


window.addEventListener('scroll', function() {
  const nav = document.querySelector('.NavBar');
  
  // Se o scroll for maior que 50px, adiciona a classe, senão remove
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

