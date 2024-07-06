export default function postSize(str) {
  let string = str;
  if (string.indexOf('<') > -1) {
    const end = string.indexOf('>') + 1;
    const beginning = string.indexOf('<');
    string = string.split('');
    string.splice(beginning, end - beginning);
    string = string.join('');
    return postSize(string);
  }
  const result = string.length;
  return result;
}
