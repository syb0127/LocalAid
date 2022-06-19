const userPost = document.getElementById("userPost");
const usersContainer = document.querySelector(".users");
const nameInput = userPost["name"];
// prob have to change the location input 
const locationInput = userPost["location"];
const storyInput = userPost["story"];

// get value from local storage (condition if empty or not)
const users = JSON.parse(localStorage.getItem("users")) || [];

const addUser = (name, location, story) => {
    users.push({
        name,
        location,
        story,
    });

    // add key/value in local storage
    localStorage.setItem("users", JSON.stringify(users));
    return { name, location, story };
};


const createUserElement = ({ name, location, story }) => {
    const userDiv = document.createElement("div");
    const userName = document.createElement("h2");
    const userLoc = document.createElement("h2");
    const userStory = document.createElement("p");
    
    if (document.getElementById("no_name").value.length == 0) {
        name = "anon";
    }
    userName.innerText = "Name: " + name;
    if (document.getElementById("location_null").value.length == 0) {
        location = "n/a";
    }

    userLoc.innerText = "Location: " + location;
    userStory.innerText = "Story: " + story;

    userDiv.append(userName, userLoc, userStory);
    usersContainer.appendChild(userDiv);

    usersContainer.style.display = users.length === 0 ? "none" : "flex"; 
};

// rid of empty gray line (if no entries)
usersContainer.style.display = users.length === 0 ? "none" : "flex";

users.forEach(createUserElement);

userPost.onsubmit = e => {
    e.preventDefault();

    const newUser = addUser(
      nameInput.value,
      locationInput.value,
      storyInput.value
    );

    createUserElement(newUser);

    nameInput.value = "";
    locationInput.value = "";
    storyInput.value = "";
};