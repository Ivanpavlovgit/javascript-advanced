function search() {
    const nodeListNamesOfTowns = document.querySelectorAll('#towns>li');
    const input = document.querySelector('input').value;
    const result=document.querySelector('div');
    let sum=0;
   for (const li of nodeListNamesOfTowns) {
      if((li.textContent).toLowerCase().includes(input.toLowerCase())){
        li.style.fontWeight='bold';
        li.style.textDecoration='underline';
        sum++;
      }else{
         li.style.fontWeight='';
         li.style.textDecoration='none';
      }
   }
   if(sum>0){
      result.textContent=`${sum} matches found`;
   }else{
      result.textContent='';
   }
}
