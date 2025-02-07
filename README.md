# box_downloader
Automated Box.com File Downloader using Nightwatch.js A Nightwatch.js script that automates downloading files from multiple Box.com links, iterating through URLs stored in a text file, clicking the download button.

🛠️ Setup & Installation

1️⃣ Install Dependencies

✔ **Make sure you have Node.js installed, then install the required packages:

✔ **npm install -g nightwatch chromedriver

2️⃣ Configure Nightwatch.js

If you haven’t set up Nightwatch, create a nightwatch.conf.js file and add:
``` nodejs
module.exports = {
  src_folders: ['tests'], // Path to test scripts
  output_folder: 'tests_output', // Folder for reports/screenshots
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--disable-gpu'], // Remove '--headless' if you want to see the browser
        }
      }
    }
  }
};
```
Run 
```
npx nightwatch tests/box_download_test.js
```
