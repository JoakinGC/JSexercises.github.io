const d = document,
n = navigator,
ua = n.userAgent;


export default function userDeviceInfo(id,contenEx){
    const $id = d.getElementById(id),
    $contExc = d.getElementById(contenEx),
    isMobile = {
        android:() => ua.match(/android/i),
        ios: () =>ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windos phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    },
    isDesktop = {
        linux: () => ua.match(/linux/i),
        windows: () => ua.match(/windows nt/i),
        mac: () =>  ua.match(/mac os/i),
        any:function() {
            return this.linux()||this.mac()||this.windows;
        }
    },
    isBrowser = {
        chrome: () => ua.match(/Chrome/),
        safari: () => ua.match(/Safari/),
        firefox: () => ua.match(/Firefox/),
        opera: () => ua.match(/Opera|Opera mini/),
        ie: () => ua.match(/Msie|iemobile/),
        edge:() => ua.match(/Edg/),
        any: function (){
            return (
                this.ie()||
                this.edge()||
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()
                );
        },
    };
    
    /*console.log(isMobile.android())
    console.log(isMobile.ios())*/

    $id.innerHTML = `
        <ul>
            <li>User Agent <b> ${ua}</b> </li>
            <li>Plataforma: <b> ${isMobile.any()? isMobile.any():isDesktop.any()}</b> </li>

            <li>Navagador: <b> ${isBrowser.any()}</b><li>
        </ul>
    `;

    /*Contenido exclusivo */
    if(isBrowser.chrome()){
        $contExc.innerHTML = `<br><p><mark> Este contenido sólo se ve en Chrome</mark> </p>`;
    }


    if(isBrowser.firefox()){
        $contExc.innerHTML = `<br><p><mark> Este contenido sólo se ve en Firefox</mark><p>`;
    }

    if(isDesktop.linux()){
        $contExc.innerHTML = `<p><mark>Descarga nuestro software para linux <mark></p>`;
    }

    if(isDesktop.windows()){
        $contExc.innerHTML = `<br><p><mark>Descarga nuestro software para windows <mark></p>`;
    }

    if(isDesktop.mac()){
        $contExc.innerHTML = `<br><p><mark>Descarga nuestro software para mac <mark></p>`;
    }

    // Redirecciones:

    if(isMobile.android()){
        window.location.href = "https://www.google.com/";
    }
}