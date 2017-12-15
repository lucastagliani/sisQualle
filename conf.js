// conf.js
exports.config = {
	// framework: 'jasmine',
	seleniumAdress: 'http://localhost:4444/wd/hub',
	specs: ['specs/login-spec.js'],
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: [ "--headless", "--disable-gpu", "--windows-size=800,600"]
		}
	}
}