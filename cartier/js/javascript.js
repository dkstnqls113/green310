$(document).ready(function(){

    

    // window.onload와 같은개념


    // article에 마우스가 들어갔을 때, 본인이 커져라.
    // article에 마우스가 들어갔을 때, 본인안에 있는 비디오가 보여라
    $('article').mouseenter(function(){

        let vid = $(this).find('video').get(0);

        vid.currentTime = 0
        // 비디어가 시작하는 지점을 바꿀 수 있다.
        vid.play()


        $(this).css({'width':'35%'})
        $(this).find('video').css({'opacity':'0.9'})
    })

    // article에 마우스가 나갔을 때, 본인이 작아져라.
    // article에 마우스가 나갔을 때, 본인 안에 있는 비디오가 사라져라
    $('article').mouseleave(function(){


        let vid = $(this).find('video').get(0);
        vid.pause()

        $(this).css({'width':'12%'})
        $(this).find('video').css({'opacity':'0'})
    })






    $('span').mouseenter(function(){
        $(this).css({'opacity':'0'})
        $(this).css({'width':'35%'})
    })
    

    $('span').mouseleave(function(){
        $(this).css({'width':'12%'})
        $(this).css({'opacity':'1'})
    })
})



