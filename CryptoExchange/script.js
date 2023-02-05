const lis = document.querySelectorAll('.tabs ul li')
const valutes = document.querySelectorAll('.all-valutes p')
const bargainingValute = document.querySelector('.changed-valute')

let activeTab = 1
let allValutesOpened = false

document.querySelector('.change-valute').addEventListener('click', (event)=>{
    allValutesOpened = !allValutesOpened
    openAllValutes()
})


for (const li of lis) {
    li.addEventListener('click', (event)=>{
        deleteLisActive()
        event.target.classList.add('active')
        activeTab = +event.target.getAttribute('tabindex')
    })
}

for (const valute of valutes) {
    valute.addEventListener('click', ()=>{
        bargainingValute.innerHTML = valute.innerHTML
    })
}

function deleteLisActive() {
    for (const li of lis) {
        li.classList.remove('active')
    }
}

function openAllValutes() {
    if(allValutesOpened){
        document.querySelector('.change-valute').classList.add('active')
    } else{
        document.querySelector('.change-valute').classList.remove('active')
    }
}
