var expect  = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Users', function() 
{
  describe('POST request create new user', function()
  {
    const user = {
      id: 1,
      email: 'aminuali@hotmail.com',
      firstName: 'Aminu',
      lastName: 'Aliyu',
      address: 'Qwetu',
      password: '123'
    }
    it('should be able to create new user', function(done){
      chai.request('http://localhost:8000/')
      .post('api/v1/users')
      .send(user)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);        
      });
      done();      
    });     
  })
  describe('GET user to sign', function() {
    let email = 'aliyu@gmail.com';
    it('should get user to sign in', (done) => {
      chai.request('http://localhost:8000/')
      .get(`api/v1/users/${ email }`)
      .end((err, res) => {        
        expect(res.status).to.equal(200);   
        expect(res.body).to.be.an('array');                                
    });
    done();
    })
  })
});