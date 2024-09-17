function wrapLink(link) {
  return `<a href='<https://${link}>'${link}</a>`;
}

function cutLink(link, length) {
  return wrapLink(link.substring(length));
}

export default function changeLinks(text) {
  let string = text;
  string = string.split(' ');

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].includes('https')) {
      string[i] = cutLink(string[i], 8);
    } else if (string[i].includes('http')) {
      string[i] = cutLink(string[i], 7);
    } else if (string[i].includes('/')) {
      string[i] = wrapLink(string[i]);
    }
  }

  string = string.join(' ');
  return string;
}
