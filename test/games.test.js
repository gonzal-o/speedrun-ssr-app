// const webdriver = require('selenium-webdriver');
// //const assert = require('assert');
// var assert = require('chai').assert;
// const config = require('./config.json');
// const expect = require('chai');

// const until = webdriver.until;
// const By = webdriver.By;

// //let driver = global.driver;
// let driver = undefined;

// describe(`Speedrunner app scenarios ${global.driver}`, function() {
// 	this.timeout(10000);
// 	beforeEach(() => {
// 		//driver = new webdriver.Builder().forBrowser(global.driver).build();
// 		browser = config.browsers[global.driver];
// 		driver = new webdriver.Builder().forBrowser('firefox').build();
// 		driver.get('http://localhost:3007');
// 	});

// 	it(`Should load the home page and get title `, async function() {
// 		await driver.navigate().to('http://localhost:3007');
// 		const title = await driver.getTitle();
// 		return assert.equal(title, 'Speedrunner');
// 	});

// 	it('Should load the webpage and check for the first game', async function() {
// 		return driver.wait(
// 			until.elementLocated(By.xpath('//*[@id="app"]/div/div/div/a[1]/img'))
// 		);
// 	});

// 	it('get the number of games in the frontPage', async function() {
// 		await driver.wait(until.elementLocated(By.css('.games-item')));
// 		const numberOfGames = await driver.findElements(By.css('.games-item'));
// 		return assert(numberOfGames.length == 40);
// 	});

// 	it('check if all games have img', async function() {
// 		await driver.wait(until.elementLocated(By.css('.games-item')));
// 		const numberOfImgs = await driver.findElements(By.css('img'));
// 		const numberOfGames = await driver.findElements(By.css('.games-item'));
// 		return assert(numberOfGames.length == numberOfImgs.length);
// 	});

// 	it('check if there are any borken links', async function() {
// 		const numberOfLinkgs = [];
// 		await driver.wait(until.elementLocated(By.css('.games-item')));
// 		const numberOfImgs = await driver.findElements(By.css('img'));
// 		numberOfImgs.forEach(img => numberOfLinkgs.push(img.getAttribute('src')));
// 		return assert(numberOfImgs.length == numberOfLinkgs.length);
// 	});

// 	it('check if there are any games without Title', async function() {
// 		await driver.wait(until.elementLocated(By.css('.games-item-data')));
// 		const gamesWithTitles = await driver.findElements(
// 			By.css('.games-item-data')
// 		);
// 		const numberOfGames = await driver.findElements(By.css('.games-item'));
// 		return assert(numberOfGames.length == gamesWithTitles.length);
// 	});

// 	it('check for links', async function() {
// 		const id = await driver
// 			.wait(until.elementLocated(By.css('.games-item')))
// 			.getAttribute('id');
// 		await driver.findElement(By.css('.games-item')).click();
// 		const url = await driver.getCurrentUrl();
// 		const urlArray = url.split('/');
// 		return assert.equal(id, urlArray[urlArray.length - 1]);
// 	});

// 	// it('check if searchButton Works', async function() {
// 	// 	const searchParam = 'fishy';
// 	// 	await driver
// 	// 		.wait(until.elementLocated(By.css('input')))
// 	// 		.sendKeys(searchParam);
// 	// 	const searchResults = driver.findElements(By.css('.games-item'));
// 	// 	const titlesList = searchResults.map(result =>
// 	// 		driver.findElement(By.id('game-title')).getAttribute('value')
// 	// 	);

// 	// 	return expect(titlesList).to.deep.include(searchParam);
// 	// });

// 	afterEach(() => driver.quit());
// });
// // describe('Home Page', function() {
// // 	/**
// // 	 * Test case to load our application and check the title.
// // 	 */
// // 	this.timeout(10000);

// // 	it('Should load the home page and get title', function() {
// // 		return new Promise((resolve, reject) => {
// // 			driver
// // 				.get('http://localhost:8082')
// // 				.then(logTitle)
// // 				.then(title => {
// // 					assert.strictEqual(title, 'Title');
// // 					resolve();
// // 				})
// // 				.catch(err => reject(err));
// // 		});
// // 	});
// // });

// // it('Should check whether the given element is loaded', function() {
// // 	return new Promise((resolve, reject) => {
// // 		browser
// // 			.findElement({ id: 'sel-button' })
// // 			.then(elem => resolve())
// // 			.catch(err => reject(err));
// // 	});
// // });
// // driver = new webdriver.Builder().forBrowser('chrome').build();
// // let id = undefined;
// // let url = undefined;
// // driver.get('http://localhost:3007').then(() =>
// // 	driver
// // 		.wait(until.elementLocated(By.css('.games-item')))
// // 		.then(items => {
// // 			id = items.getAttribute('id');
// // 		})
// // 		.then(() => driver.findElement(By.css('.games-item')).click())
// // 		.then(() => driver.getCurrentUrl().then(item => (url = item)))
// // );
