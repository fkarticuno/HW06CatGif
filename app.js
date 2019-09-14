
var userinput = 'cat';  

// Build content area

function buildMain() {
    var mainrow = $('<div>');
    mainrow.attr('class','col-md-8');
    mainrow.attr('id','gifsgohere');
    var searchpoint = $('<div>');
    searchpoint.attr('class','col-md-4');
    var searchinput = '<input type="text" id="ipt"></input><input type="submit" id="uSubmit"></input>';
    searchpoint.html(searchinput);;
    $('#content').append(mainrow, searchpoint);
}

// Build storage for gifs
var numofgifs = 0;
function buildSub() {
    console.log('button click moved to buildsub()');
    userinput = $('#ipt').val();
    $('#gifsgohere').prepend(callGiphy(userinput));
    numofgifs++;
};

// Submit gifreq BROKEN
 $('#uSubmit').click(function() {
    console.log('button clicked')
    buildSub();
    })



// GIPHY integration
function callGiphy(gifreq) {
    console.log('callgiphy() '+userinput)
    var APIKey = "OrGsAQPACjDG7CuKA31b1bSM9ZqDShC3";
    var queryURL = "http://api.giphy.com/v1/gifs/search?random&tag="+userinput+"&api_key="+APIKey;
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    console.log(response.data[0].embed_url);
    var ima = response.data[0].images.fixed_height.url;
    var builtimage = '<img src='+ima+'/>';
    return builtimage;
    });
}


// Initialize

buildMain();