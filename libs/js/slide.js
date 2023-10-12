if (window.matchMedia("(min-width: 991px)").matches) {
	var minOffset = 50;
	window.onscroll = function() {
		let has_class = document.body.classList.contains("is_scrolled");

		if (minOffset < document.documentElement.scrollTop ) {
			if (!has_class) {
				document.body.classList.add("is_scrolled");
			}
		} else if (has_class) {
			document.body.classList.remove("is_scrolled")
		}

		let scrolled = window.pageYOffset;

		document.getElementById("slide-flower").style.top  = -142 + 'px';
		document.getElementById("slide-paperclip1").style.bottom  = 207+(0.3)*scrolled + 'px';
		document.getElementById("slide-paperclip2").style.bottom  = 245+(0.3)*scrolled + 'px';
		document.getElementById("slide-list").style.bottom  = -350+(0.4)*scrolled + 'px';
		document.getElementById("slide-tablet").style.bottom  = -87+(0.3)*scrolled + 'px';
		document.getElementById("slide-pen").style.bottom  = 45+(0.4)*scrolled + 'px';
	};
};

window.onload = function() {
	var homecontent = document.querySelector(".home-section__content");
	homecontent.classList.add("animate-home__content");

	var slideflower = document.querySelector(".slide-flower");
	slideflower.classList.add("animate-flower");

	var slidepaperclip1 = document.querySelector(".slide-paperclip1");
	slidepaperclip1.classList.add("animate-paperclip1");

	var slidepaperclip2 = document.querySelector(".slide-paperclip2");
	slidepaperclip2.classList.add("animate-paperclip2");

	var slidelist = document.querySelector(".slide-list");
	slidelist.classList.add("animate-list");

	var slidetablet = document.querySelector(".slide-tablet");
	slidetablet.classList.add("animate-tablet");

	var slidepen = document.querySelector(".slide-pen");
	slidepen.classList.add("animate-pen");
};