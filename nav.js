define(["jquery"],function($){
    function tab1() {
        $.ajax({
            type:"get",
            url:"../data/nav1.json",
            success:function (result) {
                var obj = result;
                var html ="";
                for(var key in obj){
                    html+="<div class="+ key +">"
                        for(var i=0;i<obj[key].length;i++){
                            html+="<p><a>"
                                if(obj[key][i].title.startsWith('imag')){
                                    html+="<img src='"+obj[key][i].title+"'/>"
                                }else{
                                    html+="<span>"+obj[key][i].title+"</span>";
                                }

                                html+="</a></p>"
                        }
                        html+="</div>"
                }
                var man_mediate = document.querySelector(".man-mediate");
                
                man_mediate.innerHTML = html;
            },
            error:function (msg) {
                console.log(msg);
            }
        })
    }

    function tab2() {
        $.ajax({
            type:"get",
            url:"../data/nav2.json",
            success:function (result) {
                var obj = result;
                var html ="";
                for(var key in obj){
                    html+="<div class="+ key +">"
                        for(var i=0;i<obj[key].length;i++){
                            html+="<p><a>"
                                if(obj[key][i].title.startsWith('imag')){
                                    html+="<img src='"+obj[key][i].title+"'/>"
                                }else{
                                    html+="<span>"+obj[key][i].title+"</span>";
                                }

                                html+="</a></p>"
                        }
                        html+="</div>"
                }
                var woman_mediate = document.querySelector(".woman-mediate");
                
                woman_mediate.innerHTML = html;
            },
            error:function (msg) {
                console.log(msg);
            }
        })
    }
    return{
        tab1:tab1,
        tab2:tab2
    }
});