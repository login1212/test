const {I} = inject();

module.exports = {

    globalElements: {
        buttonLocation: 'a[class="home-link geolink link_geosuggest_yes home-link_black_yes"]',
        buttonTransitionYandexBy: 'a[role="button"]',
        listLocationCity: 'ul[class="popup__items input__popup-items"]>li:nth-of-type(1)',
        inputLocationCity: 'input[class="input__control input__input"]',
        buttonYet: '.home-arrow__tabs a[href="https://yandex.ru/all"]',
        MenuItemYet: 'a[class="home-link home-tabs__more-link home-link_black_yes"]',
    },
    setLocationPage(LocationCity)
    {
        I.click(this.globalElements.buttonLocation);
        I.waitForNavigation(this.globalElements.inputLocationCity);
        I.fillField(this.globalElements.inputLocationCity, LocationCity);
        I.waitForVisible(this.globalElements.listLocationCity, 20);
        I.click(this.globalElements.listLocationCity);
    },
    async checkYetYandexBy() {
        I.waitForNavigation(this.globalElements.buttonYet);
        I.click(this.globalElements.buttonYet);
        return await I.grabTextFrom(this.globalElements.MenuItemYet);
    },

    ComparisonArray(arrayMenuItemsYetLondon, arrayMenuItemsYetParis){
        for (let i = 0; i < arrayMenuItemsYetLondon.length; i++){
            if (arrayMenuItemsYetLondon[i] === arrayMenuItemsYetParis[i]){
                if (arrayMenuItemsYetParis.length === i)
                {
                    console.log(true);
                }
            }
            else {
                console.log(false);
            }
        }
    }
};