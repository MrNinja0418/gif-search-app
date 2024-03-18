const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function addGif(gifUrl) {
  $gifArea.append(
    `<div class="gif col-md-4 col-12 mb-4"><img src="${gifUrl}" class="w-100"></div>`
  );
}

$("form").on("submit", async function (evt) {
  evt.preventDefault();
  const searchTerm = $searchInput.val();
  $searchInput.val("");
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  const gifs = response.data.data;
  if (gifs && gifs.length) {
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    addGif(randomGif.images.original.url);
  }
});

$("#remove").on("click", function () {
  $gifArea.empty();
});
