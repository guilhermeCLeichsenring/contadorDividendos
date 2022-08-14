let txtValor = document.querySelector('#valor');
let txtPorcent = document.querySelector('#porcent');
let txtTime = document.querySelector('#time');
let txt
let res = document.querySelector('#res');

function isNumero(n){
    if (Number(n) > 0){
        return true
    }
    else{
        return false
    }
}

function calcu(){

    

    if (isNumero(txtValor.value) && isNumero(txtPorcent.value) && isNumero(txtTime.value)){

        let valor = Number(txtValor.value);
        let porcent = Number(txtPorcent.value) / 100;
        let time = Number(txtTime.value);
        let tipoTime = document.getElementsByName('radTime')
        let soma = [];
        let lista = [];


        if(tipoTime[0].checked){

            while ( valor < 999999999){
                valor = (valor * porcent) + valor
                soma.push(valor.toFixed(2))
            }

            lista.length = time

            for (var rep = 0; rep < lista.length; rep++){

                lista[rep] = soma[rep]

                console.log(`Elemento ${rep} com o Conteúdo ${lista[rep]}`)
            }
        
            let somaValores = Number(lista[time - 1])
            let ganho = somaValores - Number(txtValor.value)


            somaValores = somaValores.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            ganho = ganho.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

            res.innerHTML = `Depois de ${time} messes você terá <strong>${somaValores}</strong>.<br>`        
            res.innerHTML += `Sendo ${ganho} como ganho.`
        }
        else if(tipoTime[1].checked){
            time = time * 12
            console.log(time)

            while ( valor < 999999999){
                valor = (valor * porcent) + valor
                soma.push(valor.toFixed(2))
            }

            lista.length = time

            for (var rep = 0; rep < lista.length; rep++){

                lista[rep] = soma[rep]

                console.log(`Elemento ${rep} com o Conteúdo ${lista[rep]}`)
            }
        
            let somaValores = Number(lista[time - 1])
            let ganho = somaValores - Number(txtValor.value)


            somaValores = somaValores.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            ganho = ganho.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

            res.innerHTML = `Depois de ${time} messes você terá <strong>${somaValores}</strong>.<br>`        
            res.innerHTML += `Sendo ${ganho} como ganho.`
        }
    }

    else{
        window.alert("[ERRO] HÁ ESPAÇOS NÃO PREENCHIDOS")
    }



}