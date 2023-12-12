function solve() {
  let textInput = document.getElementById('text').value.split(' ');
  let namingInput = document.getElementById('naming-convention').value;

  let result = "";

  for (let i = 0; i < textInput.length; i++) {
      let currentWord = textInput[i];

      if (namingInput === 'Camel Case') {
          currentWord = currentWord.toLowerCase();
          if (i !== 0) {
              currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
          }
      } else if (namingInput === 'Pascal Case') {
          currentWord = currentWord.toLowerCase();
          currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
      } else {
          result = 'Error!';
          break;
      }

      result += currentWord;
  }

  document.getElementById('result').textContent = result;
}
