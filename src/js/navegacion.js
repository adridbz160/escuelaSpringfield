let navegacion = document.querySelector('div>nav');
    navegacion.id = "navegacion"

    let contenedorIcono = document.getElementById("menu");
    contenedorIcono.classList.add("nav-responsive");
    contenedorIcono.addEventListener('click', mostrarOcultarMenu);

    let menuVisible = false
    //funcioin para ocultar y mostrar menu
    function mostrarOcultarMenu(){
        if(menuVisible){
          document.querySelector('div>nav').classList=""
            menuVisible = false
        }else{
            document.querySelector('div>nav').classList="responsive"
            menuVisible = true
        }
    }