//export {expect} from 'chai';
Feature('Test.js');

Scenario('test something', async (I, mainPage) => {
    //pause();
    I.amOnPage('/');
    await mainPage.setLocationPage('Лондон');
    let arrayMenuItemsYetLondon = await mainPage.checkYetYandexBy();
    await mainPage.setLocationPage('Париж');
    let arrayMenuItemsYetParis = await mainPage.checkYetYandexBy();
    await mainPage.ComparisonArray(arrayMenuItemsYetLondon, arrayMenuItemsYetParis);
    //expect(arrayMenuItemsYetLondon).to.have.all.members(arrayMenuItemsYetParis);
});
