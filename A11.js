function show_image() {
  const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
  const params = {
    included_tags: 'maid',
    height: '>=2000'
  };
  fetch(apiUrl, params)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed with status code: ' + response.status);
      }
    })
    .then(data => {

      let downloadUrl = data.images[0].url;
      console.log(downloadUrl);
      displayImage(downloadUrl);
    })
    .catch(error => {
      console.error('An error occurred:', error.message);
    });
}
show_image()
function displayImage(url) {
  let doom = document.querySelector(".images");
  let imgTag = document.createElement('img')
  imgTag.src = url;
  imgTag.id = 'iimmgg';
  // imgTag.loading = 'lazy';
  imgTag.alt = '❤️wifu Image❤️';
  let oldImg = document.getElementById('iimmgg');
  doom.replaceChild(imgTag, oldImg);

  // to ddownload image
  document.getElementById('downloadTheImage').addEventListener('click', () => {
    let anc = document.createElement('a');
    anc.href = url;
    anc.download = `image_${url}`;
    document.body.appendChild(anc);
    anc.click();
    document.body.removeChild(anc);
  })

}
document.getElementById('newImg').addEventListener('click', function () {
  show_image()
})
