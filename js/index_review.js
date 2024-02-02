const loadReview = () => {
    fetch("https://testing-8az5.onrender.com/doctor/review/")
      .then((res) => res.json())
      .then((data) => displayReview(data));
  };
  
  const displayReview = (reviews) => {
    reviews.forEach((review) => {
      const parent = document.getElementById("review-container");
      const div = document.createElement("div");
      div.classList.add("review-card");
      div.innerHTML = `
          <img src="./Images/girl.png" alt="" />
              <h4>${review.reviewer}</h4>
              <p>
               ${review.body.slice(0, 100)}
              </p>
              <h6>${review.rating}</h6>
          `;
      parent.appendChild(div);
    });
  };

  loadReview();