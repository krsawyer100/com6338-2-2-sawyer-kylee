function greet() {
    var userName = prompt('What is your name?');
    alert('Hello, ' + userName + '!');
    var ageEntered = prompt('How old are you?');
    var userAge = parseInt(ageEntered);
    var birthday = confirm('Have you had a birthday yet this year?');
    if (birthday === true) {
        alert('You were born in ' + (new Date().getFullYear() - userAge) + '!');
    } else
        alert('You were born in ' + (new Date().getFullYear() - (userAge + 1)) + '!');
}