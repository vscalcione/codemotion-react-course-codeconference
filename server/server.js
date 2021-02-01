const express = require('express')
const cors = require('cors')
const config = require('./config')
const events = require('./events')

const app = express()

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
    const help = `
  <pre>
    Guida alle API!. Use Authorization header
    API: GET /events
  </pre>
  `
    res.send(help);
})

app.use((req, res, next) => {
    const token = req.get('Authorization')
    if (token) {
        req.token = token
        next()
    } else {
        res.status(403).send({
            error: 'Provide Authorization header'
        });
    }
})

app.get('/events', (req, res) => {
    res.send(events.get(req.token))
});

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}, Ctrl+C to stop`);
});