////// scroll header //////
let lastScrollTop = 0;
$(window).scroll(function(){
	let st = $(this).scrollTop();
	if (st > lastScrollTop){
		$('.header').css('top','-52px');
	} else {
		$('.header').attr('style', '')
	}
	lastScrollTop = st;
});
////// ---scroll header--- //////

////// navbar toggle //////
$('.navbar-toggle').on('click', function (e) {
	e.stopPropagation();
	$('.navbar-toggle .icon-toggle').toggleClass('active');
	$('.navbar-menu').slideToggle();
	$('.custom-select__wrap').find('.active').removeClass('active');
})
$('.navbar-menu__container').on('click', function (e) {
	e.stopPropagation();
})
$(document).on('click', function () {
	$('.navbar-toggle .icon-toggle').removeClass('active');
	$('.navbar-menu').slideUp();
})
////// ---navbar toggle--- //////

////// navbar search //////
let navbarSearchContent = document.querySelector('.navbar-search');
let navbarSearchInput = document.querySelector('.navbar-search input');
navbarSearchInput.addEventListener('focus', function () {
	navbarSearchContent.classList.add('active');
})
navbarSearchInput.addEventListener('blur', function () {
	navbarSearchContent.classList.remove('active');
})
////// ---navbar search--- //////

////// header mobile //////
let headerMobileToggle = document.querySelector('.navbar-toggle-menu .icon-toggle');
let headerMobile = document.querySelector('.header-mobile');
if (headerMobileToggle) {
	headerMobileToggle.addEventListener('click', function () {
		this.classList.toggle('active');
		headerMobile.classList.toggle('active');
		document.body.classList.toggle('overflow-h');
	})
}

let navbarMobileToggle = document.querySelector('.navbar-toggle-mobile');
let navbarMobile = document.querySelector('.navbar-mobile');
if (navbarMobileToggle) {
	navbarMobileToggle.addEventListener('click', function () {
		document.querySelector('.navbar-toggle-mobile .icon-toggle').classList.toggle('active');
		navbarMobile.classList.toggle('active');
		document.body.classList.toggle('overflow-h');
	})
}
////// --header mobile-- //////

////// custom select //////
$('.custom-select').each(function() {
	let $this = $(this), numberOfOptions = $(this).children('option').length;

	$this.addClass('custom-select__hidden');
	$this.wrap('<div class="custom-select__wrap"></div>');
	$this.after('<div class="custom-select"></div>');

	let $styledSelect = $this.next('div.custom-select');
	$styledSelect.text($this.children('option').eq(0).text());

	//let $list = $('<div class="custom-select__options-wrap"><ul class="custom-select__options" /></div>').insertAfter($styledSelect);
	let $list = $('<ul />', {
		'class': 'custom-select__options'
	}).insertAfter($styledSelect);

	for (let i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
	}

	//let $listItems = $('.custom-select__options').children('li');
	let $listItems = $list.children('li')

	$styledSelect.click(function(e) {
		e.stopPropagation();
		$('.navbar-toggle').find('.active').removeClass('active');
		$('.navbar-menu').slideUp();
		$('div.custom-select.active').not(this).each(function(){
			$(this).removeClass('active').next('.custom-select__options').removeClass('active');
		});
		$(this).toggleClass('active').next('.custom-select__options').toggleClass('active');
	});

	let customSelected = document.querySelector('div.custom-select').innerText;
	let customSelectOptions = document.querySelectorAll('.custom-select__options li');
	customSelectOptions.forEach(function (item) {
		if (item.textContent === customSelected) {
			item.classList.add('custom-select__options--selected');
		}
	})

	$listItems.click(function(e) {
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass('active');
		$this.val($(this).attr('rel'));
		$list.removeClass('active');

		let customSelected = document.querySelector('div.custom-select').innerText;
		let customSelectOptions = document.querySelectorAll('.custom-select__options li');
		customSelectOptions.forEach(function (item) {
			item.classList.remove('custom-select__options--selected');
			if (item.textContent === customSelected) {
				item.classList.add('custom-select__options--selected');
			}
		})
	});

	$(document).click(function() {
		$styledSelect.removeClass('active');
		$list.removeClass('active');
	});
});
////// ---custom select--- //////

////// navbar submenu //////
let navMenuName = document.querySelectorAll(".navbar-menu__nav--link");
let navSubMenu = document.querySelectorAll(".navbar-menu__submenu");

