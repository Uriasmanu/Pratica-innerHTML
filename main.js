const aperte = document.getElementById("button");

aperte.addEventListener("click", (event)=>{

    var name = prompt("Digite o seu nome:");

    var text = document.getElementById("texto");

    text.innerHTML = `Seja muito bem vindo(a) ${name}`
})