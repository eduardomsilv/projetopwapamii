if('serviceworker' in navigator){
    console.log("Instalando nosso serviceworker...");
    navigator.serviceWorker.register("/sw.js")
        .then(e => 
                {console.log ("sw.js instalado")
                })
        .catch( err => 
            {console.log(err)
                });

}