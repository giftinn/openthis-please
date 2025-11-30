
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('I LOVE YOU, APEL').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); 
          } else {
            const subtitle = document.createElement('p');
            subtitle.innerText = "in a world full of people, you're the one who stands out to me. i may not say it often, but you're always on my mind. i just want you to know how much you mean to me. please take care of yourself you're really important to me. and… i need to be honest. i like you so much. i love you, baby. can i ask how you feel about me?";
            subtitle.style.fontSize = '20px'; 
            subtitle.style.marginTop = '2px'; 
            subtitle.style.color = '#fff';

            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
