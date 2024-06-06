// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
let ul = document.createElement('ul')

for (country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ul.append(li)
}
document.body.append(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminar = document.querySelector('.fn-remove-me')
eliminar.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const List = document.createElement('ul')
for (car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  li.setAttribute('data-function', 'printHere')
  List.append(li)
}
document.body.append(List)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const elements = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
for (i = 0; i < elements.length; i++) {
  const divBox = document.createElement('div')

  const titleh4 = document.createElement('h4')
  titleh4.textContent = elements[i].title

  const img = document.createElement('img')
  img.src = elements[i].imgUrl

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Eliminar este elemento'

  deleteButton.addEventListener('click', function () {
    divBox.remove()
  })

  divBox.append(titleh4)
  divBox.append(img)
  divBox.append(deleteButton)
  document.body.append(divBox)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const buttonDelete = document.createElement('button')
buttonDelete.textContent = 'Elimina el último elemento'
buttonDelete.addEventListener('click', function () {
  const divs = document.querySelectorAll('div')
  divs[divs.length - 1].remove()
})

document.body.append(buttonDelete)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

//! en el ejercicio 4 está adjunto
