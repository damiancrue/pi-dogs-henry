
const { Breed, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Breed', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    it('Only Image', function(done) {
      Breed.create({
       imagen: 'Hola',
      })
       .then(() => done('No name - should not be created'))
       .catch(() => done());
   });
   it('Only Name', function(done) {
     Breed.create({
       name: 'perro',
     })
     .then(() => done('No other data - should not be created'))
     .catch(() => done());
   });
  });
});