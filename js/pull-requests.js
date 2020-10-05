let input = document.getElementById("prequests").value;
let button = document.getElementById("enter");
let value = input;

function pullrequest() {
  fetch("https://api.github.com/orgs/Migracode-Barcelona/repos")
    .then(function(result) {
      console.log(result);
      return result.json();
    })
    .then(function(response) {
      console.log(response);
      const secondList = document.getElementById("pull-requests-list");
      for (let i = 0; i < response.length; i++) {
        const repos = response[i];
        console.log(repos.name);

        const reposList = document.createElement("li");
        reposList.innerHTML = repos.name;
      }
      secondList.appendChild("reposList");
    });
}
pullrequest();
