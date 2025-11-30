
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('I wanna tell you something, Sachi').split('');
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
            subtitle.innerText = "I’ve been thinking about this for a while, and honestly… i really like you. Not just as someone i talk to, but as someone i genuinely want to keep in my life. You make everything feel a little better, a little lighter, and i catch myself wanting more of that.. more of you. I want us to be something real. Would you be mine?";
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
