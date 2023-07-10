const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer')
const copyright = document.createElement('p');
copyright.innerHTML = `&#169 Katsiaryna Lashcheuskaya ${thisYear}`;
footer.appendChild(copyright);

const skills = [
    'HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Redux Toolkit', 'Postman',
    'Axios', 'REST API', 'Git', 'GitHub', 'Unit-test', 'Storybook', 'Material UI', 'SASS', 'Figma'
]
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
    removeButton.addEventListener('click', e => {
        const entry = removeButton.parentNode;
        entry.remove();
        hideMessageSection();
    })

    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.addEventListener('click', e => {
        editButton.innerText = 'save';
        removeButton.style.display = 'none';
        const textarea = document.createElement('textarea');
        textarea.id = 'messageTextarea';
        const entry = editButton.parentNode.querySelector('#message');
        console.log('entryEditButton = ', entry);
        if (entry) {
            entry.replaceWith(textarea);
        }
        textarea.value = entry.innerText;
        textarea.focus();
        editButton.addEventListener('click', e => {
            removeButton.style.display = 'inline'
            editButton.innerText = 'edit';
            entry.textContent = textarea.value;
            textarea.replaceWith(entry);
        })
    })

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    e.target.reset();
    hideMessageSection();
})