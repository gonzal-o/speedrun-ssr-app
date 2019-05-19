// const webdriver = require('selenium-webdriver');
// const config = require('./config.json');
// const Mocha = require('mocha');

// config.browsers.forEach(async browser => {
// 	await config.tests.forEach(testCase => {
// 		global.driver = new webdriver.Builder().forBrowser('firefox').build();
// 		const mocha = new Mocha({
// 			timeout: testCase.timeout,
// 		});
// 		return new Promise((resolve, reject) => {
// 			mocha.suite.on('require', function(global, file) {
// 				delete require.cache[file];
// 			});
// 			console.log(
// 				!browser.device
// 					? `Running ${testCase.file} against ${browser.browserName} (${
// 							browser.browser_version
// 					  }) on ${browser.os} (${browser.os_version})`
// 					: `Running ${testCase.file} on ${browser.device}`
// 			);
// 			mocha.addFile(`${testCase.file}`);
// 			mocha
// 				.run()
// 				.on('fail', test =>
// 					reject(new Error(`Selenium test (${test.title}) failed.`))
// 				)
// 				.on('end', () => resolve());
// 		});
// 	});
// });
