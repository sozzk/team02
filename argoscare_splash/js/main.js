$(function () {
  // sub00
  $(".sub0002_list li").click(function () {
    $("a.sub00_search").addClass("test")
  });

  /* sub01(알림) */
  $("#sub01_content ul li:first-child").removeClass("active_01")
  $("#sub01_content ul li").click(function () {
    $(this).addClass("active_01");
  });

  //sub02
  $(".recent_list_tit").click(function () {
    $(this).toggleClass("on").delay(4000)
    $(this).parent().find(".recent_arrow").toggleClass("active02")
    $(this).parent().find(".recent_list_table").slideToggle();
    $(this).parent().find(".recent_list01_table").slideToggle();
  })

  //sub05
  $(".sub05_list").hide();
  $(".sub05_wrap").click(function () {
    $(this).find(".sub05_list").slideToggle();
    $(this).siblings().find(".sub05_list").slideUp();
    $(this).find(".sub05_tit li span").toggleClass("active05");
  });
  // $(this).parent().find(".sub05_list").slideToggle();

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
});