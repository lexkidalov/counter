let button = document.querySelector('button');
let counterText = document.querySelector('.counter');
let buttonClear = document.querySelector('.clear');
let counter = 0;

button.addEventListener('click', function() {
    counter = counter + 1;
    console.log(counter);

    counterText.innerText = counter
});



buttonClear.addEventListener('click', function() {
   counter = 0;
   counterText.innerText = counter
    });

