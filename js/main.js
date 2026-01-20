document.addEventListener('DOMContentLoaded', () => {
  const starsBlocks = document.querySelectorAll('.stars');

  starsBlocks.forEach(block => {
    const stars = block.querySelectorAll('.stars__star');
    let currentRating = getCurrentRating(block);

    // Inicializa o bloco com a classificação correta
    updateStars(block, currentRating);

    // Adiciona eventos para cada estrela
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        currentRating = index + 1;
        updateBlockRating(block, currentRating);
        updateStars(block, currentRating);
      });

      star.addEventListener('mouseover', () => {
        highlightStars(stars, index);
      });

      star.addEventListener('mouseout', () => {
        highlightStars(stars, currentRating - 1);
      });
    });
  });

  function getCurrentRating(block) {
    const classList = Array.from(block.classList);
    const ratingClass = classList.find(cls => cls.startsWith('stars--'));
    return ratingClass ? parseInt(ratingClass.split('--')[1]) : 0;
  }

  function updateBlockRating(block, rating) {
    // Remove todas as classes de rating existentes
    block.classList.forEach(cls => {
      if (cls.startsWith('stars--')) {
        block.classList.remove(cls);
      }
    });

    // Adiciona a nova classe de rating
    block.classList.add(`stars--${rating}`);
  }

  function updateStars(block, rating) {
    const stars = block.querySelectorAll('.stars__star');
    highlightStars(stars, rating - 1);
  }

  function highlightStars(stars, activeIndex) {
    stars.forEach((star, index) => {
      if (index <= activeIndex) {
        star.style.backgroundImage = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6IiBmaWxsPSIjZmZjMTA3Ii8+PC9zdmc+")';
      } else {
        star.style.backgroundImage = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6IiBmaWxsPSIjY2NjY2NjIi8+PC9zdmc+")';
      }
    });
  }
});
