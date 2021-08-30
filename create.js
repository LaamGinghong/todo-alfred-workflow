const dayjs = require("dayjs");
const alfy = require("alfy");

let id = require("./id.json");

const keyword = process.argv[2];

(function () {
  const date = dayjs(new Date()).format("YYYY-MM-DD HH:mm");
  id += 1;

  alfy.output([
    { title: keyword, subtitle: date, arg: [keyword, date, id].join(",") },
  ]);
})();
