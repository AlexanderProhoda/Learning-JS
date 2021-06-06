/* Проверка синтаксиса
Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

(user.go)()
*/
let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  }; // отсутсвует ;, т.е. переменная не закончена к заполнению.
  
  (user.go)()