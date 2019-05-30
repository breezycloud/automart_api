var expect  = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Car Test', function() 
{
  describe('POST Car Ad', function()
  {
    const Car = {
      id: 1,
      email: 'aminuali@hotmail.com',
      created_on: 7/7/2018,
      manufacturer: 'Mercedez Benz',
      model: 'SLS AMG',
      price: 400,
      status: 'Available',
      state: 'New'
    }

    it('should be able to create car ad', function(done){
      chai.request('http://localhost:8000/')
      .post('api/v1/car')
      .send(Car)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);        
      });
      done();      
  }); 
  })
});
