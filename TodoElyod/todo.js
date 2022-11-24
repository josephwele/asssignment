window.addEventListener('load', () => {
    const form = document.querySelector("#taskForm");
    const input = document.querySelector("#taskInput");
    const lst = document.querySelector("#tasks");


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;

        if (!task){
            alert("Please fill out the task");
            return;
        }

        const taskLst = document.createElement("div");
        taskLst.classList.add("task");

        const taskContent = document.createElement("div");
        taskContent.classList.add("content");
        taskContent.innerText = task;

        taskLst.appendChild(taskContent);

        const taskInput = document.createElement("input");
        taskInput.classList.add("text");
        taskInput.type = "text";
        taskInput.value = task;
        taskInput.setAttribute("readonly", "readonly");

        const taskActions = document.createElement("div");
        taskActions.classList.add("actions")

        
        const taskRemove = document.createElement("button");
        taskRemove.classList.add("Remove");
        taskRemove.innerHTML = "Remove";

        taskActions.appendChild(taskRemove);

        taskLst.appendChild(taskActions);
        lst.appendChild(taskLst);

        lst.appendChild(taskLst);


        taskRemove.addEventListener('click', () => {
        lst.removeChild(taskLst)
    
        })


    })

})