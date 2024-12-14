const card = document.querySelector(".card")
const height = document.querySelector("#height")
const textHeight = document.querySelector(".textHeight")
const width = document.querySelector("#width")
const textWidth = document.querySelector(".textWidth")
const textAlign = document.querySelector(".textAlign")
const start = document.querySelector("#start")
const end = document.querySelector("#end")
const center = document.querySelector("#center")

width.addEventListener("change", ()=>{
    card.style.width = width.value + "px"
    textWidth.innerText = "width: " + width.value + "px;"
})
height.addEventListener("change", ()=>{
    card.style.height = height.value + "px"
    textHeight.innerText = "height: " + height.value + "px;"
})
start.addEventListener("change", ()=>{
    textAlign.style.textAlign = "start"
})
end.addEventListener("change", ()=>{
    textAlign.style.textAlign = "end"
})
center.addEventListener("change", ()=>{
    textAlign.style.textAlign = "center"
})