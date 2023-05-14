(App = () => {
    const btn = document.querySelector(".calcular")

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        let inputs = [
            document.querySelector("#valor_base"),
            document.querySelector("#medida_base"),
            document.querySelector("#valor_novo"),
            document.querySelector("#descontar_novo"),
        ]

        if (!verificarValores(inputs)) {
            limparImputs(inputs)
            return
        } else {

            let resultado = document.querySelector(".resultado")
            const valores = calcularProporcao(inputs)
            resultado.innerHTML = `Se para ${valores[0]} a medida é ${valores[1]}. Então, para ${valores[2]} a medida será ${valores[3].toFixed(2)}.`

            limparImputs(inputs)
        }

        function verificarValores(lista) {
            for (let valor of lista) {
                if (valor.value == "") valor.value = "0"
                let temp = valor.value == "" ? 0 : valor.value.replace(",", ".")
                if (isNaN(parseFloat(temp))) return false

            }
            return true
        }

        function limparImputs(lista) {
            for (let valor of lista) {
                valor.value = ""
            }
        }

        function calcularProporcao(lista) {
            let valor_base = parseFloat(lista[0].value.replace(",", "."))
            let medida_base = parseFloat(lista[1].value.replace(",", "."))
            let valor_novo = parseFloat(lista[2].value.replace(",", "."))
            let descontar_novo = parseFloat(lista[3].value.replace(",", "."))

            valor_novo = valor_novo - (isNaN(descontar_novo) ? 0 : descontar_novo)
            let resultado = (valor_novo * medida_base) / valor_base

            return [valor_base, medida_base, valor_novo, isNaN(resultado) ? 0 : resultado]
        }


    })
})();