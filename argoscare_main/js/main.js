$(function () {
  /* sub01(알림) */
  $("#sub01_content ul li:first-child").removeClass("active_01")
  $("#sub01_content ul li").click(function () {
    $(this).addClass("active_01");
  });

  //sub02
  $(".recent_list_tit").click(function () {
    $(this).toggleClass("on");
    $(this).parent().find(".recent_arrow").toggleClass("active02");
    $(this).parent().find(".recent_list_table").slideToggle();
    $(this).parent().find(".recent_list01_table").slideToggle();
  })

  $(".sub02_calendar").hide();
  $(".sub02_day a").click(function () {
    $(".sub02_calendar").show();
  });

  $(".sub02_calendar_btn p:nth-child(1)").click(function () {
    $(".sub02_calendar").hide();
  });



  /* sub03 */
  /* sub03데이트피커 */
  $(".sub03_calendar").hide();
  $("#sub03_content .common_date_box div a").click(function () {
    $(".sub03_calendar").fadeIn();
  });

  $(".sub03_calendar_btn p:nth-child(1)").click(function () {
    $(".sub03_calendar").fadeOut();
  });
  /* sub0301데이트피커 */
  $(".sub0301_calendar").hide();
  $(".sub0301_date_box span").click(function () {
    $(".sub0301_calendar").fadeIn();
  });

  $(".sub0301_calendar_btn p:nth-child(1)").click(function () {
    $(".sub0301_calendar").fadeOut();
  });





  /* sub04(활동일지) */
  $(".sub0401_modal").hide();
  $(".please").click(function () {
    $(".sub0401_modal").show();
  });

  $(".sub0401_modal_btn").click(function () {
    $(".sub0401_modal").hide();
  });

  //sub05
  $(".sub05_list").hide();
  $(".sub05_wrap").click(function () {
    $(this).find(".sub05_list").slideToggle();
    // $(this).siblings().find(".sub05_list").slideUp();
    $(this).find(".sub05_tit li span").toggleClass("active05");
    $(this).find(".sub05_tit").toggleClass("active05");
  });

  /* sub05데이트피커 */
  $(".sub05_calendar").hide();
  $("#sub05_content .common_date_box div a").click(function () {
    $(".sub05_calendar").fadeIn();
  });

  $(".sub05_calendar_btn p:nth-child(1)").click(function () {
    $(".sub05_calendar").fadeOut();
  });


  /* sub0501데이트피커 */
  $(".sub0501_calendar").hide();
  $(".sub0501_date_box span").click(function () {
    $(".sub0501_calendar").fadeIn();
  });

  $(".sub0501_calendar_btn p:nth-child(1)").click(function () {
    $(".sub0501_calendar").fadeOut();
  });



  /* 또수정 */
  $(".sub0502_list").hide();
  $(".sub0502_wrap").click(function () {
    $(this).find(".sub0502_list").slideToggle();
    $(this).siblings().find(".sub0502_list").slideUp();
    $(this).find(".sub0502_tit li span").toggleClass("active0502");
    $(this).find(".sub0502_tit").toggleClass("active0502");
  });

  /* sub0502데이트피커 */
  $(".sub0502_calendar").hide();
  $(".common_date_box>div a").click(function () {
    $(".sub0502_calendar").fadeIn();
  });

  $(".sub0502_calendar_btn p:nth-child(1)").click(function () {
    $(".sub0502_calendar").fadeOut();
  });

  /* sub06(입금내역) */
  $(".sub06_list").hide();
  $(".sub06_wrap").click(function () {
    $(this).find(".sub06_list").slideToggle();
    // $(this).siblings().find(".sub06_list").slideToggle();
    $(this).find(".sub06_tit li span").toggleClass("active06");
    $(this).find(".sub06_tit").toggleClass("active06");
  });


  /* sub06데이트피커 */
  $(".sub06_calendar").hide();
  $("#sub06_content .common_date_box div a").click(function () {
    $(".sub06_calendar").fadeIn();
  });

  $(".sub06_calendar_btn p:nth-child(1)").click(function () {
    $(".sub06_calendar").fadeOut();
  });
  /* sub0601데이트피커 */
  $(".sub0601_calendar").hide();
  $(".sub0601_date_box span").click(function () {
    $(".sub0601_calendar").fadeIn();
  });

  $(".sub0601_calendar_btn p:nth-child(1)").click(function () {
    $(".sub0601_calendar").fadeOut();
  });

  /* 또또수정 */
  /* sub0602(입금내역) */
  $(".sub0602_list").hide();
  $(".sub0602_tit").click(function () {
    $(this).toggleClass("active0602");
    $(this).parent().find(".sub0602_tit li:nth-child(1) p span")
    $(this).parent().find(".sub0602_list").slideToggle();
    $(this).find(".sub0602_tit").toggleClass("active0602");

  });

  /* sub0602데이트피커 */
  $(".sub0602_calendar").hide();
  $("#sub0602_content .common_date_box div a").click(function () {
    $(".sub0602_calendar").fadeIn();
  });

  $(".sub0602_calendar_btn p:nth-child(1)").click(function () {
    $(".sub0602_calendar").fadeOut();
  });





  //sub08
  $(".sub08_tab_list>ul>li:nth-child(1)").show().siblings().hide();
  $(".sub08_tab>ul>li").click(function () {
    $(this).addClass("active08").siblings().removeClass("active08");
    let idx08 = $(this).index();
    $(".sub08_tab_list>ul>li").eq(idx08).show().siblings().hide();
  });


  //sub0801
  $(".sub0801_modal").hide();
  $(".sub0801_btn").click(function () {
    $(".sub0801_modal").show();
  });

  $(".sub0801_modal_btn").click(function () {
    $(".sub0801_modal").hide();
  });

  //sub09
  $(".sub09_list ul li:first-child").click(function () {
    $(".sub09_toggle").toggleClass("active09", "active0901")
  });

  $(".sub09_modal01").hide();
  $(".sub09_list>ul>li:nth-child(2)").click(function () {
    $(".sub09_modal01").show();
  });
  $(".sub09_modal01_inner b").click(function () {
    $(".sub09_modal01").hide();
  });

  $(".sub09_modal02").hide();
  $(".sub09_list>ul>li:nth-child(5)").click(function () {
    $(".sub09_modal02").show();
  });
  $(".sub09_modal02_btn p:first-child").click(function () {
    $(".sub09_modal02").hide();
  });

  /* 코치마크 */
  $(".coatch").click(function () {
    $(this).fadeOut();
  });

  $(".coatch01").click(function () {
    $(this).fadeOut();
  });

  $(".coatch02").click(function () {
    $(this).fadeOut();
  });

  $(".coatch03").click(function () {
    $(this).fadeOut();
  });
  $(".coatch04").click(function () {
    $(this).fadeOut();
  });
  $(".coatch0401").click(function () {
    $(this).fadeOut();
  });
  $(".coatch05").click(function () {
    $(this).fadeOut();
  });
  $(".coatch0501").click(function () {
    $(this).fadeOut();
  });
  $(".coatch06").click(function () {
    $(this).fadeOut();
  });

  $(".coatch0601").click(function () {
    $(this).fadeOut();
  });

  $(".coatch09").click(function () {
    $(this).fadeOut();
  });

});