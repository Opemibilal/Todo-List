// window.addEventListener('load', ()=>{
//     todos = JSON.parse(localStorage.getItem('todos'))
//     const nameInput = document.querySelector('#name')
//     const newTodoForm = document.querySelector('#new-todo-form')
//     const Username = localStorage.getItem('username') || " ";

//     nameInput.value = Username
//     nameInput.addEventListener("change", e=>{
//         localStorage.setItem('username', e.target.value)
//     })
//     newTodoForm.addEventListener("submit", e=>{
//         e.preventDefault()
//         const todo = {
//             content: e.target.value,
//             category:e.target.value,
//             done:false,
//             creadAt: new Date().getTime()
//         }

//         todos.push('todo')
//         localStorage.setItem('todos', JSON.stringify(todos));

//         e.target.reset();

//         DisplayTodos()
//     })
// })
// console.log(window);


// function DisplayTodos() {
//     const todolist = document.querySelector("#todo-list")

//     todolist.innerHTML = '',
//     todos.forEach(todo =>{
//         const todoItem = document.createElement('div')
//         todoItem.classList.add('todo-item')
//         const label = document.createElement('label')
//         const input = document.createElement('input')
//         const span = document.createElement('span')
//         const content = document.createElement('div')
//         const actions = document.createElement('div')
//         const edit = document.createElement('button')
//         const deleteButton = document.createElement('button')
//         input.type ='checkbox';
//         input.checked = todo.done
//         span.classList.add('bubble');

//         if (todo.category == "personal") {
//             span.classList.add("personal");
//         } else {
//             span.classList.add("business")
//         }

//         content.classList.add('todo-content');
//         actions.classList.add('actions');
//         edit.classList.add('edit');
//         deleteButton.classList.add('delete');

//         content.innerHTML = `<input trype="text" value="${todo.content}" readonly >`
//         edit.innerHTML = "Edit"
//         deleteButton.innerHTML = "Delete"

//         label.appendChild(input);
//         label.appendChild(span);
//         actions.appendChild(edit);
//         actions.appendChild(deleteButton);
//         todoItem.appendChild(label);
//         todoItem.appendChild(content);
//         todoItem.appendChild(actions);

//         todolist.appendChild(todoItem);

//         if (todo.done) {
//             todoItem.classList.add('done')
//         }

//         input.addEventListener("click", e=>{
//             todo.done = e.target.checked
//             localStorage.setItem("todos", JSON.stringify(todos))

//             if (todo.done) {
//                 todoItem.classList.add("done")
//             } else {
//                 todoItem.classList.remove("done")
//             }
//             DisplayTodos()
//         })

//         edit.addEventListener("click", e=>{
//           const input = content.querySelector("input")
//           input.removeAttribute("readonly")
//           input.focus()

//           input.addEventListener("blur", e=>{
//             input.setAttribute("readonly", true)
//             todo.content = e.target.value

//             localStorage.setItem("todos", JSON.stringify(todos));
//             DisplayTodos()
//           })
//           deleteButton.addEventListener("click", e =>{
//             todos = todos.filter(t => t !=todo)
//             localStorage.setItem('todos',JSON.stringify(todo));
//             DisplayTodos()
//           })
//         })
//     })
// }