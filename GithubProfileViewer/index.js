//getting the values
const submitButton = document.querySelector("#find__user");
const userInput = document.querySelector("#github__username");
const userImg = document.querySelector(".user__img__src");
const userName = document.querySelector("#userName");
const error = document.querySelector("#error");


const NameFormatter = (name) => {
    const trimmedName = name.trim();
    const nameParts = trimmedName.split(" ");
    const firstName = nameParts[0].charAt(0);
    const lastName = nameParts[1];
    return `${firstName}. ${lastName}`;
}

const DateFormatter = (date) => {
    const dateParts = date.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2].split("T")[0];

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDayWithSuffix = (day) => {
        const j = day % 10,
              k = day % 100;
        if (j == 1 && k != 11) {
            return day + "st";
        }
        if (j == 2 && k != 12) {
            return day + "nd";
        }
        if (j == 3 && k != 13) {
            return day + "rd";
        }
        return day + "th";
    };

    const formattedDay = getDayWithSuffix(parseInt(day));
    const formattedMonth = monthNames[parseInt(month) - 1];

    return `${formattedDay} ${formattedMonth} ${year}`;
}

//fetching the data
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userNameInput = userInput.value;
    if (userNameInput === "") {
        error.textContent = "Please enter a valid username";
        error.style.display = "block";
      userName.textContent = "";
      userImg.src = "";
    return;
  }
  const baseURL = `https://api.github.com/users/${userNameInput}`;
  fetch(baseURL)
    .then((response) => {
      if (response.status === 404) {
          error.textContent = "User not found";
        error.style.display = "block";
        userName.textContent = "";
            userImg.src = "";
        return;
      }
      error.textContent = "";
      return response.json();
    })
    .then((data) => {
      userImg.src = data.avatar_url;
        userName.textContent = `${NameFormatter(data.name)} your Total Repositories are ${data.public_repos} and you joined on ${DateFormatter(data.created_at)}`;
        error.style.display = "none";
        
    })
    .catch((error) => {
        error.textContent = "Something went wrong";
        error.style.display = "block";
        userName.textContent = "";
        userImg.src = "";
    });
});
