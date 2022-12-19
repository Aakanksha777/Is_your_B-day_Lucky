const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#luckyNum");
const checkBtn = document.querySelector("#checkBtn");

function compareValue ( sum , luckyNum) {
    if ( sum % luckyNum === 0) {
        console.log("you are lucky")
    } else {
        console.log("choose another number as your lucky number.")
    }
}


function checkedNum () {
    const dobValue = dob.value;
    // const luckyValue = luckyNum.value;
    const sum = userLuckyNum (dobValue)
    let compareValue = sum + luckyNum.value
    console.log(sum)
    console.log(compareValue)
}


function userLuckyNum (dobValue) {
    dobValue = dobValue.replaceAll("-","")
    let sum = 0

    // for loop 
    for(let i=0; i < dobValue.length; i++) {
        sum = sum + Number(dobValue.charAt(i))
    }

    return sum
}

checkBtn.addEventListener("click", checkedNum)

//Notes: 
// replace - to nothing. eg: 2023-12-20 to 20231220.
// typeCast changes datatype. eg: string to Number.
// sum + Number(dobValue.charAt(i)) == number keyword here used for change string to number.