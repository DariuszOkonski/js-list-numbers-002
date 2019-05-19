let number = 1;

const domElements = {
  btnAdd: document.querySelector('.add').addEventListener('click', addElement),
  btnRemove: document.querySelector('.remove').addEventListener('click', clearAllElements),
  ulBlock: document.querySelector('ul'),
};

function addElement() {
  const li = document.createElement('li');
  li.textContent = number;

  if (number % 3 === 0) {
    li.style.fontSize = '40px';
  }
  domElements.ulBlock.appendChild(li);

  number += 2;
}

function clearAllElements() {
  domElements.ulBlock.textContent = '';
  number = 1;
}