console.log('yo');
if (window.location.pathname.indexOf("/message_threads") != -1) {
  var student_url = $($('.subject_line a')[0]).attr('href');
  var checkpoint_name = $($('h4')[2]).html().match(/(.+) discussion/)[1];  

  $.get(student_url + '/checkpoints').success(function(response) {
    var html = $(response);
    var checkpoint_url = html.find("a:contains('" + checkpoint_name + "')").attr('href');
    $($('h4')[2]).wrapInner( "<a href='" + checkpoint_url + "'></a>");
  });
}