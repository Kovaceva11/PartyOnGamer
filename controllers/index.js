const router = require('express').Router();

<<<<<<< HEAD
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

=======
const homeRoutes = require('./homeroutes.js');

router.use('/', homeRoutes);

>>>>>>> ad8a5f245c4fffccfdaabeda380969ad486e4152
module.exports = router;