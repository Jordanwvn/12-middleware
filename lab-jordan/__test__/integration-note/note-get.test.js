'use strict';

const server = require('../../lib/server');
const superagent = require('superagent');
require('jest');

let validID;

describe('GET /api/v1/note', () => {
  beforeAll(() => server.start(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`)));
  afterAll(() => server.stop());
  describe('GET ALL', () => {
    describe('Valid req/res', () => {
      beforeAll(() => {
        return superagent.get(':4000/api/v1/note')
        .then(res => this.response = res);
      });

      it('should respond with a status of 200', () => {
        expect(this.response.status).toBe(200);
        validID = this.response.body[0];
      });
      it('should read all data', () => {
        expect(this.response.body)
      });
    });
    describe('Invalid req/res', () => {
      it('should return a status 400 on bad request body', () => {
        return superagent.get(':4000/api/v1/note')
        .catch(err => {
          expect(err.status).toBe(400);
        });
      });
    });
  });
  describe('GET ONE /api/v1/note/id', () => {
    describe('Valid req/res', () => {
      beforeAll(() => {
        return superagent.get(`:4000/api/v1/note/${validID}`)
        .then(res => this.response = res);
      });
      it('should respond with a status of 200', () => {
        expect(this.response.status).toBe(200);
      });
      it('should read all data', () => {
        expect(this.response.body.data).toEqual('hello world');
        expect(this.response.body.name).toEqual('hello');
      });
    });
    describe('Invalid req/res', () => {
      it('should return a status 400 on bad request body', () => {
        return superagent.get(':4000/api/v1/note')
        .catch(err => {
          expect(err.status).toBe(400);
        });
      });
    });
  });
});
