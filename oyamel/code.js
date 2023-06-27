const prices = {
   extra: 15,
}
const orden = {
   array: [],
   remover: (val) => orden.array = orden.array.filter(arr => arr.ide != val),
   tam: () => orden.array.length,
   get: () => orden.array,
   set: (v) => { orden.array.push(v) },
   component: ({ ide, name, ingr, price }) => {
      return `
      <div class="orden-con" data-ide="${ide}">
         <div class="orden-info">
            <h2>${name}</h2>
            <p>${ingr}</p>
         </div>
         <div class="orden-price">
            <b>$${price}</b>
         </div>
         <div class="orden-icon">
            <span class="icon">
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path></svg>
            </span>
         </div>
      </div>
   `}
}
const form = {
   value: "",
   set: (v) => { form.value = v },
   get: () => { return form.value },
}
const pedido = {
   telefono: 7491101224,
   name: "",
   calle: "",
   numero: "",
   colonia: "",
   referencias: "",
   maps: () => { return `https://www.google.com.mx/maps/search/calle+${pedido.calle}+${pedido.numero},+${pedido.colonia}+Cd+Nanacamilpa+Tlax` },
   orden: [],
   metodo: "",
   total: "",
   mensaje: () => {
      let msj = `Hola me gustaria ordenar: ${orden.array.map(pe => {
         return ` ${pe.name.toUpperCase()}, ${pe.ingr} serian $${pe.price}`
      })}. Seria un total de: ${pedido.total}. A nombre de ${pedido.name.toUpperCase()}`

      return msj.replaceAll(" ", "%20").replaceAll(",", "%2C").replaceAll(":", "%3A").replaceAll("$", "%24").replaceAll("&","%26")
   },
   link: () => {
      retHEGG050730HTLRRLA1urn `https://api.whatsapp.com/send?phone=+52${pedido.telefono}&text=${pedido.mensaje()}`
   }
}
/********************* FUNCIONES DEL DOM **********************/
const fdom = {
   EjecutarOrdenARestaurante: () => {
      if (orden.get().length < 1) { return alert("Por favor ordene algo") }

      pedido.name = prompt("Por favor Escriba el nombre de quien recibira el pedido")

      console.log(pedido.mensaje());
      console.log(orden.get());
      window.location.href= pedido.link()

   },
   EjecutarOrdenADomicilio: () => {
      fdom.domicilio(true)
      document.getElementById("closeDomicilio").addEventListener("click", () => fdom.domicilio(false))
      document.getElementById("formDomicilio").addEventListener("submit", e => {
         e.preventDefault();
         form.set(e.target)

         const get = form.get()

         pedido.name = get[0].value
         pedido.calle = get[1].value
         pedido.numero = get[2].value
         pedido.colonia = get[3].value
         pedido.referencias = get[4].value

         console.log(form.get());

         e.target.parentElement.classList.replace("form", "nav")

         document.getElementById("tipoPago").addEventListener("click", t => {
            if (t.target.tagName.toLowerCase() == "input") {
               e.target.parentElement.classList.replace("nav", "main")
               if (t.target.dataset.value == "deposito") {
                  document.querySelector(`div[data-type="efectivo"]`).style.display = "none"
               } else {
                  document.querySelector(`div[data-type="deposito"]`).style.display = "none"
               }
            }
         })
         // console.log(form.get());
      })

      // alert("Se requiere acceso a su ubicacion para poder llevarlo a su domicilio")
      // href="https://www.google.com.mx/maps/search/<?php echo $dirLink; ?>" 
      // "calle+" . $row['calle'] . "+" . $row['num'] . ",+" . $col . "+Cd+Nanacamilpa+Tlax"
   },
   agreCarrito: () => {
      document.getElementById("agregarAlCarrito").addEventListener("click", () => {
         let especificaciones = "";
         document.querySelectorAll("#pedirBurguer form nav").forEach(nav => {
            nav.querySelectorAll("input").forEach(input => {
               if (input.checked) {
                  especificaciones += `${input.value},`
               }
            })
         })
         let ide;
         try {
            ide = (orden.get()[orden.tam() - 1].ide) + 1
         } catch (error) {
            ide = 1
         }
         orden.set({
            ide: ide,
            ingr: especificaciones,
            name: pedirBurguer.querySelector("h2").textContent,
            price: pedirBurguer.querySelector("h4 b").textContent
         })
         console.log(orden.get());
         fdom.pedirBurguer(false)
      })
   },
   pedirBurguer: (bol) => {
      const pedirBurguer = document.getElementById("pedirBurguer")
      pedirBurguer.style.top = bol ? '0' : '-100vh'
      pedirBurguer.innerHTML = `
         <span class="icon" id="pedirBurguerClose"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg></span>
         <form>
            <img src="./assets/burguer.webp" alt="">
            <h2>nombre</h2>
            <nav>
               <input type="checkbox" id="jitomate" value="sin jitomate"><label for="jitomate">Sin Jitomate</label>
               <input type="checkbox" id="cebolla" value="sin cebolla"><label for="cebolla">Sin Cebolla</label>
               <input type="checkbox" id="chiles" value="sin chiles"><label for="chiles">Sin Chiles</label>
            </nav>
            <h3>extras: ($15) c/u</h3>
            <nav>
               <input type="checkbox" id="chischorra" data-extra="15" value="extra chischorra"><label for="chischorra">chilchorra</label>
               <input type="checkbox" id="queso" data-extra="15" value="extra queso"><label for="queso">Queso</label>
            </nav>
            <h4>Precio individual: $ <b>---</b></h4>
            <button data-type="ordena" type="button" id="agregarAlCarrito" class="button">Agregar al Carrito</button>
         </form>`
      document.getElementById("pedirBurguerClose").addEventListener("click", () => fdom.pedirBurguer(false))
      fdom.agreCarrito()
   },
   agregarDatosPedidoBurguer: ({ price, name }) => {
      const section = document.querySelector("#pedirBurguer form")
      section.querySelector("h2").textContent = name
      section.querySelector("h4 b").textContent = price

      section.querySelectorAll("nav")[1].addEventListener("input", (e) => {
         const b = section.querySelector("h4 b");
         if (e.target.checked) {
            b.textContent = parseInt(b.textContent) + prices.extra
         } else {
            b.textContent = parseInt(b.textContent) - prices.extra
         }
      })
   },
   pedirAlitas: (bol) => {
      const pedirBurguer = document.getElementById("pedirBurguer")
      pedirBurguer.style.top = bol ? '0' : '-100vh'
      pedirBurguer.innerHTML = `
         <span class="icon" id="pedirBurguerClose"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg></span>
         <form>
            <img src="./assets/alitas.png" alt="">
            <h2>nombre</h2>
            <nav>
               <input type="checkbox" id="inglesa" value="Con Salsa Inglesa">
               <label for="inglesa">Con Salsa Inglesa</label>
               <input type="checkbox" id="magui" value="Con Salsa Magui">
               <label for="magui">Con Salsa Magui</label>
               <input type="checkbox" id="valentina" value="Con Salsa Valentina">
               <label for="valentina">Con Salsa Valentina</label>
            </nav>
            <h4>Precio individual: $ <b>---</b></h4>
            <button data-type="ordena" type="button" id="agregarAlCarrito" class="button">Agregar al Carrito</button>
         </form>`
      document.getElementById("pedirBurguerClose").addEventListener("click", () => fdom.pedirBurguer(false))
      fdom.agreCarrito()
   },
   agregarDatosPedidoAlitas: ({ price, name }) => {
      const section = document.querySelector("#pedirBurguer form")
      section.querySelector("h2").textContent = name
      section.querySelector("h4 b").textContent = price

      try {
         section.querySelectorAll("nav")[1].addEventListener("input", (e) => {
            const b = section.querySelector("h4 b");
            if (e.target.checked) {
               b.textContent = parseInt(b.textContent) + prices.extra
            } else {
               b.textContent = parseInt(b.textContent) - prices.extra
            }
         })
      } catch (error) {
         console.log("No hay elementos extras");
      }
   },
   carrito: (bol) => {
      document.getElementById("orden").style.top = bol ? '0' : '-100vh'
   },
   domicilio: (bol) => {
      document.getElementById("domicilio").style.top = bol ? '0' : '-100vh'
   },
   desplegarCategorias: () => {
      document.querySelectorAll(".data-category").forEach(dl => {
         dl.addEventListener("click", () => {
            let padre = dl.parentElement;
            padre.classList.contains("desplegado") ? [
               padre.style.height = "69px",
               padre.classList.remove("desplegado")
            ] : [
               padre.style.height = `${padre.scrollHeight + 10}px`,
               padre.classList.add("desplegado")
            ]
         })
      })
   },
   rellenarCarrito: (array) => {
      let total = 0;
      document.querySelector("#orden section nav").innerHTML = ""
      array.map(arr => {
         document.querySelector("#orden section nav").innerHTML += orden.component(arr);
         total += parseInt(arr.price)
      })
      document.querySelector("#orden section p b").textContent = total;
      document.getElementById("ordenar").addEventListener("click", e => {
         if (total == 0) {
            alert("Por Favor Ordene Algo")
            fdom.carrito(false)
            return
         }
         // fdom.EjecutarOrdenADomicilio();
         pedido.total=total;
         fdom.EjecutarOrdenARestaurante();
      })
   },
   funcionesCarrito: () => {
      document.getElementById("carrito").addEventListener("click", () => { fdom.carrito(true); fdom.rellenarCarrito(orden.get()); })
      document.getElementById("closeOrden").addEventListener("click", () => { fdom.carrito(false) })

      document.querySelector("#orden section").addEventListener("click", e => {
         if (e.target.classList.contains("icon")) {
            const el = e.target.parentElement.parentElement
            orden.remover(el.dataset.ide)
            document.querySelector("#orden section nav").removeChild(el)

            let total = 0;
            orden.array.map(arr => total += parseInt(arr.price))
            document.querySelector("#orden section p b").textContent = total;
            console.log(total);

         }
      })
   },
   agregarExtra: (e) => {
      let ide;
      try {
         ide = (orden.get()[orden.tam() - 1].ide) + 1
      } catch (error) {
         ide = 1
      }
      orden.set({
         ide: ide,
         ingr: "",
         name: e.dataset.name,
         price: e.dataset.price,
      })
   },
   ordenar: e => {
      console.log(e.target.dataset.type);
      if (e.target.dataset.type == "burguer") {
         fdom.pedirBurguer(true)
         fdom.agregarDatosPedidoBurguer({
            price: e.target.dataset.price,
            name: e.target.dataset.name,
         })
      }
      if (e.target.dataset.type == "alitas") {
         fdom.pedirAlitas(true)
         fdom.agregarDatosPedidoAlitas({
            price: e.target.dataset.price,
            name: e.target.dataset.name,
         })
      }
      if (e.target.dataset.type == "extras"
         || e.target.dataset.type == "bebida") {
         fdom.agregarExtra(e.target)
         document.getElementById("bebidas").style.left = '0'
         setTimeout(() => {
            document.getElementById("bebidas").style.left = '-50vh'
         }, 2000);
      }
   }
}
fdom.desplegarCategorias();
fdom.funcionesCarrito();

document.querySelector(".data").addEventListener("click", e => {
   if (!e.target.classList.contains("data-platillo")) return

   fdom.ordenar(e)



})







