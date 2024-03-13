
let btn = document.querySelectorAll('.song #play_btn');
let song = document.querySelectorAll('#music');

/*popup music player part*/
let p_m_player = document.querySelector('.popup_music_player');
let down_player = document.querySelector('#down_player');
let current_track_name = document.querySelector('#current_track_name');
let current_singer_name = document.querySelector('#current_singer_name');
let song_img = document.querySelector('.song_img');

/*controlls part*/
let play_pause_btn = document.querySelector('#play_pause_btn');
let slider = document.querySelector('#slider');
let forward_btn = document.querySelector('#forward_btn');
let backward_btn = document.querySelector('#backward_btn');

/*songs duration*/
let current_duration = document.querySelector('.controlls .progress_part #current_duration');
let total_duration = document.querySelector('.controlls .progress_part #total_duration');

/*small music player part*/
let s_m_player = document.querySelector('.small_music_player');
let playing_img = document.querySelector('.playing_img');
let wave_animation = document.querySelector('.wave_animation');
let up_player = document.querySelector('#up_player');
let song_name = document.querySelector('#song_name');
let artist_name = document.querySelector('#artist_name');


/*default values*/
let is_song_played = false;
let song_status = false;
let index_no = 0;
let isRandom = false; // Declare isRandom here

let isRepeat = false; // Declare isRepeat here


btn.forEach((btn,index) => {
  btn.addEventListener('click', function(){

    s_m_player.style.transform = 'translateY(0px)';
    
    if (index != index_no) {
      song_status = false;
    }
    
    index_no = index;

    song[index].currentTime = 0;

  	if (song_status == false) {
      play_song();
  	}else{
      pause_song();	 
  	}

  });
});


/*pause song*/
function pause_song(){
  song[index_no].pause();
  song_status = false;
  clearInterval(update_second);
  wave_animation.style.opacity = '0';
  play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// /*This function will update every 1s*/
//  function update_second(){

// 	  let position = 0;

//     // update slider position
// 		if(!isNaN(song[index_no].duration)){
// 		   position = song[index_no].currentTime * (100 / song[index_no].duration);
// 		   slider.value =  position;
// 	      }

//     let durationMinutes = Math.floor(song[index_no].duration / 60);
//     let durationSeconds = Math.floor(song[index_no].duration - durationMinutes * 60);
//     total_duration.textContent = durationMinutes + ":" + durationSeconds;

//     // Calculate the time left and the total duration
//     let curr_minutes = Math.floor(song[index_no].currentTime / 60);
//     let curr_seconds = Math.floor(song[index_no].currentTime - curr_minutes * 60);
 
//     // Add a zero to the single digit time values
//     if (curr_seconds < 10) { curr_seconds = "0" + curr_seconds; }
//     if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
 
//     // Display the updated duration
//     current_duration.textContent = curr_minutes + ":" + curr_seconds;

       
//   // function will run when the song is over
//     if (song[index_no].ended) {
//         clearInterval(update_second);
//         wave_animation.style.opacity = '0';
//         play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
//       }
// }
/* This function will update every 1s */
function update_second() {
  let position = 0;

  // Update slider position
  if (!isNaN(song[index_no].duration)) {
      position = song[index_no].currentTime * (100 / song[index_no].duration);
      slider.value = position;
  }

  let durationMinutes = Math.floor(song[index_no].duration / 60);
  let durationSeconds = Math.floor(song[index_no].duration - durationMinutes * 60);
  total_duration.textContent = durationMinutes + ":" + durationSeconds;

  // Calculate the time left and the total duration
  let curr_minutes = Math.floor(song[index_no].currentTime / 60);
  let curr_seconds = Math.floor(song[index_no].currentTime - curr_minutes * 60);

  // Add a zero to the single digit time values
  if (curr_seconds < 10) {
      curr_seconds = "0" + curr_seconds;
  }
  if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
  }

  // Display the updated duration
  current_duration.textContent = curr_minutes + ":" + curr_seconds;

  // Check if the song has ended
  if (song[index_no].ended) {
      // If in repeat mode, reset the current song
      if (isRepeat) {
          song[index_no].currentTime = 0;
          play_song();
      } else {
          // Move to the next song
          index_no = (index_no + 1) % All_song.length;
          song[index_no].currentTime = 0;
          play_song();
      }
  }
}

 

/*show popup music player */
up_player.addEventListener('click', function(){
   p_m_player.style.transform = 'translateY(0%)';
});


/* Hide popup music player */
down_player.addEventListener('click', function(){
   p_m_player.style.transform = 'translateY(110%)';
});


/*play pause btn inside the popup Music player*/
play_pause_btn.addEventListener('click', function(){
    if (song_status == false) {
  		song[index_no].play();
      song_status = true;
      wave_animation.style.opacity = '1';
  		this.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  	}else{
  		song[index_no].pause();
      song_status = false;
      wave_animation.style.opacity = '0';
      this.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  	}
});


// change slider position 
function change_duration(){
	slider_position = song[index_no].duration * (slider.value / 100);
	song[index_no].currentTime = slider_position;
}


/*forward btn (next)*/
forward_btn.addEventListener('click', function(){
   
   index_no = index_no + 1;
    if (index_no == All_song.length) {
      index_no = 0;
    }
  
    song[index_no].currentTime = 0;
      play_song();
});


