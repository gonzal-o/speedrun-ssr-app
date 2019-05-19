const webdriver = require('selenium-webdriver');
//const assert = require('assert');
var assert = require('chai').assert;
const config = require('./config.json');
const expect = require('chai').expect;

const until = webdriver.until;
const By = webdriver.By;

let driver = undefined;

describe(`Speedrun app testing`, function() {
	this.timeout(10000);
	beforeEach(() => {
		driver = new webdriver.Builder().forBrowser('firefox').build();
		driver.get('http://localhost:8084');
	});
	describe(`Speedrun app loading`, function() {
		it(`Should load the home page and get title `, async function() {
			await driver.navigate().to('http://localhost:8084');
			const title = await driver.getTitle();
			return assert.equal(title, 'Speedrunner');
		});

		it('Should load the webpage and check for the first game', async function() {
			return driver.wait(
				until.elementLocated(By.xpath('//*[@id="app"]/div/div/div/a[1]/img'))
			);
		});
	});

	describe(`Should load games with img and title`, function() {
		it('get the number of games in the frontPage', async function() {
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const numberOfGames = await driver.findElements(By.css('.games-item'));
			return assert(numberOfGames.length == 40);
		});
		it('check if all games have img', async function() {
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const numberOfImgs = await driver.findElements(By.css('img'));
			const numberOfGames = await driver.findElements(By.css('.games-item'));
			return assert(numberOfGames.length == numberOfImgs.length);
		});
		it('check if there are any games without Title', async function() {
			await driver.wait(until.elementLocated(By.css('.games-item-data')));
			const gamesWithTitles = await driver.findElements(
				By.css('.games-item-data')
			);
			const numberOfGames = await driver.findElements(By.css('.games-item'));
			return assert(numberOfGames.length == gamesWithTitles.length);
		});
	});

	describe(`Should load games with img`, function() {
		it('check if there are any broken links', async function() {
			const numberOfLinkgs = [];
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const numberOfImgs = await driver.findElements(By.css('img'));
			numberOfImgs.forEach(img => numberOfLinkgs.push(img.getAttribute('src')));
			return assert(numberOfImgs.length == numberOfLinkgs.length);
		});

		it('check for links', async function() {
			const id = await driver
				.wait(until.elementLocated(By.css('.games-item')))
				.getAttribute('id');
			await driver.findElement(By.css('.games-item')).click();
			const url = await driver.getCurrentUrl();
			const urlArray = url.split('/');
			return assert.equal(id, urlArray[urlArray.length - 1]);
		});

		it('Check if the redirected page after clicking a game is the correct one', async function() {
			const id = await driver.wait(until.elementLocated(By.css('.games-item')));
			await driver.findElement(By.css('.games-item')).click();
			const url = await driver.getCurrentUrl();
			const urlArray = url.split('/');
			await driver.wait(until.elementLocated(By.id('gameId')));
			const gameId = await driver.findElement(By.id('gameId')).getText();

			return expect(gameId).to.include(urlArray[urlArray.length - 1]);
		});
		it('Check if the back arrow btn works', async function() {
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const initialUrl = await driver.getCurrentUrl();
			await driver.findElement(By.css('.games-item')).click();
			await driver.wait(until.elementLocated(By.css('.arrow-back')));
			await driver.findElement(By.css('.arrow-back')).click();
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const finalUrl = await driver.getCurrentUrl();
			return expect(finalUrl).to.equal(initialUrl);
		});
	});

	describe(`Should search for the correct game`, function() {
		it('check if searchButton Works', async function() {
			await driver.wait(until.elementLocated(By.id('game-title')));
			const searchParam = await driver
				.findElement(By.id('game-title'))
				.getText();
			await driver
				.wait(until.elementLocated(By.css('input')))
				.sendKeys(searchParam);
			const searchResults = await driver
				.findElement(By.id('game-title'))
				.getText();

			return expect(searchResults).to.equal(searchParam);
		});
	});
	describe(`Check if the sorting btn works`, function() {
		it('Sorting btn works properly', async function() {
			await driver.wait(until.elementLocated(By.id('sort-btn')));
			const firstGame = await driver.findElement(By.id('game-title')).getText();
			await driver.findElement(By.id('sort-btn')).click();
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const sortedGame = await driver
				.findElement(By.id('game-title'))
				.getText();
			return expect(firstGame).to.not.equal(sortedGame);
		});

		it('Sorting btn changes color properly', async function() {
			await driver.wait(until.elementLocated(By.id('sort-btn')));
			await driver.findElement(By.id('sort-btn')).click();
			await driver.wait(until.elementLocated(By.id('sort-btn')));
			const color = await driver
				.findElement(By.id('sort-btn'))
				.getCssValue('background-color');
			return expect(color).to.equal('rgb(0, 0, 255)');
		});
	});

	afterEach(() => driver.quit());
});
