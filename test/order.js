var expect  = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Order Test', function() {
    describe('POST request: to create purchase order', function() {
        const order = {
            car_id: 1,
            status: 'available',
            price: 4000.00,
            price_offered: 3500.00
        }
        it('should be able to creare new purchase order', (done) => {
            chai.request('http://localhost:8000/')
            .post('api/v1/order')
            .send(order)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);        
            });
            done(); 
        })
    })

    describe('PATCH request: should be able to update order price', function () {
        const order_id = 1, old_price = 4000.00, new_price = 3000.00;
        it('should be able to update order price', (done) => {
            chai.request('http://localhost:8000/')
            .patch(`api/v1/order/${ order_id }`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('pending');
                res.body.should.have.property('old_price_offered').eql(old_price);
                res.body.book.should.have.property('new_price_offered').eql(new_price);
            });
            done();
        })
    })

})