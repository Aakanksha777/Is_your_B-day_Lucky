const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#luckyNum");
const checkBtn = document.querySelector("#checkBtn");
const sumDob = document.querySelector("#sumDob");
const sumOfLuckyNo = document.querySelector("#sumOfLuckyNo");

function sumOfDob (date) { 
  dobValue = dob.value
  dobValue = dobValue.replaceAll("-","")
  console.log(dobValue)
  sum = 0 
  for(i=0; i<dobValue.length; i++){
    // console.log(dobValue[i])
    sum = sum + Number (dobValue.charAt(i))
    console.log("sum", sum)
  }
  return sum
}

function IsYourBdayLucky () {
    debugger;
    const luckyNumValue = luckyNum.value
    const sum = sumOfDob ()
    // sumDob.innerHTML = "sum of data of birth " + sum;
    // sumOfLuckyNo.innerHTML = "lucky number "+ luckyNumValue;


    if (sum%luckyNumValue == 0) {
        console.log("numerology is checking")
    } else {
        console.log("cfvgbhnjkm")
    }

}


checkBtn.addEventListener("click", IsYourBdayLucky);