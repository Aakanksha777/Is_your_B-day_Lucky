const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#luckyNum");
const checkBtn = document.querySelector("#checkBtn");
const outbox = document.querySelector("#outbox");


function sumOfDob (date) { 
  dobValue = dob.value 
  dobValue = dobValue.replaceAll("-","") // replace hyphen with nothing.
  sum = 0 
  for(i=0; i<dobValue.length; i++){
    // console.log(dobValue[i])
    sum = sum + Number (dobValue.charAt(i))
    console.log("sum", sum)
  }
  return sum
}

function IsYourBdayLucky () {
    const luckyNumValue = luckyNum.value
    const sum = sumOfDob ()
    // sumDob.innerHTML = "sum of data of birth " + sum;
    // sumOfLuckyNo.innerHTML = "lucky number "+ luckyNumValue;

    let stage1_Num = sum % luckyNumValue;
    console.log("ist output is : ", stage1_Num)

    let stage2_Num = stage1_Num % 3
    console.log("2nd number of numerology", stage2_Num)

    if (stage2_Num % 2) {
        console.log("Your birthday is lucky ")
        outbox.innerHTML = "Your birthday is lucky  🤩 🤩"
    } else {
        console.log("celebrate b'day with friends")
        outbox.innerHTML = "celebrate b'day with friends 🥳"

    }

}

checkBtn.addEventListener("click", IsYourBdayLucky);