let run = (x, arr) => {

    for (let i = 0; i < x; i++) {

        if (x < 6) {
            let cortado = arr.slice(i, x);
            console.log(cortado);
            x++;
        }
    }
}

run(3, [2, 5, 4, 6, 8]);
