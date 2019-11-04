// ==UserScript==
// @name     AWS Region Indicator
// @namespace https://console.aws.amazon.com/*
// @version  1
// @grant    none
// ==/UserScript==

const region = location.search.match(/region=((?:us(?:-gov)?|ap|ca|cn|eu|sa)-(?:central|(?:north|south)?(?:east|west)?)-\d)\??/)[1];
if(region) {
  document.querySelector("body").classList.add(region);
}