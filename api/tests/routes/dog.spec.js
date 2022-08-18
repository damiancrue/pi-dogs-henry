/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');


const agent = session(app);

describe('GET /', function () {
  it('Is the response a 200?', function() {
    agent.get('/dogs')
    .expect(200);
  });
  it('Is it a JSON?', function(){
    agent.get('/dogs')
      .expect('Content-Type', /json/);
  });
});
