const login = require('./login');
const register = require('./register');
const trips = require('./trips');
const activities = require('./activities');
const profile = require('./profile');

const constructorMethod = (app) => {
  app.use('/login', login);
  app.use('/register', register);
  app.use('/trips', trips);
  app.use('/activities', activities);
  app.use('/profile', profile);

  app.get('/', (req, res) => {
    if(req.session.user) {
      res.redirect('trips');
    }
    res.render('index', { title: "Trip Planner", form_action: "login", index: true });
  });

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;