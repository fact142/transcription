const divisionIntoSyllables = require('../utils/divisionIntoSyllables.js');
const assert = require('assert');

it('Bill', () => {
    assert.deepEqual(divisionIntoSyllables('bill'), ['bill']);
});
it('University', () => {
    assert.deepEqual(divisionIntoSyllables('university'), [ 'u', 'ni', 'ver', 'si', 'ty' ]
    );
});
it('Kill', () => {
    assert.deepEqual(divisionIntoSyllables('monster'), [ 'mon', 'ster' ]
    );
});
