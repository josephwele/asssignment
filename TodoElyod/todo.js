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


        input.value = ""


        const taskActions = document.createElement("div");
        taskActions.classList.add("actions")

        
        const taskRemove = document.createElement("button");
        taskRemove.classList.add("Remove");
        taskRemove.innerHTML = "Remove";

        taskActions.appendChild(taskRemove);

        taskLst.appendChild(taskActions);

        lst.appendChild(taskLst);




        taskRemove.addEventListener('click', () => {
        lst.removeChild(taskLst)
    
        })


    })

})