navMenuName.forEach(function(item) {
	item.addEventListener('mouseenter', openNavSubmenu);
});

function openNavSubmenu(el) {
	let btnTarget = el.currentTarget;
	let navTab = btnTarget.dataset.navlink;

	navSubMenu.forEach(function(el) {
		el.classList.remove("active");
	});

	navSubMenu.forEach(function(el) {
		el.classList.remove("active");
	});

	document.querySelectorAll("#" + navTab).forEach(function (item) {
		item.classList.add("active");
	})

	navMenuName.forEach(function (item) {
		item.classList.remove('active');
	})

	btnTarget.classList.add("active");
}
////// ---navbar submenu--- //////

////// navbar cart //////
let cartMinus = document.querySelectorAll('.navbar-user__cart--amount .minus');
let cartPlus = document.querySelectorAll('.navbar-user__cart--amount .plus');
cartMinus.forEach(function (item) {
	item.addEventListener('click', function () {
		if (item.parentNode.querySelector('.navbar-user__cart--amount i').textContent >= 2) {
			item.parentNode.querySelector('.navbar-user__cart--amount i').textContent = --item.parentNode.querySelector('.navbar-user__cart--amount i').textContent;
		}
	})
})
cartPlus.forEach(function (item) {
	item.addEventListener('click', function () {
		item.parentNode.querySelector('.navbar-user__cart--amount i').textContent = ++item.parentNode.querySelector('.navbar-user__cart--amount i').textContent;
	})
})
////// ---navbar cart--- //////

////// main slider //////
$('.main-slider__slider').slick({
	dots: true,
	infinite: true,
	autoplay: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1040,
			settings: {
				arrows: false
			}
		}
	]
});
////// ---main slider--- //////

////// goods week slider //////
$('.block-weeks__slider').slick({
	dots: false,
	infinite: false,
	speed: 1000,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1299,
			settings: {
				arrows: false,
				dots: true,
			}
		},
		{
			breakpoint: 999,
			settings: {
				slidesToShow: 3,
				arrows: false,
				dots: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true,
			}
		},
	]
});
////// ---main slider--- //////

////// product fav //////
let productFav = document.querySelectorAll('.favorite-btn');
if (productFav) {
	productFav.forEach(function (item) {
		item.addEventListener('click', function () {
			item.classList.toggle('active');
		})
	})
}
////// ---product fav--- //////

////// catalog nav //////
let asideMenuLink = document.querySelectorAll('.aside-menu__item:not(.aside-menu--drop) .aside-menu__link');
let asideMenuItem = document.querySelectorAll('.aside-menu__item:not(.aside-menu--drop)');
let asideMenuDropItem = document.querySelectorAll('.aside-menu__item.aside-menu--drop');
let asideMenuDropLink = document.querySelectorAll('.aside-menu--drop .aside-menu__link');
let asideMenuSubLink = document.querySelectorAll('.aside-menu__sublink');
asideMenuDropLink.forEach(function (item) {
	item.addEventListener('click', function () {
		asideMenuDropItem.forEach(function (item) {
			item.classList.remove('active');
		})
		asideMenuSubLink.forEach(function (item) {
			item.classList.remove('active');
		})
		asideMenuItem.forEach(function (item) {
			item.classList.remove('active');
		})
		item.parentElement.classList.toggle('active');
	})
})
asideMenuSubLink.forEach(function (item) {
	item.addEventListener('click', function () {
		asideMenuSubLink.forEach(function (item) {
			item.classList.remove('active');
		})
		asideMenuLink.forEach(function (item) {
			item.classList.remove('active');
		})
		item.classList.add('active');
	})
})

asideMenuLink.forEach(function (item) {
	item.addEventListener('click', function () {
		asideMenuDropItem.forEach(function (item) {
			item.classList.remove('active');
		})
		asideMenuSubLink.forEach(function (item) {
			item.classList.remove('active');
		})
		asideMenuItem.forEach(function (item) {
			item.classList.remove('active');
		})
		item.parentElement.classList.toggle('active');
	})
})

let asideMenuName = document.querySelector('.aside-menu__container:nth-child(2) h4');
if (asideMenuName) {
	asideMenuName.addEventListener('click', function () {
		this.parentElement.classList.toggle('active');
	})
}
////// ---catalog nav--- //////


