$(document).ready(function(){
    var userinput = 'cat';  
    var ima = 0;
    var i = 0;
    var selections = []
    var intervalID = setInterval(null, 1000);
    var gifarray = [];
    // Build content area

    buildMain();

    function buildMain() {
        var mainrow = $('<div>');
        mainrow.attr('class','col-md-9');
        mainrow.attr('id','gifsgohere');
        var searchpoint = $('<div>');
        searchpoint.attr('class','col-md-3');
        var searchinput = '<input type="text" id="ipt" value="laser"></input><input type="submit" id="uSubmit"></input>';
        searchpoint.html(searchinput);
        $('#content').append(mainrow, searchpoint);
    }

    $("#uSubmit").click(function() {
        console.log('Submit button clicked');
        clearInterval(intervalID);
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
        selections.push(userinput);
        console.log(selections);
        console.log('callgiphy() with *'+userinput + '* as search tag')
        var APIKey = "OrGsAQPACjDG7CuKA31b1bSM9ZqDShC3";
        var queryURL = "https://api.giphy.com/v1/gifs/random?&tag=" + userinput + "&api_key=" + APIKey;
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        //console.log(response.data.image_url);
        var newimgspan = $('<span>');
        newimgspan.addClass('new');
        var actiongif = response.data.image_original_url;
        var pausegif = response.data.images.original_still.url;
        console.log(actiongif, pausegif)
        gifarray.push([actiongif, pausegif])
        newimgspan.attr('data',gifarray[i]);
        newimgspan.html('<img src='+
            '"'+gifarray[i][0]+'"'+
            ' alt='+'"#'+i+
            '"'+' class1=' +'"'+ gifarray[i][0] +'"' +
            '"'+' class2=' +'"'+ gifarray[i][1] +'"' +
            '"'+' class3=' +'"'+ '0' +'"' +
            '/>');
        $('#gifsgohere').prepend(newimgspan);
        i++
        });

//  Stop Gif
        /* Expected Behavior (not happening)
            when image clicked do thing
            console log defines behavior
            console log tracks class1 which should be animated gif url
            console log tracks class2 which should be still gif url
            console log confirms alt tag which is the same as the gifarray index which stores gifarray[index][animated,paused]
            if-then checking value of class3 which starts at 0 and changes with start() / stop()

            func start()
                console log parent of image and image, should be <span> and <img> objects
                sets parent text() (also test/failed as html()) 
                    to switch between animated and still gif and set attributes to match original
                console log parent of image to verify <img> can exist in <span> that hasn't been deleted
                change value of class3 for next switch
            func stop()
                same as func stop() but reverses behavior
        */
        $(document).on('click','img',function() {
        //$('img').click(function() {
        console.log('gif freeze');
        console.log('class1 click', $(this).attr('class1'));
        console.log('class2 click', $(this).attr('class2'));
        console.log('class3 click', $(this).attr('class3'));
        console.log('This.alt: ' + $(this).attr('alt'));
        
        
        var start = () => {
            console.log('start!!!!')
            $(this).attr('src', $(this).attr('class2'));
            //$(this).attr('class3','0');
            // console.log($(this).parent(),$(this))
            // console.log('class1', $(this).attr('class1'))
            // $(this).removeAttr('class3');
            // $(this).html('<img src='+
            // '"'+$(this).attr('class1')+'"'+
            // ' alt='+'"#'+$(this).attr('alt')+
            // '"'+' class1=' +'"'+ $(this).attr('class1')+'"' +
            // '"'+' class2=' +'"'+ $(this).attr('class2') +'"' +
            // '"'+' class3=' +'"'+ '0' +'"' +
            // ' />');
            // console.log('this is go : ')
            
        };
        var stop = () => {
            console.log('stop!!!!')
            console.log('this', $(this));
            console.log($(this).attr('class1'));
            $(this).attr('src', $(this).attr('class2'));
            //$(this).attr('class3','1');
            // console.log('class1', $(this).attr('class1'))
            // console.log($(this).parent(),$(this))
            // $(this).removeAttr('class3');
            // $(this).html('<img src='+
            // '"'+$(this).attr('class1')+'"'+
            // ' alt='+'"#'+$(this).attr('alt')+
            // '"'+' class1=' +'"'+ $(this).attr('class1')+'"' +
            // '"'+' class2=' +'"'+ $(this).attr('class2') +'"' +
            // '"'+' class3=' +'"'+ '1' +'"' +
            // ' />');
            // console.log('this is stop : '+$(this).attr('class3'));
        }

        $(this).attr('class3')=='0' ? stop() : start()
        
    });

//  Update title w uppercase
    intervalID = setInterval(titleUpdate, 1500)
    function titleUpdate(){
    index = Math.floor((Math.random() * selections.length)+0);
    console.log(selections + '['+ index +']');
    var title = selections[index];
    var lower = title;
    var upper = lower.charAt(0).toUpperCase() + lower.substring(1);
    title = upper;
    (selections.length > 0 ?
    $('.title').text(title + ' Gifs')
    : 0 ); 
}
    }


// Initialize

});