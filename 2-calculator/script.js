const display = document.getElementById('display')
const buttons = Array.from(document.getElementsByClassName('btn'))

buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerText === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (e.target.innerText === 'C') {
            display.value = '';
        } else {
            display.value += e.target.innerText;
        }
    })
})