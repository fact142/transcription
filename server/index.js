const express = require('express')
const cors = require('cors')

const { port } = require('./configs/config')

const expertsTranscriptionRouter = require('./routers/expertsTranscriptionRouter.js')
const transcriptionRouter = require('./routers/transcriptionRouter')

const app = express()
app.use(cors());
app.use(express.json())

app.use('/word', expertsTranscriptionRouter)
app.use('/transcription', transcriptionRouter)

app.listen(port, () => console.log(`App listening on http://localhost:${port} !`));
