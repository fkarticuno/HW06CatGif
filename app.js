$(document).ready(function(){
// Submit gifreq BROKEN
    

var userinput = 'cat';  
var ima = 0;
var i = 0;
// Build content area

buildMain();

function buildMain() {
    var mainrow = $('<div>');
    mainrow.attr('class','col-md-8');
    mainrow.attr('id','gifsgohere');
    var searchpoint = $('<div>');
    searchpoint.attr('class','col-md-4');
    var searchinput = '<input type="text" id="ipt" value="laser"></input><input type="submit" id="uSubmit"></input>';
    searchpoint.html(searchinput);
    $('#content').append(mainrow, searchpoint);
}

$("#uSubmit").click(function() {
    console.log('button clicked');
    callGiphy();
});
// Build storage for gifs
function buildSub() {
    console.log('button click moved to buildsub()');
    userinput = $('#ipt').val();
    console.log('expecting callGiphy html return as: '+ima)
    $('#gifsgohere').prepend().html('<img src='+ima+'/>');
};





// GIPHY integration
function callGiphy() {
    userinput = $('#ipt').val();
    console.log('callgiphy() + '+userinput)
    var APIKey = "OrGsAQPACjDG7CuKA31b1bSM9ZqDShC3";
    var queryURL = "https://api.giphy.com/v1/gifs/random?&tag=" + userinput + "&api_key=" + APIKey;
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    //console.log(response.data.image_url);
    //var ima = '<img src='+'"'+response.data.embed_url+"'"+'/>';
    var newimgspan = $('<span>');
    newimgspan.addClass('new');
    newimgspan.html('<img src='+'"'+response.data.bitly_url+'"'+' alt='+'"#'+i+'"'+'/>');
    $('#gifsgohere').prepend(newimgspan);
    i++
    });
}


// Initialize


});