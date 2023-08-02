const d = document;


export default function countDown(id,limitDay,finaMessage){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDay).getTime();

    let countdownTempo = setInterval(() =>{
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        horas = ("0" +
         Math.floor(limitTime % (1000 * 60 * 60 *24) / (1000 * 60 * 60))).slice(-2),
        minutos = ("0" +
        Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
        segundos = ("0" +
        Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);


        $countdown.innerHTML = `<h3>Faltan: ${days} días ${horas} horas ${minutos} minutos ${segundos} segundos</h3>`;
        

        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finaMessage}</h3>`;
        
        }
    },1000)
}