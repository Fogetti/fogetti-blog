// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Fogetti Blog',
	'brand': 'Fogetti Blog',
	
	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	'compress': true,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'admin name first': process.env.ADMIN_NAME_FIRST,
	'admin name last': process.env.ADMIN_NAME_LAST,
	'admin name email': process.env.ADMIN_NAME_EMAIL,
	'admin name password': process.env.ADMIN_NAME_PASSWORD,
	'post image upload path': process.env.POST_IMAGE_UPLOAD_PATH,
	'ssl ca': process.env.SSL_CA
});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'enquiries': 'enquiries',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
