// 1000'e kadar olan sayıları al.
//Sayıların pozitif bölenlerini bul, bir arraye at.
//Array toplamı sayının kendisine eşitse bu sayı bir mükemmel sayıdır.

for (let number = 1 ; number <= 1000 ; number++){

    let positiveDividers = []; //Sayının pozitif bölenlerini bul.
    let total =  0

    for(let divider = 1; divider <= number ; divider++){

        if (number%divider == 0){
            positiveDividers.push(divider);
        }
    }

    //console.log(number +" sayısının pozitif bölenleri şunlardır." +positiveDividers)

    for (let y = 0; y < positiveDividers.length; y++) {
        total = total + positiveDividers[y]
    }

    if (total == (number*2)){

        console.log(number) //Gives the result of 6,28 and 496. Correct.
    }

}
