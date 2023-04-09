const ovo = document.querySelector(".ovo");
let contador = document.querySelector(".contador").innerHTML

function clicar(){
    
        if(ovo.style.backgroundColor == "red"){
            ovo.style.backgroundColor = "white";
        }else{
            ovo.style.backgroundColor = "red";
        }
 
        contador--;

        document.querySelector(".contador").innerHTML = contador;
        
        if(contador <= 0){
            window.location.href = "parabens.html";    
        }
    }

ovo.addEventListener("click", clicar)