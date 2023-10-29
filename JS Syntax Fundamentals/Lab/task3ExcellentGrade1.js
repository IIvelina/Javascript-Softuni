function solve(number) {
  let result = "";
  if (number < 5.5) {
    result = "Not excellent";
  } else {
    result = "Excellent";
  }
  console.log(result);
}

solve(5.50);
