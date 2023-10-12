(function () {

    const inputs = [
        document.querySelector("#valor_base"),
        document.querySelector("#referente"),
        document.querySelector("#nova_base"),
        document.querySelector("#descontar"),
    ]
    const btnCalcular = document.querySelector("#calcular")
    const resultado = document.querySelector("#resultado")

    function verificarValores() {
        return inputs.map((valor) => {
            if (valor.value == "") valor.value = "0.00"

            return (isNaN(parseFloat(valor.value.replace(",", "."))))
        })
    }

    function calcularProporcao() {
        const valor_base = parseFloat(inputs[0].value.replace(",", "."))
        const referente = parseFloat(inputs[1].value.replace(",", "."))
        const nova_base = parseFloat(inputs[2].value.replace(",", "."))
        const descontar = parseFloat(inputs[3].value.replace(",", "."))
        const nova_base_real = nova_base - descontar
        const resultado = (nova_base_real * referente) / valor_base

        return [valor_base, referente, nova_base_real, resultado ? resultado : 0]
    }

    function limparInputs() {
        inputs.map((valor) => valor.value = "")
    }

    btnCalcular.addEventListener("click", (e) => {
        e.preventDefault();

        if (verificarValores()) {
            const valores = calcularProporcao()
            resultado.innerHTML =
                `<p>
                    Se a base é ${valores[0]} e seu valor referente é ${valores[1]}. Então, para a nova base de ${valores[2]} o valor referente será de ${valores[3].toFixed(2)}.
                </p>`
        }

        limparInputs()
    })

})();