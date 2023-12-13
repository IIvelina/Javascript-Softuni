window.addEventListener("load", solve);

function solve() {
  
    let enterTitleField = document.getElementById('task-title');
    let enterCategoryField = document.getElementById('task-category');
    let addContentField = document.getElementById('task-content');
    let publishButton = document.getElementById('publish-btn');
    let reviewListElement = document.getElementById('review-list');
    let publishedListElement = document.getElementById('published-list');

    publishButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (!enterTitleField.value || !enterCategoryField.value || !addContentField.value) {
            return;
        }

        let createLiElement = document.createElement('li');
        createLiElement.className = 'rpost';

        let createArticleElement = document.createElement('article');

        let createArticleHeader = document.createElement('h4');
        createArticleHeader.textContent = enterTitleField.value;

        let createArticleParagraphCategory = document.createElement('p');
        createArticleParagraphCategory.textContent = `Category: ${enterCategoryField.value}`;

        let createArticleParagraphContent = document.createElement('p');
        createArticleParagraphContent.textContent = `Content: ${addContentField.value}`;

        let editButton = document.createElement('button');
        editButton.classList.add('action-btn');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';

        let postButton = document.createElement('button');
        postButton.classList.add('action-btn');
        postButton.classList.add('post');
        postButton.textContent = 'Post';

        createArticleElement.appendChild(createArticleHeader);
        createArticleElement.appendChild(createArticleParagraphCategory);
        createArticleElement.appendChild(createArticleParagraphContent);

        createLiElement.appendChild(createArticleElement);
        createLiElement.appendChild(editButton);
        createLiElement.appendChild(postButton);

        reviewListElement.appendChild(createLiElement);

        clearForm();

        publishButton.removeAttribute('disabled');

        editButton.addEventListener('click', (e) => {
            let title = reviewListElement.querySelector('h4').textContent;
            let paragraphElements = reviewListElement.querySelectorAll('article p');
            let [categoryElement, contentElement] = Array.from(paragraphElements);

            enterTitleField.value = title;
            enterCategoryField.value = categoryElement.textContent.split(': ')[1];
            addContentField.value = contentElement.textContent.split(': ')[1];

            reviewListElement.innerHTML = '';

            postButton.removeAttribute('disabled');
        });

        postButton.addEventListener('click', (e) => {
            editButton.remove();
            postButton.remove();

            publishedListElement.appendChild(createLiElement);

            reviewListElement.innerHTML = '';

            publishButton.setAttribute('disabled', 'disabled');
        });
    });

    function clearForm() {
        enterTitleField.value = '';
        enterCategoryField.value = '';
        addContentField.value = '';
    }
}