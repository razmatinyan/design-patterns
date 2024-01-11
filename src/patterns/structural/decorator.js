/**
 * Decorator
 */
class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;        
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

function aws(server) {
    server.isAWS = true;
    server.awsInfo = function() {
        return server.url;
    }
    return server;
}

function azure(server) {
    server.isAzure = true;
    server.port += 500;
    return server;
}

const s1 = aws(new Server('98.12.156.879', 8080));
const s2 = azure(new Server('165.54.898.321', 5000));
console.log(s1.isAWS);
console.log(s1.awsInfo());

console.log(s2.isAzure);
console.log(s2.url);