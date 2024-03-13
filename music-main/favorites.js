
function updateFavoritesDisplay() {
    let favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = '';
    favorites.forEach(songIndex => {
        let favoriteHtml = `
                <div>
                    <p>Favorites</p>
                </div>
            <div class="song">
                
                <div class="img">
                    <img src="${All_song[songIndex-1].img}" />
                </div>
                <div class="more">
                    <audio src="${All_song[songIndex-1].path}" class="music"></audio>
                    <div class="song_info">
                        <p id="title">${All_song[songIndex-1].name}</p>
                        <p>${All_song[songIndex-1].singer}</p>
                        <p>${All_song[songIndex-1].music}</p>
                    </div>
                    
                </div>
            </div>`;

        favoritesList.insertAdjacentHTML('beforeend', favoriteHtml);
    });
}
updateFavoritesDisplay();

