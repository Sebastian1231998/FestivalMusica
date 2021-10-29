document.addEventListener('DOMContentLoaded', function(){

    scrollnav();
    fixedHeader();
});

function fixedHeader(){

   const barra = document.querySelector('.header')
   const observer = new IntersectionObserver(function(entries){
      
    if(entries[0].isIntersecting){
        barra.classList.remove('fijo');
    }else{
        barra.classList.add('fijo');
    }


   })

   observer.observe(document.querySelector('.contenido-festival'));

};

function scrollnav(){

    const enlaces = document.querySelectorAll('.navegacion a')

    console.log(enlaces)

    enlaces.forEach(enlace =>{

        enlace.addEventListener('click',function(e){
            e.preventDefault();
 
            console.log(e.target.attributes.href.value)
            const seccion = document.querySelector(e.target.attributes.href.value);

            
            
            seccion.scrollIntoView({
                behavior:'smooth',
            })
        }) 

        

    });

}
