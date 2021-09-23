function Calcular(){
    var nome = document.getElementById("nome")
    var salario = document.getElementById("salario")
    var resultado = document.getElementById("res")
    var nm = nome.value
    var sl = salario.value

    resultado.innerHTML = ""

    if (nm == "" || sl == ""){
        alert("Há algum campo em branco!!!")
        nome.focus()
    }else if(Number(sl) <= 0){
        alert("Salário inválido!!!")
        nome.innerHTML = ""
        salario.innerHTML = ""
        nome.focus()
    }else{
        //alert("Calculando")
        AntesRS = Number(sl).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

        if (Number(sl) <= 280.00){
            var porcento = 20
        }else if (Number(sl) <= 700.00){
            var porcento = 15
        }else if (Number(sl) <= 1500.00){
            var porcento = 10
        }else{
            var porcento = 5
        }

        var Aumento = Number(sl) * porcento / 100
        var NovoSalario = Number(sl) + Number(Aumento)
        var Aumento = Aumento.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        var NovoSalario = NovoSalario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

        resultado.innerHTML = `Salario antes do reajuste: <strong>${AntesRS}</strong><br/>Percentual de aumento aplicado: <strong>${porcento}%</strong><br/>Valor do aumento: <strong>${Aumento}</strong><br/>Novo salário, após o aumento: <strong>${NovoSalario}</strong><br/>`
    }
}

/*
Salario antes do reajuste: <br/>
Percentual de aumento aplicado: <br/>
Valor do aumento: <br/>
Novo salário, após o aumento: <br/>
*/