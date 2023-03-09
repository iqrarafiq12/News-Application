let nav = document.getElementById("scroll-wrap");
let sticky = nav.offsetTop;
window.onscroll = function () {
  sticker();
};
function sticker() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
// Let's fetch some data and add it into the console:

async function fetchNewsData() {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-02-09&sortBy=publishedAt&apiKey=5972328e0ace46a6b88a38732dc4529b"
    );

    const responseData = await response.json();
    console.log(responseData);

    const newsData = responseData.articles;
    const newsList = document.getElementById("ul");

    newsData.forEach((article) => {
      const newstitle = document.createElement("h2");
      const newsdesc = document.createElement("p");
      const newsauthor = document.createElement("p");

      newstitle.textContent = article.title;
      newsdesc.textContent = article.description;
      newsauthor.textContent = article.author;

      // Adding Styles
      newstitle.classList.add("title");
      newsdesc.classList.add("desc");
      newsauthor.classList.add("author");

      const listItem = document.createElement("li");
      listItem.appendChild(newstitle);
      listItem.appendChild(newsdesc);
      listItem.appendChild(newsauthor);
      newsList.appendChild(listItem);
    });

    document.getElementById("news").appendChild(newsList);
  } catch (error) {
    console.log(`Oh bhai check kr: ${error}`);
  }
}

fetchNewsData();
