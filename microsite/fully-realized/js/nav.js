$(document).ready(function () {
  $('#nav-toggle').click(function () {
    $('#nav-links').toggleClass('show');
  });

  const path = window.location.pathname.split('/').pop();
  $('#nav-links a').each(function () {
    if ($(this).attr('href') === path) {
      $(this).addClass('active');
    }
  });
});
