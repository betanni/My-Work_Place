const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button')


buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'gray') {
            body.style.backgroundColor = 'gray'    // e.target.id;
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = 'white'   // e.target.id;
        }
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue'  // e.target.id;
        }
        else if(e.target.id === 'black'){
         body.style.backgroundColor = 'black'
        }
        else {
            body.style.backgroundColor = 'yellow'  // e.target.id;
        }
    });

});

