const Pool = require('pg').Pool;
const { connection } = require('../configs/config')

const pool = new Pool(connection);
const queryString = {
    selectAll: `SELECT *
                FROM experts_transcription`,
    select: `SELECT *
             FROM experts_transcription
             WHERE "id" = $1`,
    insert: `INSERT INTO "experts_transcription"("word", "transcription")
            VALUES($1, $2)
            RETURNING "word", "transcription"`,
    update: `UPDATE "experts_transcription"
            SET "transcription" = $1,
            WHERE "id" = $2
            RETURNING "word", "transcription"`,
    selectByWord: `SELECT "transcription"
                   FROM "experts_transcription"
                   WHERE "word" = $1`
}
const getAll = async () => {
    const query = await pool.query(queryString.selectAll)
    return query.rows;
}
const get = async (id) => {
    const query = await pool.query(
        queryString.select,
        [id]);
    if (query.rows.length < 1){
        return null
    }
    return query.rows[0];
}

const post = async (word) => {
    const query = await pool.query(
        queryString.insert,
        [word.word, word.transcription]);
    if (query.rows.length < 1){
        return null;
    }
    return query.rows[0] ;
}

const put = async (id, word) => {
    const query = await pool.query(
        queryString.update,
        [word.transcription]);
    if(query.rows.length < 1){
        return null;
    }
    return query.rows[0];
}

const selectByWord = async (word) => {
    const query = await pool.query(
        queryString.selectByWord,
        [word.word]);
    if(query.rows.length < 1){
        return null;
    }
    return query.rows[0];
}

module.exports = { getAll, get, post, put, selectByWord }