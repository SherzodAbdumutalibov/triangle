var div = document.getElementById("str");


function output_mf() {
    // получение значений из input'а
    var input = document.getElementById("input_id").value;
    
    // разбиение по пробелам в массив
    var arr = input.split(' ');

    // присвоение значений к переменным, преобразование типа в number
    var a = parseInt(arr['0']);
    var b = parseInt(arr['1']);
    var c = parseInt(arr['2']);

    // вычисление
    var triangle = (a+b) > c ? 'Треугольник' : 'Фигня';

    // вывод ответа
    div.innerText = triangle;  
}

function calculate() {
    
}

// функция для очистка поля
// function clear() {
//     document.getElementById("input_id").value = "";
// }
