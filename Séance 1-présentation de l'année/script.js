text = document.querySelector(".js")
text.addEventListener("click", ()=>{
    if(text.classList.contains("1")){
        text.style.color = "blue"
        text.classList.remove("1")
    }
    else{
        text.style.color = "red"
        text.classList.add("1")
    }
})