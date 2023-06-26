const data = [
   {
      "name": "HAMBURGUESAS",
      "icon": "./assets/menu/burguer.png",
      "type": "burguer",
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
      "icon": "./assets/menu/burguer.png",
      "type": "burguer",
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
      "icon": "./assets/menu/alitas.png",
      "type": "alitas",
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
   }, {
      "name": "Extras",
      "icon": "./assets/menu/papas.png",
      "type": "extras",
      "platillos": [
         {
            "name": "Hot-Dog Simple",
            "price": "19"
         }, {
            "name": "Papas A la Francesas ",
            "price": "42"
         }
      ]
   }, {
      "name": "Bebidas Calientes ",
      "icon": "./assets/menu/cafe.png",
      "type": "bebida",
      "platillos": [
         {"name": "Expresso <b>Chico</b>","price": "20"}, 
         {"name": "American Latee <b>Grande</b>","price": "30"}, 
         {"name": "American Latee <b>Chico</b>","price": "20"}, 
         {"name": "Latee <b>Chico</b>","price": "30"}, 
         {"name": "Latee <b>Grande</b>","price": "47"}, 
         {"name": "Vienés <b>Chico</b>","price": "35"},
         {"name": "Bombón <b>Chico</b>","price": "40"},
         {"name": "Affogato <b>Chico</b>","price": "30"},
         {"name": "Moka <b>Grande</b>","price": "47"}, 
         {"name": "Moka <b>Chico</b>","price": "35"}, 
         {"name": "Hawaiano <b>Grande</b>","price": "45"}, 
         {"name": "Hawaiano <b>Chico</b>","price": "32"}, 
         {"name": "Chocolate Caliente <b>Grande</b>","price": "42"}, 
         {"name": "Chocolate Caliente <b>Chico</b>","price": "23"}, 
      ]
   }, {
      "name": "Capucchinos",
      "icon": "./assets/menu/caliente.png",
      "type": "bebida",
      "platillos": [
         {"name": "Capuchino Baileys <b>Grande</b>","price": "30"}, 
         {"name": "Capuchino Baileys <b>Chico</b>","price": "20"}, 
         {"name": "Capucchino Rompope <b>Chico</b>","price": "30"}, 
         {"name": "Capucchino Rompope <b>Grande</b>","price": "47"}, 
      ]
   }, {
      "name": "Malteadas",
      "icon": "./assets/menu/malteada.png",
      "type": "bebida",
      "platillos": [
         {"name": "Fresa","price": "35"}, 
         {"name": "Vainilla","price": "35"}, 
         {"name": "Chocolate","price": "35"}, 
      ]
   }, {
      "name": "Frapee",
      "icon": "./assets/menu/caliente.png",
      "type": "bebida",
      "platillos": [
         {"name": "Moka","price": "45"}, 
         {"name": "Chocolate Blanco","price": "45"}, 
         {"name": "Cookies & Cream","price": "45"}, 
         {"name": "Chocolate","price": "45"}, 
      ]
   }, {
      "name": "Smoothie",
      "icon": "./assets/menu/caliente.png",
      "type": "bebida",
      "platillos": [
         {"name": "Frutos Rojos","price": "48"}, 
         {"name": "Mango","price": "45"}, 
         {"name": "Kiwi & Fresa","price": "48"}, 
      ]
   }, {
      "name": "Wafless",
      "icon": "./assets/menu/waffle.png",
      "type": "bebida",
      "platillos": [
         {"name": "Con Helado","price": "45"}, 
         {"name": "Frutos Rojos & Frutas Mixtas","price": "55"}, 
      ]
   }
]
const componentes = {
   platillos: (pla,type) => {
      let cad = "";
      pla.map(p =>{
         cad += `
         <div class="data-platillo" data-type="${type}" data-name="${p.name}" data-price="${p.price}">
             <div class="platillo-info">
                 <h3>${type} ${p.name}</h3>
                 ${p.ing ? `<p>${p.ing}</p>` : ""}
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
               ${componentes.platillos(d.platillos,d.type)}
            </nav>
        </section>
        `
   },
}
data.map(d => {
   console.log(d.type)
   document.querySelector(".data").innerHTML += componentes.categoria(d)
})
