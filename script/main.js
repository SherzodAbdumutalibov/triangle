// Подключение к div-элементу
var divForWrite = document.getElementById("str");


// // ** Нужно добаить исключения на кнопки и на инпут.
// document.onclick = function() {
//     console.log('Кликнули на body!');
//     readInput();
// };
// let input_id = document.getElementById("input_id");
// let btn = document.getElementById("btn");
// let btn_clear = document.getElementById("btn_clear");

function readInput() {

    // получение значений из input
    var input = document.getElementById("input_id").value;
    
    // разбиение по пробелам в массив
    var arr = input.split(' ');

    // преобразование из String в Number
    var a = Number(arr['0']);
    var b = Number(arr['1']);
    var c = Number(arr['2']);

    var chisla = [a, b ,c];
    var sumDegree = (a + b + c) == 180;

    if (val.charAt(0) === '.') {
        divForWrite.innerText = 'Нельзя начинать с точки';
        return;
    }
    if (sumDegree) {
        // ------------ Проверка на запятую ------------ 
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            divForWrite.innerText = 'Пользуйся точкой';
            console.log(isNaN(a), isNaN(b), isNaN(c))
            return;
        }
        // ---------------------------------------------


        // ------------ Проверка на точку --------------
        for (i in arr){
            var val = arr[i];   

            var dot = val.indexOf('.');
            
            if (dot === true) {
                
                dot = val.slice(-1);

                console.log('dot', dot);

                if (dot === '.') {
                    divForWrite.innerText = 'После точки должна стоять цифра';
                    console.log('После точки должна стоять цифра', a, b, c);
                    return;
                }
            }
        }  console.log(i)
        // ---------------------------------------------



        // --------------- ВЫЗОВ ФУНКЦИИ ---------------
        output_mf(a, b, c);
        // ---------------------------------------------


        // ---------- ОПРЕДЕЛЕНИЕ ТРЕУГОЛЬНИКА ---------
        for (i in chisla) {
            var degree = chisla[i];
            if (degree == 90) {
                divForWrite.innerText = 'Это Прямоугольный треугольник';
                return
            } else if (a == 60 && b == 60 && c == 60) {
                divForWrite.innerText = 'Это Равнобедренный треугольник';
                drawing(300, 300);
                return
            }
            else if (degree < 90) {
                divForWrite.innerText = 'Это Остроугольнй треугольник';
                return
            } 
            else if (degree > 90) {
                divForWrite.innerText = 'Это Тупоугольный треугольник';
                return
            } 
            console.log(chisla[i])
        }
        
        // ---------------------------------------------        

    } else{
        divForWrite.innerText = 'Сумма углов треугольника должна составлять 180 градусов';
        console.log('Сумма углов треугольника должна составлять 180 градусов');
    }

}


// функция для вычисления
function output_mf(a, b, c) {
     
    aMf = (a + b) > c;
    bMf = (a + c) > b;
    cMf = (c + b) > a;

    if ( aMf && bMf && cMf) {
        divForWrite.innerText = 'Получится';
    } else {
        divForWrite.innerText = 'Не получится'; 
    } 
 
    console.log(a, b, c)
}

// функция для очистки поля
function clear12() {
    document.getElementById('input_id').value = '';
    divForWrite.innerText = '...';
    console.clear();
    document.querySelector("#canvas").style.backgroundColor = "";
    document.querySelector("#canvas").style.border = "";
}



// -- Квадрат --

// установка заливки
// c.fillStyle = '#ba9d9b'; 

// .fillRect(y, x, ySize, xSize)
// c.fillRect(0, 0, 100, 100);

    
// ---------- CANVAS ---------- 
function drawing(x, y) {

    document.querySelector("#canvas").style.backgroundColor = "#3d3d3d";
    document.querySelector("#canvas").style.border = "1px white solid";
    

    //  получение ссылки на элемент canvas
    let canvas = document.getElementById('canvas');

    // получение 2D-контекста рисования
    let c = canvas.getContext('2d');
    // Основание
    c.moveTo(x-280, y-20);
    c.lineTo(x-20, y-20);

    // Левая сторона
    c.moveTo(x-280, y-20);
    c.lineTo(x/2, y-280);

    // Правая сторона   
    c.moveTo(x-20, y-20);
    c.lineTo(x/2, y-280);

    // определение цвета
    c.strokeStyle = 'red';
    // ширина линии
    c.lineWidth = 2;

    // вывод на экран
    c.stroke();
}


