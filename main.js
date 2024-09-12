let stopButton = document.getElementById('stopButton');
let slowButton = document.getElementById('slowButton');
let goButton = document.getElementById('goButton');


let stopLight = document.getElementById('stopLight');
let slowLight = document.getElementById('slowLight');
let goLight = document.getElementById('goLight');



stopButton.addEventListener('click', function(){
    stopLight.style.backgroundColor = 'red';
    slowLight.style.backgroundColor = '#111';
    goLight.style.backgroundColor = '#111';
});


slowButton.addEventListener('click', function(){
    stopLight.style.backgroundColor = '#111';
    slowLight.style.backgroundColor = 'yellow';
    goLight.style.backgroundColor = '#111';
});


goButton.addEventListener('click', function(){
    stopLight.style.backgroundColor = '#111';
    slowLight.style.backgroundColor = '#111';
    goLight.style.backgroundColor = 'green';
});