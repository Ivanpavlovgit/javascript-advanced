{
   function solve(matrix) {
      return Math.max(...[].concat(...matrix));

   }

   console.log(solve([[20, 50, 10], [8, 33, 145]]
   ));
}
//expected output - 145