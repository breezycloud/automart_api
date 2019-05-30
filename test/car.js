var expect  = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Car Test', function() 
{
  describe('POST Car Ad', function()
  {
    const Order = {
      id: 1,
      car_id: 1,
      created_on: 7/7/2018,            
      status: 'Available',
      price: 400,
      price_offered: 300      
    }

    it('should be able to create purchase order', function(done){
      chai.request('http://localhost:8000/')
      .post('api/v1/order')
      .send(Order)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);        
      });
      done();
      
  }); 
  })
});
