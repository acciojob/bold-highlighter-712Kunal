function highlight() {
    const strongTags = document.querySelectorAll("strong");

    for (let i = 0; i < strongTags.length; i++) {
        strongTags[i].style.color = "green";
    }
}

function return_normal() {
    const strongTags = document.querySelectorAll("strong");

    for (let i = 0; i < strongTags.length; i++) {
        strongTags[i].style.color = "black";
    }
}