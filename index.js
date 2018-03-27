
    
    $(document).ready(function(){

      var height= $(window).height();
      $('#first_sec').css('height',height+'px');
      $(window).scroll(function() {
          if ($(window).scrollTop()>500) {
                $('.fix_nav').show();
          }
          else{
                $('#nav').show();
                $('#nav').removeClass('fixed_top');
                $('.fix_nav').hide();

          }
      });
      var flag1=true;
      //点击打开和关闭导航条，打开5秒后自动消失
      $('.fix_nav').on('click',function(){
          if(flag1){
             $('#nav').fadeIn();
             $('#nav').addClass('fixed_top');
             flag1=false;
             if(!flag1){
                $('#nav').on('mouseleave',function(){
                    $('#nav').hide();
                    $('#nav').removeClass('fixed_top');
                    flag1=true;
                })
                // var t1=setTimeout(function () {
                //  $('.fixed_top').hide(); 
                //  flag1=true;
                //  window.clearTimeout(t1);
                //  }, 5000); 
             }   
          }
          else{
                $("#nav").hide();
                $("#nav").removeClass('fixed_top');
                flag1=true;
          }
      });
      $('.third_sec').hide(); 
      $('.forth_sec').hide();
      var flag =true;
      $('#btn1').on('click',function(){
          var chkRadio1= $('input[name="answer_one"]:checked').val();
               if(chkRadio1==='option4'){
                 $('.third_sec').fadeIn();
                 flag = false;
                 $(window).scrollTop($('.third_sec').offset().top);
                /* var num = 0,
                     $skill_item=$('.skill_item');
                     $skill_item.css('visibility','hidden');
                 var t2=setInterval(function(){
                     if (num==0||num==2) {
                         $skill_item.eq(num).css('visility','visible').addClass('item_right');                         
                     }else{
                         $skill_item.eq(num).css('visility','visible').addClass('item_left');
                     }
                     num++;
                     if(num>3){
                        return clearInterval(t2);
                     }
                 },500);*/
                 $('#error_msg_one').html('');
                 $('#error_msg_one').append('<p>答对了，你真棒！</p>');

               }else{
                 // console.log("1")
                 $('#error_msg_one').html('');
                 $('#error_msg_one').append('<p>再试一次哦！</p>');
               }

      })
      $('#btn2').on('click',function () {
          var chkRadio2=$('input[name="answer_two"]:checked').val();
              if (!flag) {
                  if (chkRadio2==='option4') {
                     $('.forth_sec').fadeIn();
                     $(window).scrollTop($('.forth_sec').offset().top);
                  }else{
                     $('#error_msg_two').append('<p>再试一次哦！</p>');
                  }
              }else{
                  $(window).scrollTop($('#skills').offset().top);
              }
      })
    });
    var aboutme= (function(){
          var flag=true,
          $thumbnail=$('.thumbnail');
          $thumbnail.css('visibility',"hidden");
          $(window).scroll(function(){
              var num=0;                          
              if($(window).scrollTop()>400){  
                  if (flag) {
                      var t=setInterval(  function () { 
                          $thumbnail.eq(num).css('visibility',"visible").addClass('item_top');
                          num++;
                          if (num>2) {
                              return clearInterval(t);
                          }
                          // console.log(num);
                      }, 300);
                      flag=false;
                  }            
              }
          });
    })();
    var project=(function(){
          var flag=true,
              $leftin=$('.flex').children().eq(0).children(),
              $rightin=$('.flex').children().eq(2).children(),
              a=[],b=[],c=[];
              a.push($leftin)
              b.push($rightin)
              c.push(a[0])
              c.push(b[0])
          $(window).scroll(function(){
              var num=0;
              if($(window).scrollTop()>3000){
                 if(flag){
                      var t=setInterval(function(){
                         if (num<3){
                          $(c[0][num]).css('visibility','visible').addClass('item_top');
                         }else{
                          $(c[1][5-num]).css('visibility','visible').addClass('item_top');
                         }
                         num++;
                         $('.circle').html('<p><em>'+(7-num)+'</em><p>');
                         if(num>6){
                           $('.circle').html('<p>奋斗在路上！</P>');
                           return clearInterval(t);
                         }
                      },1000);
                      flag=false;
                 }
              }
          })
    })();
