
function show_task(tasks) {
  const parent = document.getElementById("table-row");
  parent.innerHTML = null;
  tasks.forEach((task) => {
    const div = document.createElement("tr");
    div.classList.add("tr");
    //       <button class="btn btn-primary" onclick="edit_element(${task.id})">Edit</button>

    div.innerHTML = `
    <th >${task.id}</th>
    <td>${task.title}</td>
    <td>${task.due_date}</td>
    <td>${task.priority}</td>
    <td>${task.current_status}</td>
    <td id="edit">
      <button onClick="delete_task(${task.id})" class="btn btn-danger ">Delete</button>
      
    </td>

          `;
    parent.appendChild(div);
  });
};
function  load_task_data() {
   fetch("https://effortless-plan.onrender.com/api/")
   .then(res =>res.json())
   .then(data=>show_task(data))
  }

load_task_data()

function delete_task(taskId) {
  console.log('delete cicked');
  // http://127.0.0.1:8000/delete/5
  fetch(`http://127.0.0.1:8000/api/${taskId}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // You may include additional headers if required (e.g., authentication headers)
    },
  })

    .then(data => {
      alert('Task deleted successfully:', data);
      location.reload()
    })
    .catch(error => {
      console.log( error);
    });
}

// edit
function show_single_task(id) {
  fetch(`http://127.0.0.1:8000/api/${id}`)
  .then(res=>res.json())
  .then(data =>{
    // window.location.href ="http://127.0.0.1:5500/add_task.html"

    // document.getElementById("title").value = data.title;
    // document.getElementById("due_date").value = "";
    // document.getElementById("priority").value = "";;
    // document.getElementById("current_status").value = "";
    console.log(data);
  })
}

function edit_element(id) {

  show_single_task(id);
}


// all filter
const status_filter=() =>{
  const status = document.getElementById("StatusSelect").value
  const priority = document.getElementById("PrioritySelect").value
  const due_date = document.getElementById("due_date").value
  console.log(status);
  fetch(`http://127.0.0.1:8000/api/?priority=${priority}&due_date=${due_date}&current_status=${status}`)
  .then(res=>res.json())
  .then(data=>{
    show_task(data);
    console.log(data);
  })
}