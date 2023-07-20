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
        hideMessageSection();
    }
    removeButton.addEventListener('click', removeFunction)

    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    const editFunction = () => {
        editButton.style.display = 'none';
        removeButton.style.display = 'none';
        saveButton.style.display = ''
        let entry = editButton.parentNode.querySelector('#message');
        entry.style.display = 'none';
        let textarea = document.createElement('textarea');
        textarea.id = 'messageTextarea';
        textarea.value = entry.innerText;
        entry.after(textarea);
        textarea.focus();
    }
    editButton.addEventListener('click', editFunction);

    const saveButton = document.createElement('button');
    saveButton.innerText = 'save';
    saveButton.type = 'button';
    saveButton.style.display = 'none';
    const saveFunction = () => {
        saveButton.style.display = 'none';
        editButton.style.display = '';
        removeButton.style.display = '';
        let entry = saveButton.parentNode.querySelector('#message');
        let textarea = document.getElementById('messageTextarea');
        entry.textContent = textarea.value;
        textarea.remove();
        entry.style.display = '';
    }
    saveButton.addEventListener('click', saveFunction);


    newMessage.appendChild(editButton);
    newMessage.appendChild(saveButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    e.target.reset();
    hideMessageSection();
})

const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');

/*const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/katsiarynalashcheuskaya/repos');
githubRequest.send();
githubRequest.onload = function () {
    const projects = JSON.parse(this.response)
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name === 'react-todo') {
            const project = document.createElement('li');
            const description = projects[i]["description"];
            project.innerHTML = `<img src='images/toDo.png' alt='ToDo List image'> 
                                 <a href=${projects[i]['html_url']}>ToDo List</a>
                                  <span>${description}</span>`
            projectList.appendChild(project)
        }
        if (projects[i].name === 'social-network') {
            const project = document.createElement('li');
            const description = projects[i]["description"];
            project.innerHTML = `<img src='images/socialnetwork.jpeg' alt='Social Network image'> 
                                 <a href=${projects[i]['html_url']}>Social Network</a>
                                  <span>${description}</span>`
            projectList.appendChild(project)
        }
        if (projects[i].name === 'counter') {
            const project = document.createElement('li');
            const description = projects[i]["description"];
            project.innerHTML = `<img src='images/counter.jpeg' alt='Social Network image'> 
                                 <a href=${projects[i]['html_url']}>Smart Counter</a>
                                  <span>${description}</span>`
            projectList.appendChild(project)
        }
    }
}*/

fetch('https://api.github.com/users/katsiarynalashcheuskaya/repos')
    .then(function (response) {
        return response.json()
    })
    .then(function (projects) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].name === 'react-todo') {
                const project = document.createElement('li');
                const description = projects[i]["description"];
                project.innerHTML = `<img src='images/toDo.png' alt='ToDo List image'>
                                    <div class="linksContainer">
                                        <h2>ToDo List</h2> 
                                        <div class="projectLinks">
                                            <button onClick=${projects[i]['html_url']}>code</button>
                                 <button onClick='https://katsiarynalashcheuskaya.github.io/fenrir-intro/'>view</button>
                                        </div>
                                    </div>
                                  <span>${description}</span>`
                projectList.appendChild(project)
            }
            if (projects[i].name === 'social-network') {
                const project = document.createElement('li');
                const description = projects[i]["description"];
                project.innerHTML = `<img src='images/socialnetwork.jpeg' alt='Social Network image'> 
                                 <div class="linksContainer">
                                 <h2>Social Network</h2> 
                                 <div class="projectLinks">
                                 <button onClick=${projects[i]['html_url']}>code</button>
                                 <button onClick='https://katsiarynalashcheuskaya.github.io/fenrir-intro/'>view</button>
                                        </div>
                                        </div>
                                  <span>${description}</span>`
                projectList.appendChild(project)
            }
            if (projects[i].name === 'counter') {
                const project = document.createElement('li');
                const description = projects[i]["description"];
                project.innerHTML = `<img src='images/counter.jpeg' alt='Social Network image'> 
<div class="linksContainer">
                                 <h2>Smart Counter</h2> 
                                 <div class="projectLinks">
                                 <button onClick=${projects[i]['html_url']}>code</button>
                                 <button onClick='https://katsiarynalashcheuskaya.github.io/fenrir-intro/'>view</button>
                                        </div>
                                        </div>
                                
                                  <span>${description}</span>`
                projectList.appendChild(project)
            }
        }
    })
    .catch(function (err) {
        console.log(err);
    });