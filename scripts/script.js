let arrayValoresBotones,
    skillaxie = 31,
    historico, desplegable, desplegableBoton, tamanodesplegable, bonosDano

window.addEventListener("load", loadGeneral)

function loadGeneral() {
    if (localStorage.botonesDano != undefined) {
        arrayValoresBotones = JSON.parse(localStorage.botonesDano)
    } else {
        arrayValoresBotones = [
            70,
            75,
            100,
            105,
            110,
            115
        ]
    }
    if (localStorage.bonosDano != undefined) {
        bonosDano = JSON.parse(localStorage.bonosDano)
    } else {
        bonosDano = {
            debuff: false,
            debuff2: false,
            critico: true,
            potenciado: true,
            potenciado2: false
        }
    }
    crearTablaInicial()
    //   toggleBonosDano()
    funcionesTabla()
    let botonTipo = document.getElementsByName("tipoAtaca")
    for (let i = 0; i < botonTipo.length; i++) {
        botonTipo[i].addEventListener("change", cogerValorChecked)
    }
    crearImg()
    crearGestorEnergia()
    crearOpcionesGestor()
    funcionesGestorEnergia()
    crearHistorico()
    historico = document.getElementById("historico")
    crearExplicacion()

    desplegable = document.getElementById("contenedorExplicacion")
    desplegableBoton = document.getElementById("mostrarComoFunciona")

    tamanodesplegable = cogerAltura(desplegable) + 'px'
    window.addEventListener('resize', actualizarResize)
    desplegableBoton.addEventListener('click', desplegarFunciona)
    document.getElementById("copiar").addEventListener("click", copiarDireccionMetamask)
}

// function toggleBonosDano() {
//     for (valor in bonosDano) {
//         if (bonosDano[valor]) {
//             document.getElementById(valor).checked = true
//         } else {
//             document.getElementById(valor).checked = false
//         }
//     }
// }

function desplegarFunciona() {
    if (window.getComputedStyle(desplegable).height == "0px") {
        desplegable.style.maxHeight = tamanodesplegable
        setTimeout(() => tamanodesplegable = window.getComputedStyle(desplegable).height, 800)
    } else {
        desplegable.style.maxHeight = "0px"

    }
    desplegableBoton.disabled = true
    setTimeout(() => desplegableBoton.disabled = false, 800)

}

function actualizarResize() {
    tamanodesplegable = cogerAltura(desplegable) + 'px'
    if (window.getComputedStyle(desplegable).height != "0px")
        desplegable.style.maxHeight = tamanodesplegable
}

function copiarDireccionMetamask() {
    let direccionMetamask = crearElemento("INPUT", "value", "0x250C0E02bC797a044dC40FFe5c7deA15bC1a4035")
    document.body.appendChild(direccionMetamask)
    direccionMetamask.select()
    document.execCommand("copy");
    document.body.removeChild(direccionMetamask)
}

