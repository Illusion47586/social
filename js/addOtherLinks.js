/*jshint esversion: 6 */

var linkItems = [{
  "name": "Github repo",
  "color": "106,25,125",
  "href": "https://github.com/Illusion47586/covid_resources-india",
},{
  "name": "Resource sample sheet",
  "color": "207,117,0",
  "href": "https://docs.google.com/spreadsheets/d/1T5kSK1sdsXPHPqdpucIyA6-oBBm2ySILIAYYPX7DgYc",
}, {
  "name": "Resource volunteer",
  "color": "0, 166, 110",
  "href": "https://forms.gle/sfNE2zy67EbJZJU96",
},];

var linkBox = document.getElementById('other-links');

for (var i = 0; i < linkItems.length; i++) {
  const linkContainer = document.createElement('a');
  linkContainer.setAttribute('class', 'other-link noSelect');
  linkContainer.setAttribute('href', linkItems[i].href);
  linkContainer.setAttribute('style', "background-color: rgba(" + linkItems[i].color + ", 0.2); color: rgb(" + linkItems[i].color + ")");

  linkContainer.innerText = linkItems[i].name + " ";

  const linkIcon = document.createElement('i');
  linkIcon.setAttribute('class', 'bx bx-link-external');
  linkContainer.appendChild(linkIcon);

  linkBox.appendChild(linkContainer);
}
