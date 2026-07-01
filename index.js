import { postsArray } from "./posts";

function getPostsListHtml() {
  let postsListHtml = ``;

  postsArray.forEach(function (post) {
    postsListHtml += `<div class="post-container">
            <img class="post-img" src="${post.image}/>
            <p class="post-date">${post.date}</p>
            <h8 class="post-title">${post.titel}</h8>
            <p class="post-content">${post.content}</p>
        </div>`;
  });
  return postsListHtml;
}

function renderPostsList() {
  document.getElementById("other-content").innerHTML = getPostsListHtml;
}
