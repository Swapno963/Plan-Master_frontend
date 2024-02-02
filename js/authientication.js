// done
const getValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};

// done
const login = (data) => {
  fetch("https://effortless-plan.onrender.com/login/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      // removing all value
      localStorage.clear();
      // now setting current user id
      localStorage.setItem("user_id", data.user_id);

      window.location.href = "http://127.0.0.1:5500/show_task.html";

      console.log(data);
    });
};
// done
const register = (data) => {
  const url = "https://effortless-plan.onrender.com/register/";
  // fetch(url, {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         alert ("Please Check Your Email!");
  //         // console.log(data)
  //       })
  //       .catch(err =>{
  //         console.log(err);
  //         alert(err)
  //       })

  //  new
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        alert(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.username) {
        alert(`Error : ${data.username[0]}`);
      } else {
        alert("Please Check Your Email!");
      }
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
      alert(err.message);
    });
};

const logout = () => {
  // removing all value
  localStorage.clear();

  fetch("https://effortless-plan.onrender.com/logout")
    .then((res) => res.json())
    .then((data) => {
      alert("Logout successfully!");
      location.reload();
    });
};
// done
const handleLogin = (event) => {
  event.preventDefault();
  const username = getValue("username");
  const password = getValue("password");

  const loginData = {
    username,
    password,
  };
  login(loginData);

  console.log(loginData);
};

//   done
const handleRegister = (event) => {
  event.preventDefault();
  const username = getValue("username");
  const first_name = getValue("first_name");
  const last_name = getValue("last_name");
  const email = getValue("emailAddress");
  const confirm_password = getValue("confirm_password");
  const password = getValue("password");

  const RegistratioinData = {
    username,
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  };
  if (
    username === "" ||
    first_name === "" ||
    last_name === "" ||
    email === "" ||
    password === "" ||
    confirm_password === ""
  ) {
    alert("Please Fill all the input box!");
  } else if (password !== confirm_password) {
    alert("Your password and confirm password didn't match!");
  } else {
    register(RegistratioinData);
  }
  console.log(RegistratioinData);
};

//   after login successfully
//   {
//     "token": "6b6fe10269e443beb51356f91c69b465dec14fd4",
//     "user_id": 12
// }

// for error
// {
//     "error": "Invalid Credential"
// }

// common js for all files

//  work with nav abr

// if login then show logout, show task
const navParent = document.getElementById("nav_ul");
if (localStorage.getItem("user_id")) {
  console.log("We have");
  const li = document.createElement("li");
  li.innerHTML = `
  <a onclick="logout()" href="#">Logout</a>
  `;
  navParent.appendChild(li);
} else {
  console.log("dont have");
  const li = document.createElement("li");
  const li2 = document.createElement("li");
  li.innerHTML = `
  <a href="register.html">Register</a>
  `;
  li2.innerHTML = `
  <a href="login.html">Login</a>
  `;
  navParent.appendChild(li);
  navParent.appendChild(li2);
}

// else show register login
