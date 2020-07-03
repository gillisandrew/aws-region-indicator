# AWS Region Indicator

## Installation

```bash
git clone https://github.com/gillisandrew/aws-region-indicator.git
cd aws-region-indicator
npm install
npm start
```

Copy the JS into [GreaseMonkey](https://www.greasespot.net/) or a similar tool. Change as needed so it loads on the AWS console.

Copy the CSS into Stylish ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/stylish/), [Chrome](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe)) or a similar tool. Change so it loads on the AWS console.

## Customizing

Commenting out a region removes it from the selection dropdown. Its a good way to hide regions you are not using. I've added default colors but you should change them so the regions you use most often have the most distinctive colors. All customization is in the `config.scss` file in the root of the repository.
