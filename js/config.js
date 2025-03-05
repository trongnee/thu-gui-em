(function () {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#ff6347', // Thêm màu tùy chỉnh
          secondary: '#4682b4'
        },
        fontFamily: {
          sans: ['Maria', 'sans-serif'] // Thay font mặc định
        }
      }
    },
    plugins: [],
  };
})();