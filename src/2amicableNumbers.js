function isAmicable(number1, number2) {

    let positiveDividers = []
    let total = 0

    for(let divider = 1; divider < number1 ; divider++){

        if (number1%divider == 0){
            positiveDividers.push(divider);
        }
    }

     //console.log(number1 +" sayısının pozitif bölenleri şunlardır: " +positiveDividers)

     for (let y = 0; y < positiveDividers.length; y++) {
        total = total + positiveDividers[y]
    }

    if(total == number2){

        console.log(number1 + " ve " + number2 +" arkadas sayilardır.")
        return true
    }
    else{
        console.log(number1 + " ve " + number2 + " arkadas sayilar degillerdir.")
        return false
    }
    
}

//Test me
isAmicable(284,220) //True
isAmicable(17296,18416) //True
isAmicable(12314,12345) //False
isAmicable(2,40) //False