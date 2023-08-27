const btn = document.querySelector("#no")
const yBtn = document.querySelector("#yes")
const cont = document.querySelector("div")

yBtn.addEventListener('click', (e)=>{
    cont.style.top = "20%"
    cont.style.animation = "5ms glitch infinite"
})
btn.addEventListener("mouseover", (e)=>{
    let xPos = Math.random() * 100
    let yPos = Math.random() * 100
    if(xPos > 95){
        xPos -=10
    }
    if(yPos > 95){
        yPos -=10
    }
    e.target.style.top = `${xPos}%`
    e.target.style.left = `${yPos}%`
})
