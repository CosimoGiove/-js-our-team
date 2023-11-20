"use strict"

/*# our team procedura scritta

mi creo un array di oggetti membri team , con all'interno  altri array di oggetti, in base al numero dei membri del team.
a loro volta mi scrivo le  informazioni di ogni persona, (nome , ruolo , e foto).
stamapre sul dom le informazioni dei membri.

## bonus 1

trasformare la stringa foto in una immagine effettiva sul dom

## bonus 2

organizzare i singoli membri in card/schede */


const membriTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chied Editor",
        immagine: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "barbara-ramos-graphic-designer.jpg",
    }
]
console.log(membriTeam)


//ciclo il mio array di oggetti
for (let key in membriTeam) {
    console.log(membriTeam[key])
}
const membri1 = document.querySelector(".membri")

function dom(immagine, element,element2) {
    for (let i = 0; i < membriTeam.length; i++) {
        // creazione foto
        const foto = document.createElement(immagine);
        foto.src = `${"img/"}${membriTeam[i].immagine}`
        console.log(foto)
        membri1.append(foto)
        foto.classList.add("img")
        //nome
        const elemento = document.createElement(element);
        elemento.append(membriTeam[i].nome);
        membri1.append(elemento)
        // creazione ruolo
        const ruolo = document.createElement(element2);
        ruolo.append(membriTeam[i].ruolo);
        membri1.append(ruolo);
        
    }
}
const elementiDom = dom("img","h2","div")








