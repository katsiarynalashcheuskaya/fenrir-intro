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
for (let i=0; i<skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}