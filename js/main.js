$(document).ready(function () {
  $('#container')
  .find(".hot")
  .children()
  .first()
  .next()
  .prev()
  .addClass("highlight");
});
