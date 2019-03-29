const request = require('supertest');
const { expect } = require('chai');

const app = require('../../app');



describe('POST /User/Login', () => {
  it('should get a status code \'200\' if user logged in successfully', (done) => {
    const user = {
      username: 'test1',
      password: 'test',
    };
    request(app)
      .post('/user/login')
      .set('Accept', 'application/json')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
          .with.property('status')
          .that.is.a('string')
          .that.equal('ok');
        if (err) return done(err);
        return done();
      });
    done()
  });

  //token
  it('should get a status code \'500\' if user not in DB', (done) => {
    const user2 = {
      username: 'test15454365',
      password: 'test',
    };
    request(app)
      .post('/user/login')
      .set('Accept', 'application/json')
      .send(user2)
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
          .with.property('status')
          .that.is.a('string')
          .that.equal('username already exists.');
        if (err) return done(err);
        return done();
      });
    done()
  })
})
