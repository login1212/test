exports.config = {
  tests: './test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://yandex.by',
      windowSize: '1366x768',
      show: true,
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './mainPage.js'
  },
  bootstrap: null,
  name: 'test'
}