(function () {

    // Menu de navegação
    // Este script adiciona um menu de navegação ao cabeçalho da página.
    // Quando o usuário clica no botão de 'Proporção' ou 'Polia', o elemento correspondente é exibido.
    // Por padrão, o elemento de proporção é exibido.

    const menuLinks = [
        document.querySelectorAll("#menu_proporcao"),
        document.querySelectorAll("#menu_polia")
    ]

    const conteudo = document.querySelectorAll("#conteudo > #calcular_proporcao, #conteudo > #calcular_polia")
    const conteudoProporcao = document.querySelector("#conteudo > #calcular_proporcao")
    const conteudoPolia = document.querySelector("#conteudo > #calcular_polia")
    conteudoProporcao.style.display = "block"
    conteudoPolia.style.display = "none"
    menuLinks[0][0].classList.add("ativo")
    menuLinks[1][0].classList.remove("ativo")
    menuLinks[0][0].addEventListener("click", () => {
        conteudoProporcao.style.display = "block"
        conteudoPolia.style.display = "none"
        menuLinks[0][0].classList.add("ativo")
        menuLinks[1][0].classList.remove("ativo")
    })
    menuLinks[1][0].addEventListener("click", () => {
        conteudoProporcao.style.display = "none"
        conteudoPolia.style.display = "block"
        menuLinks[1][0].classList.add("ativo")
        menuLinks[0][0].classList.remove("ativo")
    })

    // Calcular Proporção
    // Este script calcula a proporção entre dois valores, considerando uma nova base e um valor a ser descontado.

    const inputs_proporcao = [
        document.querySelector("#calcular_proporcao > #valor_base"),
        document.querySelector("#calcular_proporcao > #referente"),
        document.querySelector("#calcular_proporcao > #nova_base"),
        document.querySelector("#calcular_proporcao > #descontar"),
    ]
    const btnCalcular = document.querySelector("#calcular_proporcao > #btn_calcular_proporcao")
    const resultado = document.querySelector("#calcular_proporcao > .resultado")

    function verificarValoresProporcao() {
        return inputs_proporcao.map((valor) => {
            if (valor.value == "") valor.value = "0.00"

            return (isNaN(parseFloat(valor.value.replace(",", "."))))
        })
    }

    function calcularProporcao() {
        const valor_base = parseFloat(inputs_proporcao[0].value.replace(",", "."))
        const referente = parseFloat(inputs_proporcao[1].value.replace(",", "."))
        const nova_base = parseFloat(inputs_proporcao[2].value.replace(",", "."))
        const descontar = parseFloat(inputs_proporcao[3].value.replace(",", "."))
        const nova_base_real = nova_base - descontar
        const resultado = (nova_base_real * referente) / valor_base

        return [valor_base, referente, nova_base_real, resultado ? resultado : 0]
    }

    function limparInputs() {
        inputs_proporcao.map((valor) => valor.value = "")
    }

    btnCalcular.addEventListener("click", (e) => {
        e.preventDefault();

        if (verificarValoresProporcao()) {
            const valores = calcularProporcao()
            resultado.innerHTML =
                `<p>
                    Se a base é ${valores[0]} e seu valor referente é ${valores[1]}. Então, para a nova base de ${valores[2]} o valor referente será de ${valores[3].toFixed(2)}.
                </p>`
        }

        limparInputs()
    })

    // Calcular Polia
    // Este script calcula a proporção entre duas polias, considerando a velocidade atual e a desejada.

    const inputs_polia = [
        document.querySelector("#calcular_polia > #velocidade_atial"),
        document.querySelector("#calcular_polia > #polia_atual"),
        document.querySelector("#calcular_polia > #velocidade_desejada"),
    ]
    const btnCalcularPolia = document.querySelector("#calcular_polia > #btn_calcular_polia")
    const resultadoPolia = document.querySelector("#calcular_polia > .resultado")

    function verificarValoresPolia() {
        return inputs_polia.map((valor) => {
            if (valor.value == "") valor.value = "0.00"

            return (isNaN(parseFloat(valor.value.replace(",", "."))))
        })
    }

    function calcularPolia() {
        const velocidade_atial = parseFloat(inputs_polia[0].value.replace(",", "."))
        const polia_atual = parseFloat(inputs_polia[1].value.replace(",", "."))
        const velocidade_desejada = parseFloat(inputs_polia[2].value.replace(",", "."))
        const polia_desejada = (velocidade_atial * polia_atual) / velocidade_desejada

        return [velocidade_atial, polia_atual, velocidade_desejada, polia_desejada ? polia_desejada : 0]
    }

    function limparInputsPolia() {
        inputs_polia.map((valor) => valor.value = "")
    }

    btnCalcularPolia.addEventListener("click", (e) => {
        e.preventDefault();

        if (verificarValoresPolia()) {
            const valores = calcularPolia()
            resultadoPolia.innerHTML =
                `<p>
                    Se a velocidade atual é ${valores[0]} RPM e a polia atual é ${valores[1]} cm. Então, para a velocidade desejada de ${valores[2]} RPM a polia será de ${valores[3].toFixed(2)} cm.
                </p>`
        }

        limparInputsPolia()
    })

})();