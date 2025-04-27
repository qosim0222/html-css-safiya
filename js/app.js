const headerEl = document.querySelector(".header")

window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 0){
        headerEl.classList.add("shrink")
    }else{
        headerEl.classList.remove("shrink")
    }
})