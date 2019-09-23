const {I} = inject();

module.exports = {

    globalElements: {
        buttonLocation: 'a[class="home-link geolink link_geosuggest_yes home-link_black_yes"]',
        buttonTransitionYandexBy: 'a[role="button"]',
        inputLocationCity: 'span[class="input__box"]>input',
        buttonYet: '.home-arrow__tabs a[href="https://yandex.ru/all"]',
        MenuItemYet: 'a[class="home-link home-tabs_more-link home-link_black_yes"]',
    },
    setLocationPage(LocationCity)
    {
        I.amOnPage('/');
        I.click(this.globalElements.buttonLocation);
        I.waitForNavigation(this.globalElements.inputLocationCity);
        I.fillField(this.globalElements.inputLocationCity, LocationCity);
        I.pressKey('Enter');
        // I.waitForNavigation(this.globalElements.buttonTransitionYandexBy);
        // I.click(this.globalElements.buttonTransitionYandexBy);
    },
    async checkYetYandexBy() {
        let ArrayMenuItemsYet;
        //I.waitForNavigation(this.globalElements.buttonYet);
        I.click(this.globalElements.buttonYet);
        return ArrayMenuItemsYet = await I.grabTextFrom(this.globalElements.MenuItemYet);;
    },

}