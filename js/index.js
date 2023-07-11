const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer')
const copyright = document.createElement('p');
copyright.innerHTML = `&#169 Katsiaryna Lashcheuskaya ${thisYear}`;
footer.appendChild(copyright);

const skills = ['HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Redux Toolkit', 'Postman', 'Axios', 'REST API', 'Git', 'GitHub', 'Unit-test', 'Storybook', 'Material UI', 'SASS', 'Figma']
const skillsSection = document.querySelector('#skills')
const skillsList = skillsSection.querySelector('ul')
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementById('leave_message')
messageForm.addEventListener('submit', e => {
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;
    e.preventDefault();
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `<a href='mailto:${usersEmail}'>${usersName} </a> <span>wrote:</span> <div id="message">${usersMessage}</div>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    const hideMessageSection = () => {
        messageList.children.length !== 0 ? messageSection.style.display = 'block' : messageSection.style.display = 'none'
    }
    const removeFunction = () => {
        const entry = removeButton.parentNode;
        entry.remove();
    }
    removeButton.addEventListener('click', e => {
        removeFunction();
        hideMessageSection();
    })

    const saveButton = document.createElement('button');
    saveButton.innerText = 'save';
    saveButton.type = 'button';
    saveButton.style.display = 'none'
    const saveFunction = () => {
        saveButton.style.display = 'none'
        editButton.style.display = 'inline';
        removeButton.style.display = 'inline';
        let entry = saveButton.parentNode.querySelector('#message');
        let textarea = document.getElementById('messageTextarea');
        entry.textContent = textarea.value;
        textarea.replaceWith(entry);
    }
    saveButton.addEventListener('click', e => {
        saveFunction();
    })

    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    const editFunction = () => {
        editButton.style.display = 'none';
        removeButton.style.display = 'none';
        saveButton.style.display = 'inline'
        let textarea = document.createElement('textarea');
        textarea.id = 'messageTextarea';
        let entry = editButton.parentNode.querySelector('#message');
        entry.replaceWith(textarea);
        textarea.value = entry.innerText;
        textarea.focus();
    }
    editButton.addEventListener('click', e => {
        editFunction();
    })

    newMessage.appendChild(editButton);
    newMessage.appendChild(saveButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    e.target.reset();
    hideMessageSection();
})