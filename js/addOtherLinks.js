/*jshint esversion: 6 */

var linkItems = [{
  "name": "download bookworm app",
  "color": "106,25,125",
  "href": "https://drive.google.com/file/d/1hNBircv0egOnM4VktQOtM-blWuNCVjnr/view?usp=sharing",
},{
  "name": "2020 so far",
  "color": "207,117,0",
  "href": "https://illusion47586.github.io/2020sofar",
}, {
  "name": "event submission",
  "color": "2, 207, 138",
  "href": "https://forms.gle/NRvcnExXe5N8QWFb8",
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
