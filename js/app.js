// 定义一个滚动开关;

function scollSearch() {
    var baiduFist = $("#baiduid");
    var baiduTop = baiduFist.offset().top;
    var scrollHeight = $(window).scrollTop();
    return (baiduTop < scrollHeight) ? true : false;
}


function scollside() {
    var box = $(".contenNew");
    // console.log(box);
    var lastboxHeight = box.offset().top + box.height();
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}



$(document).ready(function() {


    $(window).on("load", function() {
        // imgLocation();
        var dataImg = {
            "data": [
                { "src": "m2.jpg" },
                { "src": "m2.jpg" },
                { "src": "m2.jpg" },
                { "src": "m2.jpg" },
                { "src": "m2.jpg" }


            ]
        }

        //1、滚动事件触发－start

        //第一部分滚动触发到一定高度时显示与隐藏某些元素；

        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) {
                $("#s_top_feed .to-top").css("visibility", "visible");
            } else {
                $("#s_top_feed .to-top").css("visibility", "hidden");
            }

            if (scollSearch()) {
                $("#searchbox").show();
            } else {
                $("#searchbox").hide();
            }

            //第二部分动态添加JSON键值对内容，并JQ操作DOM元素及内容；

            if (scollside()) {
                $.each(dataImg.data, function(index, value) {
                    var box = $("<div>").addClass("contenNew").appendTo("#contentN");

                    // console.log("./img/" + $(value).attr("src"));
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(box);
                });

            }


        });

        //滚动事件触发－end
    });






    //2、菜单悬浮事件触发－start


    $("#limore").on("mouseover", function() {
        $(".moreList").fadeIn(50);
    })

    $("#limore").on("mouseleave", function() {
        $(".moreList").fadeOut(50);
    })

    $("#loginEnter").on("mouseover", function() {
        // alert("点我!")
        $("#s_user_name_menu").show();
    });

    $("#loginEnter").on("mouseleave", function() {
        // alert("点我!")
        $("#s_user_name_menu").hide();
    });

    $("#setEnter").on("mouseover", function() {
        // alert("点我!")
        $("#s_user_setting_menu").show();
    });
    $("#setEnter").on("mouseleave", function() {
        // alert("点我!")
        $("#s_user_setting_menu").hide();
    });




    $('#s_top_feed .to-top').click(function() {
        $("html,body").animate({ scrollTop: 0 }, 200);
    });


    // 菜单悬浮事件触发－end


    //3、切换事件触发。。。start

    // .load加载要在服务器下进行
    // $("#realcontent").load("mytab1.html");
    // $("#tabContentUl li").each(function(index) {
    //     $(this).click(function() {
    //         $("#tabContentUl li.tabin").removeClass("tabin");
    //         $(this).addClass("tabin");
    //         if (index == 0) {
    //             $("#realcontent").load("mytab1.html");
    //         } else if (index == 1) {
    //             $("#realcontent").load("mytab2.html");
    //         } else if (index == 2) {
    //             $("#realcontent").load("mytab3.html");
    //         } else if (index == 3) {
    //             $("#realcontent").load("mytab4.html");
    //         }
    //     })
    // })
    //遍历每个LI menu菜单
    $("#tabContentUl li").each(function(index, value) {
        var liNode = $(this);
        liNode.click(function() {

            // content是动态加载的
            $("div.contentDiv").removeClass("contentDiv");
            $("#tabContentUl li.tabin").removeClass("tabin");
            // 当前遍历的索引指向　
            // console.log(index);
            $(".contentX").eq(index).addClass("contentDiv");
            liNode.addClass("tabin");


        });
    });




})
