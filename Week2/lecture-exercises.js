async function getRandomAdvice() {
  const adviceReq = fetch('https://api.adviceslip.com/advice'); // send request
  const adviceResponse = await adviceReq; // wait until something comes back
  // const jsonString = await adviceResponse.text();
  // return jsonString
  // const adviceData = JSON.parse(jsonString)
  // return jsonString
  const adviceData = await adviceResponse.json(); // parses JSON string into native JavaScript object
  return adviceData.slip.advice;
}
let allAdvice = [];
const adviceEl = document.getElementById('advice');

function updateDom() {
  adviceEl.innerHTML = '';
  allAdvice.forEach((advice, index) => {
    const adviceItem = document.createElement('li');
    adviceEl.appendChild(adviceItem);
    adviceItem.innerText = advice;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    adviceItem.appendChild(removeButton);
    removeButton.addEventListener('click', () => deleteAdvice(index));
  });
}

function deleteAdvice(index) {
  allAdvice.splice(index, 1);
  updateDom();
}

function upcaseAllAdvice() {
  // eslint-disable-next-line no-const-assign
  allAdvice = allAdvice.map(advice => advice.toUpperCase());
  updateDom();
}
async function setRandomAdvice() {
  allAdvice.push(await getRandomAdvice());
  updateDom();
}

setRandomAdvice();

document.getElementById('add-advice').addEventListener('click', setRandomAdvice);
document.getElementById('upcase-everything').addEventListener('click', upcaseAllAdvice);
