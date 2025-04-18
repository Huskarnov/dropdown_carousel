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

(function () {
  //Define elements
  const carousel = document.querySelector('.carousel');
  const sliders = document.querySelector('.sliders');
  const arrow_left = document.querySelector('#arrow_left');
  const arrow_right = document.querySelector('#arrow_right');

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

  //sliders element default movement
  carousel.move = true;
  let currentPosition = 0;

  carousel.addEventListener('mouseover', () => {
    carousel.move = false;
  });
  carousel.addEventListener('mouseout', () => {
    carousel.move = true;
  });

  arrow_left.addEventListener('click', (event) => {
    event.preventDefault();
    moveToLeft();
  });
  arrow_right.addEventListener('click', (event) => {
    event.preventDefault();
    moveToRigh();
  });

  // setInterval(() => {
  //   if (carousel.move === true) {
  //     moveToLeft();
  //   }
  // }, 1000);

  function moveToLeft() {
    if (currentPosition >= -615) {
      currentPosition -= 615;
      sliders.style.transform = `translate(${currentPosition}px)`;
    }
  }
  function moveToRigh() {
    if (currentPosition <= 615) {
      currentPosition += 615;
      sliders.style.transform = `translate(${currentPosition}px)`;
    }
  }

  fillCarousel();
})();
