let counterValue = 0;

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const decrement = () => {
  counterValue -= 1;
  console.log(counterValue);
  document.querySelector('#value').innerHTML = counterValue;
};

const increment = () => {
  counterValue += 1;
  console.log(counterValue);
  document.querySelector('#value').innerHTML = counterValue;
};

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);
