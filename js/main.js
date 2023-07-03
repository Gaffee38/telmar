$(".tab-link").click(function () {
  var e = $(this).attr("data-tab");
  $(this).addClass("active").siblings().removeClass("active"),
    $("#tab-" + e)
      .addClass("active")
      .siblings()
      .removeClass("active");
}),
$(function () {
  $('<span class="toggler"></span>').insertBefore($("li.toggleIt ul")),
    $(".toggler").click(function () {
      $(this).next("ul").toggle(200), $(this).toggleClass("open");
    });
});
$(".burger-menu ").on("click",".bar",function(){
  
  $(".burger").toggleClass('burger_open');
  $(".burger__inner").toggleClass('burger__inner_open');
  $("body").toggleClass('overflow-hidden');
  $("header .bar").toggleClass('change');
 });d