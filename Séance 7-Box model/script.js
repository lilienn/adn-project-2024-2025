const card = document.querySelector(".card")
const height = document.querySelector("#height")
const textHeight = document.querySelector(".textHeight")
const width = document.querySelector("#width")
const textWidth = document.querySelector(".textWidth")
const textAlign = document.querySelector(".textAlign")
const start = document.querySelector("#start")
const end = document.querySelector("#end")
const center = document.querySelector("#center")
const borderDiv = document.querySelector(".borderDiv")
const borderSize = document.querySelector("#border-size")
const textBorderSize = document.querySelector(".text-border-size")
const borderRadius = document.querySelector("#border-radius")
const textBorderRadius = document.querySelector(".text-border-radius")
const borderColor = document.querySelector("#border-color")
const borderSolid = document.querySelector("#border-solid")
const borderDashed = document.querySelector("#border-dashed")
const borderDouble = document.querySelector("#border-double")
const borderEcritreStyle = document.querySelector(".ecritureStyle")
const borderEcritreTaille = document.querySelector(".ecritureTaille")
const borderEcritreColor = document.querySelector(".ecritureColor")
const borderEcritreBorderRadius = document.querySelector(".ecritureBorderRadius")

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
borderSize.addEventListener("change", ()=>{
    borderDiv.style.borderWidth = borderSize.value + "px"
    textBorderSize.innerText = borderSize.value
    borderEcritreTaille.innerText = borderSize.value
})
borderRadius.addEventListener("change", ()=>{
    borderDiv.style.borderRadius = borderRadius.value + "px"
    textBorderRadius.innerText = borderRadius.value
    borderEcritreBorderRadius.innerText = borderRadius.value
})
borderColor.addEventListener("change", ()=>{
    borderDiv.style.borderColor = borderColor.value
    borderEcritreColor.innerText = borderColor.value
})
borderDouble.addEventListener("change", ()=>{
    borderDiv.style.borderStyle = "double"
    borderEcritreStyle.innerText = "double"
})
borderDashed.addEventListener("change", ()=>{
    borderDiv.style.borderStyle = "dashed"
    borderEcritreStyle.innerText = "dashed"
})
borderSolid.addEventListener("change", ()=>{
    borderDiv.style.borderStyle = "solid"
    borderEcritreStyle.innerText = "solid"
})