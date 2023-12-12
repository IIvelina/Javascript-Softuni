function toggle() {
   
    let extraText = document.getElementById('extra');
    let buttonMore = document.querySelector('.head .button');
    

    if(extraText.style.display === 'none' || extraText.style.display === ''){
        extraText.style.display = 'block';
        buttonMore.textContent = 'Less';
    }else{
        extraText.style.display = 'none';
        buttonMore.textContent = 'More';
    }
}