const Router = require('express').Router
const expertsTranscriptionRepositoty = require('../repositories/expertsTranscriptionRepositoty')


const expertsTranscriptionRouter = Router();
expertsTranscriptionRouter.route('/')
    .get(async (req, res) => {
        try {
            let words = await expertsTranscriptionRepositoty.getAll()
            res.send(words)
        }
        catch (err){
            console.log(err)
            res.status(500).send()
        }
    })
    .post(async (req, res) => {
        try{
            const word = {
                word: req.body.word,
                transcription: req.body.transcription,
            }
            res.send(await expertsTranscriptionRepositoty.post(word))
        }
        catch (err){
            console.log(err)
            res.status(500).send()
        }
    })
    .put(async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            const word = {
                word: req.body.word,
                transcription: req.body.transcription,
            }
            res.send(await expertsTranscriptionRepositoty.put(id, word))
        }
        catch(err){
            console.log(err)
            res.status(500).send()
        }
    })

module.exports = expertsTranscriptionRouter