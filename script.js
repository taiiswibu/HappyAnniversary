const images = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
  'img/11.jpg',
  'img/12.jpg'
];

const captions = [
  'Tình yêu bắt đầu từ ánh nhìn đầu tiên 💘',
  'Mỗi khoảnh khắc bên em là một phép màu 💫',
  'Hai ta – một thế giới riêng biệt 💑',
  'Em là giấc mơ ngọt ngào trong anh 🌙',
  'Cảm ơn em đã đến và ở lại 🌹',
  'Chúng ta – hai trái tim, một nhịp đập ❤️',
  'Tình yêu không cần lý do, chỉ cần em 💖',
  'Tay trong tay, cùng nhau đi đến cuối đời 🤝',
  'Nụ cười của em là ánh sáng mỗi ngày của anh ☀️',
  'Dù thế giới đổi thay, anh vẫn chọn em 🥰',
  'Yêu em hơn cả ngàn lời nói 💬',
  '24/06 – khởi đầu cho hành trình mãi mãi ⏳'
];

let index = 0;
const slider = document.getElementById("slider");
const caption = document.getElementById("caption");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function showImage(i) {
  slider.classList.remove("fade-in");
  caption.classList.remove("fade-in");
  void slider.offsetWidth;
  slider.src = images[i];
  caption.textContent = captions[i];
  slider.classList.add("fade-in");
  caption.classList.add("fade-in");
}

prevBtn.onclick = () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
};

nextBtn.onclick = () => {
  index = (index + 1) % images.length;
  showImage(index);
};

// Tự động chuyển ảnh
setInterval(() => {
  index = (index + 1) % images.length;
  showImage(index);
}, 3000);

// Hiển thị ảnh đầu tiên
showImage(index);

const fallingContainer = document.getElementById('falling-container');
const symbols = ['💖', '🌸', '💐', '🌷', '❤️','💋','😍','❣️'];

function createFallingItem() {
  const item = document.createElement('div');
  item.classList.add('falling-item');
  item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  item.style.left = Math.random() * 150 + 'vw';
  item.style.animationDuration = (3 + Math.random() * 6) + 's';
  item.style.fontSize = (30 + Math.random() * 30) + 'px';
  fallingContainer.appendChild(item);

  // Xóa sau khi hoàn tất animation
  setTimeout(() => {
    item.remove();
  }, 7000);
}

setInterval(createFallingItem, 300);

