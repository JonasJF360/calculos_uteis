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
            console.log("entrou no erro")
            limparImputs(inputs)
            return 0
        } else {

            let resultado = document.querySelector(".resultado")
            const valores = calcularProporcao(inputs)
            resultado.innerHTML = ""
            resultado.innerHTML = `Se para ${valores[0]} a medida é ${valores[1]}. Então, para ${valores[2]} a medida será ${valores[3].toFixed(2)}.`

            limparImputs(inputs)
        }
    }
    function limparImputs(lista) {0
        for (let valorer of lista) {
            valorer["value"] = ""
        }
    }

    function calcularProporcao(lista) {
        let v1 = parseFloat(lista[0]["value"].replace(",", "."))
        let m1 = parseFloat(lista[1]["value"].replace(",", "."))
        let v2 = parseFloat(lista[2]["value"].replace(",", "."))
        let de = parseFloat(lista[3]["value"].replace(",", "."))
        v2 = v2 - de
        let r = (v2 * m1) / v1

        return [v1, m1, v2, isNaN(r) ? 0 : r]
    }

    function verificarValores(lista) {
        for (let valor of lista) {
            let temp = valor["value"].replace(",", ".")
            if (isNaN(parseFloat(temp))) {
                return false
            }
        }
        return true
    }

})();