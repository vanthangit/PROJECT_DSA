class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addNode(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    removeNode(node) {
      if (node.prev) {
        node.prev.next = node.next;
      } else {
        this.head = node.next;
      }
  
      if (node.next) {
        node.next.prev = node.prev;
      } else {
        this.tail = node.prev;
      }
    }
  }
  
  let All_song = [
    {
      album: "Album 1",
      songs: (() => {
        let dlList = new DoubleLinkedList();
        dlList.addNode({
          name: "5",
          path: "music/5.mp3",
          img: "images/5.jpg",
          singer: "Sơn tùng",
          music: "Nắng ấm xa dần"
        });
        dlList.addNode({
          name: "6",
          path: "music/6.mp3",
          img: "images/1.jpg",
          singer: "Sơn tùng",
          music: "Nắng ấm xa dần"
        });
        return dlList;
      })()
    },
    {
      album: "Album 2",
      songs: (() => {
        let dlList = new DoubleLinkedList();
        dlList.addNode({
          name: "5",
          path: "music/5.mp3",
          img: "images/5.jpg",
          singer: "Sơn tùng",
          music: "Nắng ấm xa dần"
        });
        dlList.addNode({
          name: "6",
          path: "music/6.mp3",
          img: "images/1.jpg",
          singer: "Sơn tùng",
          music: "Nắng ấm xa dần"
        });
        return dlList;
      })()
    }
  ];
  
  let tracks = document.querySelector('.tracks');
  
  for (let i = 0; i < All_song.length; i++) {
    let albumContainer = document.createElement('div');
    albumContainer.classList.add('album-container');
  
    let albumTitle = document.createElement('p');
    albumTitle.textContent = All_song[i].album;
    albumContainer.appendChild(albumTitle);
  
    let currentSong = All_song[i].songs.head;
    while (currentSong) {
      let songHtml = `
        <div class="song">
          <div class="img">
            <img src="${currentSong.data.img}" alt="${currentSong.data.name}" />
          </div>
          <div class="more">
            <audio src="${currentSong.data.path}" id="music${i}_${currentSong.data.name}"></audio>
            <div class="song_info">
              <p>${currentSong.data.name}</p>
              <p>${currentSong.data.singer}</p>
              <p>${currentSong.data.music}</p>
            </div>
            
          </div>
        </div>`;
  
      albumContainer.insertAdjacentHTML("beforeend", songHtml);
      currentSong = currentSong.next;
    }
  
    tracks.appendChild(albumContainer);
  
    // Add spacing between album containers
    if (i < All_song.length - 1) {
      let space = document.createElement('div');
      space.style.marginBottom = '20px';
      tracks.appendChild(space);
    }
  }
  
  let newsong = [
    {
      name: "1",
      path: "music/1.mp3",
      img: "images/1.jpg",
      singer: "Sơn tùng",
      music: "Nắng ấm xa dần"
    },
    {
      name: "2",
      path: "music/2.mp3",
      img: "images/2.jpg",
      singer: "Sơn tùng",
      music: "Nắng ấm xa dần"
    },
    {
      name: "3",
      path: "music/3.mp3",
      img: "images/3.jpg",
      singer: "Sơn tùng",
      music: "Nắng ấm xa dần"
    },
    {
      name: "4",
      path: "music/4.mp3",
      img: "images/4.jpg",
      singer: "Sơn tùng",
      music: "Nắng ấm xa dần"
    },
    {
      name: "5",
      path: "music/5.mp3",
      img: "images/5.jpg",
      singer: "Sơn tùng",
      music: "Nắng ấm xa dần"
    },
    {
      name: "6",
      path: "music/6.mp3",
      img: "images/1.jpg",
      singer: "Sơn tùng",
      music: "Nắng ấm xa dần"
    }
  ];
  
  for (let i = 0; i < newsong.length; i++) {
    let Html = ` <div class="song" data-song-index="${i}">
        <div>
          <h5>Danh sách bài hát</h5>
        </div>
        <div class="img">
          <img src="${newsong[i].img}" />
        </div>
        <div class="more">
          <audio src="${newsong[i].path}" id="music${i}"></audio>
          <div class="song_info">
            <p id="title">${newsong[i].name}</p>
            <p>${newsong[i].singer}</p>
            <p>${newsong[i].music}</p>
          </div>
          <button class="add-song">Thêm</button>
          <div class="album-dropdown">
            <label for="albumSelect"></label>
            <select class="album-select" id="albumSelect">
              <option value="0">Album 1</option>
              <option value="1">Album 2</option>
            </select>
          </div>
        </div>
      </div>`;
  
    tracks.insertAdjacentHTML("beforeend", Html);
  }
  
  document.querySelectorAll('.add-song').forEach(function (button) {
    button.addEventListener('click', function () {
      let songElement = button.closest('.song');
      let songIndex = parseInt(songElement.getAttribute('data-song-index'));
      let selectedAlbum = songElement.querySelector('.album-select');
      let albumIndex = parseInt(selectedAlbum.value);
  
      let newSong = newsong[songIndex];
      if (newSong && newSong.name) {
        All_song[albumIndex].songs.addNode(newSong);
  
        console.log(`Đã thêm bài hát "${newSong.name}" vào Album ${albumIndex + 1}`);
  
        updateUI();
      } else {
        console.error('Lỗi khi truy cập thông tin bài hát.');
      }
    });
  });
  
  document.querySelectorAll('.delete-song').forEach(function (button) {
    button.addEventListener('click', function () {
      let songElement = button.closest('.song');
      let songIndex = parseInt(songElement.getAttribute('data-song-index'));
      let currentSongNode = All_song[0].songs.head;
      
      while (currentSongNode) {
        if (currentSongNode.data === newsong[songIndex]) {
          All_song[0].songs.removeNode(currentSongNode);
          console.log(`Đã xoá bài hát "${newsong[songIndex].name}" khỏi danh sách All_song`);
          updateUI();
          break;
        }
        currentSongNode = currentSongNode.next;
      }
    });
  });
  
  
  function updateUI() {
    tracks.innerHTML = '';
  
    for (let i = 0; i < All_song.length; i++) {
      let albumContainer = document.createElement('div');
      albumContainer.classList.add('album-container');
  
      let albumTitle = document.createElement('p');
      albumTitle.textContent = All_song[i].album;
      albumContainer.appendChild(albumTitle);
  
      let currentSong = All_song[i].songs.head;
      while (currentSong) {
        let songHtml = `
          <div class="song">
            <div class="img">
              <img src="${currentSong.data.img}" alt="${currentSong.data.name}" />
            </div>
            <div class="more">
              <audio src="${currentSong.data.path}" id="music${i}_${currentSong.data.name}"></audio>
              <div class="song_info">
                <p>${currentSong.data.name}</p>
                <p>${currentSong.data.singer}</p>
                <p>${currentSong.data.music}</p>
              </div>
              
              
            </div>
          </div>`;
  
        albumContainer.insertAdjacentHTML("beforeend", songHtml);
        currentSong = currentSong.next;
      }
  
      tracks.appendChild(albumContainer);
  
      if (i < All_song.length - 1) {
        let space = document.createElement('div');
        space.style.marginBottom = '20px';
        tracks.appendChild(space);
      }
    }
  
    for (let i = 0; i < newsong.length; i++) {
      let Html = ` 
        <div class="song" data-song-index="${i}">
          <div>
            <h5>Danh sách bài hát</h5>
          </div>
          <div class="img">
            <img src="${newsong[i].img}" />
          </div>
          <div class="more">
            <audio src="${newsong[i].path}" id="music${i}"></audio>
            <div class="song_info">
              <p id="title">${newsong[i].name}</p>
              <p>${newsong[i].singer}</p>
              <p>${newsong[i].music}</p>
            </div>
            <button class="add-song">Thêm</button>
            <button class="delete-song">Xoá</button> 
            <div class="album-dropdown">
              <label for="albumSelect"></label>
              <select class="album-select" id="albumSelect">
                <option value="0">Album 1</option>
                <option value="1">Album 2</option>
              </select>
            </div>
          </div>
        </div>`;
  
      tracks.insertAdjacentHTML("beforeend", Html);
    }
  
    document.querySelectorAll('.add-song').forEach(function (button) {
      button.addEventListener('click', function () {
        let songElement = button.closest('.song');
        let songIndex = parseInt(songElement.getAttribute('data-song-index'));
        let selectedAlbum = songElement.querySelector('.album-select');
        let albumIndex = parseInt(selectedAlbum.value);
  
        let newSong = newsong[songIndex];
        if (newSong && newSong.name) {
          All_song[albumIndex].songs.addNode(newSong);
          console.log(`Đã thêm bài hát "${newSong.name}" vào Album ${albumIndex + 1}`);
          updateUI();
        } else {
          console.error('Lỗi khi truy cập thông tin bài hát.');
        }
      });
    });
  
    document.querySelectorAll('.delete-song').forEach(function (button) {
        button.addEventListener('click', function () {
          let songElement = button.closest('.song');
          let songIndex = parseInt(songElement.getAttribute('data-song-index'));
          let selectedAlbum = songElement.querySelector('.album-select');
          let albumIndex = parseInt(selectedAlbum.value);
      
          let currentSongNode = All_song[albumIndex].songs.head;
      
          while (currentSongNode) {
            if (currentSongNode.data === newsong[songIndex]) {
              All_song[albumIndex].songs.removeNode(currentSongNode);
              console.log(`Đã xoá bài hát "${newsong[songIndex].name}" khỏi Album ${albumIndex + 1}`);
              updateUI();
              break;
            }
            currentSongNode = currentSongNode.next;
          }
        });
      });
  }
  