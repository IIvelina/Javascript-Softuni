function editElement(ref, match, replacer) {
    let content = ref.textContent;
    
    let editedText = content.replace(new RegExp(match, 'g'),replacer);

    ref.textContent = editedText;
}