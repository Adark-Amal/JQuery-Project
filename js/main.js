$(document).ready(function () {
  $('#butn-create-item').on('click', function() {
    let name = $('#input-create-item').val();
    $('#input-create-item').val('');

    let html = '';
    html += '<div class="item">';
    html += '<div class="name">' + name + '</div>';
    html += '<img src="assets/image.webp" alt="Image">';
    html += '<div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat </div>';
    html += '<div class="price">499</div>';
    html += '<button class="item-add">Add to Cart</button>';
    html += '<button class="item-remove">Remove</button>';
    html += '<br>';
    html += '<a href="#">More info</a>';
    html += '<div class="more-info">Lorem ipsum dolor sit amet consectetur, omnis corporis id excepturi </div>';
    html += '</div>';

    $('#container').prepend(html);
  });

  $('#container').on('click', '.item-remove', function() {
    $(this).parent().remove();
  });
});
// You can use $(this).toggleClass('hightlight')
