console.log("Hello, BrainStation 👋🧠");

document.addEventListener("DOMContentLoaded", function () {
  const comments = [
    {
      name: "Victor Pinto",
      timestamp: new Date("2023-02-11"),
      text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
      name: "Christina Cabrera",
      timestamp: new Date("2023-10-28"),
      text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
      name: "Isaac Tadesse",
      timestamp: new Date("2023-10-20"),
      text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
  ];

  function renderComments() {
    const postsContainer = document.querySelector(".posts");
    if (!postsContainer) {
      console.error("Posts container not found");
      return;
    }

    postsContainer.innerText = "";

    comments.forEach((comment) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      const avatarContainer = document.createElement("div");
      avatarContainer.id = "avatar-container-2";
      postElement.appendChild(avatarContainer);

      const avatarImage = document.createElement("img");
      avatarImage.src = "#";
      avatarImage.alt = "Avatar";
      avatarImage.style.width = "36px";
      avatarImage.style.height = "36x";
      avatarImage.style.borderRadius = "50%";

      avatarContainer.appendChild(avatarImage);
      postElement.appendChild(avatarContainer);

      const contentContainer = document.createElement("div");
      contentContainer.classList.add("post-content");

      const informationContainer = document.createElement("div");
      informationContainer.classList.add("posts__information--container");

      // New div to contain postsName and postsTimestamp
      const nameTimestampContainer = document.createElement("div");
      nameTimestampContainer.classList.add("posts__name-timestamp-container");

      const postName = document.createElement("h3");
      postName.classList.add("posts__name");
      postName.innerText = comment.name;
      postElement.appendChild(postName);

      const postsTimestamp = document.createElement("h3");
      postsTimestamp.classList.add("posts__timestamp");
      postsTimestamp.innerText = comment.timestamp.toLocaleDateString();
      postElement.appendChild(postsTimestamp);

      informationContainer.appendChild(nameTimestampContainer);

      const postContainer = document.createElement("div");
      postContainer.classList.add("posts__container");
      postElement.appendChild(postContainer);

      const postsPosted = document.createElement("span");
      postsPosted.classList.add("posts__posted");
      postsPosted.innerText = comment.text;
      postContainer.appendChild(postsPosted);

      informationContainer.appendChild(postName);
      informationContainer.appendChild(postsTimestamp);
      informationContainer.appendChild(postsPosted);

      nameTimestampContainer.appendChild(postName);
      nameTimestampContainer.appendChild(postsTimestamp);

      postElement.appendChild(informationContainer);

      postsContainer.appendChild(postElement);
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = event.target.elements.name;
    const textInput = event.target.elements.text;

    if (!nameInput || !textInput) {
      console.error("Form inputs not found");
      return;
    }

    const name = nameInput.value.trim();
    const text = textInput.value.trim();

    if (!name) {
      alert("Please enter your name!");
      return;
    }

    if (!text) {
      alert("Please leave a cool comment!");
      return;
    }

    const formData = {
      name,
      timestamp: new Date(),
      text,
    };

    console.log(formData);

    comments.unshift(formData);
    console.log(comments);
    renderComments();

    event.target.reset();
  }

  const formEl = document.getElementById("player-form");

  if (formEl) {
    formEl.addEventListener("submit", handleFormSubmit);
  } else {
    console.error("Form element not found");
  }

  renderComments();
});
