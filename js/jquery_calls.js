var my_photo_info = ""

$.each($('.photo'), function(k, v) {

  my_photo_info += $('.Image', v).attr('src');
  my_photo_info += '\n'
  my_photo_info+= $('time', v).text();
  my_photo_info += '\n'

});

console.log(my_photo_info)
