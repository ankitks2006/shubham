// Navigation
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.remove('hidden');
        
        // Update active state
        document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const slider = document.querySelector('.slider');

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

// Auto-rotating video showcase
const showcaseVideo = document.getElementById('showcase-video');
const videos = ['video1.mp4', 'video2.mp4', 'video3.mp4']; // Add your video files
let currentVideo = 0;

showcaseVideo.addEventListener('ended', function() {
    currentVideo = (currentVideo + 1) % videos.length;
    showcaseVideo.src = `videos/${videos[currentVideo]}`;
    showcaseVideo.play();
});

// Modal functionality
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');

function openModal(content) {
    modal.style.display = 'block';
    modalContent.innerHTML = content;
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Sample data - Replace with your actual content
const articles = [
    { title: 'Article 1', content: 'Full content of article 1...' },
    { title: 'Article 2', content: 'Full content of article 2...' },
    // Add more articles
];

const videosList = [
    { title: 'Video 1', src: 'vedio1.mp4' },
    { title: 'Video 2', src: 'vedio2.mp4' },
    // Add more videos
];

const photos = [
    { src: 'photo4.webp', alt: 'Photo 1' },
    { src: 'photo5.png', alt: 'Photo 2' },
    { src: 'photo2.webp', alt: 'Photo 3' },
    { src: 'photo3.webp', alt: 'Photo 4' },
    { src: 'man.png', alt: 'Photo 5' },
    
    // Add more photos
];

const graphics = [
    { src: 'photo1.webp', alt: 'Graphic 1' },
    { src: 'photo2.webp', alt: 'Graphic 2' },
    { src: 'photo4.webp', alt: 'Graphic 3' },
    { src: 'photo5.png', alt: 'Graphic 4' },
    { src: 'photo2.webp', alt: 'Graphic 5' },
    { src: 'photo3.webp', alt: 'Graphic 6' },
    // Add more graphics
];

// Populate content sections
function populateArticles() {
    const container = document.querySelector('.articles-grid');
    articles.forEach(article => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.innerHTML = `<h3>${article.title}</h3>`;
        div.onclick = () => openModal(`<h2>${article.title}</h2><p>${article.content}</p>`);
        container.appendChild(div);
    });
}

function populateVideos() {
    const container = document.querySelector('.videos-grid');
    videosList.forEach(video => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.innerHTML = `<video src="${video.src}"></video><h3>${video.title}</h3>`;
        div.onclick = () => openModal(`<video controls src="${video.src}" style="width:100%"></video>`);
        container.appendChild(div);
    });
}

function populatePhotos() {
    const container = document.querySelector('.photos-grid');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.innerHTML = `<img src="${photo.src}" alt="${photo.alt}">`;
        div.onclick = () => openModal(`<img src="${photo.src}" alt="${photo.alt}" style="max-width:100%">`);
        container.appendChild(div);
    });
}

function populateGraphics() {
    const container = document.querySelector('.graphics-grid');
    graphics.forEach(graphic => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.innerHTML = `<img src="${graphic.src}" alt="${graphic.alt}">`;
        div.onclick = () => openModal(`<img src="${graphic.src}" alt="${graphic.alt}" style="max-width:100%">`);
        container.appendChild(div);
    });
}

// Initialize content
populateArticles();
populateVideos();
populatePhotos();
populateGraphics();
