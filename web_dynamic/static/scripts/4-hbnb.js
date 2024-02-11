$(document).ready(function () {
  // Initialize an empty array to store Amenity IDs
  let amenityIds = [];

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function () {
    // Retrieve Amenity ID from data-id attribute
    const amenityId = $(this).data('id');

    if ($(this).prop('checked')) {
      amenityIds.push(amenityId);
    } else {
      // If unchecked, remove the Amenity ID from the array
      amenityIds = amenityIds.filter(id => id !== amenityId);
    }
    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    updateAmenitiesDisplay();
  });

  // Function to update the h4 tag with the list of Amenities checked
  function updateAmenitiesDisplay () {
    const amenitiesText = amenityIds.length > 0 ? amenityIds.join(', ') : '&nbsp;';
    $('.popover h4').html(amenitiesText);
  }
});

$('.filters button').click(function () {
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (places) {
      places.forEach(function (place) {
        const article = $('<article></article>');
        article.append('<div class="name"><h2>' + place.name + '</h2></div>');
        article.append('<div class="price_by_night">$' + place.price_by_night + '</div>');
        article.append('<div class="information">' +
          '<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div>' +
          '<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div>' +
          '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div>' +
        '</div>');
        article.append('<div class="user">' +
          '<b>Owner:</b> ' + place.user.first_name + ' ' + place.user.last_name +
        '</div>');
        article.append('<div class="description">' + place.description + '</div>');

        $('.places').append(article);
      });
    },
    error: function (xhr, status) {
      console.log('error ' + status);
    }
  });
});

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  dataType: 'json',
  success: function (json) {
    if (json.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  },
  error: function (xhr, status) {
    console.log('error ' + status);
  }
});
