const app = require('../src/app');
const debug = require('debug')('balta:server');
const http = require('http');

const porta = normalizarPorta(process.env.PORT || '3000');
const server = http.createServer(app);

server.listen(porta); 
server.on('error', onError);
server.on('listening', onListening);
console.log("Servidor rodando na porta " + porta);


function normalizarPorta(val){
    const porta = parseInt(val, 10);

    if(isNaN(porta)){
        return val;
    }
    if (porta >= 0){
        return porta;
    }

    return false;
}


function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof porta == 'string' ? 
        'Pipe ' + porta:
        'Porta' + porta;

    switch (error.code){
        case 'EACCES':
            console.error(bind + 'Requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRISUNE':
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


function onListening(){
    const addr =  server.address();
    const bind =  typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.porta;

    debug('Listening on ' + bind);

}