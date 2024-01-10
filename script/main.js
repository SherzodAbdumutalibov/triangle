// Подключение к div-элементу
var div = document.getElementById("str");

document.onclick = function() {
    console.log('Кликнули на body!');

};


function readInput() {
    // получение значений из input
    var input = document.getElementById("input_id").value;
    
    // разбиение по пробелам в массив
    var arr = input.split(' ');


    var a = Number(arr['0']);
    var b = Number(arr['1']);
    var c = Number(arr['2']);  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        div.innerText = 'Только цифры! Если хочешь ';
        console.log(isNaN(a), isNaN(b), isNaN(c))
        return;
    }

    for (i in arr){
        var val = arr[i];

        var dot = val.indexOf('.');

        console.log('dot', dot);
        
        if (dot == true) {
            
            dot2 = val.slice(-1);

            console.log('dot2', dot2);

            if (dot2 === '.') {
                div.innerText = 'Не получится';
                console.log('Не получится', a, b, c);
                return;
            }
        }
    }

    output_mf(a, b, c)
}
function output_mf(a, b, c) {
    
    // условия 
    aMf = (a + b) > c;
    bMf = (a + c) > b;
    cMf = (c + b) > a;

    if ( aMf && bMf && cMf) {
        // вывод ответа
        div.innerText = 'Получится';
    } else {
        // вывод ответа
        div.innerText = 'Не получится'; 
    } 
 
    console.log(a, b, c)
}


// функция для очистки поля
function clear12() {
    document.getElementById('input_id').value = '';
    div.innerText = '...';
    console.clear()
}
