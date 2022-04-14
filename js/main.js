function init(){
    editarAcercaDe()
}

function editarAcercaDe(){
    const btnEditaracercaDe = document.querySelector("#btnEditarAcercaDe");
    btnEditaracercaDe.addEventListener("click",modificarContenidoAcercaDe)
    
    function modificarContenidoAcercaDe(){
        let inputAcercaDe = document.querySelector("#inputEditarAcercaDe");
        inputAcercaDe.style.display = "block";

        inputAcercaDe.addEventListener("keypress", reemplazarContenido)

        function reemplazarContenido(e){
            if (e.key === "Enter"){
                let contenidoAcercaDe = document.querySelector("#contenidoAcercaDe");
                contenidoAcercaDe.innerText = inputAcercaDe.value
                inputAcercaDe.style.display = "none";
            }
            }
        
        
    }
    
}