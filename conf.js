// conf.js
exports.config = {
	// framework: 'jasmine',
	seleniumAdress: 'http://localhost:4444/wd/hub',
	specs: ['src/specs/login-spec.js', 'src/specs/newchatbot-spec.js'],
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: [ "--headless", "--disable-gpu", "--windows-size=800,600", "--lang=pt"]
		}
	}
}