const fs = require('fs'); 

module.exports = {
  'Download Files from Multiple Box URLs': function (browser) {
    const boxURLs = fs.readFileSync('boxurl.txt', 'utf8').trim().split('\n');
    const downloadButtonSelector = "#app > div.in-app-messenger-provider > span > div > main > div > div > div:nth-child(1) > header > div > div > div > span > button";
    boxURLs.forEach((boxURL, index) => {
      browser
        .url(boxURL.trim()) 
        .waitForElementVisible('body', 10000)
        .pause(2000)
        .waitForElementPresent(downloadButtonSelector, 10000)
        .click(downloadButtonSelector)
        .pause(5000)
    });
    browser.end();
  }
};
