// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
  let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  /* thumbnails選択の別の方法 11.2.1.演習2
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img"); */

  let mainImage = document.querySelector("#gallery-photo img");

  //更新される画像情報
  let galleryInfo = document.querySelector("#gallery-info");
  let title       = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // クリックされたサムネイル画像をメイン画像として設定する
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      //メイン画像のalt属性も書き換える 11.2.1演習1
      //サムネイルのaltを、メイン画像のaltに上書きする
      mainImage.setAttribute("alt", thumbnail.alt);
      //alert(thumbnail.alt); altの変更確認

      //サムネイル画像のオレンジ枠を、現在選択のサムネイルに変更する
      let currentClass = "current";//11.3.1演習
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      //画像情報を更新する
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
