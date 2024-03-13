//song list
let All_song = [
  {
    name: "1", // tên bài hát
    path: "music/1.mp3",  // file mp3 em tải xuống
    img: "images/1.jpg",    // ảnh bài hát or ca sĩ
    singer: "Sơn tùng",   
    music:"Nắng ấm xa dần"
  },
  {
    name: "2",
    path: "music/2.mp3",
    img: "images/2.jpg",
    singer: "Sơn tùng",   
    music:"Nắng ấm xa dần"
  },
  {
    name: "3",
    path: "music/3.mp3",
    img: "images/3.jpg",
    singer: "Sơn tùng",   
    music:"Nắng ấm xa dần"
  },
  {
    name: "4",
    path: "music/4.mp3",
    img: "images/4.jpg",
    singer: "Sơn tùng",   
    music:"Nắng ấm xa dần"
  },
  {
    name: "5",
    path: "music/5.mp3",
    img: "images/5.jpg",
    singer: "Sơn tùng",   
    music:"Nắng ấm xa dần"
  },
  {
   name: "6",
   path: "music/6.mp3",
   img: "images/1.jpg",
   singer: "Sơn tùng",   
    music:"Nắng ấm xa dần"
  }
];
let tracks = document.querySelector('.tracks');
for (let i = 0; i < All_song.length; i++) {

 let Html = ` <div class="song">
     <div class="img">
     <img src="${All_song[i].img}"/>
     </div>
     <div class="more">
     <audio src="${All_song[i].path}" id="music"></audio>
     <div class="song_info">
        <p id="title">${All_song[i].name}</p>
        <p>${All_song[i].singer}</p>
        <p>${All_song[i].music}</p>
     </div>
     <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
     </div>
   </div>`;

 tracks.insertAdjacentHTML("beforeend", Html);
};
let searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
   let searchTerm = searchInput.value.toLowerCase();
   let filteredSongs = All_song.filter(song => song.name.toLowerCase().includes(searchTerm));
   tracks.innerHTML = '';
   for (let i = 0; i < filteredSongs.length; i++) {
       let Html = `
           <div class="song">
               <div class="img">
                   <img src="${filteredSongs[i].img}" />
               </div>
               <div class="more">
                   <audio src="${filteredSongs[i].path}" class="music"></audio>
                   <div class="song_info">
                       <p id="title">${filteredSongs[i].name}</p>
                       <p>${filteredSongs[i].singer}</p>
                       <p>${filteredSongs[i].music}</p>
                   </div>
                 <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
               </div>

           </div>`;

       tracks.insertAdjacentHTML('beforeend', Html);
   }
});
