module.exports = {
    tratmentCreateUser: {
        title: 'Tratamento de criação',
        message: 'Tratamento de criação é requerido!'
    },

    tratmentUpdateUser: {
        title: 'Tratamento de update',
        message: 'Tratamento de criação é requerido!'
    },

    dataProcessing: {
        title: 'Error no processamento',
        message: 'Error em processar os dados!'
    },

    route404: {
        title: '404',
        message: 'Route not found'
    },

    logServer: (port) => {
        return `Server start in host: http://localhost:${port}`
    }

}
