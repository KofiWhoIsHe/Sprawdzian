//ZADANIE 1
const b1=document.querySelector("body")

let nowyDiv=document.createElement("div")
nowyDiv.style.backgroundColor="red"
nowyDiv.style.width="20px"
nowyDiv.style.height="20px"

let but=document.createElement("button")
let col=document.createElement("input")
col.type="color"

b1.appendChild("nowyDiv")
nowyDiv.appendChild("but")
nowyDiv.appendChild("col")



but.addEventListener(click, function(){
    nowyDiv.style.backgroundColor=col.value
})