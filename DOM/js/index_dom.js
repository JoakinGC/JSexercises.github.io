import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {digitaClock,alarm} from "./reloj.js"
import {moveBall, shotCuts} from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollTopBotton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;
  

d.addEventListener("DOMContentLoaded",(e) =>{
  hamburgerMenu(".panel-btn",".panel",".menu a");
  digitaClock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm("assets/audio/alarma-sonido.mp3","#activar-alarma","#desactivar-alarma");
  countDown("countdown", "Aug 15,2022 12:05:19", "Felic Cumpleaño y Docente Digital");
  scrollTopBotton(".scroll-top-btn");
  darkTheme(".dark-theme-btn","dark-mode");
})

d.addEventListener("keydown", (e) =>{
  shotCuts(e);
  moveBall(e,".ball",".stage")
})

