// const arrComment = [
//   {
//     name: "Victor Pinto",
//     date: "11/02/2023",
//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Christina Cabrera",
//     date: "10/08/2023",
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Isaac Tadesse",
//     date: "10/20/2023",
//     comment:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

//TIME STAMP
let timeStamp = new Date();
let mm = String(timeStamp.getMonth() + 1).padStart(2, "0");
let dd = String(timeStamp.getDate()).padStart(2, "0");
let yyyy = timeStamp.getFullYear();

timeStamp = mm + "/" + dd + "/" + yyyy;

const form = document.querySelector(".comments__input-info-form");

function displayComments(arrPost) {
  const commentDiv = document.querySelector(".comments__section");

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
    mainTime.innerText = arrPost[key]["date"];
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

  //ADDS THE PARENT DIV FOR THE NEW COMMENT
  const commentDiv = document.querySelector(".comments__section");
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("comments__new");
  commentDiv.appendChild(mainDiv);

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
  mainName.innerText = newComment.name;
  mainName.classList.add("comments__new-name");
  subDiv.appendChild(mainName);

  //ADDS THE TIME STAMP TO THE PARENT DIV
  const mainTime = document.createElement("aside");
  mainTime.innerText = timeStamp;
  mainTime.classList.add("comments__new-time");
  subDiv.appendChild(mainTime);

  //ADDS THE COMMENT TO THE PARENT DIV
  const mainP = document.createElement("p");
  mainP.innerText = newComment.comment;
  mainP.classList.add("comments__new-comment");
  subDiv.appendChild(mainP);
  commentDiv.appendChild(mainDiv);

  //MAKES NEW COMMENTS GO TO THE TOP
  let toTheTop = document.querySelector(".comments__section");
  toTheTop.insertBefore(mainDiv, toTheTop.childNodes[0]);

  //CLEARS INPUT ON SUBMIT
  let formInput = document.querySelector(".comments__input-info-form");
  formInput.reset();
});

// console.log(sortedComments);

// let arrComment = newComment.push();
// newComment.push(arrComment);




//// BANDSITE API JS:

//   getComments: This method accepts no parameters. It must send a GET request to the API, using the API key instance property (this.apiKey) to authenticate the request.

const API_KEY = "6e6a385-85a5-4d2a-9747-5e485843c624";

const bandSite = new BandSiteApi(API_KEY);
console.log(bandSite);

// // Shows Section:

// async function displayShows() {
//   try {
//     const shows = await bandSite.getShows();
//     console.log('Shows:', shows);
//   } catch (error) {
//     console.error('Failed to fetch shows:', error);
//   }
// }

// displayShows();

//get comments still:

// bandSite.getComments();

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

async function testApiComments() {
  try {
    const commentObject = {
      name: "Nigel",
      comment: "What a great band.",
      // id: "3d3b63fa-a78d-468a-a50f-57429984dd99",
      // likes: 0,
      // timestamp: 1705084427000
    };

    const responseFromApi = await bandSite.postComments(commentObject);
    console.log(responseFromApi);
  } catch (err) {
    console.error(err);
  }
}

// testApiComments();





