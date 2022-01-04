function traerDatos(){

    
    
    //console.log('dentro de la funcionnnnnn');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            var arbolAvl  = new AvlTree();
            let datos = JSON.parse(this.responseText);
            let res= document.querySelector('#res');
            res.innerHTML = '';
            const {vendedores} = datos;
            for(let item of vendedores){
                
                arbolAvl.insertar(item);  
               res.innerHTML += ` 
               <tr>
               <td>${item.id}</td>
               <td>${item.nombre}</td>
               <td>${item.edad}</td>    
               <td>${item.correo}</td>
               <td>${item.password}</td>
               </tr>`;   
            }
            guardarAvl(arbolAvl);
            imprimirArbolAvl(arbolAvl);
        }
    }
    xhttp.open('GET', 'vendedores.json', true);
    try {
        xhttp.send(); // Here a xmlhttprequestexception number 101 is thrown 
    } catch(err) {
        console.log(err); // This prints "XMLHttprequest error: undefined" in the body.
    }
}

function guardarAvl(arbolAvl) {
    localStorage.setItem('arbolAvl', JSON.stringify(arbolAvl));
}

function imprimirArbolAvl(arbolAvl) {
    arbolAvl.print();
}
