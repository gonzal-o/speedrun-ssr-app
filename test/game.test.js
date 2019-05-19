const webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
const expect = require('chai').expect;
const URL = 'http://localhost:8080';

const until = webdriver.until;
const By = webdriver.By;

let driver = undefined;

describe(`Speedrun app testing`, function() {
	this.timeout(10000);

	beforeEach(() => {
		driver = new webdriver.Builder().forBrowser('firefox').build();
		driver.get(URL);
	});

	describe(`Speedrun app loading`, function() {
		it(`Should load the home page and get title `, async function() {
			await driver.navigate().to(URL);
			const title = await driver.getTitle();
			return assert.equal(title, 'Speedrun');
		});

		it('Should load the webpage and check for the first game', async function() {
			return driver.wait(
				until.elementLocated(By.xpath('//*[@id="app"]/div/div/div/a[1]/img'))
			);
		});
	});

	describe(`Check if all games have img and title`, function() {
		it('should return all games in the frontPage(40)', async function() {
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const numberOfGames = await driver.findElements(By.css('.games-item'));
			return assert(numberOfGames.length == 40);
		});

		it('should check if all games have an img', async function() {
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const numberOfImgs = await driver.findElements(By.css('img'));
			const numberOfGames = await driver.findElements(By.css('.games-item'));
			return assert(numberOfGames.length == numberOfImgs.length);
		});

		it('should check if all games have Title', async function() {
			await driver.wait(until.elementLocated(By.css('.games-item-data')));
			const gamesWithTitles = await driver.findElements(
				By.css('.games-item-data')
			);
			const numberOfGames = await driver.findElements(By.css('.games-item'));
			return assert(numberOfGames.length == gamesWithTitles.length);
		});
	});

	describe(`Check for broken links`, function() {
		it('should pass if all img have a link', async function() {
			const numberOfLinkgs = [];
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const numberOfImgs = await driver.findElements(By.css('img'));
			numberOfImgs.forEach(img => numberOfLinkgs.push(img.getAttribute('src')));
			return assert(numberOfImgs.length == numberOfLinkgs.length);
		});

		it('Should pass if the first card redirects to a valid link', async function() {
			const id = await driver
				.wait(until.elementLocated(By.css('.games-item')))
				.getAttribute('id');
			await driver.findElement(By.css('.games-item')).click();
			const url = await driver.getCurrentUrl();
			const urlArray = url.split('/');
			return assert.equal(id, urlArray[urlArray.length - 1]);
		});

		it('Should redirect to the correct gameId page', async function() {
			await driver.wait(until.elementLocated(By.css('.games-item')));
			await driver.findElement(By.css('.games-item')).click();
			const url = await driver.getCurrentUrl();
			const urlArray = url.split('/');
			await driver.wait(until.elementLocated(By.id('gameId')));
			const gameId = await driver.findElement(By.id('gameId')).getText();

			return expect(gameId).to.include(urlArray[urlArray.length - 1]);
		});
	});

	describe(`Check the arrow-back icon`, function() {
		it('Check if the back arrow btn works', async function() {
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const initialUrl = await driver.getCurrentUrl();
			await driver.findElement(By.css('.games-item')).click();
			await driver.wait(until.elementLocated(By.id('arrow-back')));
			await driver.findElement(By.id('arrow-back')).click();
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const finalUrl = await driver.getCurrentUrl();
			return expect(finalUrl).to.equal(initialUrl);
		});
	});

	describe(`Search Function`, function() {
		it('Should search for the game title name', async function() {
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
		it('Should sort games by creation date', async function() {
			await driver.wait(until.elementLocated(By.id('sort-btn')));
			const firstGame = await driver.findElement(By.id('game-title')).getText();
			await driver.findElement(By.id('sort-btn')).click();
			await driver.wait(until.elementLocated(By.css('.games-item')));
			const sortedGame = await driver
				.findElement(By.id('game-title'))
				.getText();
			return expect(firstGame).to.not.equal(sortedGame);
		});

		it('Shouls change color when active', async function() {
			await driver.wait(until.elementLocated(By.id('sort-btn')));
			await driver.findElement(By.id('sort-btn')).click();
			await driver.wait(until.elementLocated(By.id('sort-btn')));
			const color = await driver
				.findElement(By.id('sort-btn'))
				.getCssValue('background-color');
			return expect(color).to.deep.equal('rgb(44, 62, 80)');
		});
	});

	describe(`Check if the 404 page works`, function() {
		it('Shouls render a 404 message', async function() {
			const errorTitle = 'Sorry! We can not find any data for the Game:';
			await driver.navigate().to(`${URL}/12345aaabbcccdd`);
			await driver.wait(until.elementLocated(By.css('.message')));
			const title = await driver.findElement(By.css('.message')).getText();
			return expect(title).to.equal(errorTitle);
		});
	});

	afterEach(() => driver.quit());
});
