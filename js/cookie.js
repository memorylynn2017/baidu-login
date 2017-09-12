window.onload = function() {
    // 由于大多数特别谷歌线下不支持cookie，多数使用localStrorage来永久储存；
    var bg = getCookie('bg') || localStorage.skin; //传入的值为cookie的NAME;

    // console.log(localStorage.skin0);
    if (bg != null) {
        document.body.style.background = "url(img/" + bg + ".jpg) no-repeat";

        // console.log(document.getElementById('sideBar'));
        // console.log(document.getElementById('famous-section'));



    } else {
        document.body.style.background = "url(img/timg.jpg) no-repeat";
    }

}


function change(name, value) { //点击改变背景， 且重新写入cookie；


    document.body.style.background = "url(img/" + value + ".jpg)  no-repeat";


    localStorage.skin = value; //可用对象属性值匹配方式；

    setCookie(name, value);
}
// change();


// 建立cookie记录
function setCookie(name, value) {
    var day = 30;　 //设置有效时间为30天;
    var exp = new Date();
    //以毫秒设置Date对象,exp.getTime()返回的是距1970-1-1日之间的毫秒数加有效期秒钟;
    exp.setTime(exp.getTime() + day * 24 * 60 * 1000);　
    //写入cookie,escape()函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串;
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

// 我要提问的问题在这里？
function getCookie(name) {
    // 这段正则匹配网上抄的，不大理解什么意思？
    var arr, reg = new RegExp("(^|)" + name + "=([^;]*)(;|$)");
    // match()可在字符串内检索指定值或正则，若找到一个或多个值并返回可数组么？　
    if (arr = document.cookie.match(reg)) {
        return (arr[2]);

    } else {
        return null;
    }
}
