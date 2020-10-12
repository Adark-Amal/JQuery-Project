$(document).ready(function () {
  $('.box').on('click','.box-button', function () {
    $(this).parent().toggleClass('highlight');
  });
});

// You can use $(this).toggleClass('hightlight')
