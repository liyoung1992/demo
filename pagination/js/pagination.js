
var global_cur_page = 1;
var global_url = "";
var global_method = "get";
var global_func = "";
var page_id = "global";
function create_page(cur_page,total_page,url,method,id,func){
    /*
     * cur_page 当前页
     * total_page 总共多少页
     * url 请求的url
     * method 请求方法
     * id 分页div的id，只有当页面中同时含有几个分页时，才会用到，默认不填
     * func post请求过后的执行函数，get不用填写
     * */
    global_cur_page = cur_page;
    global_url = url;
    global_method = method;
    global_func = func;
    page_id = "global";
    var hide_input = "";
    if(id == null){
        $(".cu_page").empty();
    }
    else{
        $("#" + id).empty();
        page_id = id;
        var hide_input = "<input id='"+ "global_cur_page_"+ id +"' style='display: none' value='"+ cur_page +"'>" +
            "<input id='"+ "global_url_"+ id +"' style='display: none' value='"+ url +"'>" +
            "<input id='"+ "global_method_"+ id +"' style='display: none' value='"+ method +"'>" +
            "<input id='"+ "global_func_"+ id +"' style='display: none' value='"+ func +"'>";
    }
    if(total_page <= 6){
        var page_header = "<ul> <li><a class='cu_prev'  name='"+ page_id +"' href='javascript:"+"on_pre_click();'></a></li>";
        var page_footer =   "<li><a class='cu_next'  name='"+ page_id +"'  href='javascript:"+"on_next_click("+ total_page+");'></a></li>" +
            " <li>共" + total_page +"页</li><li class='cu_palast'> <span>跳转到第</span> <input type='text'  name='"+ page_id +"' " +
            " onkeydown='if(event.keyCode==13){on_skip_olick("+ total_page+")}' id='skip_" + page_id +"' value=''> <span>页</span>" +
            " <a  name='"+ page_id +"' href='javascript:on_skip_olick("+ total_page+");'>跳转</a> </li> </ul>";
        var page_body = "";

        for(var i = 1; i <= total_page; i++){
            if(i == cur_page){
                page_body += "<li><a  class='cuur'  name='"+ page_id +"' id='"+ page_id + "_page_" + i +"' name='"+ page_id +"' href='javascript:on_page_click("+i+");'>" + i +"</a></li>"
            }else {
                page_body += "<li><a  name='"+ page_id +"' id='"+ page_id + "_page_" + i +"' href='javascript:on_page_click("+i+");'>" + i +" </a></li>";
            }
        }
    }
    else if(total_page > 6 && (cur_page) < 5){
        var page_header = "<ul> <li><a  name='"+ page_id +"' class='cu_prev' href='javascript:"+"on_pre_click();'></a></li>";
        var page_footer =   "<li><span class='cu_spct'>...</span></li>" +
            "<li><a  name='"+ page_id +"' id='"+ page_id +  "_page_" + total_page +"' href='javascript:on_page_click("+total_page+");'>" + total_page +" </a></li>"
            +"<li><a  name='"+ page_id +"' class='cu_next' href='javascript:"+"on_next_click("+ total_page+");'></a></li>" +
            " <li>共" + total_page +"页</li><li class='cu_palast'> <span>跳转到第</span> <input  name='"+ page_id +"' type='text'" +
            "onkeydown='if(event.keyCode==13){on_skip_olick("+ total_page+")}' id='skip_" + page_id +"' value=''> <span>页</span>" +
            " <a  name='"+ page_id +"' href='javascript:on_skip_olick("+ total_page+");'>跳转</a> </li> </ul>";
        var page_body = "";

        for(var i = 1; i <= 5; i++){
            if(i == cur_page){
                page_body += "<li><a class='cuur'  name='"+ page_id +"' id='"+ page_id + "_page_" + i +"'   href='javascript:on_page_click("+i+");'>" + i +"</a></li>"
            }else {
                page_body += "<li><a  name='"+ page_id +"' id='"+ page_id + "_page_" + i +"'  href='javascript:on_page_click("+i+");'>" + i +" </a></li>";
            }
        }
    }
    else if(total_page > 6 && (cur_page  > 5) && (total_page - cur_page) < 5){

        var page_header = "<ul> <li><a  name='"+ page_id +"' class='cu_prev'href='javascript:"+"on_pre_click();'></a></li>"
            +"<li><a  name='"+ page_id +"'  id='"+ page_id +  "_page_"  + 1 +"' href='javascript:on_page_click(1);'>1</a></li>" +
            "<li><span class='cu_spct'>...</span></li>" ;

        var page_footer =   "<li><a class='cu_next'  name='"+ page_id +"' name='"+ page_id +"' href='javascript:"+"on_next_click("+ total_page+");'></a></li>" +
            " <li>共" + total_page +"页</li><li class='cu_palast'> <span>跳转到第</span> <input name='"+ page_id +"'  type='text'" +
            " onkeydown='if(event.keyCode==13){on_skip_olick("+ total_page+")}' id='skip_" + page_id +"' value=''> <span>页</span>" +
            " <a name='"+ page_id +"' href='javascript:on_skip_olick("+ total_page+");'>跳转</a> </li> </ul>";
        var page_body = "";

        for(var i = total_page - 4; i <= total_page; i++){
            if(i == cur_page){
                page_body += "<li><a class='cuur' name='"+ page_id +"' id='"+ page_id + "_page_" + i +"'   href='javascript:on_page_click("+i+");'>" + i +"</a></li>"
            }else {
                page_body += "<li><a name='"+ page_id +"' id='"+ page_id + "_page_" + i +"' href='javascript:on_page_click("+i+");'>" + i +" </a></li>";
            }
        }
    }
    else{
        var page_header = "<ul> <li><a name='"+ page_id +"' class='cu_prev' href='javascript:"+"on_pre_click();'></a></li>"
            +"<li><a name='"+ page_id +"'  id='"+ page_id +  "_page_"  + 1 +"'  href='javascript:on_page_click(1);'>1</a></li>" +
            "<li><span class='cu_spct'>...</span></li>";
        var page_footer =   "<li><span class='cu_spct'>...</span></li>" +
            "<li><a name='"+ page_id +"'  id='"+ page_id +  "_page_" + total_page +"'  href='javascript:on_page_click("+total_page+");'>" + total_page +" </a></li>"
            +"<li><a name='"+ page_id +"' class='cu_next' href='javascript:"+"on_next_click("+ total_page+");'></a></li>" +
            " <li>共" + total_page +"页</li><li class='cu_palast'> <span>跳转到第</span> <input name='"+ page_id +"' type='text' " +
            "onkeydown='if(event.keyCode==13){on_skip_olick("+ total_page+")}' id='skip_" + page_id +"' value=''> <span>页</span>" +
            " <a name='"+ page_id +"' href='javascript:on_skip_olick("+ total_page+");'>跳转</a> </li> </ul>";
        var page_body = "";

        for(var i = cur_page-2; i <= cur_page +1; i++){
            if(i == cur_page){
                page_body += "<li><a name='"+ page_id +"' class='cuur'  id='"+ page_id + "_page_" + i +"'   href='javascript:on_page_click("+i+");'> " + i +"</a></li>"
            }else {
                page_body += "<li><a name='"+ page_id +"' id='"+ page_id + "_page_" + i +"'  href='javascript:on_page_click("+i+");'>" + i +" </a></li>";
            }
        }
    }
    if(id == null)
        $(".cu_page").append(page_header + page_body + page_footer + hide_input);
    else
        $("#" + id).append(page_header + page_body + page_footer + hide_input);
}

