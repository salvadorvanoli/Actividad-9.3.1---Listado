document.addEventListener("DOMContentLoaded", function(){
    let agregar = document.getElementById("agregar");
    let item = document.getElementById("item");
    let limpiar = document.getElementById("limpiar");
    let datos = JSON.parse(localStorage.getItem("array")) || [];
    if (datos) {
        escribirLista(datos);
    }

    function escribirLista(datos) {
        let texto = "";
        datos.forEach(elm => {
            texto += 
            `<ul> 
            <li>${elm}</li>
            </ul>
            `
            document.getElementById("contenedor").innerHTML = texto;
        })
    }

    function borrarContenedor(array){
        document.getElementById("contenedor").innerHTML = "";
        array.splice(0);
    }

    agregar.addEventListener("click", function(){
        if(item.value){
            datos.push(item.value);
            localStorage.setItem("array", JSON.stringify(datos));
            escribirLista(datos);
            item.value = "";
        }
    });

    limpiar.addEventListener("click", function(){
        localStorage.clear();
        borrarContenedor(datos);
    });
});