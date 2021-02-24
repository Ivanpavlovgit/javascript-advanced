function sumTable() {
let  sum=0;
document.querySelectorAll('table tr td:last-child').forEach(n=>sum+=Number(n.textContent));

document.getElementById('sum').textContent=sum;
}