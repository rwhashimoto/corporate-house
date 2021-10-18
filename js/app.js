$(function(){
    $('.l-header-btn').on('click', function() {
      $('body').toggleClass('active');
      return false;
    });
  });


  
// // IFrame Player API の読み込み
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   function onYouTubeIframeAPIReady() {
//     ytPlayer = new YT.Player(
//         'mv', // 埋め込む場所の指定
//          {
//             width: 640, // プレーヤーの幅
//            height: 390, // プレーヤーの高さ
//              videoId: 'WCXMvNrFz6s', // YouTubeのID
//           // イベントの設定
//            events: {
//                 'onReady': onPlayerReady, // プレーヤーの準備ができたときに実行
//                  'onStateChange': onPlayerStateChange // プレーヤーの状態が変更されたときに実行
//             }
//         }
//     );
//  }