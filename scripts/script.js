document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('customButton');
    const taskList = document.getElementById('taskList');

    const handleAddTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';

            li.innerHTML = `
                <input type="checkbox" class="form-check-input mr-2">
                <span class="task-text">${taskText}</span>
                <button class="btn btn-danger btn-sm">Eliminar</button>
            `;

            li.querySelector('input[type="checkbox"]').addEventListener('change', function() {
                li.querySelector('.task-text').classList.toggle('completed', this.checked);
            });

            li.querySelector('button').addEventListener('click', () => {
                taskList.removeChild(li);
            });

            taskList.appendChild(li);
            taskInput.value = '';
        }
    };

    addTaskBtn.addEventListener('click', handleAddTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    });
});

