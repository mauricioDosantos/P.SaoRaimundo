const $btn_menu_abrir = document.querySelector("#btn_menu");
const $sidenav = document.querySelector("#sidenav");
const $overlay = document.querySelector(".overlay");

$btn_menu_abrir.addEventListener("click", function(){
    $sidenav.classList.add("mostrar-sidenav");
    $overlay.classList.add("mostrar-overlay");
})
$overlay.addEventListener("click", function(){
    $sidenav.classList.remove("mostrar-sidenav");
    $overlay.classList.remove("mostrar-overlay");
})