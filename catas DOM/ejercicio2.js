// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const div1 = document.createElement('div')
document.body.appendChild(div1)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement('div')
const nuevoParrafo = document.createElement('p')
div2.append(nuevoParrafo)
document.body.append(div2)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

const div3 = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const parrafos = document.createElement('p')
  div3.append(parrafos)
}
document.body.append(div3)

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
const parrafo = document.createElement('p')
parrafo.textContent = '¡Soy dinámico!'
document.body.append(parrafo)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ul = document.createElement('ul')

for (i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  li.textContent = apps[i]
  ul.append(li)
}
document.body.append(ul)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elements = document.querySelectorAll('.fn-remove-me')
for (const element of elements) {
  element.remove()
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild.

const divs = document.querySelectorAll('div')

const p = document.createElement('p')
p.textContent = 'Voy en el medio!'

document.body.insertBefore(p, divs[1])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const AllDivs = document.querySelectorAll('div.fn-insert-here')
for (const div of AllDivs) {
  const insert = document.createElement('p')
  insert.textContent = '¡Voy dentro!'
  div.appendChild(insert)
}
