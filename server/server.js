import http from 'http';
import app from '../app';


const port = 8000;

const server = http.createServer(app);
server.listen(port, async () => {
    app.set('host', `http://localhost:${port}`);    

    console.log(`Find me on http://localhost:${port}`);
});
