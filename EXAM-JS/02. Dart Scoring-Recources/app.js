window.addEventListener("load", solve);

function solve() {


    let playerInputElement = document.getElementById('player');
    let scoreInputElement = document.getElementById('score');
    let roundInputElement = document.getElementById('round');
    let addButton = document.getElementById('add-btn');
    let makeSureList = document.getElementById('sure-list');
    let scoreboardList = document.getElementById('scoreboard-list');
    let clearBtn = document.querySelector(".clear"); 

    addButton.addEventListener('click', (e) => {
      e.preventDefault();

      if(!playerInputElement || !scoreInputElement || !roundInputElement){
        return;
      }

      let liElement = document.createElement('li');
      liElement.className = 'dart-item';

      let articleElement = document.createElement('article');

      let articleParagraphName = document.createElement('p');
      articleParagraphName.textContent = playerInputElement.value;

      let articleParagraphScore = document.createElement('p');
      articleParagraphScore.textContent = `Score: ${scoreInputElement.value}`;

      let articleParagraphRound = document.createElement('p');
      articleParagraphRound.textContent = `Round: ${roundInputElement.value}`;

      let editButton = document.createElement('button');
      editButton.classList.add('btn');
      editButton.classList.add('edit');
      editButton.textContent = 'edit';
      
      let okButton = document.createElement('button');
      okButton.classList.add('btn');
      okButton.classList.add('ok');
      okButton.textContent = 'ok';

      articleElement.appendChild(articleParagraphName);
      articleElement.appendChild(articleParagraphScore);
      articleElement.appendChild(articleParagraphRound);

      liElement.appendChild(articleElement);
      liElement.appendChild(editButton);
      liElement.appendChild(okButton);

      makeSureList.appendChild(liElement);

      clearForm();

      addButton.setAttribute('disabled', 'disabled');

      editButton.addEventListener('click', (e) => {

        let paragraphElements = makeSureList.querySelectorAll('article p');
        let [name, score, round] = Array.from(paragraphElements);

        playerInputElement.value = name.textContent;
        scoreInputElement.value = score.textContent.split(': ')[1];
        roundInputElement.value = round.textContent.split(': ')[1];

        makeSureList.innerHTML = '';

        addButton.removeAttribute('disabled');
      });

      okButton.addEventListener('click', (e) => {
        editButton.remove();
        okButton.remove();

        scoreboardList.appendChild(liElement);

        makeSureList.innerHTML = '';

        addButton.removeAttribute('disabled');


      });
    });

    function clearForm() {
      playerInputElement.value = '';
      scoreInputElement.value = '';
      roundInputElement.value = '';
    }

    clearBtn.addEventListener("click", onClear)

    function onClear(){
      location.reload();
    }
  }
  