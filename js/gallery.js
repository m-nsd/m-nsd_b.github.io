// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
  let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  /* thumbnails選択の別の方法 11.2.1.演習2
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img"); */
  let mainImage = document.querySelector("#gallery-photo img");
  
  thumbnails.forEach(function(thumbnail) {
    //　大画像をプリロードする
    let newImageSrc  = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function() {
      //(1)クリックされたサムネイル画像をメイン画像として設定する
      mainImage.setAttribute("src", newImageSrc);
      //(1)-2メイン画像のalt属性も書き換える 11.2.1演習1
      //サムネイルのaltを、メイン画像のaltに上書きする
      mainImage.setAttribute("alt", thumbnail.alt);

      //(2)サムネイル画像のオレンジ枠を、現在選択のサムネイル画像に変更する
      let currentClass = "current";//11.3.1演習
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      //(3)画像情報を更新する
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
