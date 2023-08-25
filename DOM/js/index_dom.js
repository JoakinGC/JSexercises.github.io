import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {digitaClock,alarm} from "./reloj.js"
import {moveBall, shotCuts} from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollTopBotton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objecto_responsive.js";
import responsiveTeste from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/detecion_dispositivos.js";
import networkStatus from "./dom/deteccion_redes.js";
import WebCam from "./dom/deteccion_camara.js";

const d = document;
  

d.addEventListener("DOMContentLoaded",(e) =>{
  hamburgerMenu(".panel-btn",".panel",".menu a");
  digitaClock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm("assets/audio/alarma-sonido.mp3","#activar-alarma","#desactivar-alarma");
  countDown("countdown", "Aug 15,2022 12:05:19", "Felic Cumpleaño y Docente Digital");
  scrollTopBotton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    "<a href='https://youtu.be/6IwUl-4pAzc' target='_blank' rel ='noopener'>Ver video </a>",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    );

    responsiveMedia(
      "gmaps",
      "(min-width: 1024px)",
      "<a href='https://goo.gl/maps/dqY6UfgW4ZTsqR8W8' target='_blank' rel ='noopener'>Ver maps </a>",
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.951143767989!2d-0.527367489026835!3d38.39637867599421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623736a20484a5%3A0xb400d1ebf6f613dd!2sSan%20Vicente!5e0!3m2!1ses-419!2ses!4v1691501411086!5m2!1ses-419!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      );
      responsiveTeste("responsive-tester");
      userDeviceInfo("user-device","content-exclusive");
      WebCam("webcam","init","parar");
})

d.addEventListener("keydown", (e) =>{
  shotCuts(e);
  moveBall(e,".ball",".stage")
})

darkTheme(".dark-theme-btn","dark-mode");
networkStatus()