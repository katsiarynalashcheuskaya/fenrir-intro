const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer')
const copyright = document.createElement('p');
copyright.innerHTML = `&#169 Katsiaryna Lashcheuskaya ${thisYear}`;
footer.appendChild(copyright);

const skills = [
    'HTML/CSS/SCSS', 'JavaScript/TypeScript', 'React/Redux/Redux Toolkit', 'Postman',
    'Axios/REST API', 'Git/GitHub', 'Unit-test/Storybook', 'Material UI', 'SASS', 'Figma'
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

    newMessage.innerHTML = `<a href='mailto:${usersEmail}'>${usersName} </a> <span>wrote:</span> <span id="message">${usersMessage}</span>`;
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
        const message = document.querySelector('#message');
        console.log(message)
        const textarea = document.createElement('textarea');
        const entry = editButton.parentNode.querySelector('#message');
        entry.replaceWith(textarea)
        textarea.value = entry.innerText;
        textarea.focus();
        textarea.addEventListener('blur', e => {
            entry.textContent = e.target.value;
            textarea.replaceWith(entry);
        })
    })

    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);
    e.target.reset();
    hideMessageSection();
})