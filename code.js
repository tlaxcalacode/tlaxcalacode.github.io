const funciones = {
   pedirBurguer: (bol)=>{
      document.getElementById("pedirBurguer").style.top = bol ? '0' : '-100vh' 
   }
}
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
 document.querySelector(".data").addEventListener("click", e => {
   if(!e.target.classList.contains("data-platillo")) return

   funciones.pedirBurguer(true)
   
   console.log(e.target);
 })
 document.getElementById("pedirBurguerClose").addEventListener("click" ,()=>
 funciones.pedirBurguer(false)
 )

 




