const d = document;
let x = 0,
y = 0;

export function moveBall(e,ball,stage){
    
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

    //console.log(limitsBall)
    //console.log(limitsStage)

    //const move = (direction) =>{}


    //console.log(e.keyCode);
    switch(e.keyCode){

        //Izq
        case 37:
            
            if(limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--; 
            } 
            break;
        //
        case 38:
            
            
            if(limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;
        case 39:
            
            if(limitsBall.right < limitsStage.right){
                e.preventDefault();
                 x++;
            }
            break;
        case 40:

            if(limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shotCuts (e){
    /*console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log("Ctrl: ",e.ctrlKey);
    console.log("Alt: ",e.altKey);
    console.log("Shift: ",e.shiftKey)
    console.log(e); */

    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta en el teclado");
    }

    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmación con en el teclado");
    }

    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado una aviso en el teclado");
    }
}