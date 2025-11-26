// === USUARIOS ===
const usuarios = [
    {
        id: 1,
        nombre: "Juan",
        apellidos: "Pérez López",
        email: "juan@email.com",
        contrasenia: "123456",
        f_registro: "2025-01-10",
        url_avatar: "https://example.com/avatar1.png",
        rol: "estudiante"
    },
    {
        id: 2,
        nombre: "Ana",
        apellidos: "García Ruiz",
        email: "ana@email.com",
        contrasenia: "abcdef",
        f_registro: "2025-01-15",
        url_avatar: "https://example.com/avatar2.png",
        rol: "profesor"
    },
    {
        id: 3,
        nombre: "Luis",
        apellidos: "Ramírez Torres",
        email: "luis@email.com",
        contrasenia: "luis123",
        f_registro: "2025-01-12",
        url_avatar: "https://example.com/avatar3.png",
        rol: "estudiante"
    },
    {
        id: 4,
        nombre: "María",
        apellidos: "Santos Huerta",
        email: "maria@email.com",
        contrasenia: "msantos",
        f_registro: "2025-01-14",
        url_avatar: "https://example.com/avatar4.png",
        rol: "estudiante"
    },
    {
        id: 5,
        nombre: "Carlos",
        apellidos: "Mendoza Silva",
        email: "carlos@email.com",
        contrasenia: "cmendoza",
        f_registro: "2025-01-17",
        url_avatar: "https://example.com/avatar5.png",
        rol: "profesor"
    }
];
// === MODULOS ===
const modulos = [
    {
        id: 1,
        codigo: "JS101",
        nombre: "Programación en JavaScript",
        descripcion: "Curso inicial de JavaScript",
        ciclo: "2025-I"
    },
    {
        id: 2,
        codigo: "DB202",
        nombre: "Bases de Datos",
        descripcion: "Modelado y SQL",
        ciclo: "2025-I"
    },
    {
        id: 3,
        codigo: "WEB301",
        nombre: "Desarrollo Web",
        descripcion: "Front-end y back-end",
        ciclo: "2025-II"
    },
    {
        id: 4,
        codigo: "IA405",
        nombre: "Inteligencia Artificial",
        descripcion: "Redes neuronales y aprendizaje automático",
        ciclo: "2025-II"
    },
    {
        id: 5,
        codigo: "PM110",
        nombre: "Gestión de Proyectos",
        descripcion: "Metodologías ágiles y planificación",
        ciclo: "2025-II"
    }
];

// === TAREAS ===
const tareas = [
    {
        id: 1,
        nombre: "Proyecto 1",
        descripcion: "Crear CRUD completo",
        fecha_inicio: "2025-01-20",
        fecha_entrega: "2025-02-10",
        estado: "pendiente",
        nota: null
    },
    {
        id: 2,
        nombre: "Examen 1",
        descripcion: "Evaluación escrita",
        fecha_inicio: "2025-02-01",
        fecha_entrega: "2025-02-05",
        estado: "terminado",
        nota: 17
    },
    {
        id: 3,
        nombre: "Landing page",
        descripcion: "Crear una página web responsive",
        fecha_inicio: "2025-02-15",
        fecha_entrega: "2025-03-01",
        estado: "trabajando",
        nota: null
    },
    {
        id: 4,
        nombre: "Dataset IA",
        descripcion: "Entrenar modelo con dataset propio",
        fecha_inicio: "2025-03-02",
        fecha_entrega: "2025-03-20",
        estado: "pendiente",
        nota: null
    },
    {
        id: 5,
        nombre: "Kanban",
        descripcion: "Elaborar tablero de planificación",
        fecha_inicio: "2025-02-05",
        fecha_entrega: "2025-02-12",
        estado: "evaluado",
        nota: 19
    }
];

// === USUARIOS_MODULOS (RELACIÓN) ===
const usuarios_modulos = [
    {
        usuario_email: "juan@email.com",
        modulos: [
            {
                id: 1,
                codigo: "JS101",
                nombre: "Programación en JavaScript",
                descripcion: "Curso inicial de JavaScript",
                ciclo: "2025-I",
                tareas: [tareas[0]] // Proyecto 1
            }
        ]
    },
    {
        usuario_email: "ana@email.com",
        modulos: [
            {
                id: 2,
                codigo: "DB202",
                nombre: "Bases de Datos",
                descripcion: "Modelado y SQL",
                ciclo: "2025-I",
                tareas: [tareas[1]] // Examen 1
            }
        ]
    },
    {
        usuario_email: "maria@email.com",
        modulos: [
            {
                id: 3,
                codigo: "WEB301",
                nombre: "Desarrollo Web",
                descripcion: "Front-end y back-end",
                ciclo: "2025-II",
                tareas: [tareas[2]] // Landing Page
            }
        ]
    },
    {
        usuario_email: "luis@email.com",
        modulos: [
            {
                id: 4,
                codigo: "IA405",
                nombre: "Inteligencia Artificial",
                descripcion: "Redes neuronales y aprendizaje automático",
                ciclo: "2025-II",
                tareas: [tareas[3]] // Dataset IA
            }
        ]
    },
    {
        usuario_email: "carlos@email.com",
        modulos: [
            {
                id: 5,
                codigo: "PM110",
                nombre: "Gestión de Proyectos",
                descripcion: "Metodologías ágiles y planificación",
                ciclo: "2025-II",
                tareas: [tareas[4]] // Kanban
            }
        ]
    }
];

function crearUsuario() {
    usuarios.push([
       
    ]

    )
}

function leerUsuariosTodos() {

}

function leerUarioEmail() {

}

function borrarUsuarioEmail() {

}

function editarUsuarioEmail() {

}