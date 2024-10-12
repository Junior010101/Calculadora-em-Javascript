//numeros
const Ponto = document.getElementById("Float");
const B0 = document.getElementById("b0");
const B1 = document.getElementById("b1");
const B2 = document.getElementById("b2");
const B3 = document.getElementById("b3");
const B4 = document.getElementById("b4");
const B5 = document.getElementById("b5");
const B6 = document.getElementById("b6");
const B7 = document.getElementById("b7");
const B8 = document.getElementById("b8");
const B9 = document.getElementById("b9");

//ações
const Delete = document.getElementById("C");
const Multiplica = document.getElementById("Multiplica");
const Divide = document.getElementById("Divide");
const Soma = document.getElementById("Soma");
const Subtracao = document.getElementById("Subtracao");
const Rezultado = document.getElementById("Rezultado");

Delete.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num.substring(0, num.length - 1);

    num = document.getElementById("saida2").innerHTML;

    var N_Operacoes = 0;
    var N_Pontos = 0;

    for(let i = 0; i < num.length; i++){
        if (num.charAt(i) == "-" || num.charAt(i) == "+" || num.charAt(i) == "×" || num.charAt(i) == "÷") {
            N_Operacoes++;
        }
        if (num.charAt(i) == ".") {
            N_Pontos++;
        }
    }
    if(N_Pontos == N_Operacoes - 1 || N_Pontos == N_Operacoes){
        pass = true
    }
    else{
        pass = false
    }
    if(num.length < 12){
        document.getElementById("saida2").style.fontSize = "30px";
    }
    else if (num.length < 18){
        document.getElementById("saida2").style.fontSize = "25px";
    }
}
Delete.onclose = function () {
    if(num.indexOf(".") == num.indexOf("-")){
        pass = true
    }
    else{
        pass = false
    }
}

Multiplica.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;

    if (num.indexOf(num, num.length) == -1 && num.substring(num.length - 1) != "×" && num.substring(num.length - 1) != "-" && num.substring(num.length - 1) != "+" && num.substring(num.length - 1) != "÷" && num.substring(num.length - 1) != "."){
        document.getElementById("saida2").innerHTML = num + "×";
        pass = true;
    }
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
Divide.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;

    if (num.indexOf(num, num.length) == -1 && num.substring(num.length - 1) != "×" && num.substring(num.length - 1) != "-" && num.substring(num.length - 1) != "+" && num.substring(num.length - 1) != "÷" && num.substring(num.length - 1) != "."){
        document.getElementById("saida2").innerHTML = num + "÷";
        pass = true;
    }
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
Soma.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;

    if (num.indexOf(num, num.length) == -1 && num.substring(num.length - 1) != "×" && num.substring(num.length - 1) != "-" && num.substring(num.length - 1) != "+" && num.substring(num.length - 1) != "÷" && num.substring(num.length - 1) != "."){
        document.getElementById("saida2").innerHTML = num + "+";
        pass = true;
    }
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
Subtracao.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;

    if (num.substring(num.length - 1) != "-" && num.substring(num.length - 1) != "."){
        document.getElementById("saida2").innerHTML = num + "-";
        pass = true;
    }
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
Rezultado.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;

    document.getElementById("saida2").innerHTML = eval(num.replaceAll("×", "*").replaceAll("÷", "/"));

    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
Rezultado.onclose = function () {
    let num = document.getElementById("saida2").innerHTML;

    if(num.indexOf(".") == -1){
        pass = true
    }
    else{
        pass = false
    }
}

//inserindo numeros
var pass = true;
Ponto.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;

    if (pass == true && num.indexOf(num, num.length) == -1 && num.substring(num.length - 1) != "×" && num.substring(num.length - 1) != "-" && num.substring(num.length - 1) != "+" && num.substring(num.length - 1) != "÷" && num.substring(num.length - 1) != "."){
        document.getElementById("saida2").innerHTML = num + ".";
        pass = false;
    }
    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B0.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "0";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B1.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "1";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B2.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "2";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B3.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "3";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B4.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "4";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B5.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "5";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B6.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "6";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B7.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "7";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B8.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "8";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
B9.onclick = function () {
    let num = document.getElementById("saida2").innerHTML;
    document.getElementById("saida2").innerHTML = num + "9";
    num = document.getElementById("saida2").innerHTML;

    if(num.length > 12){
        document.getElementById("saida2").style.fontSize = "25px";
    }
    if (num.length > 18){
        document.getElementById("saida2").style.fontSize = "15px";
    }
}
