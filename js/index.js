let buttons = document.querySelectorAll('.buttons span');
let screen = document.getElementById('screen');

console.log(buttons.length);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    //no '0' at the beginning

    if (screen.innerHTML === 'Error') {
      screen.innerHTML = '';
      while (screen.innerHTML.charAt(0) === '0') {
        screen.innerHTML = screen.innerHTML.substr(1);
      }
      let currentInput = buttons[i].textContent;
      if (currentInput === 'x') {
        currentInput = '*';
      } else if (currentInput === '÷') {
        currentInput = '/';
      }
      let lastInput = screen.innerHTML[screen.innerHTML.length - 1];
      if (currentInput === '=') {

        screen.innerHTML = eval(screen.innerHTML);
        if(screen.innerHTML === 'Infinity'){
          screen.innerHTML = 'Error';
        }
      } else if (screen.innerHTML.length === 0 && currentInput === '0') {
        screen.innerHTML = 'Error';;
        screen.innerHTML = '';
      } else if (isNaN(lastInput)) { //if last input is not a number
        if (isNaN(currentInput) !== false) {

          screen.innerHTML = 'Error';;
        } else { //if current input IS a number
          screen.innerHTML += currentInput;
        }
      } else {
        screen.innerHTML += currentInput;
      }
      if (currentInput === 'C') {
        screen.innerHTML = '';
      }
    } else {
      while (screen.innerHTML.charAt(0) === '0') {
        screen.innerHTML = screen.innerHTML.substr(1);
      }
      let currentInput = buttons[i].textContent;
      if (currentInput === 'x') {
        currentInput = '*';
      } else if (currentInput === '÷') {
        currentInput = '/';
      }
      let lastInput = screen.innerHTML[screen.innerHTML.length - 1];
      if (currentInput === '=') {

        screen.innerHTML = eval(screen.innerHTML);
        if(screen.innerHTML === 'Infinity'){
          screen.innerHTML = 'Error';
        }
      } else if (screen.innerHTML.length === 0 && currentInput === '0') {
        screen.innerHTML = 'Error';;
        screen.innerHTML = '';
      } else if (isNaN(lastInput)) { //if last input is not a number
        if (isNaN(currentInput) !== false) {

          screen.innerHTML = 'Error';;
        } else { //if current input IS a number
          screen.innerHTML += currentInput;
        }
      } else {
        screen.innerHTML += currentInput;
      }
      if (currentInput === 'C') {
        screen.innerHTML = '';
      }
    }

  })

}
