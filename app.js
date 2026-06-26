let peliculas = [
    {

    id: 1,
    titulo: "Wilbur Wants to Kill Himself",
    genero: "Drama",
    calificacion: 10

    },

    {

    id: 2,
    titulo: "Albuquerque",
    genero: "Romance",
    calificacion: 5

    },

    {

    id: 3,
    titulo: "Pocketful of Miracles",
    genero: "Drama",
    calificacion: 7

    },

    {

    id: 4,
    titulo: "Warsaw Bridge (Pont de Varsòvia)",
    genero: "Romance",
    calificacion: 2

    },
    {

    id: 5,
    titulo: "Du côté de la côte",
    genero: "Documentary",
    calificacion: 4

    },
    {

    id: 6,
    titulo: "Iraq in Fragments",
    genero: "Documentary",
    calificacion: 2

    },
    {

    id: 7,
    titulo: "Resident, The",
    genero: "Horror",
    calificacion: 6

    },
    {

    id: 8,
    titulo: "Must Love Dogs",
    genero: "Comedy",
    calificacion: 10

    },
    {

    id: 9,
    titulo: "Foreign Intrigue",
    genero: "Thriller",
    calificacion: 1

    },
    {

    id: 10,
    titulo: "The Strength of Water",
    genero: "Thriller",
    calificacion: 7

    },
    {

    id: 11,
    titulo: "Deadgirl",
    genero: "Horror",
    calificacion: 9

    },
    {

    id: 12,
    titulo: "Mistaken for Strangers",
    genero: "Thriller",
    calificacion: 2

    },
    {

    id: 13,
    titulo: "Ripley Under Ground",
    genero: "Thriller",
    calificacion: 1

    },
    {

    id: 14,
    titulo: "Love and Death on Long Island",
    genero: "Drama",
    calificacion: 1

    },
    {

    id: 15,
    titulo: "Myriad of Lights",
    genero: "Drama",
    calificacion: 10
    }


]

let mensaje =
    document.getElementById("mensaje")

let cuerpoTabla =
    document.getElementById("tablaPeliculas")

function mostrarMensaje(texto) {

    mensaje.innerHTML = texto
    mensaje.classList.remove("d-none")

}

function ocultarMensaje() {

    mensaje.classList.add("d-none")

}

function renderizarTabla(listado) {

    cuerpoTabla.innerHTML = ""

    if (listado.length == 0) {

        mostrarMensaje("No se encontraron películas")
        return

    }

    ocultarMensaje()

    listado.forEach(function (pelicula) {

        cuerpoTabla.innerHTML += `
            <tr>
                <td>${pelicula.id}</td>
                <td>${pelicula.titulo}</td>
                <td>${pelicula.genero}</td>
                <td>${pelicula.calificacion}</td>
            </tr>
        `

    })

}

function mostrarTodas() {

    document.getElementById("busquedaId").value = ""
    document.getElementById("busquedaNombre").value = ""
    renderizarTabla(peliculas)

}

function buscarPorId() {

    let valorId =
        document.getElementById("busquedaId").value

    if (valorId == "") {

        mostrarMensaje("Ingrese un ID")
        return

    }

    let resultado =
        peliculas.find(function (pelicula) {
            return pelicula.id == Number(valorId)
        })

    if (resultado == undefined) {

        mostrarMensaje("no se encontro ninguna película con este ID")
        cuerpoTabla.innerHTML = ""
        return

    }

    renderizarTabla([resultado])

}

function filtrarPorGenero() {

    let generoSeleccionado =
        document.getElementById("filtroGenero").value

    let resultado =
        peliculas.filter(function (pelicula) {
            return pelicula.genero == generoSeleccionado
        })

    renderizarTabla(resultado)

}

function filtrarCalificacion() {

    let resultado =
        peliculas.filter(function (pelicula) {
            return pelicula.calificacion >= 5
        })

    renderizarTabla(resultado)

}

function buscarPorNombre() {

    let textoBuscado =
        document.getElementById("busquedaNombre").value.toLowerCase()

    if (textoBuscado == "") {

        mostrarMensaje("Ingrese un nombre")
        return

    }

    let resultado =
        peliculas.filter(function (pelicula) {
            return pelicula.titulo.toLowerCase().includes(textoBuscado)
        })

    renderizarTabla(resultado)

}

function aplicarMap() {

    let resultado =
        peliculas.map(function (pelicula) {

            if (pelicula.calificacion == 1) {

                return {
                    ...pelicula,
                    calificacion: pelicula.calificacion + 4
                }

            }

            return pelicula

        })

    renderizarTabla(resultado)

}

mostrarTodas()
