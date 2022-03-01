/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/


const { After, Before, Given, Then, When } = require('@cucumber/cucumber');
const assert = require('assert');
const path = require('path');
const timeout = 10000;
let beforeAdded = 0;

Before({ timeout }, async function () {
    this.browserBuild();
});

login = async (user, pass, world) => {

    // await driver.get("http://localhost:8080/login")

    const username = await world.getElementByCss('#username');
    const password = await world.getElementByCss('#password');
    const login = await world.getElementByTagName('button');
    await username.sendKeys(user);
    await password.sendKeys(pass);
    await login.click();
    await world.waitForElementByCss('item');
    console.log('User is Logged in');
}

After({ timeout }, async function () {
    await this.browserExit();
});

/* ----------------------------------------------For creating a new customer -----------------------------------------------------*/
Given('the {word} page', { timeout }, async function (page) {
    const pages = {
        'home': 'http://localhost:8080/',
        'login': 'http://localhost:8080/login'
    }


    assert((pages[page] != null), 'Page not supported!');
    await this.browserNavigate(pages[page]);
    await login('admin', 'HelloWorld', this);

});

/* ----------------------------------------------For creating a new site -----------------------------------------------------*/
Given('the {word} page and user clicks item', { timeout }, async function (page) {
    const pages = {
        'home': 'http://localhost:8080/',
        'login': 'http://localhost:8080/login'
    }

    assert((pages[page] != null), 'Page not supported!');
    await this.browserNavigate(pages[page]);
    await login('admin', 'HelloWorld', this);
    
    const element = await this.getElementByXPath('//*[@id="f48b6b22-0b3f-4c76-86b3-6fbb83cd6b57"]'); //item in list of customer
    await element.click();
    await this.waitForElementByXPath('/html/body/frontend/content/component/bar/button');

});

/* ----------------------------------------------For creating a new machine -----------------------------------------------------*/
Given('the {word} page and user clicks item and site', { timeout }, async function (page) {
    const pages = {
        'home': 'http://localhost:8080/',
        'login': 'http://localhost:8080/login'
    }

    assert((pages[page] != null), 'Page not supported!');
    await this.browserNavigate(pages[page]);
    await login('admin', 'HelloWorld', this);

    const element = await this.getElementByXPath('//*[@id="27828019-4e08-42a1-a536-d773ecf83d4d"]'); //clicking customer
    await element.click();
    await this.waitForElementByXPath('/html/body/frontend/content/component/bar/button');

    const element1 = await this.getElementByXPath('//*[@id="b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b"]/displayable/span'); //clicking site
    await element1.click();

    await this.waitForElementByXPath('//*[@id="a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2"]');

    const element2 = await this.getElementByXPath('//*[@id="a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2"]'); // clicking machine
    await element2.click();

    await this.waitForElementByXPath('/html/body/frontend/content/component/bar/button');
    const element3 = await this.getElementByXPath('/html/body/frontend/content/component/bar/button');

});

When('the user clicks createCustomer and OK', async function () {
    let beforeAdded = await this.getElementsByCss('item');
    this.addedList = beforeAdded.length

    const element = await this.getElementByXPath('/html/body/frontend/content/component/bar/button'); //create customer
    await element.click();

    await this.waitForElementByXPath('/html/body/frontend/content/component/items/item[1]/span/create/fields/buttons/button[2]');//waits for ok
    const element2 = await this.getElementByXPath('/html/body/frontend/content/component/items/item[1]/span/create/fields/buttons/button[2]');//clicks ok
    await element2.click();

    console.log('User Has clicked Ok and just created a new customer');
});

When('the user clicks createSite and OK', async function () {
    let beforeAdded = await this.getElementsByCss('item');
    this.addedList = beforeAdded.length

    const element = await this.getElementByXPath('/html/body/frontend/content/component/bar/button'); //clicks create site
    await element.click();

    await this.waitForElementByXPath('/html/body/frontend/content/component/items/item[1]/span/create/fields/buttons/button[2]');//waits for ok
    const element2 = await this.getElementByXPath('/html/body/frontend/content/component/items/item[1]/span/create/fields/buttons/button[2]'); //clicks ok
    await element2.click();

    console.log('User Has clicked Ok to create a new site');
});

When('the user clicks createMachine and OK', async function () {
    let beforeAdded = await this.getElementsByCss('item');
    this.addedList = beforeAdded.length

    const element = await this.getElementByXPath('/html/body/frontend/content/component/bar/button');
    await element.click();

    await this.waitForElementByXPath('/html/body/frontend/content/component/items/item[1]/span/create/fields/buttons/button[2]');
    const element2 = await this.getElementByXPath('/html/body/frontend/content/component/items/item[1]/span/create/fields/buttons/button[2]');
    await element2.click();

    console.log('User Has clicked Ok and just created a new site');
});

/* ----------------------------------------------For Testing the mechanic-----------------------------------------------------*/
Given('the {word} page for mechanic', { timeout }, async function (page) {
    const pages = {
        'home': 'http://localhost:8080/',
        'login': 'http://localhost:8080/login'
    }

    assert((pages[page] != null), 'Page not supported!');
    await this.browserNavigate(pages[page]);
    await login('admin', 'HelloWorld', this);

    await this.waitForElementByXPath('/html/body/frontend/content/component/bar/button');

    const element = await this.getElementByXPath('//*[@id="27828019-4e08-42a1-a536-d773ecf83d4d"]'); //clicking customer
    await element.click();
    await this.waitForElementByXPath('/html/body/frontend/content/component/bar/button');

    const element1 = await this.getElementByXPath('//*[@id="b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b"]'); //clicking site
    await element1.click();

    await this.waitForElementByXPath('//*[@id="a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2"]');

});

