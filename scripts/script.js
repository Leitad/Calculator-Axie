let arrayValoresBotones,
    skillaxie = 31,
    historico, desplegable, desplegableBoton, tamanodesplegable

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
    crearTablaInicial()
    let botonTipo = document.getElementsByName("tipoAtaca")
    for (let i = 0; i < botonTipo.length; i++) {
        botonTipo[i].addEventListener("change", cogerValorChecked)
    }
    crearImg()
    crearGestorEnergia()
    crearHistorico()
    historico = document.getElementById("historico")
    crearExplicacion()

    desplegable = document.getElementById("contenedorExplicacion")
    desplegableBoton = document.getElementById("mostrarComoFunciona")
    tamanodesplegable = cogerAltura(desplegable) + 'px'
    window.addEventListener('resize', () => {
        tamanodesplegable = cogerAltura(desplegable) + 'px'
        if (window.getComputedStyle(desplegable).height != "0px")
            desplegable.style.maxHeight = tamanodesplegable
    })
    desplegableBoton.addEventListener('click', () => {
        if (window.getComputedStyle(desplegable).height == "0px") {
            desplegable.style.maxHeight = tamanodesplegable
            setTimeout(() => tamanodesplegable = window.getComputedStyle(desplegable).height, 800)
        } else {
            desplegable.style.maxHeight = "0px"
        }
        desplegableBoton.disabled = true
        setTimeout(() => desplegableBoton.disabled = false, 800)
    })
}

function crearExplicacion() {
    let contenedor = crearElemento("DIV", "id", "contenedorExplicacion", "class", "desplegable interlineado")
    let boton = crearElemento("BUTTON", "type", "button", "id", "mostrarComoFunciona", "class", "margen-abajo")
    let h2 = crearElemento("H2", "textContent", "Cómo funciona?", "class", "margen-auto")
    boton.appendChild(h2)
    let h3 = crearElemento("H3", "textContent", "Calculadora Daño")
    let texto = "Lo primero es comprender cómo calcula axie el daño,"
    let enlace = crearElemento("A", "href", " https://www.youtube.com/watch?v=bv8JwQRZjfU", "textContent", " en este video de KManuS88", "target", "_blank")
    let texto2 = document.createDocumentFragment()
    texto2.textContent = " se puede ver perfectamente "
    let parrafo = crearElemento("P", "textContent", texto)
    parrafo.appendChild(enlace)
    parrafo.appendChild(texto2)
    // contenedor.appendChild(boton)
    contenedor.appendChild(h3)
    contenedor.appendChild(parrafo)
    parrafo = crearElemento("P", "textContent", "Partiendo de aquí tendremos que seleccionar cual es el axie que ataca para poder añadir el daño por combo basado en la skill(tipo de atacante).")
    contenedor.appendChild(parrafo)
    parrafo = crearElemento("P", "textContent", "Luego debemos aprender a leer la tabla:", "class", "interlineado-grande")
    let salto = crearElemento("br")
    texto2.textContent = "Carta: Ya sea por medio de la botonera o de forma manual es el valor de daño que pone en nuestra carta."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Ahora debemos elegir entre si las cartas son del mismo tipo que el axie o son diferentes, esto lo debemos hacer nosotros y dirigirnos a:"
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Carta y axie diferente: La carta que hemos lanzado y el axie son de tipo diferente."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Carta y axie igual: La carta que hemos lanzado y el axie son del mismo tipo."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Ahora para saber si es débil, normal o fuerte, debemos comparar la carta lanzada con el tipo del axie del rival, por si se tienen dudas hay una imagen abajo indicativa de que tipos son fuertes contra otros."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Débil: Hace un 85% de daño."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Normal: Hace el daño que pone en la carta."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Fuerte: Hace 115% de daño."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "A continuación tenemos opciones como Crit y +20% que son para los bonos, hay cartas que sabemos que van a hacer crítico o que van a tener estos bonos ya sea por buff o por que lo pone en la descripción, aquí faltaría añadir los -20% de el debufo o algunas otras especiales, pero tiempo al tiempo."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Crit: Dobla el daño antes de añadirle otros bonos."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "+20%: Bonos de ataque o específicos de la carta."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Botones:"
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Res: Borra los datos de la fila."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Números: Al pinchar añade ese valor en esa fila."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Res.Tabla: Borra los datos de toda la tabla."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    contenedor.appendChild(parrafo)
    parrafo = crearElemento("P", "textContent", "Mostrar Gestión de Números:Muestra campos para añadir y borrar los botones de la tabla.", "class", "interlineado-grande")
    salto = crearElemento("br")
    texto2.textContent = "Esto quedará guardado en vuestro navegador, así que si formateas,  borras cache, cambias de ordenador... y ese tipo de cosas esto será reiniciado y volverá a los valores iniciales."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "El desplegable contiene los números que hay actualmente, seleccionando aquí y pulsando el botón Borrar Número, nos eliminara el número seleccionado."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Si por el contrario queremos añadir otros valores debemos hacerlo introduciendo el valor en el siguiente campo y apretar en Añadir Número."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "Al acabar podemos darle al botón Ocultar Gestión de Números y que no ocupe tanto."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    contenedor.appendChild(parrafo)
    parrafo = crearElemento("P", "textContent", "Después tenemos una imagen con los tipos de axie y sus fortalezas y debilidades.")
    contenedor.appendChild(parrafo)
    h3 = crearElemento("H3", "textContent", "Visualizador de energia.")
    contenedor.appendChild(h3)
    parrafo = crearElemento("P", "textContent", "Por último tenemos nuestro visualizador de la energía del rival con un histórico, se muestran campos para la energía para el turno que podemos modificar con la botonera de abajo, cuando pulsamos el botón Reset lo ponemos todo como al iniciar una partida en pvp, los botones +1 y -1 gestionan la energía y cuando pulsamos en turno añadimos la energía por el nuevo turno y cambiamos el turno.")
    contenedor.appendChild(parrafo)
    parrafo = crearElemento("P", "textContent", "En el histórico se va mostrando cada paso que da.")
    contenedor.appendChild(parrafo)
    document.getElementById("comoFunciono").appendChild(boton)
    document.getElementById("comoFunciono").appendChild(contenedor)

}

