const d = document,
n = navigator;

export default function WebCam(id,btnPlay,btnStop){
    const $video = d.getElementById(id),
    $btnPlay = d.getElementById(btnPlay),
    $btnStop = d.getElementById(btnStop);

    //console.log(n.mediaDevices.getUserMedia)

    //valdiacion de navegador

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true,audio:false})
        .then(strem =>{
            console.log(strem);
            $video.srcObject = strem;            
        })
        .catch(err => {
            $video.insertAdjacentHTML("beforebegin",`<p>Sucedio el siguiente error: <mark>${err}</p></mark>`);
            console.log(`Sucedio el siguiente error: ${err}`);            
        });


        d.addEventListener("click",(e) =>{
            if(e.target === $btnPlay){
                $video.play();
                console.log("pepe")
            }

            if(e.target === $btnStop){
                $video.pause();
            }
        });
    }


}