const img = document.createElement('img');



const imgUrl = new URL('./media/jaromir-kalina-spdQ1dVuIHw-unsplash.jpg', import.meta.url);
img.src = imgUrl.href;
document.body.append(img);

console.log(import.meta);

