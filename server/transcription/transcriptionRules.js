module.exports = {
    consonantLetters : ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'],
    vowelLetters : ['a', 'e', 'i', 'o', 'u', 'y'],

   oneLetterTranscription : (letters, wordObj) => {
        switch (letters) {
            case 'a':

                        return 'æ'



            case 'b':
                return 'b'
            case 'c':
                return 'k'
            case 'd':
                return 'd'
            case 'e':
                return 'e'
            case 'f':
                return 'f'
            case 'g':
                return 'g'
            case 'h':
                return 'h'
            case 'i':
                return 'ɪ'
            case 'j':
                return 'ʤ'
            case 'k':
                return 'k'
            case 'l':
                return 'l'
            case 'm':
                return 'm'
            case 'n':
                return 'n'
            case 'o':
                return 'ou'
            case 'p':
                return 'p'
            case 'q':
                return 'k'
            case 'r':
                return 'r'
            case 's':
                return 's'
            case 't':
                return 't'
            case 'u':
                return 'ju:'
            case 'v':
                return 'v'
            case 'w':
                return 'w'
            case 'x':
                return 'ks'
            case 'y':
                return 'ɪ'
            case 'z':
                return 'z'
        }
    },
    twoLetterTranscription : (letters, wordObj) => {
        switch (letters) {
            case 'ae':
                return 'æ'
            case 'ai':
                return 'eɪ'
            case 'ay':
                return 'eɪ'
            case 'al':
                return 'ɔːl'
            case 'ar':
                return 'ɑː'
            case 'au':
                return 'ɔ'
            case 'aw':
                return 'ɔ'
            case 'ch':
                return 'ʧ'
            case 'ci':
                return 'sɪ'
            case 'cy':
                return 'saɪ'
            case 'ce':
                return 'se'
            case 'ck':
                return 'k'
            case 'ea':
                return 'iː'
            case 'ee':
                return 'iː'
            case 'ei':
                return 'ɪ'
            case 'eo':
                return 'iː'
            case 'er':
                return 'ɜː'
            case 'eu':
                return 'juː'
            case 'ew':
                return 'ju'
            case 'ey':
                return 'iː'
            case 'ge':
                return 'ʤ'
            case 'gg':
                return 'g'
            case 'gh':
                return ''
            case 'lh':
                return ''
            case 'rh':
                return ''
            case 'ia':
                return 'aɪə'
            case 'ie':
                return 'aɪə'
            case 'io':
                return 'aɪə'
            case 'ir':
                return 'ɜː'
            case 'kn':
                return 'n'
            case 'll':
                return 'l'
            case 'ng':
                return 'ŋ'
            case 'oe':
                return 'iː'
            case 'oi':
                return 'ɔɪ'
            case 'oy':
                return 'ɔɪ'
            case 'oo':
                return 'u'
            case 'or':
                return 'ɔː'
            case 'ou':
                return 'aʊ'
            case 'ow':
                return 'ou'
            case 'ph':
                return 'f'
            case 'qu':
                return 'kw'
            case 'sh':
                return 'ʃ'
            case 'ss':
                return 's'
            case 'th':
                return 'ð'
            case 'ts':
                return 'ts'
            case 'tz':
                return 'ts'
            case 'ue':
                return 'e'
            case 'ui':
                return 'ɪ'
            case 'ur':
                return 'ɜː'
            case 'yr':
                return 'əː'
        }
    },

    threeLettersTranscription : (letters, wordObj) => {
        switch (letters) {
            case 'air' :
                return 'ɛə'
            case 'ayr' :
                return 'ɛə'
            case 'ain':
                return 'ɪn'
            case 'are' :
                return 'ær'
            case 'cia':
                return 'ʃ'
            case 'ear' :
                return 'ə'
            case 'eir' :
                return 'ɪə'
            case 'ere' :
                return 'ɪə'
            case 'ewe' :
                return 'ju'
            case 'iar' :
                return 'aɪə'
            case 'ier' :
                return 'aɪər'
            case 'igh' :
                return 'aɪ'
            case 'ire' :
                return 'aɪə'
            case 'irr' :
                return 'ɪr'
            case 'mpb' :
                return 'mb'
            case 'oar' :
                return 'ɔː'
            case 'oor' :
                return 'ɔəː'
            case 'ore' :
                return 'ɔəː'
            case 'our' :
                return 'auə'
            case 'tch' :
                return 'ʧ'
            case 'wor' :
                return 'wɜː'
            default :
                return null
        }
    },

    fourLetterTranscription : (letters, wordObj) => {
        switch (letters) {
            case 'aire' :
                return 'ɛə'
            case 'augh' :
                return 'ɔ'
            case 'eigh' :
                return 'iː'
            case 'wich' :
                return 'iʤ'
            case 'ewer' :
                return 'ouə'
            case 'oore' :
                return 'uə'
            case 'ough' :
                return 'au'
            case 'ower' :
                return 'auə'
            default :
                return null
        }
    }
}