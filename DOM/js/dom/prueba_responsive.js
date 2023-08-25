const d = document;
const w = window;

export default function responsiveTeste(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit",(e) =>{
        /*
        
        if(e.target === $form){
            console.log("FOrmulario")
        } */

        if(e.target === $form){
            e.preventDefault();
            //console.log("FOrmulario");
            tester = w.open($form.direccion.value,"teste",`innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`); 
        }
        
    });

    d.addEventListener("click",(e) =>{

        if(e.target===$form.cerrar)tester.close()

    })
}