const app = document.getElementById('app');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 定义粒子
class Particle {
  constructor(x, y, vx, vy, color, size) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // 边界检查
    if (this.x < 0 || this.x > canvas.width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.vy = -this.vy;
    }
  }
}

// 创建粒子
const particles = [];
for (let i = 0; i < 100; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const vx = Math.random() * 2 - 1;
  const vy = Math.random() * 2 - 1;
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const size = Math.random() * 5 + 1;
  particles.push(new Particle(x, y, vx, vy, color, size));
}

// 动画循环
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.draw();
    particle.update();
  });

  requestAnimationFrame(animate);
}

animate();

// 随机美食
// 随机美食
const foodTypes = ['中餐', '西餐', '快餐', '甜点'];
const restaurants = {
  '中餐': ['老妈蹄花', '川菜馆', '湘菜馆'],
  '西餐': ['肯德基', '麦当劳', '必胜客'],
  '快餐': ['吉野家', '沙县小吃', '兰州拉面'],
  '甜点': ['哈根达斯', 'DQ', '星巴克']
};

const btnFood = document.getElementById('btn-food');
const foodResult = document.getElementById('food-result');

btnFood.addEventListener('click', () => {
  // 生成随机的食物类型
  const foodType = foodTypes[Math.floor(Math.random() * foodTypes.length)];

  // 生成随机的餐厅
  const restaurant = restaurants[foodType][Math.floor(Math.random() * restaurants[foodType].length)];

  // 显示结果
  foodResult.innerHTML = `
    <p>类型：${foodType}</p>
    <p>餐厅：${restaurant}</p>
  `;
});
