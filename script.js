document.getElementById('add-todo').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');
    const todoList = document.getElementById('todo-list');

    if (todoInput.value && todoDate.value) {
        const li = document.createElement('li');
        li.innerHTML = `${todoInput.value} <span>${new Date(todoDate.value).toLocaleString()}</span> <button class="complete">✓</button> <button class="delete">✗</button>`;
        todoList.appendChild(li);

        gsap.from(li, { duration: 0.5, opacity: 0, y: -20 });

        todoInput.value = '';
        todoDate.value = '';
    }
});

document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('complete')) {
        e.target.parentElement.classList.toggle('completed');
    } else if (e.target.classList.contains('delete')) {
        gsap.to(e.target.parentElement, { duration: 0.5, opacity: 0, y: 20, onComplete: function() {
            e.target.parentElement.remove();
        }});
    }
});
