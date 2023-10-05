const opciones = document.getElementById('opciones');
const botones = document.getElementById('botones')

opciones.addEventListener("click",()=>{
    if(botones.classList.contains("d-none")){
    botones.classList.remove("d-none");
    console.log(botones.classList)}
    else{
        botones.classList.add("d-none")}
})