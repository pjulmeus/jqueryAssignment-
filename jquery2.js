let movie = $('form').append('<label class="movie">Movie Title:  </label><input name="movie" class="movieInp" type="text" required minlength="2"></input> <br>')
let rate = $('form').append('<label class="rate">Rate The Movie:  </label><input name="rate" class="rateInp" type="range" min="0" max="10" step="1" required></input>')
let rateText = $('form').append("<p class='value'></p>")
let submitBtn = $('form').append('<button type="submit">Submit</button>')
// $(".movieInp").val();
// $(".rateInp").val()
$(".rateInp").on('input', function(e){
    e.preventDefault();
    $(".value").text("Rating: "+ e.target.value);
})

//submit addevent listtener
$('form').on('click', function(e){
     e.preventDefault();
if(e.target.tagName === 'BUTTON'){
    $('form').append('<h2 class="new"></h2>');
    $('.new').text("Movie Title: " + $(".movieInp").val() + "  Rating: " + $(".rateInp").val())
}
    //that create and element that has the value of the move and rate
// $('form').append("h2").text.
})

//creates an remove button for each
