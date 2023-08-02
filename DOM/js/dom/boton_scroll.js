const d = document,
w = window;

export default function scrollTopBotton(btn){
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll",(e) =>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;


        if(scrollTop > 600){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }

        console.log(w.pageYOffset, d.documentElement.scrollTop);
    })
    d.addEventListener("click",(e) =>{
        w.scrollTo({
            behavior: "smooth",
            top: 0,
            //left : 0,
        })
    })
}