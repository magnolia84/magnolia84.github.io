function pow() {
  var x = prompt("Введіть x");
  var n = prompt("Введіть n");

  if (n < 0) {
    alert("Потрібно ввести позитивне значення n");
  } else {
    var result = 1;
    for (var i = 1; i <= n; i++) {
      result *= x;
    }
    console.log("Результат: " + result);
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