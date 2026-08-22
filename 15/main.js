document.querySelector('#yell').addEventListener('click', run);
document.querySelector('#yell').addEventListener('click', hide);

function run() {
  console.log('Convert from Celsius to Fahrenheit!!!');
  let apple = document.querySelector('#firstName').value;
  let pumpkin = document.querySelector('#firstName').value;
  pumpkin = (pumpkin * 9) / 5 + 32;

  console.log(
    `${apple} degrees Celsius is equal to ${pumpkin} degrees Fahrenheit!`
  );

  let ans = `${pumpkin} degrees Fahrenheit`;
  document.querySelector('#placeToYell').innerText = ans;
}

function hide() {
  document.querySelector('#form').classList.add('hidden');
  document.querySelector('#yell').classList.add('hidden');
  document.querySelector('#title').classList.add('hidden');
  document.querySelector('.button').classList.add('center');
}
