/**
 * Created by 15366 on 2016/12/6.
 */
var process  = document.getElementsByClassName('process')[0],
    processWidth = utils.css(process,'width'),
    span = process.getElementsByTagName('span')[0],
    pageTip = process.getElementsByClassName('page-tip')[0];

var swiper1 = new Swiper(".swiper-container",{
    direction:"vertical",
    pagination:".swiper-pagination",/*分页器*/
    paginationType:"progress",/*进度条*/
    loop:true,
    onTransitionEnd:function(swiper){
        var curIndex = swiper.activeIndex;/*返回当前活动块的索引,如果往下滑，上一个滑块的索引，如果往上滑，下一个滑块的索引*/
        var slideList =swiper.slides;/*获取所有的滑块*/

        [].forEach.call(slideList,function(item,index){
            item.id = '';
            if(index === curIndex){
                switch(curIndex){
                    case 0 :
                        item.id = 'page' + (slideList.length-2);
                        pageTip.innerHTML = (slideList.length-2) + '/' + (slideList.length-2);
                        span.style.width = 2 *processWidth/100+ 'rem';
                        break;
                    case slideList.length-1 :
                        item.id ='page1';
                        pageTip.innerHTML = 1 + '/' + (slideList.length-2);
                        span.style.width =  1*2/((slideList.length-2)*100) *processWidth+ 'rem';
                        break;
                    default :
                        item.id = 'page' + curIndex;
                        pageTip.innerHTML = curIndex + '/' + (slideList.length-2);
                        span.style.width =  curIndex*2/((slideList.length-2)*100) *processWidth + 'rem';
                        break;
                }
            }
        });
    },
});

/*MUSIC*/
var music = document.querySelector(".music");
var beyond = document.querySelector("#beyond");
window.setTimeout(function(){
    beyond.play();//播放
    /*边缓冲边播放*/
    beyond.addEventListener("canplay",function(){
        music.style.opacity ="1";
        music.className = "music musicCur";
    },false)
},1000)
/*MUSIC  STOP/START*/
music.addEventListener("click",function(){
    //beyond.paused ->true停止  false 播放
    if(beyond.paused){
        beyond.play();//播放
        music.className  = "music musicCur";
    }else{
        beyond.pause();//停止
        music.className = "music";
    }
},false)
