const transcription = require('../transcription/transcription')

const Router = require('express').Router
const expertsTranscriptionRepositoty = require('../repositories/expertsTranscriptionRepositoty')


const transcriptionRouter = Router();
transcriptionRouter.route('/')
    .post(async (req, res) => {
        try {
            const word = {
                word: req.body.word,
            }
            console.log(word)
            let controlWord = await expertsTranscriptionRepositoty.selectByWord(word)
            if(controlWord){
                res.send(controlWord)
            } else {
                const result = {
                    'transcription': transcription(word.word)
                }
                res.send(result)
            }

        }
        catch (err){
            console.log(err)
            res.status(500).send()
        }
    })


module.exports = transcriptionRouter