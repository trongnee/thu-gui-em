(function () {
  document.addEventListener("DOMContentLoaded", async function () {
    const texts = [
      "Khi chúng ta yêu nhau,",
      "có lẽ là do",
      "định mệnh...",
      "Gửi em : người con gái từng thương.",
      "Hà Nội , 10/03/2025"
    ];
    const typingElements = [
      document.querySelector(".typing-1"),
      document.querySelector(".typing-2"),
      document.querySelector(".typing-3"),
      document.querySelector(".typing-4"),
      document.querySelector(".typing-5"),
    ];
    const delays = [
      200,
      400,
      600,
      200
    ];
    let currentTextIndex = 0;
    let charIndex = 0;
    function type() {
      if (currentTextIndex < texts.length) {
        if (charIndex < texts[currentTextIndex].length) {
          typingElements[currentTextIndex].textContent += texts[currentTextIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 5);
        } else {
          charIndex = 0;
          currentTextIndex++;
          setTimeout(type, delays[currentTextIndex]);
        }
      } else {
        processText();
        window.addEventListener('scroll', revealText);
        revealText();
      }
    }
    type();
    function processText() {
      const inputDiv = document.getElementById('text-section');
      const fragments = inputDiv.innerHTML.split('<br>');

      const linesArray = [];
      let currentLine = '';

      // Tạo một span tạm thời để đo lường
      const tempSpan = document.createElement('span');
      tempSpan.style.font = getComputedStyle(inputDiv).font;
      tempSpan.style.lineHeight = getComputedStyle(inputDiv).lineHeight;
      tempSpan.style.width = inputDiv.offsetWidth + 'px';
      tempSpan.style.position = 'absolute';
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.letterSpacing = 3 + 'px';
      document.body.appendChild(tempSpan);

      // Đo từng từ và tách dòng
      fragments.forEach(fragment => {
        const text = fragment.trim();
        if (!text) return;

        const words = text.split(' ');
        let currentLine = '';
        const singleLineHeight = parseFloat(getComputedStyle(inputDiv).lineHeight);

        words.forEach(word => {
          const testLine = currentLine + (currentLine ? ' ' : '') + word;
          tempSpan.textContent = testLine;

          if (tempSpan.offsetHeight > singleLineHeight && currentLine) {
            linesArray.push(currentLine);
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        });

        if (currentLine) {
          linesArray.push(currentLine);
        }
      });
      // Thêm dòng cuối cùng nếu còn
      if (currentLine) {
        linesArray.push(currentLine);
      }

      // Xóa span tạm
      document.body.removeChild(tempSpan);

      // Xóa nội dung cũ và hiển thị kết quả
      inputDiv.innerHTML = '';
      linesArray.forEach((line, index) => {
        const div = document.createElement('div');
        div.className = 'line';
        div.innerHTML = line;
        div.style.transitionDelay = `${index * 0.3}s`; // Độ trễ giữa các dòng
        inputDiv.appendChild(div);
      });
    }
    function revealText() {
      const section = document.querySelector('#text-section');
      const windowHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight + 150 && !section.classList.contains('visible')) {
        section.classList.add('visible');
      }
    }
  });
})();