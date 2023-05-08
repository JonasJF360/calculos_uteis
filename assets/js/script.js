(App = () => {
    document.querySelector("#calcular").addEventListener("click", manterProporcao);

    function manterProporcao() {
        let inputs = [
            document.querySelector("#val1"),
            document.querySelector("#med1"),
            document.querySelector("#val2"),
            document.querySelector("#desc"),
        ]
        if (!verificarValores(inputs)) {
            limparImputs(inputs)
            return
        } else {

            let resultado = document.querySelector(".resultado")
            const valores = calcularProporcao(inputs)
            resultado.innerHTML = ""
            resultado.innerHTML = `Se para ${valores[0]} a medida é ${valores[1]}. Então, para ${valores[2]} a medida será ${valores[3].toFixed(2)}.`

            limparImputs(inputs)
        }
    }

    function limparImputs(lista) {
        for (let valorer of lista) {
            valorer["value"] = ""
        }
    }

    function calcularProporcao(lista) {
        let valor01 = parseFloat(lista[0]["value"].replace(",", "."))
        let medida01 = parseFloat(lista[1]["value"].replace(",", "."))
        let valor02 = parseFloat(lista[2]["value"].replace(",", "."))
        let desconto = parseFloat(lista[3]["value"].replace(",", "."))
        valor02 = valor02 - (isNaN(desconto) ? 0 : desconto)
        let r = (valor02 * medida01) / valor01

        return [valor01, medida01, valor02, isNaN(r) ? 0 : r]
    }

    function verificarValores(lista) {
        for (let valor of lista) {
            if (valor["value"] == "") valor["value"] = "0"
            let temp = valor["value"] == "" ? 0 : valor["value"].replace(",", ".")
            if (isNaN(parseFloat(temp))) return false

        }
        return true
    }

})();