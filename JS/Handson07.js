function media(){
    var nota1 = parseFloat(document.getElementById("nota1").value)
    var nota2 = parseFloat(document.getElementById("nota2").value)
    var media = (nota1 + nota2)/2

    if (media === 10){
        alert ("Uau! Aprovadissimo!!")
    
        }else if (media >= 7){
        alert ("Aprovado!")
    }else{
        alert ("Reprovado!")
    }


}

            

