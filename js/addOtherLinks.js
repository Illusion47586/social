/*jshint esversion: 6 */

var linkItems = [{
  "name": "2020 so far",
  "color": "207,117,0",
  "href": "",
}, {
  "name": "event update",
  "color": "106,25,125",
  "href": "",
},];

var linkBox = document.getElementById('other-links');

for (var i = 0; i < linkItems.length; i++) {
  const linkContainer = document.createElement('a');
  linkContainer.setAttribute('class', 'other-link');
  linkContainer.setAttribute('href', linkItems[i].href);
  linkContainer.setAttribute('style', "background-color: rgba(" + linkItems[i].color + ", 0.2); color: rgb(" + linkItems[i].color + ")");

  linkContainer.innerText = linkItems[i].name + " ";

  const linkIcon = document.createElement('i');
  linkIcon.setAttribute('class', 'bx bx-link-external');
  linkContainer.appendChild(linkIcon);

  linkBox.appendChild(linkContainer);
}
