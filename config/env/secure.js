'use strict';

module.exports = {
	port: 443,
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/lobsteranddeath',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
			],
			js: [
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
				'public/lib/angular-animate/angular-animate.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1005404652857148',
		clientSecret: process.env.FACEBOOK_SECRET || '416a3d03272fa2087552c41c339d16a5',
		callbackURL: 'https://localhost:443/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'https://localhost:443/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '934143921779-nf28t00rfblruigkhq0ggkjjhn7rjo7b.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'ElJOypGF9lNoBRM9dlnC8OIG',
		callbackURL: 'https://localhost:443/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '75jou0crxo0rax',
		clientSecret: process.env.LINKEDIN_SECRET || 'hTgY2CielztklERe',
		callbackURL: 'https://localhost:443/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || '521277ee56304ff82bfc',
		clientSecret: process.env.GITHUB_SECRET || '623d645a19cdf04c955e9ac5a42ceb3dea8b5586',
		callbackURL: 'https://localhost:443/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};