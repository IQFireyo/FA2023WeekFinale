function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);

    if(firstName.length > 20){
        alert("Not  enough characters. First and last Name  must have at leat 20 charcters")
        return;
    }
    console.log("Valid first and last name!");

    if(zip.length != 5 || (!Number.isInteger(parseInt(zip) ) && parseInt(zip) > 9999) ){
        alert("Invalid zip code. zip Must be a number of 5 digits.");
        return;
    }
    console.log("zip valid");
}

window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit", validateInput)
    }
})