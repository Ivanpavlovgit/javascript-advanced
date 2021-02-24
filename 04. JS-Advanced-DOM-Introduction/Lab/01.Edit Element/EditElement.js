function editElement(element,match,replace) {
element.textContent=element.textContent.replace(new RegExp( match,'g'),replace);

    }
