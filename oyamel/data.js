const data = [
   {
      "name": "HAMBURGUESAS",
      "icon": "./assets/iconburger.png",
      "platillos": [
         {
            "name": "Hamburguesa Hawaiana",
            "ing": "(Carne aliñada, piña, jamón york, queso Oaxaca queso amarillo) Acompañada con papas a la francesa",
            "price": "60"
         }, {
            "name": "Hamburguesa 3 Quesos",
            "ing": "(Carne aliñada, queso manchego, qu﻿eso amarillo, queso Oaxaca y tocino) Acompañada con papas",
            "price": "68"
         }, {
            "name": "Hamburguesa Clásica",
            "ing": "(Carne aliñada, jamón york y queso amarillo). No lleva papas",
            "price": "45"
         },
      ]
   }, {
      "name": "HAMBURGUESAS ESPECIALES",
      "icon": "./assets/iconburger.png",
      "platillos": [
         {
            "name": "Hamburguesa OYAMEL ",
            "ing": "(Doble carne aliñada, cebolla azada, pimiento azado, queso manchego y queso Oaxaca) Acompañada con papas",
            "price": "87"
         }, {
            "name": "Hamburguesa 4060",
            "ing": "(Doble carne aliñada, pierna española, chisstorra, queso manchego, cebolla azada y chutney) Acompañada con papas",
            "price": "97"
         }, {
            "name": "Hamburguesa La Campesina",
            "ing": "(Carne aliñada, chile jalapeño azado, queso canasto gratinado, aguacate y chistorra) Acompañada de papas",
            "price": "74"
         },
      ]
   }, {
      "name": "ALITAS",
      "icon": "./assets/iconburger.png",
      "platillos": [
         {
            "name": "Alitas BBQ",
            "ing": "(Acompañadas con bastones de pepino y jicama con papas Chip's)",
            "price": "60"
         }, {
            "name": "Alitas Picositas ",
            "ing": "(Acompañadas con bastones de pepino y jicama con papas Chip's)",
            "price": "60"
         }, {
            "name": "Alitas Mango Habanero",
            "ing": "(Acompañadas con bastones de pepino y jicama con papas Chip's)",
            "price": "60"
         },
      ]
   }
]
const componentes = {
   platillos: (pla) => {
      let cad = "";
      pla.map(p =>{
         cad += `
         <div class="data-platillo" data-name="${p.name}" data-price="${p.price}">
             <div class="platillo-info">
                 <h3>${p.name}</h3>
                 <p>${p.ing}</p>
             </div>
             <div class="platillo-price">
                 <b>$ ${p.price}</b>
             </div>
         </div>
         `
      })
      return cad;
   },
   categoria: (d) => {
      return `
        <section class="data-tipo">
            <div class="data-category">
                <img src="${d.icon}" alt="">
                <h2>${d.name}</h2>
                <span class="icon">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>
                </span>
            </div>
            <nav>
               ${componentes.platillos(d.platillos)}
            </nav>
        </section>
        `
   },
}
data.map(d => 
   document.querySelector(".data").innerHTML += componentes.categoria(d)
)