//let arrayValoresBotones = JSON.parse(localStorage.botonesDano)
let arrayValoresBotones = [
        70,
        75,
        100,
        105,
        110,
        115
    ],
    skillaxie = 31,
    historico

window.addEventListener("load", loadGeneral)

function loadGeneral() {
    crearTablaInicial()
    let botonTipo = document.getElementsByName("tipoAtaca")
    for (let i = 0; i < botonTipo.length; i++) {
        botonTipo[i].addEventListener("change", cogerValorChecked)
    }
    crearImg()
    crearGestorEnergia()
    crearHistorico()
    historico = document.getElementById("historico")


}

function crearGestorEnergia() {
    let article = crearElemento("ARTICLE", "class", "container-energia")
    let h2 = crearElemento("H2", "textContent", "Energia del rival")
    article.appendChild(h2)
    let label = crearElemento("LABEL", "for", "energia", "textContent", "Energia: ")
    article.appendChild(label)
    let campo = crearElemento("INPUT", "type", "number", "value", "3", "id", "energia", "class", "energia", "disabled", "disabled")
    article.appendChild(campo)
    let salto = crearElemento("br")
    article.appendChild(salto)
    salto = crearElemento("br")
    article.appendChild(salto)
    label = crearElemento("LABEL", "for", "turno", "textContent", "Turno: ")
    article.appendChild(label)
    campo = crearElemento("INPUT", "type", "number", "value", "1", "id", "turno", "class", "turno", "disabled", "disabled")
    article.appendChild(campo)
    salto = crearElemento("br")
    article.appendChild(salto)
    salto = crearElemento("br")
    article.appendChild(salto)
    let div = crearElemento("DIV")
    let boton = crearElemento("BUTTON", "type", "button", "id", "resetEnergia", "textContent", "Reset")
    div.appendChild(boton)
    boton = crearElemento("BUTTON", "type", "button", "id", "energiaMenosUno", "textContent", "- 1")
    div.appendChild(boton)
    boton = crearElemento("BUTTON", "type", "button", "id", "energiaMasUno", "textContent", "+ 1")
    div.appendChild(boton)
    boton = crearElemento("BUTTON", "type", "button", "id", "sumarTurno", "textContent", "turno")
    div.appendChild(boton)
    article.appendChild(div)
    document.getElementById("contenedorFlex").appendChild(article)
    let energia = document.getElementById("energia")
    let turno = document.getElementById('turno')
    document.getElementById("resetEnergia").addEventListener("click", () => {
        energia.value = 3;
        turno.value = 1;
        historico.textContent = "Turno: 1| 3; "
    })

    document.getElementById("energiaMenosUno").addEventListener("click", () => {
        energia.value > 0 ? energia.value-- : ""
        let span = crearElemento("span", "textContent", energia.value + "; ")
        historico.appendChild(span)
    })
    document.getElementById("energiaMasUno").addEventListener("click", () => {
        energia.value < 10 ? energia.value++ : ""
        let span = crearElemento("span", "textContent", energia.value + "; ")
        historico.appendChild(span)
    })
    document.getElementById('sumarTurno').addEventListener('click', () => {
        energia.value < 9 ? energia.value = Number(energia.value) + 2 : energia.value = 10;
        turno.value++
        let salto = crearElemento("br")
        historico.appendChild(salto)
        let span = crearElemento("span", "textContent", `Turno:  ${turno.value}| ${energia.value}; `)
        historico.appendChild(span)
    })

}

function cogerValorChecked() {
    skillaxie = Number(this.value)
    generarEventoTabla()

}

function generarEventoTabla() {
    let evt = new Event('keyup')
    document.getElementById("base1").dispatchEvent(evt)
    document.getElementById("base2").dispatchEvent(evt)
    document.getElementById("base3").dispatchEvent(evt)
    document.getElementById("base4").dispatchEvent(evt)
}

