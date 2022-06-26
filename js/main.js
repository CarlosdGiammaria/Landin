/* document.getElementById("icono_menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}
  */
//
window.onscroll = function(){
/* Efecto parallax */
    var position = window.pageYOffset || document.documentElement.scrollTop;
    let element1 = document.getElementById("icon_corazon");
    let element2 = document.getElementById("icon_fire");
    element1.style.bottom = position * 0.4 + "px";
    element2.style.top = position * 0.3 + "px";
}