/*jshint esversion: 6 */

var mainSocialtems = [{
  "name": "dribbble",
  "color": "234, 76, 137",
  "href": "",
  "classes": "bxl-dribbble",
}, {
  "name": "github",
  "color": "51,51,51",
  "href": "",
  "classes": "bxl-github",
},{
  "name": "behance",
  "color": "23,105,255",
  "href": "",
  "classes": "bxl-behance",
}, {
  "name": "linkedin",
  "color": "0,119,181",
  "href": "",
  "classes": "bxl-linkedin",
},{
  "name": "instagram",
  "color": "193,53,132",
  "href": "",
  "classes": "bxl-instagram",
},{
  "name": "email",
  "color": "199,22,16",
  "href": "",
  "classes": "bx-mail-send",
},{
  "name": "youtube",
  "color": "255,0,0",
  "href": "",
  "classes": "bxl-youtube",
},{
  "name": "spotify",
  "color": "29,185,84",
  "href": "",
  "classes": "bxl-spotify",
},];

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());

var socialMain = document.getElementById('social--main');

for (var i = 0; i < mainSocialtems.length; i++) {
  const linkContainer = document.createElement('a');
  linkContainer.setAttribute('class', 'social-item');
  linkContainer.setAttribute('href', mainSocialtems[i].href);
  linkContainer.setAttribute('style', "background-color: rgba(" + mainSocialtems[i].color + ", 0.08)");

  const link = document.createElement('i');
  link.setAttribute('class', 'bx ' + mainSocialtems[i].classes);
  link.style.color = `rgb(${mainSocialtems[i].color})`;
  linkContainer.appendChild(link);

  socialMain.appendChild(linkContainer);
}
