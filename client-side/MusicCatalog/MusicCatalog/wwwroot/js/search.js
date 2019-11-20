
fetch('api/Albums')
  .then(response => response.json())
  .then(data => {
    const albumsHtml = data.map(album => `
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
    
    const searchResults = document.getElementById('SearchResults');
    searchResults.innerHTML = html;
  });
