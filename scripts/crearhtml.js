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
    let contenedorIframe = crearElemento("DIV", "class", "contenedorIframe")
    let iframe = crearElemento("IFRAME", "class", "tamanoIframe", "src", "https://www.youtube.com/embed/1hNE5Rx9T74", "tittle", "Video explicando cómo funciona", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "allowfullscreen", "loading", "lazy")
    contenedorIframe.appendChild(iframe)
    contenedor.appendChild(contenedorIframe)
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
    texto2.textContent = "A continuación tenemos opciones como -20%, Crit y +20% que son para los bonos, hay cartas que sabemos que van a hacer crítico o que van a tener estos bonos ya sea por buff o por que lo pone en la descripción, en las opciones de abajo podemos cambiar que campos se muestran aqui."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "-20%: Penalizaciones en el ataque."
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
    parrafo = crearElemento("P", "textContent", "Mostrar Opciones de la Tabla:Muestra campos para añadir y ocultar a la tabla.", "class", "interlineado-grande")
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
    texto2.textContent = "En los Checbox que tenemos aqui tambien podemos cambiar los botones de -20%,crit y +20% y solo mostrar los que nos interesan."
    parrafo.appendChild(salto)
    parrafo.appendChild(texto2)
    salto = crearElemento("br")
    texto2.textContent = "El último campo de este listado permite mostrar un nuevo campo para poder calcular los daños de un axie que tenga cartas de diferentes tipos. Hay dos tipos de selección pulsando encima del título de la tabla y los selecciona toda la columna o pinchando sobre el campo que nos interese que calcule"
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
    campo = crearElemento("INPUT", "type", "number", "value", "1", "id", "turno", "class", "energia", "disabled", "disabled")
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
    fila.appendChild(crearElemento("TH", "textContent", "Débil", "id", "debil"))
    fila.appendChild(crearElemento("TH", "textContent", "Normal", "id", "normal"))
    fila.appendChild(crearElemento("TH", "textContent", "Fuerte", "id", "fuerte"))
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
    fila.appendChild(crearElemento("TH", "textContent", "Débil", "id", "debTipo"))
    fila.appendChild(crearElemento("TH", "textContent", "Normal", "id", "normTipo"))
    fila.appendChild(crearElemento("TH", "textContent", "Fuerte", "id", "fueTipo"))
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



    let boton = crearElemento("BUTTON", "type", "button", "textContent", "Mostrar Opciones de la Tabla", "id", "mostrarOpcionesTabla")
    document.getElementById("mostrarGestorBotones").appendChild(boton)

    contenedor = crearElemento("DIV", "id", "cambiarBotones", "class", "display-none flex")
    let contenedor2 = crearElemento("DIV")
    let select = crearElemento("SELECT", "id", "botonesDano", "class", "numeroBorrar")
    contenedor2.appendChild(select)
    boton = crearElemento("BUTTON", "type", "button", "textContent", "Borrar Número", "id", "borrarNumero", "class", "noPadding")
    contenedor2.appendChild(boton)
    let salto = crearElemento("BR")
    contenedor2.appendChild(salto)
    let campoTexto = crearElemento("INPUT", "type", "number", "id", "numeroAnadir", "class", "numeroAnadir")
    contenedor2.appendChild(campoTexto)
    boton = crearElemento("BUTTON", "type", "button", "textContent", "Añadir Número", "id", "anadirNumero", "class", "noPadding")
    contenedor2.appendChild(boton)
    contenedor.appendChild(contenedor2)
    contenedor2 = crearElemento("DIV", "class", "centrar-alto")
    let checkbox = crearElemento("INPUT", "type", "checkbox", "id", "debuff")
    let label = crearElemento("LABEL", "for", "debuff", "textContent", "-20%")
    contenedor2.appendChild(checkbox)
    contenedor2.appendChild(label)
    checkbox = crearElemento("INPUT", "type", "checkbox", "id", "debuff2")
    label = crearElemento("LABEL", "for", "debuff2", "textContent", "-20%")
    contenedor2.appendChild(checkbox)
    contenedor2.appendChild(label)
    checkbox = crearElemento("INPUT", "type", "checkbox", "id", "critico")
    label = crearElemento("LABEL", "for", "critico", "textContent", "Crit")
    contenedor2.appendChild(checkbox)
    contenedor2.appendChild(label)
    checkbox = crearElemento("INPUT", "type", "checkbox", "id", "potenciado")
    label = crearElemento("LABEL", "for", "potenciado", "textContent", "+20%")
    contenedor2.appendChild(checkbox)
    contenedor2.appendChild(label)
    checkbox = crearElemento("INPUT", "type", "checkbox", "id", "potenciado2")
    label = crearElemento("LABEL", "for", "potenciado2", "textContent", "+20%")
    contenedor2.appendChild(checkbox)
    contenedor2.appendChild(label)
    contenedor2.appendChild(label)
    checkbox = crearElemento("INPUT", "type", "checkbox", "id", "totalSeleccionado")
    label = crearElemento("LABEL", "for", "totalSeleccionado", "textContent", "Total Seleccionado")
    contenedor2.appendChild(checkbox)
    contenedor2.appendChild(label)

    contenedor.appendChild(contenedor2)

    document.getElementById("mostrarGestorBotones").appendChild(contenedor)
}

