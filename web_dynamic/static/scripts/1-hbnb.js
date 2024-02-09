document.ready(function(){
  // Initialize an empty array to store Amenity IDs
  amenityIds = []

  // Listen for changes on each input checkbox tag
  $('input["type=checkbox"]').change(function() {
    // Retrieve Amenity ID from data-id attribute
    const amenityId = $(this).data('id');

    // Retrieve Amenity name from data-name attribute
    const amenityName = $(this).data('name');

    if ($(this).prop('checked')) {
      amenityIds.push(amenityId)
    } else {
      // If unchecked, remove the Amenity ID from the array
      amenityIds = amenityIds.filter(function(id) {
        id !== amenityId
      });

    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    updateAmenitiesDisplay();
  });

  // Function to update the h4 tag with the list of Amenities checked
  function updateAmenitiesDisplay() {
    const amenitiesText = amenityIds.length > 0 ? amenityIds.join(', ') : '&nbsp;';
    $('.popover h4').html(amenitiesText);
  }

});
