// 1-ci üsul - "onclick" və ya "ondblclick" vasitəsilə

// function dark(){
//     document.body.style.backgroundColor="black";
//     document.body.style.transition="1.5s"
//     document.getElementById("dark").value="Light Mode";
//     document.getElementById("dark").style.backgroundColor="black";
//     document.getElementById("dark").style.color="white";
//     document.getElementById("dark").style.borderColor="white";
//     document.getElementById("dark").style.transition="3s"
//     document.getElementById("light").style.backgroundColor="black";
//     document.getElementById("light").style.color="white";
//     document.getElementById("light").style.borderColor="white";
//     document.getElementById("light").style.transition="3s"
// }

// function light(){
//     document.body.style.backgroundColor="white";
//     document.body.style.transition="1.5s";
//     document.getElementById("dark").value="Dark Mode";
//     document.getElementById("dark").style.backgroundColor="white";
//     document.getElementById("dark").style.color="black";
//     document.getElementById("dark").style.borderColor="black";
//     document.getElementById("dark").style.transition="3s"
//     document.getElementById("light").style.backgroundColor="white";
//     document.getElementById("light").style.color="black";
//     document.getElementById("light").style.borderColor="black";
//     document.getElementById("light").style.transition="3s"
// }



/*  */



// 2-ci üsul - "classList.toggle", "classList.contains" və " if else" vasitəsilə

// const body = document.body;

// function toggleMode() {
//   body.classList.toggle("dark-mode");
//   const isDarkMode = body.classList.contains("dark-mode");
//   if (isDarkMode) {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//   } else {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//   }
// }



/*  */



// 3-cü üsul - mən hazırladığım "classList.toggle", "classList.contains" və " if else" vasitəsilə

function dark(){
    document.getElementById("dark").classList.toggle("darkMode");
    const isDarkMode = document.getElementById("dark").classList.contains("darkMode");
    if (isDarkMode) {
        document.body.style.backgroundColor="black";
        document.body.style.transition="1.5s";
        document.getElementById("dark").value="Light Mode";
        document.getElementById("dark").style.backgroundColor="white";
        document.getElementById("dark").style.color="black";
    } else {
        document.body.style.backgroundColor="white";
        document.body.style.transition="1.5s";
        document.getElementById("dark").value="Dark Mode";
        document.getElementById("dark").style.backgroundColor="black";
        document.getElementById("dark").style.color="white";
    }
}