
        const music=document.querySelector("audio");
        const img=document.querySelector("img");
        const play=document.getElementById("play");
        const artistr=document.getElementById("artist");
        const title=document.getElementById("title");
        const next=document.getElementById("next");
        const prev=document.getElementById("prev");
        const songs=[
            {
            name:"music1",
            title:"Lotus Lane",
            artist:"Loyalist",
            img:"img1"
            
          },
          {
            name:"music2",
            title:"Sappherios",
            artist:"Aurora",
            img:"img2"
          }, 
          {
            name:"music3",
            title:"jagrity shani",
            artist:"chugli karenavali",
            img:"jagrity"
          },
          {
            name:"music4",
            title:"jagrity shani",
            artist:"chugli karenavali",
            img:"img3"
          },
          {
            name:"music5",
            title:"jagrity shani",
            artist:"chugli karenavali",
            img:"img4"
          },
          {
            name:"music6",
            title:"jagrity shani",
            artist:"chugli karenavali",
            img:"img5"
          },
          {
            name:"music7",
            title:"jagrity shani",
            artist:"chugli karenavali",
            img:"img6"
          },
          {
            name:"music8",
            title:"jagrity shani",
            artist:"chugli karenavali",
            img:"img7"
          },
    ]
        let isPlaying=false;
            // for play function
         const playMusic= () => {
            isPlaying=true;
            music.play();
            
            play.classList.replace("fa-play", "fa-pause");
            img.classList.add("anime");
         }
            // for pause function
         const  pauseMusic=() => {
            isPlaying=false;
            music.pause();

            play.classList.replace("fa-pause", "fa-play");
            img.classList.remove("anime");
         }
      
         play.addEventListener('click' , () => {
            // if(isPlaying){
            //     pauseMusic();
            // }
            // else{
            //     playMusic();
            // }

            // ternary operator use upper wala worl also
            isPlaying ? pauseMusic() : playMusic();
         })

        //  changin the music data

        const loadSong=(songs) =>{
         
            title.textContent=songs.title;
            artist.textContent=songs.artist;
            music.src="music/" + songs.name + ".mp3";
            img.src="images/" + songs.img+ ".png";
        };
        songIndex=0
        // loadSong(songs [1]);
        const nextSong=() =>{
        // songIndex++;
        songIndex=(songIndex+1)% songs.length;
        // suppose  1=2%2
        loadSong(songs[songIndex]);
       playMusic();
        };

        const prevSong=() =>{
       songIndex=(songIndex - 1 + songs.length) % songs.length;
      
       loadSong(songs[songIndex]);
       playMusic();
        };

        next.addEventListener('click', nextSong);
        prev.addEventListener('click', prevSong);

   