////// range slider //////
let rangeSlider = document.querySelectorAll(".range-slider");
if (rangeSlider) {
	rangeSlider.forEach(function (item) {
		let	rangeS = item.querySelectorAll(".range-slider__slider input[type=range]");
		let	numberS = item.querySelectorAll(".range-slider__numbers input[type=number]");
		rangeS.forEach(function(el) {
			el.oninput = function() {
				let slide1 = parseFloat(rangeS[0].value),
					slide2 = parseFloat(rangeS[1].value);

				if (slide1 > slide2) {
					[slide1, slide2] = [slide2, slide1];
				}

				numberS[0].value = slide1;
				numberS[1].value = slide2;
			}
		});

		numberS.forEach(function(el) {
			el.oninput = function() {
				let number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);

				if (number1 > number2) {
					let tmp = number1;
					numberS[0].value = number2;
					numberS[1].value = tmp;
				}

				rangeS[0].value = number1;
				rangeS[1].value = number2;
			}
		});
	})
}
////// ---range slider--- //////

////// product size //////
let productButton = document.querySelectorAll('.product__size--buttons .btn-secondary');
if (productButton) {
	productButton.forEach(function (item) {
		item.addEventListener('click', function () {
			productButton.forEach(function (item) {
				item.classList.remove('active')
			})
			item.classList.add('active');
		})
	})
}
////// product size //////

////// product available //////
let productAvailable = document.querySelector('.product__available');
if (productAvailable) {
	if (!productAvailable.classList.contains('active')) {
		document.querySelector('.product__available span').textContent = 'Нет в наличии';
		document.querySelector('.product__price > span').style.color = '#BDBDBD';
		document.querySelector('.product__price .btn-primary').setAttribute('disabled', '');
		document.querySelector('.product__price .btn-primary').textContent = 'Нет в наличии';
	} else {
		document.querySelector('.product__available span').textContent = 'В наличии';
	}
}
////// ---product available--- //////

////// product share //////
let productShare = document.querySelector('.share');
let productShareDrop = document.querySelector('.share-drop');
if (productShare) {
	productShare.addEventListener('click', function () {
		this.classList.toggle('active');
	})
}
////// ---product share--- //////

////// set rating //////
let $setRating = $('#stars li');
$setRating.on('mouseover', function(){
	let onStar = parseInt($(this).data('value'), 10);

	$(this).parent().children('li.star').each(function(e){
		if (e < onStar) {
			$(this).addClass('hover');
		}
		else {
			$(this).removeClass('hover');
		}
	});

}).on('mouseout', function(){
	$(this).parent().children('li.star').each(function(e){
		$(this).removeClass('hover');
	});
});

$setRating.on('click', function(){
	let onStar = parseInt($(this).data('value'), 10);
	let stars = $(this).parent().children('li.star');

	for (i = 0; i < stars.length; i++) {
		$(stars[i]).removeClass('selected');
	}

	for (i = 0; i < onStar; i++) {
		$(stars[i]).addClass('selected');
	}
});
////// ---set rating--- //////

////// product slider //////
/*const aboutSliderNav = new Swiper('.about-slider__nav', {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
const aboutSliderFor = new Swiper('.about-slider__for', {
	navigation: {
		nextEl: '.slick-next.slick-arrow',
		prevEl: '.slick-prev.slick-arrow',
	},
	thumbs: {
		swiper: aboutSliderNav
	}
});*/

document.querySelectorAll('.product-slider').forEach(n => {
	const productSliderNav = new Swiper(n.querySelector('.product-slider--nav'), {
		spaceBetween: 10,
		slidesPerView: 6,
		freeMode: true,
		breakpoints: {
			300: {
				slidesPerView: 4,
			},
			900: {
				slidesPerView: 6,
			},
		},
	});

	const productSliderFor = new Swiper(n.querySelector('.product-slider--for'), {
		navigation: {
			nextEl: n.querySelector('.slick-next.slick-arrow'),
			prevEl: n.querySelector('.slick-prev.slick-arrow'),
		},
		thumbs: {
			swiper: productSliderNav
		}
	});
})


var summSlide=0;
$('.swiper-wrapper_center .swiper-slide').each(function(){
	summSlide += 1*$(this).width();
});

