function addItem() {
    let ulContainer = document.getElementById('items');

    let input  = document.getElementById('newItemText');

    let inputValue = input.value;

    let newLi = document.createElement('li');

    newLi.textContent = inputValue;

    let newAnchor = document.createElement('a');
    newAnchor.textContent = '[Delete]';
    newAnchor.addEventListener('click', deleteHandler);
    newLi.appendChild(newAnchor);
    ulContainer.appendChild(newLi);
    input.value = '';

  function deleteHandler(e){
    let liItem = e.currentTarget.parentElement;
    liItem.remove();
  }
}