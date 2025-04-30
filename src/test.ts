const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);

describe('Task API', () => {
  it('should GET all tasks', (done) => {
    chai.request(app)
      .get('/api/tasks')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

