const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

const user = {
  username: 'test12',
  password: 'test',
};

describe('POST /User/Register', () => {
  it('should get a status code \'409\' if username already exists', (done) => {
    request(app)
      .post('/user/register')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(409)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
          .with.property('status')
          .that.is.a('string')
          .that.equal('Username already exists.');
        if (err) return done(err);
        return done();
      });
      done()
  });

  //token
  it('should get a status code \'409\' if user exists', (done) => {
    request(app)
      .post('/user/register')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(409)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
          .with.property('status')
          // .that.is.a('string')
          .that.equal('username already exists.');
        if (err) return done(err);
        return done();
      });
    done()
  })
})
