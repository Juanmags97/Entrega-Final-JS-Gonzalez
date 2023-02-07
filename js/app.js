const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion')
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const contenedorPlatos = document.querySelector('.platos');



document.addEventListener('DOMContentLoaded',() =>{
    eventos();
    platos();
})
const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}
const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}
const botonCerrar = () =>{
    const btnCerrar = document.createElement ('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body =  document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0)return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    console.log(navegacion.children);
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);

}
const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    })
})

imagenes.forEach(imagen=>{
    observer.observe(imagen);
});


const cerrarMenu = (btnCerrar,overlay) =>{
    btnCerrar.addEventListener('click',()=>{
        navegacion.classList.add('ocultar')
        overlay.remove ();
    })
    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
    }
const platos = ()=>{
    let platoArreglo = [];
    const platos = document.querySelectorAll('.plato');
    
    plato.forEach(plato => platoArreglo = [...platoArreglo,plato])

    const ensaladas = platoArreglo.filter(ensaladas=> ensalada.getAttribute('data-plato')==='ensalada');
    const pastas = platoArreglo.filter(pasta=> pasta.getAttribute('data-plato')==='pasta');
    const pizzas = platoArreglo.filter(pizza=> pizza.getAttribute('data-plato')==='pizza');
    const postre = platoArreglo.filter(postre=> postre.getAttribute('data-plato')==='postre');

    mostrarPlatos(ensaladas, pastas, pizzas, postres,platoArreglo);
}
const mostrarPlatos = (ensaladas, pastas, pizzas, postres, todos)=>{

    btnEnsalada.addEventListener('click', ()=>{
    limpiarHtml(contenedorPlatos);
    ensaladas.forEach(ensalada=> contenedorPlatos.appendChild(ensalada));
});

btnPasta.addEventListener('click', ()=>{
    limpiarHtml(contenedorPlatos);
    pastas.forEach(pasta=> contenedorPlatos.appendChild(pasta));
});

btnPizza.addEventListener('click', ()=>{
    limpiarHtml(contenedorPlatos);
    pizzas.forEach(pizza=> contenedorPlatos.appendChild(pizza));
});

btnPostre.addEventListener('click', ()=>{
    limpiarHtml(contenedorPlatos);
    postres.forEach(postre=> contenedorPlatos.appendChild(postre));
});
btnTodos.addEventListener('click',()=>{
    limpiarHtml(contenedorPlatos);
    btnTodos.forEach(todo=>         
    contenedorPlatos.appendChild(todo));
});

}

const limpiarHtml = (contenedor)=>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}