const localPort = "http://localhost:3000/";

const candidates = `${localPort}candidates`;
const categories = `${localPort}categories`;

const apiExport = [
  ["candidates", candidates],
  ["categories", categories],
];

const Api = Object.fromEntries(apiExport);
console.log(Api.categories);

export default Api;