/*backward btn (previous)*/
backward_btn.addEventListener('click', function(){
    
    if (index_no == 0) {
      index_no = All_song.length-1;
    }else{
      index_no = index_no -1;
    }

    song[index_no].currentTime = 0;

    play_song();
});


// /*play function*/
// function play_song(){
//   song[index_no].play();
  
//   if (is_song_played == true) {
//       document.querySelector(".active_song").pause();
//       document.querySelector(".active_song").classList.remove("active_song");
//   }else{
//         is_song_played = true;
//     }
    
//   song[index_no].classList.add("active_song");

//   song_status = true;
//   setInterval(update_second, 1000);
//   wave_animation.style.opacity = '1';
//   p_m_player.style.transform = 'translateY(0%)';

//   song_img.innerHTML = `<img src="${All_song[index_no].img}" />`;
//   playing_img.innerHTML = `<img src="${All_song[index_no].img}" />`;

//   song_name.innerHTML = All_song[index_no].name;
//   artist_name.innerHTML = All_song[index_no].singer;

//   current_track_name.innerHTML = All_song[index_no].name;
//   current_singer_name.innerHTML = All_song[index_no].singer;
//   play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
// }
/* Play function */
function play_song() {
  song[index_no].play();

  if (is_song_played == true) {
      document.querySelector(".active_song").pause();
      document.querySelector(".active_song").classList.remove("active_song");
  } else {
      is_song_played = true;
  }

  song[index_no].classList.add("active_song");

  song_status = true;
  setInterval(update_second, 1000);
  wave_animation.style.opacity = '1';
  p_m_player.style.transform = 'translateY(0%)';

  song_img.innerHTML = `<img src="${All_song[index_no].img}" />`;
  playing_img.innerHTML = `<img src="${All_song[index_no].img}" />`;

  song_name.innerHTML = All_song[index_no].name;
  artist_name.innerHTML = All_song[index_no].singer;

  current_track_name.innerHTML = All_song[index_no].name;
  current_singer_name.innerHTML = All_song[index_no].singer;
  play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';

  // Check if in repeat mode, reset the current song when it ends
  if (isRepeat) {
      song[index_no].addEventListener('ended', function () {
          this.currentTime = 0;
          this.play();
      }, false);
  }
}

/*forward btn (next)*/
forward_btn.addEventListener('click', function(){
  // Kiểm tra xem chế độ ngẫu nhiên có được bật không
  if (isRandom) {
      // Nếu đang ở chế độ ngẫu nhiên, chọn một bài hát ngẫu nhiên
      index_no = Math.floor(Math.random() * All_song.length);
  } else {
      // Nếu không ở chế độ ngẫu nhiên, tăng index_no để chơi bài hát tiếp theo
      index_no = (index_no + 0) % All_song.length;
  }

  song[index_no].currentTime = 0;
  play_song();
});

/* Lắng nghe sự kiện cho nút "Ngẫu nhiên" */
document.getElementById("random_btn").addEventListener("click", function () {
  isRandom = !isRandom; // Đảo ngược trạng thái
  if (isRandom) {
      // Bật chế độ ngẫu nhiên
      document.getElementById("random_btn").classList.add("active");
      console.log("Chế độ ngẫu nhiên bật");
  } else {
      // Tắt chế độ ngẫu nhiên
      document.getElementById("random_btn").classList.remove("active");
      console.log("Chế độ ngẫu nhiên tắt");
  }
});
/* Lắng nghe sự kiện cho nút "Lặp lại" */
document.getElementById("repeat_btn").addEventListener("click", function () {
  isRepeat = !isRepeat; // Đảo ngược trạng thái
  if (isRepeat) {
      // Bật chế độ lặp lại
      document.getElementById("repeat_btn").classList.add("active");
      console.log("Chế độ lặp lại bật");
  } else {
      // Tắt chế độ lặp lại
      document.getElementById("repeat_btn").classList.remove("active");
      console.log("Chế độ lặp lại tắt");
  }
});
let heartIcon = document.getElementById('yeuthich');

heartIcon.addEventListener('click', function () {
    // Lấy chỉ mục của bài hát từ thuộc tính data-index hoặc bất kỳ cách nào bạn sử dụng để xác định bài hát
     // Lấy giá trị của phần tử có ID là 'song_name'
     let songNameElement = document.getElementById('song_name');
     let songIndex= songNameElement.innerText; 

    // Kiểm tra xem bài hát đã có trong danh sách yêu thích chưa
    let isFavorite = favorites.some(item => item === songIndex);

    if (!isFavorite) {
        // Nếu bài hát chưa có trong danh sách yêu thích, thêm vào
        favorites.push(songIndex);
        console.log('Đã thêm vào yêu thích:', All_song[songIndex-1].name);

        // Hiển thị bài hát yêu thích trên trang web
        updateFavoritesDisplay();
    } else {
        // Nếu bài hát đã có trong danh sách yêu thích, xóa khỏi danh sách
        favorites = favorites.filter(item => item !== songIndex);
        console.log('Đã xóa khỏi yêu thích:', All_song[songIndex-1].name);

        // Cập nhật lại hiển thị danh sách yêu thích trên trang web
        updateFavoritesDisplay();
    }

    // Lưu danh sách yêu thích đã cập nhật vào localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
});


// Tải danh sách yêu thích từ localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


function change_volume() {
  let audio = document.getElementById('music'); // Update this ID based on your audio element
  let volumeSlider = document.getElementById('volume_slider');

  audio.volume = volumeSlider.value / 100;
}