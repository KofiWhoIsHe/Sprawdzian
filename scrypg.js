//ZADANIE 1
const b1=document.getElementsByTagName("body")

let nowyDiv=document.createElement("div")
nowyDiv.style.backgroundColor="red"
nowyDiv.style.width="20px"
nowyDiv.style.height="20px"

let but=document.createElement("button")
let col=document.createElement("input")
but.onclick="zmianaKoloru()"
col.type="color"

b1.appendChild("nowyDiv")
nowyDiv.appendChild("but")
nowyDiv.appendChild("col")



but.addEventListener(onclick, function(){
    nowyDiv.style.backgroundColor=col.value
})


//ZADANIE 2
let b2=document.getElementsByTagName("body")
const inp=document.createElement("input")
inp.type-"text"