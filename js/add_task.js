const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
  };
  

const post_data = (data) =>{
    fetch("https://effortless-plan.onrender.com/api/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
} 

const handleTaskSubmission = (event) => {
    event.preventDefault();
    const title = getValue("title");
    const due_date = getValue("due_date");
    const priority = getValue('PrioritySelect');
    const current_status = getValue('StatusSelect');
    const task_data = {
        title,
        due_date,
        priority,
        current_status,
        "user": 5,
        "project": 1
    };
    post_data(task_data)

    console.log(task_data);
    
  };
  
