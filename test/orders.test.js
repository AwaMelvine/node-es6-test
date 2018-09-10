import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/server';

const should = chai.should();
chai.use(chaiHttp);

describe('Orders', () => {
  it('should get all orders', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res).to.be.a.json;
        done();
      });
  });
});
