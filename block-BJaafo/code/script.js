// #### Get full name

function userName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  let result = userName(`Nitish`, `Saini`);
  let expected = `Aditya Saini`;
  
  try {
    if (result !== expected) {
      throw new Error(`${result} is not equal to ${expected}`);
    }
  } catch (error) {
    alert(error);
  }
  
  let actual = userName(`Mohit`, `Saini`);
  let final = `Mohit Saini`;
  
  if (actual !== final) {
    throw new Error(`${actual} is not equal to ${final}`);
  }
  
  // #### Calculate total amount
  
  function getAmount(amount, taxRate) {
    return Number(`${amount}`) + Number(`${amount}` * `${taxRate}`) / 100;
  }
  try {
    let result = getAmount(10000, 10);
    let expected = getAmount(1000, 10);
  } catch (error) {
    alert(error);
  }
  
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
  
  let result = getAmount(10000, 10);
  let expected = getAmount(10000, 10);
  
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }