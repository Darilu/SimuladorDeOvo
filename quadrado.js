const quadrado = document.querySelector(".quadrado");
let contador = document.querySelector(".contador").innerHTML

function clicar(){
    

        if(quadrado.style.backgroundColor == "red"){
            quadrado.style.backgroundColor = "white";
        }else{
            quadrado.style.backgroundColor = "red";
        }

        contador++;

        document.querySelector(".contador").innerHTML = contador;

}

quadrado.addEventListener("click", clicar)