const { expect } = require('chai'),
  supertest = require('supertest'),
  api = supertest('http://localhost:3000'),
  Tweed = require('../models').tweed;

// canary
describe('canary test', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  })
})

// INDEX route
describe('GET /tweeds', function() {
  it('should return a 200 response', function(done) {
    api
      .get('/tweeds')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});

// NEW route
describe('GET /tweeds/new', function() {
  it('should return a 200 response', function(done) {
    api
      .get('/tweeds/new')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});

// POST route
describe('POST /tweeds/:id', function() {
  it('should return a 302 response', function(done) {
    api
      .post('/tweeds')
      .send({
        name: 'Your body. Your choice.',
        upVote: 0,
        downVote: 0
      })
      .expect(302)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});

// SHOW route
describe('GET /tweeds/:id', function() {
  it('should return a 200 response', function(done) {
    api
      .get('/tweeds/2')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});

// EDIT route
describe('GET /tweeds/:id/edit', function() {
  it('should return a 200 response', function(done) {
    api
      .get('/tweeds/2/edit')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});

// UPDATE route
describe('PUT /tweeds/:id', function() {
  it('should return a 302 response', function(done) {
    api
      .put('/tweeds/2')
      .send({
        name: 'I love my place'
      })
      .expect(302)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});

// DELETE route
describe('DELETE /tweeds/:id', function() {
  let tweedsLength, tweedId;

  before(function(done) {
    Tweed.findAll()
      .then(tweeds => {
        tweedsLength = tweeds.length;
        tweedId = tweeds[tweedsLength-2].id;
        console.log('tweeds length ', tweedsLength);
        console.log('tweed id ', tweedId);
        done();
      })
      .catch(err => done(err));
  });

  it('should return an empty body in the response', function(done) {
    api
      .delete(`/tweeds/${tweedId}`)
      .expect(302)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        expect(res.body).to.be.empty;
        done();
      });
  });

  it('should return null', function(done) {
    api
      .get(`/tweeds/${tweedId}`)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }


        expect(res.body).to.be.empty;
        done();
      });
  });
});
