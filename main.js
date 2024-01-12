// Подключение к div-элементу
var div = document.getElementById("str");

function readInput() {
  // получение значений из input
  var input = document.getElementById("input_id").value;

  // разбиение по пробелам в массив

  var arr = input.split(" ");
  var realNumbers = [];

  for (i = 0; i < 3; i++) {
    if (isNaN(Number(arr[i]))) realNumbers[i] = "Raqam kirit dedima sangaaaa";
    else realNumbers[i] = arr[i];
  }

  for (i in arr) {
    var val = arr[i];

    var dot = val.indexOf(".");
    var comma = val.indexOf(",");

    console.log("dot", dot, "comma", comma);

    if (dot == true || comma == true) {
      dot2 = val.slice(-1);
      comma2 = val.slice(-1);

      console.log("dot2", dot2, "comma2", comma2);

      if (dot2 === "." || comma2 === ",") {
        div.innerText = "Не получится";
        console.log(
          "Не получится",
          realNumbers[0],
          realNumbers[1],
          realNumbers[2]
        );
        return;
      }
    }
  }

  output_mf(realNumbers[0], realNumbers[1], realNumbers[2]);
}

function output_mf(a, b, c) {
  // условия
  aMf = a + b > c;
  bMf = a + c > b;
  cMf = c + b > a;

  if (aMf == true && bMf == true && cMf == true) {
    // вывод ответа
    div.innerText = "Получится";
  } else {
    // вывод ответа
    div.innerText = "Не получится";
  }

  console.log(a, b, c);
}

// функция для очистки поля
function clear12() {
  document.getElementById("input_id").value = "";
  div.innerText = "...";
  console.clear();
}


