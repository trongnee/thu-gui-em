(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const texts = [
      "Khi chúng ta yêu nhau,",
      "có lẽ là do",
      "định mệnh...",
      "Gửi em : người con gái từng thương."
    ];
    const typingElements = [
      document.querySelector(".typing-1"),
      document.querySelector(".typing-2"),
      document.querySelector(".typing-3"),
      document.querySelector(".typing-4"),
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
          setTimeout(type, 100);
        } else {
          charIndex = 0;
          currentTextIndex++;
          setTimeout(type, delays[currentTextIndex]);
        }
      }
    }
    type();
  });
})();