const $btn_menu_abrir = document.querySelector("#btn_menu");
const $sidenav = document.querySelector("#sidenav");
const $overlay = document.querySelector(".overlay");

$btn_menu_abrir.addEventListener("click", function(){
    $sidenav.style.left=0;
    $overlay.style.display="block";
})
$overlay.addEventListener("click", function(){
    $sidenav.style.left="-360px";
    $overlay.style.display="none";
})