const input = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(input.value === ''){
        alert("Task must contain some Input!");
    }
    else {
        let Div = document.createElement('div');
        Div.innerHTML = input.value;
        let li = document.createElement('li');
        li.append(Div)
        listContainer.append(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showItem(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showItem();