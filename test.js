//export {expect} from 'chai';
Feature('Test.js');

Scenario('test something', async (I, mainPage) => {
    //pause();
    await mainPage.setLocationPage('Лондон');
    await mainPage.checkYetYandexBy();
    let arrayMenuItemsYetLondon = await mainPage.checkYetYandexBy();
    await mainPage.setLocationPage('Париж');
    let arrayMenuItemsYetParis = await mainPage.checkYetYandexBy();
    //expect(arrayMenuItemsYetLondon).to.have.all.members(arrayMenuItemsYetParis);
});
