console.log("Hello, BrainStation 👋🧠");

const comments = [
    {
        name: "Victor Pinto",
        timestamp: new Date("2023-02-11"),
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Christina Cabrera",
        timestamp: new Date("2023-28-10"),
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Isaac Tadesse",
        timestamp: new Date("2023-20-10"),
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];


// const commentForm = document.querySelector(".comment__input-container");
// const commentList = document.querySelector(".comment__default-comment"); // Changed to match your HTML

// commentForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log('form submitted');
//     console.log(event);
//     console.log(event.target);
    
//     const nameInput = event.target.querySelector('.comment__text-container--one');
//     const commentInput = event.target.querySelector('.comment__text-container--two');
    
//     console.log('Name:', nameInput.value);
//     console.log('Comment:', commentInput.value);

//     if(!commentInput.value) {
//         alert("Show some love to the band and leave a comment!");
//         return;
//     }

//     // Here you can add the logic to create and display the new comment
//     addComment(nameInput.value, commentInput.value);

//     // Clear the form inputs after submission
//     nameInput.value = '';
//     commentInput.value = '';
// });

// function addComment(name, text) {
//     const newComment = {
//         name: name,
//         timestamp: new Date(),
//         text: text
//     };
//     comments.unshift(newComment);
//     displayComments();
// }

// // Make sure to call displayComments() when the page loads to show initial comments
// displayComments();


function displayComments() {
    const commentSection = document.querySelector('.comment__input-container');
    commentSection.innerText = '';

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerText = `
            <h5>${comment.name}</h5>
            <textarea>${formatDate(comment.timestamp)}</textarea>
            <p>${comment.text}</p>
        `;
        commentSection.appendChild(commentElement);
    });
}

function formatDate(date) {
    return date.toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

const submitButton = document.getElementById('magic-btn');


submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log('form submitted');
        console.log(event);
        console.log(event.target);
        
        const nameInput = event.target.querySelector('.comment__text-container--one');
        const commentInput = event.target.querySelector('.comment__text-container--two');
        
        console.log('Name:', nameInput.value);
        console.log('Comment:', commentInput.value);
    
        if(!commentInput.value) {
            alert("Show some love to the band and leave a comment!");
            return;
        }
    
        // Here you can add the logic to create and display the new comment
        addComment(nameInput.value, commentInput.value);
    
        // Clear the form inputs after submission
        nameInput.value = '';
        commentInput.value = '';
    });
    
    function addComment(name, text) {
        const newComment = {
            name: name,
            timestamp: new Date(),
            text: text
        };
        comments.unshift(newComment);
        displayComments();
    };