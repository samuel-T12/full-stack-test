var searchResults = [];
// reduce api calls
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const inputChange = debounce(() => callApi());

// function to fetch data from php and insert results to ui
function callApi() {
  const searchText = document.getElementById("search-input").value;
  const list = document.getElementById("results");
  list.replaceChildren();

  if (searchText.length > 0) {
    $.ajax({
      url: "http://localhost:8000", //the page containing php script
      type: "post", //request type,
      dataType: "json",
      data: { data: "success" },
      success: function (result) {
        searchResults = result.filter((x) => x.name.includes(searchText));
        if (searchResults.length > 0 && searchText.length > 0) {
          searchResults.forEach((element) => {
            var newNode = document.createElement("li");
            var textnode = document.createTextNode(element.name);
            newNode.appendChild(textnode);
            newNode.className = "list-item";
            document.getElementById("results").appendChild(newNode);
          });
        }

        console.log("s-result", searchResults);
      },
      error: function (result) {
        console.log("error", result);
      },
    });
  }
}
document.getElementById("search-input").addEventListener("keyup", async (e) => {
  const searchText = document.getElementById("search-input").value;
  const list = document.getElementById("results");
  list.replaceChildren();

  if (searchText.length > 0) {
    inputChange();
  }

  // Search comments
  // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
  // Display the results in the UI

  // Things to look out for
  // ---
  // Use es6
  // Error handling
});
