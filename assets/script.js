
// // Clean https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit
// // Definatly not clean https://v2.jokeapi.dev/joke/Any
const newJoke = () => {
     fetch("https://v2.jokeapi.dev/joke/Dark")
         .then(response => response.json())
         .then(data => {
             let joke = data.joke;
             let setup = data.setup;
             let delivery = data.delivery;
             if (joke) {
                 document.getElementById("joke-button-div").innerHTML = "<button onclick='newJoke()'>New joke</button>";
                 document.getElementById("joke").innerHTML = "<p>" + joke + "</p>";
                 document.getElementById("joke-awnser").innerHTML = "";
             } else {
                 document.getElementById("joke").innerHTML = "<p>" + setup + "</p>";
                 document.getElementById("joke-awnser").style.display = "none";
                 document.getElementById("joke-awnser").innerHTML = "<p>" + delivery + "</p>";
                 document.getElementById("joke-button-div").innerHTML = "<button onclick='showJoke()'>Show joke</button>";
             }
         });
 }
newJoke()

const showJoke = () => {
    document.getElementById("joke-awnser").style.display = "block";
    document.getElementById("joke-button-div").innerHTML = "<button onclick='newJoke()'>New joke</button>";
}

// // delay 10 seconds (10000)
setTimeout(() => {
    document.getElementById("title").innerHTML = "Well... At your own risk i guess...";
}, 10000);

setTimeout(() => {
    alert("Stop now")
}, 20000);

// // delay by 10 hours (36000000)
setTimeout(() => {
    location.reload();
}, 36000000);
