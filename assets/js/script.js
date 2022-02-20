let content = document.querySelector(".search-content");
let input = document.querySelector(".search-input");
let btn = document.querySelector(".search-button");

let tags = [];

function render() {
    content.innerHTML = "";
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li class="search-tag">
                                ${tag}
                                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
                            </li>`;
    }
    content.appendChild(input);
    input.focus();
}

render();

input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        tags.push(input.value.trim());
        render();
        input.value = "";
    }
});

function removeTag(index) {
    console.log(index);
    tags.splice(index, 1);
    render();
}

btn.addEventListener("click", function() {
    tags = [];
    render();
});