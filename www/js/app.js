window.onload = function () {

    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    }
}

function onDeviceReady() {

	$('#terms-next').hide();
	$('#fulltime-check').hide();
	$('#freelance-check').hide();
	$('#internship-check').hide();
	$('#fulltime-text').css("color","#9B9B9B");
	$('#rooster').attr('src', 'img/rooster-disabled.png');
	$('#freelance-text').css("color","#9B9B9B");
	$('#coffee').attr('src', 'img/coffee-disabled.png');
	$('#internship-text').css("color","#9B9B9B");
	$('#lab').attr('src', 'img/lab-disabled.png');

	$('#checkbox-agree').click(function(e) {
		e.preventDefault();
		if ($('#checkbox-agree').prop("checked")) {
			$('#terms-next').show();
		} else {
			$('#terms-next').hide();
		}
	});

	$('#fulltime-link').click(function(e) {
		e.preventDefault();
		if (this.innerHTML.indexOf("disabled") > 0) {
			$('#fulltime-check').show();
			$('#fulltime-text').css("color","#000");
			$('#rooster').attr('src', 'img/rooster.png');
		} else {
			$('#fulltime-check').hide();
			$('#fulltime-text').css("color","#9B9B9B");
			$('#rooster').attr('src', 'img/rooster-disabled.png');
		}
	});
	$('#freelance-link').click(function(e) {
		e.preventDefault();
		if (this.innerHTML.indexOf("disabled") > 0) {
			$('#freelance-check').show();
			$('#freelance-text').css("color","#000");
			$('#coffee').attr('src', 'img/coffee.png');
		} else {
			$('#freelance-check').hide();
			$('#freelance-text').css("color","#9B9B9B");
			$('#coffee').attr('src', 'img/coffee-disabled.png');
		}
	});
	$('#internship-link').click(function(e) {
		e.preventDefault();
		if (this.innerHTML.indexOf("disabled") > 0) {
			$('#internship-check').show();
			$('#internship-text').css("color","#000");
			$('#lab').attr('src', 'img/lab.png');
		} else {
			$('#internship-check').hide();
			$('#internship-text').css("color","#9B9B9B");
			$('#lab').attr('src', 'img/lab-disabled.png');
		}
	});

	//Change availability color
	$('#monday').click(function(e) {
		if ($('#monday').attr('active') && $('#monday').attr('active') == 'true') {
			$('#monday').attr('active',false);
			$('#monday-box').removeClass('weekday-active');
		} else {
			$('#monday').attr('active',true);
			$('#monday-box').addClass('weekday-active');
		}
	});
	$('#tuesday').click(function(e) {
		if ($('#tuesday').attr('active') && $('#tuesday').attr('active') == 'true') {
			$('#tuesday').attr('active',false);
			$('#tuesday-box').removeClass('weekday-active');
		} else {
			$('#tuesday').attr('active',true);
			$('#tuesday-box').addClass('weekday-active');
		}
	});

	$('#wednesday').click(function(e) {
		if ($('#wednesday').attr('active') && $('#wednesday').attr('active') == 'true') {
			$('#wednesday').attr('active',false);
			$('#wednesday-box').removeClass('weekday-active');
		} else {
			$('#wednesday').attr('active',true);
			$('#wednesday-box').addClass('weekday-active');
		}
	});

	$('#thursday').click(function(e) {
		if ($('#thursday').attr('active') && $('#thursday').attr('active') == 'true') {
			$('#thursday').attr('active',false);
			$('#thursday-box').removeClass('weekday-active');
		} else {
			$('#thursday').attr('active',true);
			$('#thursday-box').addClass('weekday-active');
		}
	});

	$('#friday').click(function(e) {
		if ($('#friday').attr('active') && $('#friday').attr('active') == 'true') {
			$('#friday').attr('active',false);
			$('#friday-box').removeClass('weekday-active');
		} else {
			$('#friday').attr('active',true);
			$('#friday-box').addClass('weekday-active');
		}
	});
}