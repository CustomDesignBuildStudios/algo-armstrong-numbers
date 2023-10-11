function isArmstrongNumber(num){
    numArray = Array.from(String(num), num => Number(num)); 
    armstrongNumber = 0;
    numArray.map((val, index) => {
        armstrongNumber += val**numArray.length
    })

    if (armstrongNumber == num){
        return true;
    }else{
        return false;
    }
  
}

function findArmstrongNumbers(numbers) {
    armstrongNumbers = [];
    for(let x =0;x < numbers.length;x++){
        if(isArmstrongNumber(numbers[x])){
            armstrongNumbers.push(numbers[x]);
        }
    }
    return armstrongNumbers;
}
  
module.exports = findArmstrongNumbers;
  