document.addEventListener('DOMContentLoaded', function(){

crearGaleria();




    
});

function crearGaleria(){

  const galeria = document.querySelector('.galeria-imagenes');

  
  
  for(let i = 1; i <= 12; i++){

    const li = document.createElement('LI');

    const img = document.createElement('IMG');

    img.src = `/build/img/thumb/${i}.webp`;

    img.dataset.imagenId = i;

    li.appendChild(img);

    galeria.appendChild(li);

    img.onclick = crearImagen;
  }


}


function crearImagen(e){

    console.log("diste click en imagen")

   

   const id = parseInt(e.target.dataset.imagenId);

   const overlay = document.createElement('DIV');
   overlay.classList.add('overlay');

   
   const imagen = document.createElement('IMG');
   imagen.src = `../build/img/grande/${id}.webp`;
   imagen.classList.add('imagen-grande');

  
   

   overlay.appendChild(imagen);

   let body = document.querySelector('body');
   body.appendChild(overlay);
   body.classList.add('fijar-body');

    
   overlay.onclick = function(){
    overlay.remove();
    body.classList.remove('fijar-body');

      
  }

}