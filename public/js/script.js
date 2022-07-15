//Using the DOM and client-size JavaScript, make the large image of the gallery
// become the same image as the thumbnail that you click on.
const selectBigImage = small => {
  console.log(small.src)
  document.querySelector('.houseBigImageLeft').src = small.src
}
