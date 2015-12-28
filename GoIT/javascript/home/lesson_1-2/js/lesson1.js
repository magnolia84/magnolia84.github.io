function test_pow() {
  var x = prompt("Введіть x");
  var n = prompt("Введіть n");
  var result = pow(x, n);
  if(window.console) {
    console.log("Результат: " + result);
  }
}

function pow(base, exponent) {
  if (exponent < 0) {
    return 1 / pow(base, -exponent);
  } else {
    var result = 1;
    for (var i = 1; i <= exponent; i++) {
      result *= base;
    }
    return result;
  }
}

function helloUser() {
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr[i] = prompt("Введіть ім'я");
  }
  var user = prompt("Введіть ім'я користувача");
  var found = false;
  for (var j = 0; j < 5; j++) {
    if (user == arr[j]) {
      found = true;
      alert(user + ", ви успішно увійшли");
    }
  }
  if (!found) {
    alert(user + " не знайдений");
  }
}