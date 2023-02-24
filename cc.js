//generate 10 digit credit card numbver
function createCreditCard() {
    let cc = "";
    //initial number of cc
    let initialNumber = Math.floor(Math.random() * 10);
    cc += initialNumber;
    while (cc.length < 10) {
      let lastDigit = cc[cc.length - 1];
      let nextDigit = lastDigit * 2;
      if (nextDigit > 9) {
        let RealNextDigit =
          parseInt(nextDigit.toString()[0]) + parseInt(nextDigit.toString()[1]);
        cc += RealNextDigit;
      } else {
        cc += nextDigit;
      }
    }
    console.log("generated cc number =",cc)
    return cc;
  }
  
  function validateCreditCard(ccNumbers) {
    const sumOfCC = ccNumbers
      .toString()
      .split("")
      .map((x) => Number(x))
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  console.log("sum=", sumOfCC)
      // check if the sum of cc ends with 0, then is invalid else is valid
    if (String(sumOfCC)[String(sumOfCC)[0] - 1] == "0") {
      console.log("invalid credit card number");
      return false;
    } else {
      console.log("valid credit card number");
      return true;
    }
    return sumOfCC;
  }
  
  
  
  //generate cc 
  const cc= createCreditCard();
  
  validateCreditCard(cc);
  