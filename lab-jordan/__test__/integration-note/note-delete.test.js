'use strict';

const server = require('../../lib/server');
const superagent = require('superagent');
require('jest');

describe('DELETE /api/v1/note', () => {
//   beforeAll(() => server.start(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`)));
//   afterAll(() => server.stop());
//
//   describe('Valid req/res', () => {
//     beforeAll(() => {
//       this.moveNote = {name: 'hello', data: 'hello world'};
//       return superagent.post(':4000/api/v1/note')
//       .send(this.mockNote)
//       .then(res => this.response = res);
//     });
//
//     it('should respond with a status of 201', () => {
//       expect(this.response.status).toBe(201);
//     });
//     it('should post a new note with name, data, and _id', () => {
//       expect(this.response.body).toHaveProperty('name');
//       expect(this.response.body).toHaveProperty('data');
//       expect(this.response.body).toHaveProperty('_id');
//     });
//     it('should respond with a name of "hello" and data of "hello world"', () => {
//       expect(this.response.body.name).toEqual(this.mockNote.name);
//       expect(this.response.body.data).toEqual(this.mockNote.data);
//     });
//   });
//   describe('Invalid req/res', () => {
//     it('should return a status 404 on bad path', () => {
//       return superagent.post(':4000/api/v1/doesNotExist')
//       .send(this.mockNote)
//       .catch(err => {
//         expect(err.status).toBe(404);
//         expect(err.response.mesage).toMatch(/Path Error/i);
//       });
//     });
//     it('should return a status 400 on bad request body', () => {
//       return superagent.post(':4000/api/v1/note')
//       .send({})
//       .catch(err => {
//         expect(err.status).toBe(400);
//       });
//     });
//
//   })
// })
