const http = require('http');
const figlet = require("figlet");
const port = process.env.PORT || 3000;

const handler = (req, res) => {
    console.log('Petición recibida por el servidor.');
    figlet('Hola con Node.JS en VSCode!!!', (err, data) => {
      if (err) {
            console.log('Algo salió mal... ');
            console.dir(err);
            return;
    }
    res.end(data);
    });
};

const server = http.createServer(handler);

server.listen(port, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Servidor escuchando en el puerto: ${port}`);
    }
});