function crearGestorEnergia() {
    let article = crearElemento("ARTICLE", "class", "container-energia")
    let h2 = crearElemento("H2", "textContent", "Energía del rival")
    article.appendChild(h2)
    let label = crearElemento("LABEL", "for", "energia", "textContent", "Energía: ")
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
    boton = crearElemento("BUTTON", "type", "button", "id", "sumarTurno", "textContent", "Turno")
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
    let article = crearElemento("ARTICLE", "class", "flex")
    // article.addEventListener("submit", (e) => e.preventDefault)
    let contenedor = crearElemento("DIV")
    let tabla = crearElemento("TABLE")
    let fila = crearElemento("TR")
    fila.appendChild(crearElemento("TH"))
    fila.appendChild(crearElemento("TH", "textContent", "Carta y axie diferente", "colspan", 3, ))
    tabla.appendChild(fila)
    fila = crearElemento("TR")
    fila.appendChild(crearElemento("TH", "textContent", "Carta"))
    fila.appendChild(crearElemento("TH", "textContent", "Débil"))
    fila.appendChild(crearElemento("TH", "textContent", "Normal"))
    fila.appendChild(crearElemento("TH", "textContent", "Fuerte"))
    tabla.appendChild(fila)
    tabla.appendChild(crearFilaDiferente("1"))
    tabla.appendChild(crearFilaDiferente("2"))
    tabla.appendChild(crearFilaDiferente("3"))
    tabla.appendChild(crearFilaDiferente("4"))
    tabla.appendChild(crearFilaDiferente("Total"))
    contenedor.appendChild(tabla)
    article.appendChild(contenedor)


    contenedor = crearElemento("DIV")
    tabla = crearElemento("TABLE")
    fila = crearElemento("TR")
    fila.appendChild(crearElemento("TH", "textContent", "Carta y axie igual", "colspan", 3, ))
    tabla.appendChild(fila)
    fila = crearElemento("TR")
    fila.appendChild(crearElemento("TH", "textContent", "Débil "))
    fila.appendChild(crearElemento("TH", "textContent", "Normal"))
    fila.appendChild(crearElemento("TH", "textContent", "Fuerte"))
    tabla.appendChild(fila)
    tabla.appendChild(crearFilaIgual("1"))
    tabla.appendChild(crearFilaIgual("2"))
    tabla.appendChild(crearFilaIgual("3"))
    tabla.appendChild(crearFilaIgual("4"))
    tabla.appendChild(crearFilaIgual("Total"))
    contenedor.appendChild(tabla)
    article.appendChild(contenedor)

    contenedor = crearElemento("DIV")
    tabla = crearElemento("TABLE")

    fila = crearElemento("TR")
    fila.appendChild(crearElemento("TH", "textContent", "a", "class", "oculto"))
    tabla.appendChild(fila)
    fila = crearElemento("TR")
    fila.appendChild(crearElemento("TH", "textContent", "a", "class", "oculto"))
    tabla.appendChild(fila)
    tabla.appendChild(crearFilaCheckBox("1"))
    tabla.appendChild(crearFilaCheckBox("2"))
    tabla.appendChild(crearFilaCheckBox("3"))
    tabla.appendChild(crearFilaCheckBox("4"))
    tabla.appendChild(crearFilaCheckBox("Total"))
    contenedor.appendChild(tabla)
    article.appendChild(contenedor)

    contenedor = crearElemento("DIV")
    tabla = crearElemento("TABLE", "id", "tablaBotonera")
    tabla.appendChild(contenidoTablaBotonera())
    contenedor.appendChild(tabla)
    article.appendChild(contenedor)
    document.getElementById("contenedorTabla").appendChild(article)

    let boton = crearElemento("BUTTON", "type", "button", "textContent", "Mostrar Gestión de Números", "id", "mostrarGestorNumeros")
    document.getElementById("mostrarGestorBotones").appendChild(boton)
    contenedor = crearGestorBotones()
    document.getElementById("mostrarGestorBotones").appendChild(contenedor)

    anadirFuncionBotonera()
    document.getElementById("mostrarGestorNumeros").addEventListener("click", mostrarGestorNumeros)
    document.getElementById("borrarNumero").addEventListener("click", borrarNumero)
    document.getElementById("anadirNumero").addEventListener("click", anadirNumero)
    for (i = 1; i < 5; i++) {
        document.getElementById("base" + i).addEventListener("keyup", calcularFilas)
        document.getElementById("checkboxPotenciado" + i).addEventListener("change", calcularFilas)
        document.getElementById("checkboxPotenciado2" + i).addEventListener("change", calcularFilas)
        document.getElementById("checkboxCritico" + i).addEventListener("change", calcularFilas)
        document.getElementById("reset" + i).addEventListener('click', resetFila)

    }
    document.getElementById("baseTotal").parentNode.textContent = ""
    document.getElementById("checkboxPotenciadoTotal").parentNode.textContent = ""
    document.getElementById("checkboxPotenciado2Total").parentNode.textContent = ""

    document.getElementById("checkboxCriticoTotal").parentNode.textContent = ""


    document.getElementById("resetTotal").parentNode.textContent = ""
    for (i = 0; i < arrayValoresBotones.length; i++) {
        document.getElementById(i + "Total").parentNode.textContent = ""
    }

}

