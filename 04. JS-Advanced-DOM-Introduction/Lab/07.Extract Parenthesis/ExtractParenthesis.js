function extract(content) {
    let text = document.getElementById(content).textContent;
    const regex = /\([a-zA-Z ]+\)/gm;
    let match = regex.exec(text);
    let result = [];
    while (match) {
        result.push(match[0]);
        match = regex.exec(text)
    }
   return result.join("; ");
}

