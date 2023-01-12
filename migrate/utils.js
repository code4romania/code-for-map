const fs = require('fs');

const createFile = (path, data) =>
  fs.writeFile(path, data, (err) => {
    if (err) throw err;
    console.log(`${path} file is created successfully.`);
  });
const stringify = (data, limit) =>
  data.data
    ? JSON.stringify(data)
    : JSON.stringify({ data: limit ? data.filter((_, index) => index < limit) : data });

module.exports = {
  createFile,
  stringify
};
