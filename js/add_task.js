const getValues = (id) => {
    const value = document.getElementById(id).value;
    return value;
  };
  
  
  const makeFieldEmpty =() =>{
    document.getElementById("title").value = "";
    document.getElementById("due_date").value = "";
    document.getElementById("priority").value = "";;
    document.getElementById("current_status").value = "";
  }
  
const post_data = (data) =>{
    fetch("http://127.0.0.1:8000/api/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Task Addedd Successfully!")
            // makeFieldEmpty()
            console.log(data)
          })
          .catch(er=>{
            console.log(er);
          })
} 

const handleTaskSubmission = (event) => {
    event.preventDefault();
    const title = getValues("title");
    const due_date = getValues("due_date");
    const priority = getValues('PrioritySelect');
    const current_status = getValues('StatusSelect');
    const task_data = {
        title,
        due_date,
        priority,
        current_status,
        "user": localStorage.getItem("user_id")
        ,
        "project": 1
    };
    if(title === "" || due_date==="" || priority==="" || current_status===""){
      alert("Please Fill all the filds!")
    }
    else if(!localStorage.getItem("user_id")){
      alert("Please Login To add task!")
    }
    else{
      post_data(task_data)
    }

    console.log(task_data);
    
  };