function crearTablaInicial() {
    let article = crearElemento("ARTICLE", "class", "cotainer-flex")
    // article.addEventListener("submit", (e) => e.preventDefault)

    let tabla = crearElemento("TABLE")
    let fila = crearElemento("TR")
    fila.appendChild(crearElemento("TH"))
    fila.appendChild(crearElemento("TH", "textContent", "Carta y axie diferente", "colspan", 3, ))
    fila.appendChild(crearElemento("TH", "textContent", "Carta y axie igual", "colspan", 3, ))
    tabla.appendChild(fila)
    fila = crearElemento("TR")
    fila.appendChild(crearElemento("TH"))
    fila.appendChild(crearElemento("TH", "textContent", "Debil"))
    fila.appendChild(crearElemento("TH", "textContent", "Normal"))
    fila.appendChild(crearElemento("TH", "textContent", "Fuerte"))
    fila.appendChild(crearElemento("TH", "textContent", "Debil "))
    fila.appendChild(crearElemento("TH", "textContent", "Normal"))
    fila.appendChild(crearElemento("TH", "textContent", "Fuerte"))
    for (let i = 0; i < arrayValoresBotones.length + 4; i++)
        fila.appendChild(crearElemento("TH"))
    let boton = crearElemento("BUTTON", "textContent", "Res.Tabla", "id", "resetTabla")
    let campo = crearElemento("TH", "rowspan", "5")
    campo.appendChild(boton)
    fila.appendChild(campo)
    tabla.appendChild(fila)
    tabla.appendChild(crearFila("1"))
    tabla.appendChild(crearFila("2"))
    tabla.appendChild(crearFila("3"))
    tabla.appendChild(crearFila("4"))
    tabla.appendChild(crearFila("Total"))
    article.appendChild(tabla)
    document.getElementById("contenedorTabla").appendChild(article)
    for (let i = 1; i < 5; i++) {
        document.getElementById("base" + i).addEventListener("keyup", calcularFilas)
        document.getElementById("checkboxPotenciado" + i).addEventListener("change", calcularFilas)
        document.getElementById("checkboxPotenciado2" + i).addEventListener("change", calcularFilas)
        document.getElementById("checkboxCritico" + i).addEventListener("change", calcularFilas)
        document.getElementById("reset" + i).addEventListener('click', resetFila)
        for (let j = 0; j < arrayValoresBotones.length; j++) {
            document.getElementById(j + "" + i).addEventListener('click', cambiarValor)
        }

    }
    document.getElementById("baseTotal").parentNode.textContent = ""
    document.getElementById("checkboxPotenciadoTotal").parentNode.textContent = ""
    document.getElementById("checkboxPotenciado2Total").parentNode.textContent = ""

    document.getElementById("checkboxCriticoTotal").parentNode.textContent = ""


    document.getElementById("resetTotal").parentNode.textContent = ""
    for (i = 0; i < arrayValoresBotones.length; i++) {
        document.getElementById(i + "Total").parentNode.textContent = ""
    }
    document.getElementById("resetTabla").addEventListener('click', resetTabla)

}

function crearElemento(elemento, ...atributo) {
    let elementoCreado = document.createElement(elemento)
    if (!(atributo.length % 0)) {
        for (let i = 0; i < atributo.length; i += 2) {
            if (atributo[i] == "textContent") {
                elementoCreado.textContent = atributo[i + 1]
            } else
                elementoCreado.setAttribute(atributo[i], atributo[i + 1])
        }
    } else
        console.log("ERROR en el numero de introduccion de argumentos");
    return elementoCreado
}

function crearFila(numerofila) {
    let fila = crearElemento("TR"),
        campo, contenidocolumna, label
    let nombreEId = "base" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "class", "estrecho")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "debil" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "disabled", "disabled", "class", "estrecho")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "normal" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "disabled", "disabled", "class", "estrecho")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "fuerte" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "disabled", "disabled", "class", "estrecho")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "debTipo" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "disabled", "disabled", "class", "estrecho")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "normTipo" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "disabled", "disabled", "class", "estrecho")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "fueTipo" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "disabled", "disabled", "class", "estrecho")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "checkboxCritico" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "checkbox", "name", nombreEId, "id", nombreEId)
    label = crearElemento("LABEL", "textContent", "Crit", "for", nombreEId)
    campo.appendChild(contenidocolumna)
    campo.appendChild(label)
    fila.appendChild(campo)
    nombreEId = "checkboxPotenciado" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "checkbox", "name", nombreEId, "id", nombreEId)
    label = crearElemento("LABEL", "textContent", "+20%", "for", nombreEId)
    campo.appendChild(contenidocolumna)
    campo.appendChild(label)
    fila.appendChild(campo)
    nombreEId = "checkboxPotenciado2" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "checkbox", "name", nombreEId, "id", nombreEId)
    label = crearElemento("LABEL", "textContent", "+20%", "for", nombreEId)
    campo.appendChild(contenidocolumna)
    campo.appendChild(label)
    fila.appendChild(campo)
    nombreEId = "reset" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("button", "type", "button", "name", nombreEId, "id", nombreEId, "textContent", "Res", "class", "noPadding")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    for (let i = 0; i < arrayValoresBotones.length; i++) {
        nombreEId = i + numerofila
        campo = crearElemento('TD')
        contenidocolumna = crearElemento("button", "type", "button", "name", nombreEId, "id", nombreEId, "textContent", arrayValoresBotones[i], "class", "noPadding")
        campo.appendChild(contenidocolumna)
        fila.appendChild(campo)
    }

    return fila
}