/* ----------------------------------------------For Testing the mechanic-----------------------------------------------------*/
Given('the {word} page for back track', { timeout }, async function (page) {
    const pages = {
        'home': 'http://localhost:8080/',
        'login': 'http://localhost:8080/login'
    }


    assert((pages[page] != null), 'Page not supported!');
    await this.browserNavigate(pages[page]);
    await login('admin', 'HelloWorld', this);
    await this.waitForElementByXPath('/html/body/frontend/content/component/bar/button');

    const element = await this.getElementByXPath('//*[@id="27828019-4e08-42a1-a536-d773ecf83d4d"]'); //clicking customer
    await element.click();
    await this.waitForElementByXPath('/html/body/frontend/content/component/bar/button');

    const element1 = await this.getElementByXPath('//*[@id="b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b"]'); //clicking site
    await element1.click();
    await this.waitForElementByXPath('//*[@id="a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2"]');

    const element2 = await this.getElementByXPath('//*[@id="a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2"]'); //clicking the machine
    await element2.click();
    await this.waitForElementByXPath('/html/body/frontend/content/component/bar/button');

    const element3 = await this.getElementByXPath('//*[@id="291a277c-d920-4c7b-a5f7-6111298a1f8b"]'); //clicking the machine cafe
    await element3.click();
    await this.waitForElementByXPath('/html/body/frontend/content/component/bar/button');

});

/* ----------------------------------------------For Testing the mechanic-----------------------------------------------------*/
When('the user clicks entrance to go back', async function () {
    const element3 = await this.getElementByXPath('//*[@id="a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2"]'); //clicking entrance on breadcrumb trail to go a step back
    await element3.click();
    await this.waitForElementByXPath('//*[@id="291a277c-d920-4c7b-a5f7-6111298a1f8b"]');

});

Then('the {string} element should be {word}', async function (name, state) {

    const ids = {
        'login button': 'button',
        'createCustomer': '/html/body/frontend/content/component/bar/button',
        'createSite': '/html/body/frontend/content/component/bar/button',
        'createMachine': '/html/body/frontend/content/component/bar/button',
        'listItem': '//*[@id="a244351a-56f7-4c74-87a0-dcf37a1c8db4"]',
        'ok': '/html/body/frontend/content/component/items/item[1]/span/create/fields/buttons/button[2]',
        'username': 'username',
        'password': 'password',
        'login': 'button',
        'item': 'fce1315f-043c-441b-a38c-dab5404a9e79',
        'input': 'placeholder1',
        'addedItem': 'items item',
        'addedSite': 'items item',
        'addedMachine': 'items item',
        'items': 'items',
        'site': '//*[@id="b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b"]/displayable/span',
        'entranceMachine': 'a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2'
    };

    const selectors = {
        'login button': 'getElementByTagName',
        'ok': 'getElementByXPath',
        'createCustomer': 'getElementByXPath',
        'createSite': 'getElementByXPath',
        'createMachine': 'getElementByXPath',
        'listItem': 'getElementByXPath',
        'username': 'getElementByCss',
        'password': 'getElementByCss',
        'login': 'getElementByTagName',
        'item': 'getElement',
        'input': 'getElement',
        'addedItem': 'getElementsByCss',
        'addedSite': 'getElementsByCss',
        'addedMachine': 'getElementByCss',
        'items': 'getElementByCss',
        'site': 'getElementByXPath',
        'entranceMachine': 'getElement'

    };

    const tags = {
        'login button': 'button',
        'ok': 'button',
        'createCustomer': 'button',
        'createSite': 'button',
        'createMachine': 'button',
        'listItem': 'item',
        'username': 'input',
        'password': 'input',
        'login': 'button',
        'item': 'item',
        'input': 'input',
        'addedItem': 'item',
        'addedSite': 'item',
        'addedMachine': 'item',
        'items': 'items',
        'site': 'span',
        'entranceMachine': 'item'

    };

    const id = ids[name];
    const selector = selectors[name];
    const tag = tags[name];

    assert((id != null), 'Element not supported!');
    assert((selector != null), 'Selector not supported!');
    assert((tag != null), 'Tag not supported!');

    switch (state) {
        case 'matching':
        case 'there': {
            const element = await this[selector](id);
            const actualTag = await element.getTagName();
            // console.log('actual tag was ' + actualTag + '!')
            assert((actualTag == tag), 'Element is not of the correct type!');

            if (state == 'matching') {
                const actualText = await element.getText();
                // console.log('ACTUAL TEXT: ' + actualText + '!');
                assert((actualText == this.text), 'Element text does not match!');
            }
            break;
        }

        case 'missing': {
            assert.rejects(async () => await this[selector](id), 'Element exists when it should not!');
            break;
        }

        case 'increment': {
            const element = await this.getElementsByCss('item');
            assert(element.length == this.addedList + 1)

            break;
        }

        case 'check': {
            const element = await this.getElementByCss('subheading');
            console.log('login done');

            break;
        }

        default: {
            assert.fail('State not supported!');
            break;
        }
    }
});