$(document).ready(function () {
  var stickyNavTop = $("header").offset().top;
  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1) {
      $("header").addClass("fixed-top");
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("fixed-top");
      $("header").removeClass("sticky");
    }
  };
  stickyNav();
  $(window).scroll(function () {
    stickyNav();
  });
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";
  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });
});

function fadeInAnimation() {
  var reveals = document.querySelectorAll(".fadeInAnimation");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      //reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", fadeInAnimation);
