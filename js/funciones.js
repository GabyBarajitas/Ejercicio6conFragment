function displayArray(array1){
    const posicionNodo = document.querySelector("#cards");

    let arreglo = [] 
    arreglo = array1;
    const fragment = document.createDocumentFragment();

    arreglo.forEach (item => {
        const div = document.createElement("div");
        div.classList.add("card")

        const P1 = document.createElement("p");
        P1.classList.add("item1");
        P1.textContent = item.titulo;
        div.appendChild(P1);

        const imagen = document.createElement("img");
        imagen.src = item.imagen;
        imagen.classList.add("item2");
        div.appendChild(imagen);
        
        const P3 = document.createElement("p");
        P3.classList.add("item3");
        P3.textContent = item.pais;
        div.appendChild(P3);

        const P4 = document.createElement("p");
        P4.classList.add("item4");
        P4.textContent = item.ano;
        div.appendChild(P4);
        
        const P5 = document.createElement("p");
        P5.classList.add("item5");
        P5.textContent = item.tipo;
        div.appendChild(P5);
        
        const P6 = document.createElement("p");
        P6.classList.add("item6");
        P6.textContent = item.sinopsis
        div.appendChild(P6);

        fragment.appendChild(div)
    })
    posicionNodo.appendChild(fragment)
}

   /* 
    <section id = "cards">
        <div class="card">
            <p class = "item1"></p>
            <img src= "" class = "item2">
            <p class = "item3"></p>
            <p class = "item4"></p>
            <p class = "item5"></p>
            <p class = "item6"></p>
        </div>
    </section>

} */