// Parsing data from JSON in when the page is ready
$(document).ready(function(){
	// Parse house data
	var table = $(".house");
	for (var key in data.house) {
		table.append('<tr class="not-first layer-1" onclick="openDetail(\'house\', ' + data.house[key].id + ')">\
			<td><div class="layer-2">' + data.house[key].id + '</div></td>\
			<td><div class="layer-2">' + data.house[key].neighborhood + '</div></td>\
			<td><div class="layer-2">' + data.house[key].bedroom + '</div></td>\
			<td><div class="layer-2">' + data.house[key].bathroom + '</div></td>\
			<td><div class="layer-2">' + (data.house[key].space == 0 ? 'no information' : data.house[key].space + ' sqft.') + '</div></td>\
			<td><div class="layer-2">$' + data.house[key].price + '</div></td>\
        </tr>');
	}
	
	// Parse condo data
	var table = $(".condo");
	for (var key in data.condos) {
		table.append('<tr class="not-first layer-1" onclick="openDetail(\'condos\', ' + data.condos[key].id + ')">\
			<td><div class="layer-2">' + data.condos[key].id + '</div></td>\
			<td><div class="layer-2">' + data.condos[key].neighborhood + '</div></td>\
			<td><div class="layer-2">' + data.condos[key].bedroom + '</div></td>\
			<td><div class="layer-2">' + data.condos[key].bathroom + '</div></td>\
			<td><div class="layer-2">' + (data.condos[key].space == 0 ? 'No information' : data.condos[key].space + ' sqft.') + '</div></td>\
			<td><div class="layer-2">$' + data.condos[key].price + '</div></td>\
        </tr>');
	}
	
	// Parse mobile data
	var table = $(".mobile");
	for (var key in data.mobile) {
		table.append('<tr class="not-first layer-1" onclick="openDetail(\'mobile\', ' + data.mobile[key].id + ')">\
			<td><div class="layer-2">' + data.mobile[key].id + '</div></td>\
			<td><div class="layer-2">' + data.mobile[key].neighborhood + '</div></td>\
			<td><div class="layer-2">' + data.mobile[key].bedroom + '</div></td>\
			<td><div class="layer-2">' + data.mobile[key].bathroom + '</div></td>\
			<td><div class="layer-2">' + (data.mobile[key].space == 0 ? 'No information' : data.mobile[key].space + ' sqft.') + '</div></td>\
			<td><div class="layer-2">$' + data.mobile[key].price + '</div></td>\
        </tr>');
	}
});

