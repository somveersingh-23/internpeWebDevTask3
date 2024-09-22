let listContainer = document.getElementById('list-container')
let inputBox = document.getElementById('input-box')
inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})

function addTask() {
    if (inputBox.value === '') {
        alert('Add Your Task!!')
    } else {
        let task = document.createElement('li')
        task.textContent = inputBox.value
        let span = document.createElement('span')
        span.textContent = '\u00d7'
        task.appendChild(span)
        listContainer.appendChild(task)
    }
    inputBox.value = ''
    saveData()
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    const tasks = []
    const taskElements = listContainer.children
    for (const task of taskElements) {
        tasks.push(task.outerHTML)
    }
    localStorage.setItem("tasks", tasks.join(''))
}

function showData() {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
        listContainer.innerHTML = storedTasks
    }
}
showData()