function exe1(){

    // recuperar entrada de dados
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    // calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){
        document.getElementById("resultado").innerHTML = `A média é ${media} está aprovado`
    }
    else {
        document.getElementById("resultado").innerHTML = `A média é ${media} está reprovado`
    }
}

function exe2(){
    // entrada de dados
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // calcula a média
    let media = (nota1 + nota2) / 2
    // operadores lógicos
    // E -> &&
    let resultado 
    if ((media >=0) && (media < 3)){

        resultado = `Aluno reprovado com média ${media}`

    }
    else if ((media >= 3) && (media < 7)){

        resultado = `Aluno em exame com média ${media}`

    }
    else if ((media >= 7 ) && (media <= 10)){

        resultado = `Aluno aprovado com média ${media}`

    }
    else {

        resultado = `Notas informadas são inválidas`

    }
    // mostra resultado
    document.getElementById("resultado").innerHTML = resultado
}

function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    
    let resultado
    if (nro1 < nro2){
        resultado = `${nro1} é menor que ${nro2}`
    }
    else if (nro1 > nro2){
        resultado = `${nro2} é menor que ${nro1}`
    }
    else{
        resultado = `${nro1} é igual à ${nro2}`
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe4(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    
    
    let resultado
    if (nro1 > nro2 && nro1 > nro3){
        resultado = `${nro1} é o maior número`
    }
    else if (nro2 > nro1 && nro2 > nro3){
        resultado = `${nro2} é o maior número`
    }
    else if (nro3 > nro1 && nro3 > nro2){
            resultado = `${nro3} é o maior número`
    }
    else{
        resultado = "Os números são iguais"
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe5(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // processamento
    let resultado
    switch(opcao){
        case 1: resultado = (nro1 + nro2) / 2
               break
        case 2: if (nro1 >= nro2){
                    resultado = nro1 - nro2
                }
                else {
                    resultado = nro2 - nro1
                }
                break
        case 3: resultado = (nro1 * nro2)
                break
        case 4: if (nro2 != 0){
                    resultado = nro1 / nro2
                }
                else {
                    resultado = "Divisão por zero"
                }
                break
        default: resultado = "opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe6(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)
    let resultado
    switch(opcao){
        case 1: resultado = (nro1 ** nro2)
               break
               case 2: resultado = `RAIZ QUADRADA DO 1º NÚMERO: ${Math.sqrt(nro1)}
               RAIZ QUADRADA DO 2º NÚMERO: ${Math.sqrt(nro2)} `
            break
    case 3: resultado = `RAIZ CÚBICA DO 1º NÚMERO: ${Math.cbrt(nro1)} 
    RAIZ CÚBICA DO 2º NÚMERO: ${Math.cbrt(nro2)}`
            break
            default: resultado = "opção inválida"}
    document.getElementById("resultado").innerHTML = resultado
}
function exe7(){
    let nro1 = Number(document.getElementById("nro1").value)
    let resultado

    if (nro1 < 500){
        resultado = (nro1 * 0.30) + nro1
    }
    else{
        resultado = ("Você não tem direito ao aumento salarial !")
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe8(){
    let nro1 = Number(document.getElementById("nro1").value)
    let resultado

    if (nro1 <= 300){
        resultado = (nro1 * 0.35) + nro1
    }
    else{
        resultado = (nro1 * 0.15) + nro1
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe9(){
    let nro1 = Number(document.getElementById("nro1").value)
    let resultado

    if (nro1 > 400){
        resultado = `Saldo médio: ${nro1}. Valor do crédito: ` + (nro1 * 0.30)
    }
    else if (nro1 <= 400 && nro1 > 300){
        resultado = `Saldo médio: ${nro1}. Valor do crédito: ` + (nro1 * 0.25)
    }
    else if (nro1 <= 300 && nro1 > 200){
        resultado = `Saldo médio: ${nro1}. Valor do crédito: ` + (nro1 * 0.20)
    }
    else if (nro1 <= 200){
        resultado = `Saldo médio: ${nro1}. Valor do crédito: ` + (nro1 * 0.10)
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe10(){
    let nro1 = Number(document.getElementById("nro1").value)
    let resultado
    let dist
    let imp

    if (nro1 < 12000){
        dist = nro1 * 0.05
        imp = 0
        resultado = `Porcentagem do distribuidor: ${dist}. Imposto: ${imp}. Preço final: R$` + (nro1 + dist + imp)
    }
    if (nro1 >= 12000 && nro1 <= 25000){
        dist = nro1 * 0.10
        imp = nro1 * 0.15
        resultado = `Porcentagem do distribuidor: ${dist}. Imposto: ${imp}. Preço final: R$` + (nro1 + dist + imp)
    }
    if (nro1 > 25000){
        dist = nro1 * 0.15
        imp = nro1 * 0.20
        resultado = `Porcentagem do distribuidor: ${dist}. Imposto: ${imp}. Preço final: R$` + (nro1 + dist + imp)
    }
    document.getElementById("resultado").innerHTML = resultado
}