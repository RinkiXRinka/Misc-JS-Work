let run = (x, arr) => {
lengthOfArray = arr.length;
  if(x <= lengthOfArray)  {
    
    for (let i = 0; i < x; i++) {

        if (x <= lengthOfArray) {
            let cortado = arr.slice(i, x);
            console.log(cortado);
            const min = Math.min(...cortado);
            console.log("Número mas pequeño: ", min);
            const max = Math.max(...cortado);
            console.log("Número mas grande: ", max);
            x++;
          }
        }
    }
}
  

run(3, [2, 5, 4, 6, 8]);

/*
[ 2, 5, 4 ]
Número mas pequeño:  2
Número mas grande:  5
[ 5, 4, 6 ]
Número mas pequeño:  4
Número mas grande:  6
[ 4, 6, 8 ]
Número mas pequeño:  4
Número mas grande:  8
*/
