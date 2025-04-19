const sliders_list = [
  {
    image_url: 'https://i.ibb.co/ksywnzj4/istockphoto-2162367310-1024x1024.jpg',
  },
  {
    image_url: 'https://i.ibb.co/fzxM8GDd/istockphoto-2163630620-1024x1024.jpg',
  },
  {
    image_url: 'https://i.ibb.co/hJm59rKJ/istockphoto-2167996762-1024x1024.jpg',
  },
  {
    image_url: 'https://i.ibb.co/cKJtBPpW/istockphoto-2168393347-1024x1024.jpg',
  },
  {
    image_url: 'https://i.ibb.co/Cp92LjMr/istockphoto-2171497774-1024x1024.jpg',
  },
];
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
(function () {
  //Define elements
  const carousel = document.querySelector('.carousel');
  const sliders = document.querySelector('.sliders');
  const arrow_left = document.querySelector('#arrow_left');
  const arrow_right = document.querySelector('#arrow_right');

  carousel.move = true;
  let currentPosition = 0;

  let previousChildRank;
  let childRank = 3;

  //Fill the carousel with images
  function generateImage(slide) {
    const image = document.createElement('img');
    image.src = slide.image_url;

    return image;
  }

  function appendItemToParent(parent, item) {
    parent.appendChild(item);
  }

  function fillCarousel() {
    sliders_list.forEach((slide, index) => {
      const image = generateImage(slide);
      appendItemToParent(sliders, image);
    });
  }

  //sliders movement and navigation

  function allocateImageAndNavDotsClickEvents() {
    const navDotsNodeList = document.querySelector('.navDots').children;
    const navDotsArray = Array.from(navDotsNodeList);
    navDotsArray.forEach((navDot, index) => {
      navDot.addEventListener('click', (event) => {
        event.preventDefault();
        currentPosition = 1230 - 615 * index;
        moveSliders();
        highlightCurrentImageAndNavDot();
      });
    });

    const slidersNodeList = sliders.children;
    const slidersArray = Array.from(slidersNodeList);
    slidersArray.forEach((image, index) => {
      image.addEventListener('click', (event) => {
        event.preventDefault();
        currentPosition = 1230 - 615 * index;
        moveSliders();
        highlightCurrentImageAndNavDot();
      });
    });
  }

  carousel.addEventListener('mouseover', () => {
    carousel.move = false;
  });
  carousel.addEventListener('mouseout', () => {
    carousel.move = true;
  });

  arrow_right.addEventListener('click', (event) => {
    event.preventDefault();
    moveToLeft();
  });
  arrow_left.addEventListener('click', (event) => {
    event.preventDefault();
    moveToRigh();
  });

  function moveSliders() {
    sliders.style.transform = `translate(${currentPosition}px)`;
  }

  function moveToLeft() {
    if (currentPosition > -1230) {
      currentPosition -= 615;
    } else {
      currentPosition = 1230;
    }
    moveSliders();
    highlightCurrentImageAndNavDot();
  }
  function moveToRigh() {
    if (currentPosition < 1230) {
      currentPosition += 615;
    } else {
      currentPosition = -1230;
    }
    moveSliders();
    highlightCurrentImageAndNavDot();
  }

  function highlightCurrentImageAndNavDot() {
    previousChildRank = childRank;

    switch (currentPosition) {
      case 0:
        childRank = 3;
        break;
      case -615:
        childRank = 4;
        break;
      case -1230:
        childRank = 5;
        break;
      case 615:
        childRank = 2;
        break;
      case 1230:
        childRank = 1;
        break;
    }

    const currentImage = document.querySelector(
      `.sliders > img:nth-Child(${childRank})`
    );
    currentImage.style.borderColor = 'red';

    const currentDot = document.querySelector(
      `.navDots > li:nth-Child(${childRank}) > a`
    );
    currentDot.style.fontSize = '3rem';
    currentDot.style.color = 'red';

    if (previousChildRank !== childRank) {
      const previousImage = document.querySelector(
        `.sliders > img:nth-Child(${previousChildRank})`
      );
      previousImage.style.borderColor = 'black';

      const previousDot = document.querySelector(
        `.navDots > li:nth-Child(${previousChildRank}) > a`
      );
      previousDot.style.fontSize = '2rem';
      previousDot.style.color = 'black';
    }
  }

  //executions
  setInterval(() => {
    if (carousel.move === true) {
      moveToLeft();
    }
  }, 5000);

  // sliders.style.transform = `translate(${currentPosition}px)`;
  fillCarousel();
  highlightCurrentImageAndNavDot();
  allocateImageAndNavDotsClickEvents();
  sliders.classList.add('transition_ease');
})();