function funcionesGestorEnergia() {
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

function funcionesTabla() {

    anadirFuncionBotonera()
    document.getElementById("mostrarOpcionesTabla").addEventListener("click", mostrarOpcionesTabla)
    document.getElementById("borrarNumero").addEventListener("click", borrarNumero)
    document.getElementById("anadirNumero").addEventListener("click", anadirNumero)
    for (i = 1; i < 5; i++) {
        document.getElementById("base" + i).addEventListener("keyup", calcularFilas)
        document.getElementById("checkboxDebuff" + i).addEventListener("change", calcularFilas)
        document.getElementById("checkboxDebuff2" + i).addEventListener("change", calcularFilas)
        document.getElementById("checkboxPotenciado" + i).addEventListener("change", calcularFilas)
        document.getElementById("checkboxPotenciado2" + i).addEventListener("change", calcularFilas)
        document.getElementById("checkboxCritico" + i).addEventListener("change", calcularFilas)
        document.getElementById("reset" + i).addEventListener('click', resetFila)

    }
    document.getElementById("checkboxDebuffTotal").parentNode.textContent = ""
    document.getElementById("checkboxDebuff2Total").parentNode.textContent = ""
    document.getElementById("baseTotal").parentNode.textContent = ""
    document.getElementById("checkboxPotenciadoTotal").parentNode.textContent = ""
    document.getElementById("checkboxPotenciado2Total").parentNode.textContent = ""

    document.getElementById("checkboxCriticoTotal").parentNode.textContent = ""


    document.getElementById("resetTotal").parentNode.textContent = ""
    for (i = 0; i < arrayValoresBotones.length; i++) {
        document.getElementById(i + "Total").parentNode.textContent = ""
    }

    for (valor in bonosDano) {
        let aux = document.getElementById(valor),
            clase = document.getElementsByClassName(valor)
        if (bonosDano[valor]) {
            aux.checked = true
        } else {
            aux.checked = false
            for (let i = 0; i < clase.length; i++)
                clase[i].classList.add("display-none")
        }
        aux.addEventListener("change", toggleCheckbox)

    }
}

function toggleCheckbox() {
    let idcambiar = this.id,
        clase = document.getElementsByClassName(idcambiar)
    for (let i = 0; i < clase.length; i++)
        clase[i].classList.toggle("display-none")
    if (bonosDano[idcambiar]) {
        bonosDano[idcambiar] = false
    } else {
        bonosDano[idcambiar] = true

    }
    localStorage.bonosDano = JSON.stringify(bonosDano)
}

function anadirFuncionBotonera() {
    for (i = 1; i < 5; i++) {
        for (let j = 0; j < arrayValoresBotones.length; j++) {
            document.getElementById(j + "" + i).addEventListener('click', cambiarValor)
        }
    }
    document.getElementById("resetTabla").addEventListener('click', resetTabla)


}

function mostrarOpcionesTabla() {
    document.getElementById("cambiarBotones").classList.toggle("display-none")
    if (this.textContent == "Mostrar Opciones de la Tabla")
        this.textContent = "Ocultar Opciones de la Tabla"
    else
        this.textContent = "Mostrar Opciones de la Tabla"
}

function contenidoTablaBotonera() {
    let tablaBotonera = document.getElementById("tablaBotonera"),
        fila, fragmento = document.createDocumentFragment()

    if (tablaBotonera)
        tablaBotonera.textContent = ""

    fila = crearElemento("TR")
    fila.appendChild(crearElemento("TH", "textContent", "a", "class", "oculto"))
    fragmento.appendChild(fila)
    fila = crearElemento("TR")
    for (let i = 0; i < arrayValoresBotones.length; i++)
        fila.appendChild(crearElemento("TH", "textContent", "a", "class", "oculto"))
    let boton = crearElemento("BUTTON", "textContent", "Res.Tabla", "id", "resetTabla")
    let campo = crearElemento("TH", "rowspan", "6", "class", "ancho-auto")
    campo.appendChild(boton)
    fila.appendChild(campo)
    fragmento.appendChild(fila)
    fragmento.appendChild(crearFilaBotones("1"))
    fragmento.appendChild(crearFilaBotones("2"))
    fragmento.appendChild(crearFilaBotones("3"))
    fragmento.appendChild(crearFilaBotones("4"))
    if (tablaBotonera)
        fragmento.appendChild(crearElemento("TH", "textContent", "a", "class", "oculto"))
    else
        fragmento.appendChild(crearFilaBotones("Total"))
    if (tablaBotonera) {
        tablaBotonera.appendChild(fragmento)
        anadirFuncionBotonera()
    } else
        return fragmento

}

function borrarNumero() {
    let valorSeleccionado = document.getElementById("botonesDano").value
    arrayValoresBotones.splice(valorSeleccionado, 1)
    crearOpcionesGestor()
    contenidoTablaBotonera()
    localStorage.botonesDano = JSON.stringify(arrayValoresBotones)
}

function anadirNumero() {
    let valorSeleccionado = document.getElementById("numeroAnadir"),
        banderaNumeros = false
    if (valorSeleccionado.value == "") {
        banderaNumeros = true
    }

    for (let i = 0; i < arrayValoresBotones.length && banderaNumeros == false; i++) {
        if (valorSeleccionado.value == arrayValoresBotones[i]) {
            banderaNumeros = true
        }
    }
    if (!banderaNumeros) {
        arrayValoresBotones.push(valorSeleccionado.value)
        arrayValoresBotones.sort((a, b) => a - b)
        crearOpcionesGestor()
        contenidoTablaBotonera()
        localStorage.botonesDano = JSON.stringify(arrayValoresBotones)
        valorSeleccionado.value = ""
    }
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

function crearOpcionesGestor() {
    let contenedorOpciones, opciones, botonesDano = document.getElementById("botonesDano")
    if (botonesDano)
        botonesDano.textContent = ""
    contenedorOpciones = document.createDocumentFragment()
    for (let i = 0; i < arrayValoresBotones.length; i++) {
        opciones = crearElemento("OPTION", "value", i, "textContent", arrayValoresBotones[i])
        contenedorOpciones.appendChild(opciones)
    }
    botonesDano.appendChild(contenedorOpciones)

}

function calcularFilas() {
    let numeroDeFila = this.id.slice(this.id.length - 1)
    let posicion,
        checkboxPotenciado, valorCeldaNormal, checkboxCritico, checkboxPotenciado2, checkboxDebuff, checkboxDebuff2
    posicion = document.getElementById(`base${numeroDeFila}`)
    valorCeldaNormal = posicion.value
    checkboxDebuff = document.getElementById(`checkboxDebuff${numeroDeFila}`).checked
    checkboxDebuff2 = document.getElementById(`checkboxDebuff2${numeroDeFila}`).checked
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
    if (checkboxDebuff) {
        arrayvalores.forEach((dato, indice, arr) => arr[indice] = dato * 0.8)
    }
    if (checkboxDebuff2) {
        arrayvalores.forEach((dato, indice, arr) => arr[indice] = dato * 0.8)
    }
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

function cogerAltura(elemento) {
    let estiloBase = window.getComputedStyle(elemento),
        elementoDisplay = estiloBase.display,
        elementoVisibilidad = estiloBase.visibility,
        elementoAlturaMax = estiloBase.maxHeight,
        alturaElemento = 0

    elemento.style.transition = '0s'
    elemento.style.visibility = 'hidden'
    elemento.style.display = 'block'
    elemento.style.maxHeight = '10000px'


    alturaElemento = elemento.offsetHeight
    elemento.style.maxHeight = elementoAlturaMax
    setTimeout(() => elemento.style.transition = '.8s', 200)
    elemento.style.display = elementoDisplay
    elemento.style.visibility = elementoVisibilidad
    return alturaElemento
}

function crearFilaBotones(numerofila) {
    let fila = crearElemento("TR"),
        campo, contenidocolumna, nombreEId
    for (let i = 0; i < arrayValoresBotones.length; i++) {
        nombreEId = i + numerofila
        campo = crearElemento('TD')
        contenidocolumna = crearElemento("button", "type", "button", "name", nombreEId, "id", nombreEId, "textContent", arrayValoresBotones[i], "class", "noPadding")
        campo.appendChild(contenidocolumna)
        fila.appendChild(campo)
    }
    return fila
}