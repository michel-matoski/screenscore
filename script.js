document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const movieName = document.getElementById('movieName').value;
    const movieRating = document.querySelector('input[name="rating"]:checked')?.value;
    const movieImageInput = document.getElementById('movieImage');
    
    if (movieName && movieRating && movieImageInput.files.length > 0) {
        const movieImage = movieImageInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const movieGrid = document.getElementById('movieGrid');
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            
            const image = document.createElement('img');
            image.src = e.target.result;
            image.alt = movieName;
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            
            const text = document.createElement('div');
            text.textContent = `${movieName} - Nota: ${movieRating}`;
            
            overlay.appendChild(text);
            movieItem.appendChild(image);
            movieItem.appendChild(overlay);
            movieGrid.appendChild(movieItem);
        };
        
        reader.readAsDataURL(movieImage);
        
        document.getElementById('movieForm').reset();

        // Mostrar a lista de filmes após o primeiro filme ser adicionado
        const movieListContainer = document.getElementById('movieListContainer');
        movieListContainer.style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos e selecione uma imagem.');
    }
});
