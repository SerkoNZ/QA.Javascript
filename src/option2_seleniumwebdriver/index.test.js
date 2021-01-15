const {Builder} = require('selenium-webdriver')
require('chromedriver')
jest.setTimeout(30000)

it('should open login page', async () => {
    let builder = new Builder().forBrowser('chrome')
    let driver = builder.build()
    await driver.get('http://localhost:3000')

    expect(await driver.getCurrentUrl()).toContain('http://localhost:3000')
})
