function addItem() {
   const ulElement=document.getElementById('items');
   const input=document.getElementById('newItemText').value;
   const liToAdd=document.createElement('li');
   liToAdd.textContent=input;
   ulElement.appendChild(liToAdd);
}