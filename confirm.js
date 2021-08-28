const { writeFile } = require("fs-extra");
/**
 * @type {{id: number, title: string, date: string}[]}
 */
const todos = require("./todo-list.json");
const { resolve } = require("path");

const todoPath = resolve(__dirname, "todo-list.json");
const idPath = resolve(__dirname, "id.json");
const [keyword, date, id] = process.argv[2].split(",");

(async function () {
  todos.push({ title: keyword, date, id: +id });

  await Promise.all([
    writeFile(todoPath, JSON.stringify(todos, undefined, 2)),
    writeFile(idPath, JSON.stringify(id)),
  ]);
})();