function crearFilaDiferente(numerofila) {
    let fila = crearElemento("TR"),
        campo, contenidocolumna, label
    let nombreEId = "base" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0)
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "debil" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "readonly", "readonly", "class", "focus-disabled")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "normal" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "readonly", "readonly", "class", "focus-disabled")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "fuerte" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "readonly", "readonly", "class", "focus-disabled")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    return fila
}

function crearFilaIgual(numerofila) {
    let fila = crearElemento("TR"),
        campo, contenidocolumna
    let nombreEId = "debTipo" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "readonly", "readonly", "class", "focus-disabled")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "normTipo" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "readonly", "readonly", "class", "focus-disabled")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    nombreEId = "fueTipo" + numerofila
    campo = crearElemento("TD")
    contenidocolumna = crearElemento("INPUT", "type", "number", "name", nombreEId, "id", nombreEId, "value", 0, "readonly", "readonly", "class", "focus-disabled")
    campo.appendChild(contenidocolumna)
    fila.appendChild(campo)
    return fila
}

function crearFilaCheckBox(numerofila) {
    let fila = crearElemento("TR"),
        campo, contenidocolumna, label
    let nombreEId = "checkboxDebuff" + numerofila
    let tablaClass = "debuff"
    campo = crearElemento("TD", "class", tablaClass)
    contenidocolumna = crearElemento("INPUT", "type", "checkbox", "name", nombreEId, "id", nombreEId)
    label = crearElemento("LABEL", "textContent", "-20%", "for", nombreEId)
    campo.appendChild(contenidocolumna)
    campo.appendChild(label)
    fila.appendChild(campo)
    nombreEId = "checkboxDebuff2" + numerofila
    tablaClass = "debuff2"
    campo = crearElemento("TD", "class", tablaClass)
    contenidocolumna = crearElemento("INPUT", "type", "checkbox", "name", nombreEId, "id", nombreEId)
    label = crearElemento("LABEL", "textContent", "-20%", "for", nombreEId)
    campo.appendChild(contenidocolumna)
    campo.appendChild(label)
    fila.appendChild(campo)
    nombreEId = "checkboxCritico" + numerofila
    tablaClass = "critico"
    campo = crearElemento("TD", "class", tablaClass)
    contenidocolumna = crearElemento("INPUT", "type", "checkbox", "name", nombreEId, "id", nombreEId)
    label = crearElemento("LABEL", "textContent", "Crit", "for", nombreEId)
    campo.appendChild(contenidocolumna)
    campo.appendChild(label)
    fila.appendChild(campo)
    nombreEId = "checkboxPotenciado" + numerofila
    tablaClass = "potenciado"
    campo = crearElemento("TD", "class", tablaClass)
    contenidocolumna = crearElemento("INPUT", "type", "checkbox", "name", nombreEId, "id", nombreEId)
    label = crearElemento("LABEL", "textContent", "+20%", "for", nombreEId)
    campo.appendChild(contenidocolumna)
    campo.appendChild(label)
    fila.appendChild(campo)
    nombreEId = "checkboxPotenciado2" + numerofila
    tablaClass = "potenciado2"
    campo = crearElemento("TD", "class", tablaClass)
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