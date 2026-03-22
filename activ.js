// ページ読み込み時、共通部品読み出し
function header(){
  $.ajax({
      url: "header.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}

$('#hamburger').on('click', function(){
  $('.icon').toggleClass('close');
  $('.sm').slideToggle();
});
