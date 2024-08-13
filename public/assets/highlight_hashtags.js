export default function highlightHashtags(text) {
  let string = text;
  string = string.split(' ');
  const tagArray = [];

  for (let i = 0; i < string.length; i += 1) {
    if (string[i][0] === '#') {
      tagArray.push(string[i]);
    }
  }

  string = string.join(' ');

  for (let i = 0; i < tagArray.length; i += 1) {
    const tag = tagArray[i].substring(1);
    string = string.replace(
      tagArray[i],
      `<a href="/search?tag=${tag}" >#${tag}</a>`,
    );
  }
  return string;
}
