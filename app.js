const dice = document.querySelector('.dice');
// document.addEventListener('DOMContentLoaded',getAdvice);
dice.addEventListener('click', getAdvice);

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.num').innerHTML = data.slip.id;
            document.querySelector('.advice').innerHTML = `<q>${data.slip.advice}</q>`;
        })
}