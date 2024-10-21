const API_KEY = "6c6a385-85a5-4d2a-9747-5e485843c624";

const bandSite = new BandSiteApi(API_KEY);
console.log(bandSite);

//TIME STAMP
let timeStamp = new Date();
let mm = String(timeStamp.getMonth() + 1).padStart(2, "0");
let dd = String(timeStamp.getDate()).padStart(2, "0");
let yyyy = timeStamp.getFullYear();

timeStamp = mm + "/" + dd + "/" + yyyy;

const form = document.querySelector(".comments__input-info-form");

function displayComments(arrPost) {
  const commentDiv = document.querySelector(".comments__section");
  // ensure that we have no existing comments
  document.querySelector(".comments__section").innerHTML = "";

  for (let key in arrPost) {
    //ADDS THE PARENT DIV FOR THE NEW COMMENT
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("comments__new");

    //ADDS THE IMG TO THE PARENT DIV
    const mainImg = document.createElement("img");
    mainImg.classList.add("comments__new-image");
    mainDiv.appendChild(mainImg);

    //DIV FOR BELOW. FLEX REASONS
    const subDiv = document.createElement("div");
    subDiv.classList.add("comments__container");
    mainDiv.appendChild(subDiv);

    //ADDS THE NAME TO THE PARENT DIV
    const mainName = document.createElement("h2");
    mainName.innerText = arrPost[key]["name"];
    mainName.classList.add("comments__new-name");
    subDiv.appendChild(mainName);

    //ADDS THE TIME STAMP TO THE PARENT DIV
    const mainTime = document.createElement("aside");
    const date = new Date(arrPost[key]["timestamp"]).toDateString();
    mainTime.innerText = date;

    mainTime.classList.add("comments__new-time");
    subDiv.appendChild(mainTime);

    //ADDS THE COMMENT TO THE PARENT DIV
    const mainP = document.createElement("p");
    mainP.innerText = arrPost[key]["comment"];
    mainP.classList.add("comments__new-comment");
    subDiv.appendChild(mainP);

    commentDiv.appendChild(mainDiv);
  }
}

// displayComments(getComments);

//ON CLICK NEW COMMENT

form.addEventListener("submit", (newPost) => {
  newPost.preventDefault();

  const nameInput = newPost.target.name;
  const commentInput = newPost.target.comment;

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  if (commentInput.value.trim() === "") {
    alert("Please leave a cool comment!");
    commentInput.focus();
    return;
  }

  const newComment = {
    name: nameInput.value.trim(),
    comment: commentInput.value.trim(),
    date: timeStamp,
  };

  postComments(newComment);
  //CLEARS INPUT ON SUBMIT
  let formInput = document.querySelector(".comments__input-info-form");
  formInput.reset();
});

//   getComments:

async function getComments() {
  try {
    const sortedComments = await bandSite.getComments();
    displayComments(sortedComments);

    console.log("Sorted comments:", sortedComments);
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}

getComments();

// postComment part:

async function postComments({ name, comment }) {
  try {
    const commentObject = {
      name: "Nigel",
      comment: "What a great band.",
      id: "3d3b63fa-a78d-468a-a50f-57429984dd99",
      likes: 0,
      timestamp: 1705084427000,
    };

    const responseFromApi = await bandSite.postComments({ name, comment });
    console.log(responseFromApi);
    await getComments();
  } catch (err) {
    console.error(err);
  }
}
