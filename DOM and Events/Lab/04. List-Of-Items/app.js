function addItem() {

    let ulContainer = document.getElementById('items');

    let input  = document.getElementById('newItemText');

    let inputValue = input.value;

    let newLi = document.createElement('li');

    newLi.textContent = inputValue;

    ulContainer.appendChild(newLi);
    input.value = '';
}