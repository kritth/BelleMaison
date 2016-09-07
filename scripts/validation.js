// Contact form validation
function validate(e) {
	e.preventDefault();
	// Do custom validation
	
	var fn = ($('#firstName').val());
	var ln = ($('#lastName').val());
	var em = ($('#email').val());
	var ad = ($('#address').val());
	var inq = ($('#inquiry').val());
	
	// Send
	if ($('#inquiryForm')[0].checkValidity()) {
		console.log('Data is valid, submitting....');
		$.ajax({
			type: "POST",
			url: "index.html",
			data: {
				firstName: fn,
				lastName: ln,
				email: em,
				address: ad,
				inquiry: inq
			},
			
			success: function(data) {
				console.log("Data sent.")
				$('#inquiryForm').trigger("reset");
			}
		});
		$('#inquiryForm').trigger("reset");
		
		// Reset placeholder
		resetPlaceHolder();
		
	} else {
		// Custom error message
		if (fn == '') {
			$('#firstName').addClass('input-missing');
			$('#firstName').attr('placeholder', 'Please enter your first name here');
			console.log('First name is empty');
		}
		if (ln == '') {
			$('#lastName').addClass('input-missing');
			$('#lastName').attr('placeholder', 'Please enter your last name here');
			console.log('Last name is empty');
		}
		if (!isValidEmailAddress(em)) {
			$('#email').val('');
			$('#email').addClass('input-missing');
			$('#email').attr('placeholder', 'Please enter valid e-mail address here');
			console.log('E-mail address is invalid');
		}
		if (ad == '') {
			$('#address').addClass('input-missing');
			$('#address').attr('placeholder', 'Please enter your address here');
			console.log('Address is empty');
		}
		if (inq == '') {
			$('#inquiry').addClass('input-missing');
			$('#inquiry').attr('placeholder', 'Please enter your inquiry here');
			console.log('Inquiry is empty');
		}
		
		console.log('Data is invalid');
	}
}

// Reset placeholder
function resetPlaceHolder() {
	$('#firstName').removeClass('input-missing');
	$('#firstName').attr('placeholder', 'First name');
	$('#lastName').removeClass('input-missing');
	$('#lastName').attr('placeholder', 'Last name');
	$('#email').removeClass('input-missing');
	$('#email').attr('placeholder', 'Home address');
	$('#address').removeClass('input-missing');
	$('#address').attr('placeholder', 'Home address');
	$('#inquiry').removeClass('input-missing');
	$('#inquiry').attr('placeholder', 'Your inquiry less than 1000 characters');
}

// Validate email
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};