// alert('hi i am template js')


let dropDownIcon = document.querySelector('.menu a:nth-of-type(5)')

let dropDownList = document.querySelector('#dropdown-list')

dropDownIcon.addEventListener('click', function() {
    if (dropDownList.style.display == 'block') {
        dropDownList.style.display = 'none'
    } else {
        dropDownList.style.display = 'block'
    }
})


let menu = document.querySelector('.menu');


let hambIcon = document.getElementById('hamb-menu')


// console.log(hambIcon)

hambIcon.addEventListener('click', function() {

    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
    // menu.style.display = 'block'
})


// menu.onmouseover = function(event) {
//     event.target.classList.add('active')
// }


// menu.onmouseleave = function(event) {
//     let links = event.target.querySelectorAll('a')
//     links.forEach(function(link) {
//         link.classList.remove('active')
//     })

//     links[0].classList.add('active')
// }


window.onscroll = function(event) {
    let arrowUp = document.querySelector('#up-arrow')
    if (window.scrollY > 200) {
        arrowUp.style.display = 'flex'
    } else {
        arrowUp.style.display = 'none'
    }
}


let links = menu.querySelectorAll('.menu a')

links.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        link.classList.add('active')
    })

    link.addEventListener('mouseleave', function() {
        link.classList.remove('active')
    })
})


let trs = document.querySelectorAll('tr')

trs.forEach(function(ele) {
    ele.addEventListener('click', function(event) {
        // event.preventDefault()
        console.log(event.target.parentElement)
    })
})

let currentIndex = 0

let images = document.querySelectorAll('img')


let dots = document.querySelectorAll('.dot')


function refreshImages() {
    images.forEach(function(img) {
        img.style.display = 'none'
    })

    dots.forEach(function(dot) {
        dot.style.backgroundColor = 'grey'
    })


    dots[currentIndex].style.setProperty('background-color', 'var(--main-color)')

    images[currentIndex].style.display = 'block'
}

function updateCurrentImage(operator) {
    if (operator == '+') {
        if (currentIndex == images.length - 1) {
            currentIndex = 0
        } else {
            currentIndex++
        }
    } else {
        if (currentIndex == 0) {
            currentIndex = images.length - 1
        } else {
            currentIndex--
        }
    }

    refreshImages()
}

refreshImages()



dots.forEach(function(dot) {
    dot.addEventListener('click', function(event) {
        currentIndex = Array.from(dots).indexOf(dot)
        refreshImages()
    })
})



// let arrowBtns = document.querySelectorAll('section #home .arrow-container button')

// arrowBtns.forEach(function(btn) {
//     btn.addEventListene()
// })