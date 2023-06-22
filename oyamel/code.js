const prices = {
   extra: 15,
}
/********************* FUNCIONES DEL DOM **********************/
const funciones = {
   pedirBurguer: (bol) => {
      document.getElementById("pedirBurguer").style.top = bol ? '0' : '-100vh'
      document.getElementById("pedirBurguer").innerHTML = `
         <span class="icon" id="pedirBurguerClose"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg></span>
         <form>
            <img src="./assets/iconburger.png" alt="">
            <h2>nombre</h2>
            <nav>
               <input type="checkbox" id="jitomate" value="sin jitomate"><label for="jitomate">Sin Jitomate</label>
               <input type="checkbox" id="cebolla" value="sin cebolla"><label for="cebolla">Sin Cebolla</label>
               <input type="checkbox" id="chiles" value="sin chiles"><label for="chiles">Sin Chiles</label>
            </nav>
            <h3>extras: ($15) c/u</h3>
            <nav>
               <input type="checkbox" id="chilchorra" data-extra="15" value="extra chilchorra"><label for="chilchorra">chilchorra</label>
               <input type="checkbox" id="queso" data-extra="15" value="extra queso"><label for="queso">Queso</label>
            </nav>
            <h4>Precio individual: $ <b>---</b></h4>
            <button data-type="ordena" type="button" id="agregarAlCarrito">Agregar al Carrito</button>
         </form>`
      document.getElementById("pedirBurguerClose").addEventListener("click", () => funciones.pedirBurguer(false))
      document.getElementById("agregarAlCarrito").addEventListener("click", e => {
         document.querySelectorAll("#pedirBurguer form nav").forEach(nav =>{
            nav.querySelectorAll("input").forEach(input =>{
               if(input.checked){
                  console.log(input.value);
               }
            })
         })
      })
   },
   agregarDatosPedidoBurguer: ({ price, name }) => {
      const section = document.querySelector("#pedirBurguer form")
      section.querySelector("h2").textContent = name
      section.querySelector("h4 b").textContent = price

      section.querySelectorAll("nav")[1].addEventListener("input", (e) => {
         const b = section.querySelector("h4 b");
         console.log(e.target.dataset.extra);
         if (e.target.checked) {
            b.textContent = parseInt(b.textContent) + prices.extra
         } else {
            b.textContent = parseInt(b.textContent) - prices.extra
         }
      })
   },
   carrito: (bol)=>{
      document.getElementById("orden").style.top = bol ? '0' : '-100vh'
   },
   desplegarCategorias: ()=>{
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
   funcionesCarrito: ()=>{
      document.getElementById("carrito").addEventListener("click",() =>{funciones.carrito(true)})
      document.getElementById("closeOrden").addEventListener("click",() =>{funciones.carrito(false)})

      document.querySelector("#orden section").addEventListener("click",e=>{
         if(e.target.classList.contains("icon")){
            alert("eliminar")
         }
         console.log(e.target);
      })
   }
}
funciones.desplegarCategorias();
funciones.funcionesCarrito();

document.querySelector(".data").addEventListener("click", e => {
   if (!e.target.classList.contains("data-platillo")) return

   const pedido = {
      price: e.target.dataset.price,
      name: e.target.dataset.name,
   }
   funciones.pedirBurguer(true)
   funciones.agregarDatosPedidoBurguer(pedido)

})







