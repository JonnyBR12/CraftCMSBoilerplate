

// FANCYBOX FORM

function formId() {

	var formID = "#formId";
	var errmsg = "Something seems wrong with your form. Please refresh and try again.";
	var sucmsg = "";

	$(formID).validate({
		invalidHandler: function(form) {
			$(formID + ' button').html('ORIGINAL BUTTON CODE').prop("disabled", false);
			setTimeout(function () {
				$('.form-group, .input-group, .select-field').removeClass('has-error');
			}, 3000);
		},
		submitHandler: function(form) {
			$(formID + ' button').html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>').prop("disabled", true);
			$(formID).ajaxSubmit({
				success: function(data) {
					if (data.success == false) {
						alert(errmsg);
					} else {
						$(formID).toggleClass('txC').html(sucmsg);
						//$.fancybox.update();
						setTimeout(function() {
							$.fancybox.close();
						}, 3000);
						//ga('send', 'event', 'Form Submissions', 'Free Sample');
					}
				}
			});
		},
		errorClass: "has-error",
		validClass: "has-success",
		rules: {
			firstName: {
				required: true
			},
			lastName: {
				required: true
			},
			homePhone: {
				required: true
			},
			addressLine1: {
				required: true
			},
			city: {
				required: true
			},
			county: {
				required: true
			},
			email: {
				required: true
			},
			postcode: {
				required: true
			},
			productName: {
				required: true
			}
		},
		messages: {
			firstName: {
				required: 'Please enter your first name'
			},
			lastName: {
				required: 'Please enter your last name'
			},
		  	email: {
			 	email: 'Enter a VALID email address'
		  	},
			homePhone: {
				required: 'Please enter your phone number'
			},
			addressLine1: {
				required: 'Please enter the 1st line of your address'
			},
			city: {
				required: 'Please enter the town / city'
			},
			county: {
				required: 'Please enter the county'
			},
			postcode: {
				required: 'Please enter your postcode'
			},
			productName: {
				required: 'Please select a product'
			}
		},
		highlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group, .select-field').addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parent('.form-group, .select-field').removeClass(errorClass);
		},
		errorPlacement: function(error, element) {
			error.appendTo(".alert");
    		return true;
  		}
	});

}

// INLINE FORM

function inlineForm() {

	var formID = "#inlineForm";
	var errmsg = "Something seems wrong with your form. Please refresh and try again.";
	var sucmsg = "";

	$(formID).validate({
		invalidHandler: function(form) {
			$(formID + ' button').html('ORIGINAL BUTTON CODE').prop("disabled", false);
			setTimeout(function () {
				$('.form-group, .input-group, .select-field').removeClass('has-error');
			}, 3000);
		},
		submitHandler: function(form) {
			$(formID + ' button').html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>').prop("disabled", true);
			$(formID).ajaxSubmit({
				success: function(data) {
					if (data.success == false) {
						alert(errmsg);
					} else {
						$(formID).html(sucmsg);
						$("html, body").animate({ scrollTop: $(formID).scrollTop() + 300 }, 500);
						//ga('send', 'event', 'Form Submissions', 'Contact Form');
					}
				}
			});
		},
		errorClass: "has-error",
		validClass: "has-success",
		rules: {
            subjectOfEnquiry: {
				required: true
			},
			firstName: {
				required: true
			},
			lastName: {
				required: true
			},
			homePhone: {
				required: true
			},
			message: {
				required: true
			}
		},
		messages: {
		  	subjectOfEnquiry: {
				required: 'Please select the nature of your enquiry'
			},
			firstName: {
				required: 'Please enter your first name'
			},
			lastName: {
				required: 'Please enter your last name'
			},
		  	email: {
			 	email: 'Enter a VALID email address'
		  	},
			homePhone: {
				required: 'Please enter your phone number'
			},
			message: {
				required: 'Please enter your message / enquiry'
			}
		},
		highlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group, .select-field').addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parent('.form-group, .select-field').removeClass(errorClass);
		},
		errorPlacement: function(error, element) {
			error.appendTo(".alert");
    		return true;
  		}
	});

}
