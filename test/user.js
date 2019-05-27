var request = require('request');
var expect  = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Users', function() 
{
  describe('POST', function()
  {
    const user = {
      id: 1,
      email: 'aminuali@hotmail.com',
      firstName: 'Aminu',
      lastName: 'Aliyu',
      address: 'Qwetu',
      password: '123'
    }
    it('status', function(done){
      chai.request('http://localhost:8000/')
      .post('api/v1/user')
      .send(user)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);        
      });
      done();
      
  }); 
  })
});
