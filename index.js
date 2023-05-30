const listaRym = document.querySelector("#listaRym");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://rickandmortyapi.com/api/character/";

for(let i=1; i<=200; i++){
    fetch(URL + i)
        .then((response) => response.json())
        .then((data => mostrarPersonajes(data)))
        
}

function mostrarPersonajes(personajes){

    const div = document.createElement("div");
    div.classList.add("rym");
    div.innerHTML = `
        <div class="rym-imagen">
            <img src="${personajes.image}" alt="">
        </div>
        <div class="rym-info">
            <div class="nombre-contenedor">
                <h2 class="rym-nombre">${personajes.name}</h2>
            </div>
            <div class="caracteristicas">
            <p class="${personajes.status}">${personajes.status}</p>
            <p class="${personajes.species}">${personajes.species}</p>
            </div>
        </div>
    
    `
    listaRym.append(div);
}



botonesHeader.forEach(boton => boton.addEventListener("click", (event)=> {
    const btnId = event.currentTarget.id;
    console.log(btnId)

    listaRym.innerHTML ="";
    for (let i = 1; i <= 200; i++) {
        fetch(URL + i)
          .then((response) => response.json())
          .then(data => {
            if (btnId === "ver-todos" || filtrarPersonajes(data, btnId)) {
              mostrarPersonajes(data);
            }
          });
      }

}))

function filtrarPersonajes(personaje, btnId) {
    switch (btnId) {
      case "Alive":
        return personaje.status === "Alive";
      case "Dead":
        return personaje.status === "Dead";
      case "Human":
        return personaje.species === "Human";
      case "Alien":
        return personaje.species === "Alien";
      case "Humanoid":
        return personaje.species === "Humanoid";
      case "Poopybutthole":
        return personaje.species === "Poopybutthole";
      case "Disease":
        return personaje.species === "Disease";
      case "Mythologicalcreature":
        return personaje.species === "Mythological Creature";
      case "Robot":
        return personaje.species === "Robot";
      case "Cronenberg":
        return personaje.species === "Cronenberg";
      case "Animal":
        return personaje.species === "Animal";
      default:
        return true;
    }
  }
  