// Detail div open and close
function openDetail(estateType, id) {	
	// Checking type
	var detailData;
	if (estateType == 'condos') {
		for (var key in data.condos) {
			if (data.condos[key].id == id) {
				detailData = data.condos[key];
				break;
			}
		}
	} else if (estateType == 'house') {
		for (var key in data.house) {
			if (data.house[key].id == id) {
				detailData = data.house[key];
				break;
			}
		}
	} else if (estateType == 'mobile') {
		for (var key in data.mobile) {
			if (data.mobile[key].id == id) {
				detailData = data.mobile[key];
				break;
			}
		}
	}
	
	/*
		Fill in data
	 */
	$('.detailId').html(detailData.id);
	$('.detailAddress').html(detailData.address);
	$('.detailNeighborhood').html(detailData.neighborhood);
	$('.detailBath').html(detailData.bathroom);
	$('.detailBed').html(detailData.bedroom);
	$('.detailPrice').html('$' + detailData.price);
	$('.detailDescription').html(detailData.detail.description);
	$('.detailContactName').html(detailData.detail.contact.name);
	$('.detailContactCompany').html(detailData.detail.contact.company);
	$('.detailContactAddress').html(detailData.detail.contact.address);
	$('.detailContactPhone').html(detailData.detail.contact.phone);
	
	// Build Space
	if (detailData.space > 0) {
		$('.detailSpace').html(detailData.space + ' sqft.');
	} else {
		$('.detailSpace').html('No information given');
	}
	
	// Build maintenance fees
	if (detailData.detail.maintenanceFee > 0) {
		$('.detailFee').html('$' + detailData.detail.maintenanceFee + '/month');
	} else {
		$('.detailFee').html('No information given');
	}
	
	// Build website
	if (detailData.detail.contact.website != '') {
		var website;
		if (detailData.detail.contact.website.indexOf("http") >= 0) {
			website = detailData.detail.contact.website;
		} else {
			website = 'http://' + detailData.detail.contact.website;
		}
		$('.detailContactWeb').html('<a href="' + website + '" target="_blank">Click here to visit the website</a>');
	} else {
		$('.detailContactWeb').html('No information given');
	}
	
	// Build amenties
	var amenitiesList = '<ul>';
	for (var amenity in detailData.detail.amenities) {
		amenitiesList += '<li>' + detailData.detail.amenities[amenity] + '</li>';
	}
	amenitiesList += '</ul>';
	$('.detailAmenities').html(amenitiesList);
	
	// Build features
	var featuresList = '<ul>';
	for (var feature in detailData.detail.features) {
		featuresList += '<li>' + detailData.detail.features[feature] + '</li>';
	}
	featuresList += '</ul>';
	$('.detailFeatures').html(featuresList);
	
	// Build Gallery
	var imagesList = '';
	for (var image in detailData.detail.images) {
		imagesList += '<img class="imageSlide" src="images/estate/' + detailData.id + '/' + detailData.detail.images[image] + '">';
	}
	imagesList += '<div class="arrow arrowLeft layer-4" onclick="plusDivs(-1)">&#10094;</div>'
		+ '<div class="arrow arrowRight layer-4" onclick="plusDivs(1)">&#10095;</div>'; // create arrow
	$('.detailPhoto').html(imagesList);
	
	// Turn on div
	$('.detailBg').css('opacity', '1');
	$('.detailDiv').css('opacity', '1');
	$('.detailCloseButton').css('opacity', '1');
	$('.detailBg').css('pointer-events', 'auto');
	$('.detailDiv').css('pointer-events', 'auto');
	$('.detailCloseButton').css('pointer-events', 'auto');
	
	// Set default loan amount
	updateValue(detailData.price);
	calculateLoan();
	slideIndex = 1;
	showDivs(slideIndex);
	
	// Scroll up
	$('.detailTable').scrollTop(0);
}

// Make div disappear
function closeDetail() {
	$('.detailBg').css('opacity', '0');
	$('.detailDiv').css('opacity', '0');
	$('.detailBg').css('pointer-events', 'none');
	$('.detailDiv').css('pointer-events', 'none');
	$('.detailCloseButton').css('pointer-events', 'none');
}

// Auto close listener
$(window).resize(function() {
	closeDetail();
});

$(window).scroll(function() {
	closeDetail();
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        closeDetail();
    }
});

// Auto calculate loan
var loanAmount = $("#loanAmount").val();

$("#loanAmount").on('keyup change click', function () {
    if(this.value !== loanAmount) {
        loanAmount = this.value;
		calculateLoan();
    }        
});

var loanInterest = $("#loanInterest").val();

$("#loanInterest").on('keyup change click', function () {
    if(this.value !== loanInterest) {
        loanInterest = this.value;
		calculateLoan();
    }
});

var loanDuration = $("#loanDuration").val();

$("#loanDuration").on('keyup change click', function () {
    if(this.value !== loanDuration) {
        loanDuration = this.value;
		calculateLoan();
    }        
});

function updateValue(price) {
	$('#loanAmount').val(price);
	loanAmount = price;
}

function calculateLoan() {
	var rate = loanInterest / 100 / 12;
	var monthlyPayment = (loanAmount * rate) / (1 - (1 / (Math.pow((1 + rate), 12 * loanDuration))));
	$('.detailMonthlyPayment').html('$' + monthlyPayment.toFixed(2));
}

$(document).ready(function(){
	calculateLoan();
});

// Gallery slide show
var slideIndex = 1;

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("imageSlide");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}

// I'm interested button functionality
function goToForm() {
	$('#mls').val($('.detailId').text());
	closeDetail();
	$('html,body').animate({'scrollTop': $(document).height() }, 'slow');
}

// Scrolling div on click
function scrollDetailTop() {
	$('.detailTable').animate({'scrollTop': 0}, 'slow');
}
function scrollDetailBottom() {
	$('.detailTable').animate({'scrollTop': $('.detailTable')[0].scrollHeight}, 'slow');
}