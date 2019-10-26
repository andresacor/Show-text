
// innerHTML contiene la etiqueta HTML
//  *Obtiene el contenido HTML del elemento
//  *Establece contenido HTML
//  Se recomienda para actualizar el elemento incluyendo el HTML

// textContent
//  *Establece el contenido del texto de un elemento como texto plano incluyendo el HTML
//  *Devuelve el contenido del texto de un elemento

//  innerText 
//   *Devuelve el texto visible en un nodo
//   *No es standar


let simbolo = document.querySelector('p')
simbolo.addEventListener('mouseover', mostrarTexto )

simbolo.addEventListener('mouseleave', ocultarTexto )


function mostrarTexto(e) {
  e.preventDefault()
  simbolo.innerHTML = 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. '
  simbolo.classList.add('pequeño')
  simbolo.classList.add('gris')
}

function ocultarTexto(e) {
  e.preventDefault()
 
  simbolo.innerHTML = '+'
  simbolo.classList.remove('pequeño')
  simbolo.classList.remove('gris')
  simbolo.classList.add('naranja')
}

// let parrafo = document.querySelector('p').innerHTML ='<em>hola mundo</em>'
// console.log(parrafo)
