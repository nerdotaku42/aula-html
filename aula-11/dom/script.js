//window.document.body.style.backgroundColor="black"
//document.body.style.color ="white"

//window.alert("SEJA BEM-VINDO")/

//window.prompt("login")
//window.prompt("senha")

//window.confirm("SIte com vírus, deseja continuar?")

let paragrafo1= document.getElementsByTagName("p")[0]
paragrafo1.innerHTML="Usando o tag name"
paragrafo1.style.backgroundColor="red"

let paragrafo2= document.getElementById("paragrafo2")
paragrafo2.innerHTML="usando ID"
paragrafo2.style.backgroundColor ="green"

let paragrafo3= document.getElementsByClassName("paragrafo3")[0]
paragrafo3.innerHTML="usando a classe"
paragrafo3.style.backgroundColor="blue"

let paragrafo4=document.getElementById("paragrafo4")
paragrafo4.innerHTML="Usando o query selector"
paragrafo4.style.backgroundColor="pink"

let paragrafo5 = document.querySelectorAll("p")[4]
paragrafo5.innerHTML="usando o query selector all"
paragrafo5.style.backgroundColor="purple"