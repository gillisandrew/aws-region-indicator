# AWS Region Indicator

## Installation

```bash
git clone https://github.com/gillisandrew/aws-region-indicator.git
cd aws-region-indicator
npm install
npm start
```

Copy the JS into [GreaseMonkey](https://www.greasespot.net/) or a similar tool. Modify as needed so it loads on the AWS console.

Copy the CSS into [Stylish](https://addons.mozilla.org/en-US/firefox/addon/stylish/) or a similar tool. Modify so it loads on the AWS console.

## Customizing

I've included my config which disables most regions. A future update might add custom styles for every region but I would just update it so only the regions you use will be loaded. All customization is done in the `config.scss` file in the root of the repository.