//点击指定页
function on_page_click(page){
    if(page_id == "global"){
        $("#" + "global_page_" + global_cur_page).removeClass();
        $("#" + "global_page_" + page).addClass('cuur');
        global_cur_page = page;
        var point = (global_cur_page - 1)*15;
        if(global_method == "get"){
            window.location.href = global_url + "&point=" + point;
        }else{
            eval(global_func);
        }
    }else{
            var cur_pages = $("#" + "global_cur_page_"+page_id).val();
            $("#" + page_id + "_page_" + cur_pages).removeClass();
            $("#" + page_id + "_page_" + page).addClass("cuur");
            $("#" + "global_cur_page_" + page_id).val(page);
            eval($("#" + "global_func_"+page_id).val());
    }
}
//page表示当前页
function on_pre_click(){
    if(page_id == "global"){
        if(global_cur_page > 1){
            var pre_page = parseInt(global_cur_page) - 1;
            $("#" + "global_page_" + global_cur_page).removeClass();
            $("#" + "global_page_" + pre_page).addClass("cuur");
            global_cur_page = pre_page;
            var point = (global_cur_page - 1)*15;
            if(global_method == "get"){
                window.location.href = global_url + "&point=" + point;
            }else{
                eval(global_func);
            }
        }
    }else{
        var cur_pages = $("#" + "global_cur_page_"+page_id).val();
        if(cur_pages > 1){
            var pre_page = parseInt(cur_pages) - 1;
            $("#" + page_id + "_page_" + cur_pages).removeClass();
            $("#" + page_id + "_page_" + pre_page).addClass("cuur");
            $("#" + "global_cur_page_" + page_id).val(pre_page);
            eval($("#" + "global_func_"+page_id).val());
        }
    }
}
//page表示当前页
function on_next_click(total_page){
    if(page_id == "global"){
        if(global_cur_page < total_page){
            var next_page = parseInt(global_cur_page) + 1;
            $("#" + "global_page_" + global_cur_page).removeClass();
            $("#" + "global_page_" + next_page).addClass("cuur");
            global_cur_page = next_page;
            var point = (global_cur_page - 1)*15;
            if(global_method == "get"){
                window.location.href = global_url + "&point=" + point;
            }else{
                eval(global_func);
            }
        }
    }else{
        var cur_pages = $("#" + "global_cur_page_"+page_id).val();
        if(cur_pages < total_page){
            var next_page = parseInt(cur_pages) + 1;
            $("#" + page_id + "_page_" + cur_pages).removeClass();
            $("#" + page_id + "_page_" + next_page).addClass("cuur");
            $("#" + "global_cur_page_" + page_id).val(next_page);
            eval($("#" + "global_func_"+page_id).val());
        }
    }
}
//点击跳转页
function on_skip_olick(total_page){
    if(page_id == "global"){
        var skip_page = $("#" + "skip_" + page_id).val();
        if(skip_page <= total_page && skip_page > 0){
            $("#" + "global_page_" + global_cur_page).removeClass();
            $("#" + "global_page_" + skip_page).addClass("cuur");
            global_cur_page = skip_page;
            var point = (global_cur_page - 1)*15;
            if(global_method == "get"){
                window.location.href = global_url + "&point=" + point;
            }else{
                eval(global_func);
            }
        }
    }else {
        var skip_page = $("#" + "skip_" + page_id).val();
        var cur_pages = $("#" + "global_cur_page_"+page_id).val();
        if(skip_page <= total_page && skip_page > 0){
            var pre_page = parseInt(cur_pages) - 1;
            $("#" + page_id + "_page_" + cur_pages).removeClass();
            $("#" + page_id + "_page_" + skip_page).addClass("cuur");
            $("#" + "global_cur_page_" + page_id).val(skip_page);
            eval($("#" + "global_func_"+page_id).val());
        }
    }

}
//切换到对应id页面的时候调用这个函数（一个页面多个分页的时候用到这个函数）
function set_cur_page_id(id){
    page_id = id;
}