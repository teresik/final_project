$(".header__navbar-btn").click(function () {
	$(this).toggleClass("active")
	$(".header__navbar-list").stop(true, true).slideToggle(300, "linear")
})
