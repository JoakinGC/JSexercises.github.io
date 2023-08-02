
const d = document;

export function digitaClock(reloj,btnPlay,btnStop){
	d.addEventListener("click",(e) =>{
		let timeReloj;
		if(e.target.matches(btnPlay)){
			timeReloj = setInterval(() =>{
				let hora = new Date().toLocaleTimeString();
				d.querySelector(reloj).innerHTML = `<h3>${hora}</h3>`;
			},1000);

			e.target.disabled = true;
		}

		if(e.target.matches(btnStop)){
			console.log("Funciona")
			clearInterval(timeReloj);
			d.querySelector(reloj).innerHTML = null;
			d.querySelector(btnPlay).disabled = false;

		}
	})
}


export function alarm(sound,btnPlay,btnStop){
	let alarmTempo;
	const $alarm = d.createElement("audio");
	$alarm.src = sound;
	d.addEventListener("click",(e)=>{
		if (e.target.matches(btnPlay)){
			alarmTempo = setTimeout(() =>{
				$alarm.play();
			},2000);

			e.target.disabled = true;
		}

		if (e.target.matches(btnStop)){
			clearTimeout(alarmTempo);
			$alarm.pause();
			$alarm.currentTime = 0;
			d.querySelector(btnPlay).disabled = false;
		}
	})
}