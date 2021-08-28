/**
 * @type {{id: number, title: string, date: string }[]}
 */
const todos = require("./todo-list.json");
const { resolve } = require("path");
const { writeFile } = require("fs-extra");

/**
 * @type {string}
 */
const id = process.argv[2];
const filePath = resolve(__dirname, "todo-list.json");

(async function () {
  const changed = todos.filter((todo) => todo.id !== +id);
  await writeFile(filePath, JSON.stringify(changed, undefined, 2));
})();
