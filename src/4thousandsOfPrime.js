for (let x = 2; x < 1000; x++) { //Asal sayilar 2den baslar. 
    
    let isPrime = true
    let number = x;

    for (let y = 2 ; y<number; y++){

        if (number%y == 0){
            isPrime = false
        }
    }

    if (isPrime == true){
        console.log(number)
    }

}