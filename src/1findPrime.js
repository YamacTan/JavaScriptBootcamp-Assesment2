//1 - Verilen sayıların asal olup olmadigini yazdiran fonksiyonu yazınız.

function findPrime(...numbers){

    for (let x = 0; x < numbers.length; x++) {
        let isPrime = true
        let number = numbers[x];

        if (number == 1){
            console.log("1 bir asal sayi degildir. Unutmayin ki asal sayilar 2'den baslar. :)")
        }
        else{ 
            for (let y = 2; y < number ; y++) {
            
            if (number%y == 0){
                isPrime = false
            }
        }
        isPrime ? console.log(number + " bir asal sayıdır.") : console.log(number + " bir asal sayı değildir.")
    }

    }
}

//Test me
findPrime(3,5,12,11,29,1)
