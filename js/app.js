const headerEl = document.querySelector(".header")
const  backTop = document.querySelector(".back__top")

window.addEventListener("scroll", ()=>{
    let scrollPoint = document.documentElement.scrollTop
    if(document.documentElement.scrollTop > 0){
        headerEl.classList.add("shrink")
    }else{
        headerEl.classList.remove("shrink")
    }
if (scrollPoint > 200) {
    backTop.style.transform = "scale(1)"
}else{
    backTop.style.transform = "scale(0)"
}

})