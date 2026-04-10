// Dữ liệu mẫu
const movies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        genre: "Hành động, Khoa học viễn tưởng",
        duration: "181 phút",
        rating: "8.4",
        poster: "https://source.unsplash.com/random/300x450/?avengers",
        description: "Siêu anh hùng đối đầu với Thanos."
    },
    {
        id: 2,
        title: "Dune: Part Two",
        genre: "Khoa học viễn tưởng",
        duration: "166 phút",
        rating: "8.7",
        poster: "https://source.unsplash.com/random/300x450/?dune",
        description: "Paul Atreides tiếp tục hành trình."
    },
    // Thêm nhiều phim nữa nếu muốn
];

function renderFeaturedMovies() {
    const container = document.getElementById('featured-movies');
    if (!container) return;
    
    container.innerHTML = movies.slice(0, 4).map(movie => `
        <div class="movie-card">
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.duration}</p>
                <p>⭐ ${movie.rating}</p>
                <a href="booking.html?movie=${movie.id}" class="btn" style="display:block; margin-top:10px; text-align:center;">Đặt vé</a>
            </div>
        </div>
    `).join('');
}

// Gọi khi load trang
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedMovies();
});