$('.swiper-wrapper_center').each(function () {
	let summSlide = 0;
	$(this).find('.swiper-slide').each(function(){
		summSlide += 1*$(this).width();
	});
	if ( $(this).width() > summSlide + 40  ) {
		$(this).css('justifyContent', 'center')
	} else {
		$(this).css('justifyContent', '')
	}
})


////// ---product slider--- //////

////// order promo //////
let orderPromoLabel = document.querySelector('.order-promo__label');
let orderPromoCode = document.querySelector('.order-promo__code');
if (orderPromoLabel) {
	orderPromoLabel.addEventListener('click', function () {
		this.classList.toggle('active');
		orderPromoCode.classList.toggle('active')
	})
}
////// ---order promo--- //////

////// order button //////
let heightOrder = $('.header').height() + $('.order').height();
$(window).scroll(function () {
	if ($(window).scrollTop() > heightOrder - 300) {
		$('.total-amount__button').css('bottom', '-60px');
	} else {
		$('.total-amount__button').removeAttr("style");
	}
});

////// ---order button--- //////

////// radio-tabs //////
$('.checkout-step__radio a').on('click', function (e) {
	e.preventDefault();
	$(this).parent().find('input').prop('checked', false);
	$(this).find('input').prop('checked', true);

	let target = $(this).attr('href');
	$(this).parent().parent().find('.checkout-step__radio--container > div').not(target).hide();

	$(target).fadeIn();
});
////// ---radio-tabs--- //////

////// blog filter //////
let blogNavName = document.querySelectorAll('.blog-nav__name');
if (blogNavName) {
	blogNavName.forEach(function (item) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			blogNavName.forEach(function (item) {
				item.classList.remove('active');
			})
			this.classList.add('active');
		})
	})
}
$('.blog-name--link').click(function () {
	const value = $(this).attr('data-filter');
	if (value === 'all') {
		$('.blog-item').show();
	} else {
		$('.blog-item').not('.'+value).hide();
		$('.blog-item').filter('.'+value).show();
	}
	if ($('.blog-item').is(":visible")) {
		$('.empty').hide();
	} else {
		$('.empty').show();
	}
})
////// ---blog filter--- //////

////// tabs //////
let tabLinkName = document.querySelectorAll(".tab-name");
let tabContentItem = document.querySelectorAll(".tab-content-item");

tabLinkName.forEach(function(item) {
	item.addEventListener('click', openTabContent);
});

function openTabContent(el) {
	let target = el.currentTarget;
	let tabName = target.dataset.tabname;

	tabContentItem.forEach(function(el) {
		el.classList.remove("active");
	});

	document.querySelectorAll("#" + tabName).forEach(function (item) {
		item.classList.add("active");
	})

	tabLinkName.forEach(function (item) {
		item.parentElement.classList.remove('active');
	})

	target.parentElement.classList.add("active");
}
////// ---tabs--- //////

$('#checkout-step-1 .checkout-next').on('click', function () {
	$(this).parent().parent().parent().removeClass('active');
	$(this).parent().parent().parent().find('.checkout-step__header span').addClass('active');
	$(this).parent().parent().parent().find('.step-filled').addClass('active');
	$('#checkout-step-2').addClass('active');
})

$('#checkout-step-2 .checkout-next').on('click', function () {
	$(this).parent().parent().parent().removeClass('active');
	$(this).parent().parent().parent().find('.checkout-step__header span').addClass('active');
	$(this).parent().parent().parent().find('.step-filled').addClass('active');
	$('#checkout-step-3').addClass('active')
})

$('#checkout-step-1 .checkout-step__header span').on('click', function () {
	$(this).removeClass('active');
	$(this).parent().parent().addClass('active');
	$('#checkout-step-1 .step-filled').removeClass('active');
	$('#checkout-step-2').removeClass('active');
	$('#checkout-step-2 .checkout-step__header span').removeClass('active');
	$('#checkout-step-2 .step-filled').removeClass('active');
	$('#checkout-step-3').removeClass('active');
})

$('#checkout-step-2 .checkout-step__header span').on('click', function () {
	$(this).removeClass('active');
	$(this).parent().parent().addClass('active');
	$('#checkout-step-2 .step-filled').removeClass('active');
	$('#checkout-step-3').removeClass('active');
})

$('.cookie-tip .btn-secondary').on('click', function () {
	$('.cookie-tip').addClass('cookie-tip_hidden');
	console.log('xx')
})
