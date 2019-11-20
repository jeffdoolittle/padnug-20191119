
var element = function(id) {
  return document.getElementById(id);
}

const searchResults = element('SearchResults');
const searchButton = element('Search');
const clearButton = element('Clear');
const searchQueryInput = element('SearchQuery');
const searchCategorySelect = element('SearchCategory');

const getAlbums = function() {
  return fetch('api/Albums')
    .then(response => response.json());
}

const renderAlbumsHtml = function(albums) {

  const albumsHtml = albums.map(album => `
  <div class="column is-half">
    <div class="box">
      <div class="columns">
        <div class="column">
          <figure class="image is-square">
            <img src="/img/${album.id}.png" alt="${album.title}" />
          </figure>
        </div>
        <div class="column">
          <h2 class="title">${album.title}</h2>
          <h3 class="subtitle">${album.artist}</h3>
          <div>
              Category: ${album.category}
          </div>
        </div>
      </div>
    </div>
  </div>
  `);

  const html = `
  <div class="columns is-multiline">
    ${albumsHtml.join(' ')}
  </div>
  `;

  searchResults.innerHTML = html;
}

const search = function() {
  const searchQuery = searchQueryInput.value;
  const searchCategory = searchCategorySelect.value;

  getAlbums(searchQuery, searchCategory)
    .then(data => renderAlbumsHtml(data));
};

searchButton.addEventListener('click', event => {
  event.preventDefault();
  search();
});

search();