function calcularFilas() {
    let numeroDeFila = this.id.slice(this.id.length - 1)
    let posicion,
        checkboxPotenciado, valorCeldaNormal, checkboxCritico
    posicion = document.getElementById(`base${numeroDeFila}`)
    valorCeldaNormal = posicion.value
    checkboxCritico = document.getElementById(`checkboxCritico${numeroDeFila}`).checked
    checkboxPotenciado = document.getElementById(`checkboxPotenciado${numeroDeFila}`).checked
    checkboxPotenciado2 = document.getElementById(`checkboxPotenciado2${numeroDeFila}`).checked
    let normal = valorCeldaNormal,
        debil = valorCeldaNormal * 0.85,
        fuerte = valorCeldaNormal * 1.15,
        normTipo = normal * 1.1,
        debTipo = debil * 1.1,
        fueTipo = fuerte * 1.1,
        arrayvalores = [normal, debil, fuerte, normTipo, debTipo, fueTipo]

    if (checkboxPotenciado) {
        arrayvalores.forEach((dato, indice, arr) => arr[indice] = dato * 1.2)
    }
    if (checkboxPotenciado2) {
        arrayvalores.forEach((dato, indice, arr) => arr[indice] = dato * 1.2)
    }
    if (checkboxCritico) {
        arrayvalores.forEach((dato, indice, arr) => arr[indice] = dato * 2)
    }
    arrayvalores.forEach((dato, indice, arr) => arr[indice] = Math.trunc(Number(dato) + valorCeldaNormal * skillaxie / 500))
    let arrayTabla = ["normal", "debil", "fuerte", "normTipo", "debTipo", "fueTipo"]
    for (let i = 0; i < arrayTabla.length; i++) {
        document.getElementById(arrayTabla[i] + numeroDeFila).value = arrayvalores[i]
    }
    calcularTotales()
}

function calcularTotales() {
    let sumaTotal
    let arrayTabla = ["normal", "debil", "fuerte", "normTipo", "debTipo", "fueTipo"]
    for (let j = 0; j < arrayTabla.length; j++) {
        sumaTotal = 0
        for (let i = 1; i < 5; i++) {
            sumaTotal += Number(document.getElementById(arrayTabla[j] + i).value)
        }
        document.getElementById(arrayTabla[j] + "Total").value = sumaTotal
    }

}

function resetFila() {
    let numeroDeFila = this.id.slice(5)
    document.getElementById(`base${numeroDeFila}`).value = 0
    let checkboxCritico = document.getElementById(`checkboxCritico${numeroDeFila}`),
        checkboxPotenciado = document.getElementById(`checkboxPotenciado${numeroDeFila}`),
        checkboxPotenciado2 = document.getElementById(`checkboxPotenciado2${numeroDeFila}`)
    if (checkboxCritico.checked) {
        checkboxCritico.checked = false
    }
    checkboxPotenciado.checked ? checkboxPotenciado.checked = false : ""
    checkboxPotenciado2.checked ? checkboxPotenciado2.checked = false : ""
    generarEventoTabla()
}

function cambiarValor() {
    let numeroDeFila = this.id.slice(this.id.length - 1)
    document.getElementById(`base${numeroDeFila}`).value = Number(this.textContent)
    generarEventoTabla()
}

function resetTabla() {
    let evt = new Event('click')
    document.getElementById("reset1").dispatchEvent(evt)
    document.getElementById("reset2").dispatchEvent(evt)
    document.getElementById("reset3").dispatchEvent(evt)
    document.getElementById("reset4").dispatchEvent(evt)
}

function crearHistorico() {
    let article = crearElemento("ARTICLE", "class", "container-energia")
    let h2 = crearElemento("H2", "textContent", "Historico")
    article.appendChild(h2)
    let p = crearElemento("P", "id", "historico", "textContent", "Turno: 1| 3;")
    article.appendChild(p)
    document.getElementById("contenedorFlex").appendChild(article)

}

function crearImg() {
    let article = crearElemento("ARTICLE", "class", "container-energia")
    let img = crearElemento("IMG", "src", "img/clases-axies-axie-infinity.png", "alt", "Triangulo de fuerza axie")
    article.appendChild(img)
    document.getElementById("contenedorFlex").appendChild(article)


}