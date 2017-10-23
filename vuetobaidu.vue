<template>
    <div>
        <div id="l-map"></div>
        <div id="r-result">请输入:<input type="text" id="suggestId" size="20" v-model = "localtion.name" style="width:150px;" /></div>
        <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
        <div>{{localtion.lng}}</div>
        <div>{{localtion.lat}}</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                localtion:{
                    name:"",
                    lng:0,
                    lat:0
                }
            }
        },
        mounted(){
            this.maplist();
        },
        methods:{
            maplist(){
                function G(id) {
                    return document.getElementById(id);
                }
                var that = this;
                var map = new BMap.Map("l-map");
                map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。
                var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
                    {"input" : "suggestId"
                        ,"location" : map
                    });

                ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
                    var str = "";
                    var _value = e.fromitem.value;
                    var value = "";
                    if (e.fromitem.index > -1) {
                        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
                    }
                    str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

                    value = "";
                    if (e.toitem.index > -1) {
                        _value = e.toitem.value;
                        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
                    }
                    str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
                    G("searchResultPanel").innerHTML = str;
                });

                var myValue;
                ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
                    var _value = e.item.value;
                    myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
                    G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

                    setPlace();
                });

                function setPlace(){
                    map.clearOverlays();    //清除地图上所有覆盖物
                    function myFun(){
                        var pp = local.getResults().getPoi(0).point;
                        //获取第一个智能搜索的结果
                        map.centerAndZoom(pp, 18);
                        map.enableScrollWheelZoom();
                        var marker = new BMap.Marker(pp);
                        map.addOverlay(marker);    //添加标注
                        marker.enableDragging();
                        marker.addEventListener("dragend", function (e) {
                            var x = e.point.lng; //经度
                            var y = e.point.lat; //纬度
                            var point = new BMap.Point(x,y);
                            that.localtion.lat = x;
                            that.localtion.lng = y;
                            var gc = new BMap.Geocoder();
                            gc.getLocation(point, function(rs) {
                                var addComp = rs.addressComponents;
                                var mapAddress = addComp.province+addComp.city + addComp.district
                                    + addComp.street + addComp.streetNumber;
                                that.localtion.name = mapAddress;
                            });
                        });
                    }
                    var local = new BMap.LocalSearch(map, { //智能搜索
                        onSearchComplete: myFun
                    });
                    local.search(myValue);
                }
            }
        }

    }
</script>
<style>
    body, html{width: 100%;height: 100%;margin:0;font-family:"微软雅黑";font-size:14px;}
    #l-map{height:600px;width:100%;}
    #r-result{width:100%;}
</style>
