
let words= {
    "house": "Casa",
    "table": "Mesa",
    "dog": "Perro",
    "cat" : "Gato"
}

let word = prompt("Insert House/Table/Dog/Cat : ").toLocaleLowerCase();
document.write(words[word]);
