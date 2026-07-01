import { postsArray } from "./posts.js";

const viewMoreBtn = document.getElementById("nav-link-viewmore");

let showAll = false;

function getPostsListHtml() {
  let postsListHtml = ``;

  const postToShow = showAll ? postsArray : postsArray.slice(0, 3);

  postToShow.forEach(function (post) {
    postsListHtml += `<div class="post-container">
        <img class="post-img" src="${post.image}"/>
        <p class="post-date">${post.date}</p>
        <h8 class="post-title">${post.title}</h8>
        <p class="post-content">${post.content}</p>
        </div>`;
  });
  return postsListHtml;
}

viewMoreBtn.addEventListener("click", function () {
  showAll = true;
  renderPostsList();
  viewMoreBtn.style.display = "none";
});

function renderPostsList() {
  document.getElementById("other-content").innerHTML = getPostsListHtml();
}
renderPostsList();
