let imagens = [
    'src/assets/slideshow1.jpg',
    'src/assets/slideshow2.jpg',
    'src/assets/slideshow3.jpg',
    'src/assets/slideshow4.jpg'
]

let i = 0;
let tempo = 5000;

function slideShow(){
    const img = document.getElementById("image");
    if(img){
        img.src = imagens[i];
        i=(i+1) % imagens.length;
        setTimeout(slideShow, tempo);
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnEsq = document.getElementById("esquerda");
  const btnDir = document.getElementById("direita");

  if (btnEsq && btnDir) {
    btnEsq.addEventListener("click", () => {
      i = (i - 1 + imagens.length) % imagens.length;
      document.getElementById("image").src = imagens[i];
    });

    btnDir.addEventListener("click", () => {
      i = (i + 1) % imagens.length;
      document.getElementById("image").src = imagens[i];
    });
  }

  if (document.getElementById("image")) {
    slideShow();
  }
});