"use strict";

const alfy = require("alfy");
const todos = require("./todo-list.json");

(function () {
  if (!todos.length) {
    alfy.output([
      { title: "空", subtitle: "当前所有todo都已完成", arr: "empty" },
    ]);
    return;
  }

  alfy.output(
    todos.map((todo) => ({
      title: todo.title,
      subtitle: todo.date,
      arg: todo.id,
    }))
  );
})();
