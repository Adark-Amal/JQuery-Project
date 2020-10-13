var cart = 0;

function addItem(id, name, description, price, moreInfo){
  let html = '';
  html += '<div class="item" data-id="' + id + '">';
  html += '<div class="name">' + name + '</div>';
  html += '<img src="assets/image.webp" alt="Image">';
  html += '<div class="description">' + description + '</div>';
  html += '<div class="price">' + price + '</div>';
  html += '<button class="item-add">Add to Cart</button>';
  html += '<button class="item-remove">Remove</button>';
  html += '<br>';
  html += '<a class="more-info-link" href="#">More info</a>';
  html += '<div class="more-info">' + moreInfo + '</div>';
  html += '</div>';

  $('#container').prepend(html);
}


$(document).ready(function () {
  $('#container').on('click', '.more-info-link', function(event) {
    event.preventDefault();

    $(this).parent().find('.more-info').slideToggle(100);
    $(this)
      .animate({"opacity": 0.5, "margin-left": 10}, 100)
      .animate({"opacity": 1.0, "margin-left": 0}, 100)
  });

  $('#container').on('click', '.item-remove', function() {
    $(this).parent().remove();
  });

  $.ajax('data/items.json', {
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  })
    .done(function(response){
      let items = response.items;
      items.forEach(function(item){
        addItem(item.id, item.name, item.description, 
          item.price, item.moreInfo);
      });
    })

    .fail(function(request, errorType, errorMessage){
        console.log(errorMessage);
    })

    .always(function(){

    });

    $('#container').on('click', '.item-add', function() {
      let id = $(this).parent().data('id');
      $.ajax('data/addToCart.json', {
        type: 'POST',
        data: {id: id},
        dataType: 'json',
        contentType: 'application/json'
      })
      .done(function(response) {
        if(response.message === 'success'){
          let price = response.price;
          cart += price;

          $('#cart-container').text('$' + cart);
        }
      });
    });

    $('#newsletter-checkbox').on('change', function() {
      if ($(this).is(':checked')){
        $('#newsletter-frequency').fadeIn();
      } else {
        $('#newsletter-frequency').fadeOut();
      }
    });
    $('#newsletter-checkbox').trigger('change');

    $('#cart-form').on('submit', function(event) {
      event.preventDefault();

      let data = {form: $(this).serialize(), price: cart};

      $.ajax($(this).attr('action'), {
        type: 'POST',
        data: data,
      })
      .done(function(response) {
        $('#feedback-message').text(response.message);
      });
    });
});

// You can use $(this).toggleClass('hightlight')
