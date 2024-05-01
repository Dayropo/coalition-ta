$(document).ready(function () {
  $(".tab-content:first").show()
  $(".tab-nav li:first").addClass("active")

  $(".tab-nav li").click(function (event) {
    index = $(this).index()

    $(".tab-nav li").removeClass("active")
    $(this).addClass("active")

    $(".tab-content").hide()
    $(".tab-content").eq(index).show()
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("scrolled")
      $(".nav-brand .brand").show()
    } else {
      $("header").removeClass("scrolled")
      $(".nav-brand .brand").hide()
    }
  })

  $(".nav-brand").click(function () {
    $(window).scrollTop(0)
  })

  $("#history-link").click(function () {
    $(".one")[0].scrollIntoView({
      behaviour: "smooth",
    })
  })

  $("#team-link").click(function () {
    $(".two")[0].scrollIntoView({
      behaviour: "smooth",
    })
  })
})
