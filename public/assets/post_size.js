export default function postSize(string) {
    const search = /(https?:\/\/[^\s]+)/g;
    const replace = "";
    const result = string.replaceAll(search, replace).length;

    return result;
}