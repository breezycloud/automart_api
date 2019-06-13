var expect  = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');



chai.use(chaiHttp);
chai.should();

describe('Car Test', function() 
{
    describe('POST request: create new car ad', function()
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
          expect(res.statusCode).to.equal(200);        
            });
        done();    
        });
    })

    describe('PATCH request: update car ad price', function() {
      const car_id = 1;
      it('should be able to update car ad price', (done) => {
        chai.request('http://localhost:8000')
        .patch(`/api/v1/car/price/${ car_id }`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');          
          res.body.should.have.property('price').eql(4000.00);
        });
        done();
      })
    })

    describe('PATCH request: update car ad status', function() {
      const car_id = 1;
      it('should be able to update car ad status', (done) => {
        chai.request('http://localhost:8000')
        .patch(`/api/v1/car/price/${ car_id }`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');          
          res.body.should.have.property('status').eql('sold');
        });
        done();
      })
    })

    describe('GET request: retrieve specific car', function() {
      const car_id = 1;
      it('should be able to retrieve specific car record', (done) => {
        chai.request('http://localhost:8000')
        .patch(`/api/v1/car/price/${ car_id }`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');  
        });
        done();
      })
    })

    describe('GET request: retrieve all unsold cars', function() {
      const status = 'available';
      it('should be able to retrieve record of all unsold cars', (done) => {
        chai.request('http://localhost:8000')
        .patch(`/api/v1/car/price/${ status }`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');  
        });
        done();
      })
    })

    describe('GET request:retrieve all cars', function() {      
    it('should retrieve record of car sold or unsold', (done) => {  	
        chai.request('http://localhost:8000/')
        .get('/api/v1/car/')           
        .end((err, res) => {        
            expect(res.statusCode).to.equal(200);   
            expect(res.body).to.be.an('array');                                
        });
        done();
        });
    }) 
});