function anadirFuncionBotonera() {
    for (i = 1; i < 5; i++) {
        for (let j = 0; j < arrayValoresBotones.length; j++) {
            document.getElementById(j + "" + i).addEventListener('click', cambiarValor)
        }
    }
    document.getElementById("resetTabla").addEventListener('click', resetTabla)


}

function mostrarGestorNumeros() {
    document.getElementById("cambiarBotones").classList.toggle("div-oculto")
    if (this.textContent == "Mostrar Gestión de Números")
        this.textContent = "Ocultar Gestión de Números"
    else
        this.textContent = "Mostrar Gestión de Números"
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

function crearGestorBotones() {
    let contenedor = crearElemento("DIV", "id", "cambiarBotones", "class", "div-oculto")
    let select = crearElemento("SELECT", "id", "botonesDano", "class", "margin")
    select.appendChild(crearOpcionesGestor())
    contenedor.appendChild(select)
    let boton = crearElemento("BUTTON", "type", "button", "textContent", "Borrar Número", "id", "borrarNumero", "class", "noPadding")
    contenedor.appendChild(boton)
    let salto = crearElemento("BR")
    contenedor.appendChild(salto)
    let campoTexto = crearElemento("INPUT", "type", "number", "id", "numeroAnadir", "class", "numeroAnadir")
    contenedor.appendChild(campoTexto)
    boton = crearElemento("BUTTON", "type", "button", "textContent", "Añadir Número", "id", "anadirNumero", "class", "noPadding")
    contenedor.appendChild(boton)
    return contenedor
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
    if (botonesDano)
        botonesDano.appendChild(contenedorOpciones)
    else
        return contenedorOpciones
}

function crearFilaDiferente(numerofila) {
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
    return fila
}

function crearFilaIgual(numerofila) {
    let fila = crearElemento("TR"),
        campo, contenidocolumna
    let nombreEId = "debTipo" + numerofila
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
    return fila
}

function crearFilaCheckBox(numerofila) {
    let fila = crearElemento("TR"),
        campo, contenidocolumna, label
    let nombreEId = "checkboxCritico" + numerofila
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
    return fila
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
    let h2 = crearElemento("H2", "textContent", "Histórico")
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