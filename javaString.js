// Function to check if a string is a palindrome
function isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase(); // Remove spaces and convert to lowercase
    var length = str.length;
    for (var i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - i - 1]) {
            return false;
        }
    }
    return true;
}

// Function to check a palindrome and display the result
function checkPalindrome() {
    while (true) {
        var input = prompt("Enter a word or phrase (or click Cancel to exit):");

        if (input === null) {
            break;
        }

        if (isPalindrome(input)) {
            alert("'" + input + "' is a palindrome!");
        } else {
            alert("'" + input + "' is not a palindrome.");
        }
    }
}