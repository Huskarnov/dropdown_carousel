export { fillCarousel };

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

const sliders = document.querySelector('.sliders');

function generateImage(item) {
  const image = document.createElement('img');
  image.src = item.image_url;

  return image;
}

function appendItemToParent(parent, item) {
  parent.appendChild(item);
}

function fillCarousel() {
  sliders_list.forEach((item) => {
    const image = generateImage(item);
    appendItemToParent(sliders, image);
  });
}

// fillCarousel();
