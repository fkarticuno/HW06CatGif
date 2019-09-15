
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
       $('img').click(function() {
        console.log('gif freeze');
        console.log($(this).attr('class1'));
        console.log($(this).attr('class2'));
        console.log($(this).attr('class3'));
        console.log('This.alt: ' + $(this).attr('alt'));
        ($(this).attr('class3')=='0'?stop():start())
        
        function start() {
            console.log($(this).parent(),$(this))
    
            $(this).removeAttr('class3');

            $(this).html('<img src='+
            '"'+$(this).attr('class1')+'"'+
            ' alt='+'"#'+$(this).attr('alt')+
            '"'+' class1=' +'"'+ $(this).attr('class1')+'"' +
            '"'+' class2=' +'"'+ $(this).attr('class2') +'"' +
            '"'+' class3=' +'"'+ '0' +'"' +
            ' />');
            console.log('this is go : ')
        };
        function stop() {
            console.log($(this).parent(),$(this))
            $(this).removeAttr('class3');

            $(this).html('<img src='+
            '"'+$(this).attr('class1')+'"'+
            ' alt='+'"#'+$(this).attr('alt')+
            '"'+' class1=' +'"'+ $(this).attr('class1')+'"' +
            '"'+' class2=' +'"'+ $(this).attr('class2') +'"' +
            '"'+' class3=' +'"'+ '1' +'"' +
            ' />');
            console.log('this is stop : '+$(this).attr('class3'));
        };
