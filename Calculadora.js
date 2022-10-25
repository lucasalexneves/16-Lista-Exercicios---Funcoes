/* Lista de exercícios - Calculadora
Para realizar esse exercício vocês devem criar um novo projeto, iniciar um novo
repositório para ele e também criar um novo repositório no github!
Calculadora da DoDev
1. Você deve criar um programa que solicite ao seu usuário dois
números A e B.
2. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma soma com eles, e retorne o resultado;
3. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma subtração com eles, e retorne o resultado;
4. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma multiplicação com eles, e retorne o
resultado;
5. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma divisão com eles, e retorne o resultado;
6. Faça com que seu usuário escolha qual função ele deseja fazer
com os números que ele inseriu, e depois de realizar essa
operação pergunte se ele deseja fazer outra ou encerrar a
aplicação.
7. Crie um array para salvar o resultado das operações e crie
também uma função para exibir o histórico dos resultados.
ATENÇÃO!! Faça um commit para cada item do exercício. */

var numA = parseInt(prompt("Digite o 1º Número"))
var numB = parseInt(prompt("Digite o 2º Número"))
var resultados = []
var index = 0
var continuar = "s"



function CalcularSoma(num1, num2){
    var soma = (num1 + num2)
    return soma
}

function CalcularSubtracao(num1, num2){
    var subtracao = (num1 - num2)
    return subtracao
}

function CalcularMultiplicacao(num1, num2){
    var multiplicação = num1 * num2
    return multiplicação
}

function CalcularDivisao(num1, num2){
    var divisao = num1 / num2
    return divisao
}

function ExibirHistorico(){
    console.log(resultados)
}

while(continuar == "s"){
    var operacao = prompt("Insira a operação desejada: +, -, * ou /")
    if(operacao == "+"){
        resultados[index] = CalcularSoma(numA, numB)
        index++
        console.log(CalcularSoma(numA, numB))
    }else if(operacao == "-"){
        resultados[index] = CalcularSubtracao(numA, numB)
        index++
        console.log(CalcularSubtracao(numA, numB))
    }else if(operacao == "*"){
        resultados[index] = CalcularMultiplicacao(numA, numB)
        index++
        console.log(CalcularMultiplicacao(numA, numB))
    }else if(operacao == "/"){
        resultados[index] = CalcularDivisao(numA, numB)
        index++
        console.log(CalcularDivisao(numA,numB))
    }
    continuar = prompt("Deseja continuar fazendo operação?")
}
ExibirHistorico();