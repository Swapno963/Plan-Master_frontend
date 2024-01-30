// const async load_task_data = () =>{
//     try {
//         const response = await fetch("http://127.0.0.1:8000/api");
    
//         const result = await response.json();
//         console.log("Success:", result);
//       } catch (error) {
//         console.error("Error:", error);
//       }
    
    
// }

function show_task(tasks) {
  tasks.forEach((task) => {
    const parent = document.getElementById("table-row");
    const div = document.createElement("tr");
    div.classList.add("tr");
    div.innerHTML = `
    <th >${task.id}</th>
    <td>${task.title}</td>
    <td>${task.due_date}</td>
    <td>${task.priority}</td>
    <td>${task.current_status}</td>
    <td id="edit">
      <button class="btn btn-primary">Edit</button>
      <button class="btn btn-danger ">Delete</button>
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