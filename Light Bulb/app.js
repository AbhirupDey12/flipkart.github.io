const button = document.querySelector('.btn') ;

const bulb = document.querySelector('.bulbLight') ;

const container = document.querySelector('.bulb-container') ;
console.log(container)

button.addEventListener('click' , bulbOnAndOff) ;

function bulbOnAndOff(e) {
    let a = e.target.innerText ;
    if(a == 'Bulb Is On') {
        bulb.src = 'index3.jpg' ;
        e.target.innerText = 'Bulb Is Off' ;
        document.body.style.backgroundColor = 'black' ;
    }
    else if(a == 'Bulb Is Off') {
        bulb.src = 'index4.jpg' ;
        e.target.innerText = 'Bulb Is On' ;
        document.body.style.backgroundColor = 'black' ;
    }
}