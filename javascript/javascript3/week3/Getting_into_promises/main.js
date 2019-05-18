const classmates = ["Maria bastos", "Ilir Memedi", "Kristina Jensen"];

let classmate1 = function() {
  return fetch(
    "https://api.github.com/search/repositories?q=user:MariaFBastos"
  ).then(response => response.json());
};

let classmate2 = function() {
  return fetch(
    "https://api.github.com/search/repositories?q=user:lil2400"
  ).then(response => response.json());
};

let classmate3 = function() {
  return fetch("https://api.github.com/search/repositories?q=user:kika75").then(
    response => response.json()
  );
};

let ul = document.getElementById("classMates");

function renderRepositories() {
  Promise.all([classmate1(), classmate2(), classmate3()]).then(res => {
    console.log(res);
    console.log(res.length);
    console.log(res[0].items[0].name);
    for (i = 0; i < classmates.length; i++) {
      let li = document.createElement("li");
      li.setAttribute("id", "fellows");
      li.innerHTML = classmates[i];
      ul.appendChild(li);
      let innerUl = document.createElement("ul");
      li.appendChild(innerUl);
      for (j = 0; j < res[i].items.length; j++) {
        let innerli = document.createElement("li");
        innerli.setAttribute("id", "innerli")
        innerli.innerHTML =
          "(Fullname) : " +
          res[i].items[j].full_name +
          " (Owner) : " +
          res[i].items[j].owner.login +
          " (Url) : " +
          res[i].items[j].url;
        innerUl.appendChild(innerli);
      }
    }
  });
}
renderRepositories();

//lil2400
//kika75
//MariaFBastos
