let url = 'https://digimon-api.vercel.app/api/digimon'
let digimons = []


fetch(url)
.then(response => response.json())
.then(datos => {
    console.log(datos)
    digimons.push(datos)
    for (let i = 0; i < datos.length; i++) {        
        let elemento = datos[i]
        let imagen = elemento.img
        let nombre = elemento.name
        let nivel = elemento.level
        let contenido = document.getElementById('contenido')
        contenido.innerHTML += `        
        
            <div class="card" id='card' onclick="saltar(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal"  >
                <img src="${imagen}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${nivel}</p>
                </div>
            </div>       
        `; 
    }
})


function saltar(id) {
    document.getElementById('nombre').innerHTML = `${digimons[0][id].name}`
    document.getElementById('imagen').src = `${digimons[0][id].img}`
    document.getElementById('nivel').innerHTML = `${digimons[0][id].level}`
    
    document.getElementById('modal-content').style.border= '4px solid #0d6efd'
}
