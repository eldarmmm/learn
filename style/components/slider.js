
$('.sec1_div2').slick();

let words = document.getElementById(`word`)
let showtext = `Российский завод силовых машин`;

words.innerHTML = showtext;

let charturn = 0;
printword()
function printword() {
    if (charturn <= showtext.length){
    words.innerHTML = showtext.substr(0, charturn)
    charturn++;
    setTimeout(printword, 100)} else
    {setTimeout(deleteword, 1000)}
    }


function deleteword () {
    if (charturn >= 0) {
    words.innerHTML = showtext.substr(0, charturn)
    charturn--;
    setTimeout(deleteword, 100)}  else {
    setTimeout(printword, 200) }
    }

let items = document.querySelectorAll(`#item`) // вытаскиваем с хтмл инфу

    items.forEach(elem => { //указываем с помощью функции фор ич, что для каждого элемента с переменной items класса item мы создаём функцию elem

    elem.innerHTML = 0; // где внутреннее значение будет равно 0. допустим взяли 0.
    let endvalue = elem.getAttribute(`data-num`); // теперь присваеваем переменной другой конечный результат сохраненный под end value
    console.log(endvalue);
    let increasement = 54; // задаём ratio с которым будет увеличиваться наш elem до end value
    function changenumebr() { // далее уже прописываем функцию, которая будет вызываться и увеличивать наши elem
    let value = +elem.innerHTML // задаём переменную которой присваеваем числовое значение элем
    if (value <= endvalue) { // пока это значение не сравняется с конечным числом
    value += Math.round(increasement); // значение будет увеличиваться на ratio
    elem.innerHTML = value; // и элем будет равен новой переменной
    setTimeout(changenumebr, 100)} else { // устанавливаем таймаут в несколько сек для запуска
    elem.innerHTML = endvalue; 
    }
    }
    changenumebr()
});
