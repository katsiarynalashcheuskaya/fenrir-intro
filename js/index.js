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
    console.log(usersName, usersEmail, usersMessage);
    e.preventDefault();
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href='mailto:${usersEmail}'>${usersName} </a> <span>wrote: ${usersMessage} </span>`;
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
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    e.target.reset();
    hideMessageSection();
})