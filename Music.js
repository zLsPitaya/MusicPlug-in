(function (global) {
    var __INFO__ = {
        plug: "zlMusic",    //调用插件的方法名
        varsion: "1.0.1",   //版本号
        author: "zL's Pitaya"   //作者
    };
    var defaults = {
        audioUrl: "",   //音乐资源地址
        nodeID: "",     //插入的节点id
        boxStyle: "",   //外层元素的样式
        buttonSrc: "",  //按钮的图片资源       
        htmls: "<audio autoplay loop style='width:0px;'><source src='' type='audio/mpeg'/></audio><a href='#' style='width:32px;height:32px;background:url(data:image/png;base64,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);background-size:cover;display:inline-block;'></a><select style='vertical-align:top;height:32px;'></select>"
    };
    var PlugCode = function (options) {
        var settings = Object.assign({}, defaults, options);    //合并自定义和预设的参数

        var audioDOM = document.getElementById(settings.nodeID);    //取到需要插入的节点

        if (!audioDOM) audioDOM = document.body;    //如果没有预设节点，则直接插入到页面body中

        //给播放器添加一个外层box
        var audioBOX = document.createElement("div"); 
        audioBOX.id = "zlmusiccontrol";
        audioBOX.style = "opacity:0.5;overflow:hidden;position:absolute;z-index:321257;" + settings.boxStyle; //添加自定义样式
        audioBOX.innerHTML = settings.htmls;
        audioDOM.appendChild(audioBOX);

        var audioButton = audioBOX.querySelectorAll("a")[0];    //找到第一个a元素
        var audioSelect = audioBOX.querySelectorAll("select")[0];   //找到第一个select元素
        var audioTag = audioBOX.querySelectorAll("audio")[0];   //找到第一个audio元素

        if(settings.buttonSrc) audioButton.style.backgroundImage = 'url('+ settings.buttonSrc +')';

        audioButton.state = true;   //播放器播放状态

        var _urlType = toString.apply(settings.audioUrl);   //获取音乐资源
        //console.log(_urlType);
        if (_urlType === '[object Object]') {       //将传入的音乐资源格式化为数组对象
            var _temp = [];
            _temp.push(settings.audioUrl);
            settings.audioUrl = _temp;  
        }
        if (!settings.audioUrl.length) {
            console.log(__INFO__.plug + "因无音乐资源启动失败，请添加音乐资源 audioUrl");
            return;
        }
        //console.log(typeof settings.audioUrl);
        if (typeof settings.audioUrl === 'object') {    //如果传入的是多首歌曲
            audioTag.childNodes.src = settings.audioUrl[0].source;
            for (var i = 0; i < settings.audioUrl.length; i++) {
                var _option = new Option(settings.audioUrl[i].title, settings.audioUrl[i].source);
                audioSelect.add(_option);
            }
        } else {        //否则是单首歌曲，URL则是字符串，并隐藏SELECT控件
            audioTag.src = settings.audioUrl;
            audioSelect.style.display = 'none';
        }

        var audioFN = {
            play: function (url) {      //播放动作
                if (url) audioTag.src = url;
                audioButton.style.backgroundPosition = "0 0";   //改变显示图片为播放
                audioTag.play();
            },
            stop: function () {         //暂停动作
                audioButton.style.backgroundPosition = "0 100%";        //改变显示图片为暂停
                audioTag.pause();
            }
        };

        var _device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));   //获取用户驱动信息
        var clickEvtName = _device ? "touchstart" : "mousedown";     
        audioButton.addEventListener(clickEvtName, function (e) {       //给播放器按钮添加监听事件，移动端为touchstart，PC端为mousedown
            //console.log(e.type);
            if (this.state) {   //如果是播放状态就暂停
                this.state = false;     
                audioFN.stop();     
            } else {
                this.state = true;
                audioFN.play();
            }
        })
        audioSelect.addEventListener("change", function (e) {   //给下拉框添加监听事件
            var musicName = this.options[this.selectedIndex].value;
            //console.log(musicName);
            audioFN.play(musicName);    //传入option参数加载对应的音乐资源
            audioButton.state = true;
        });

        //兼容微信
        if (navigator.userAgent.toLowerCase().match(/micromessenger/i)) {
            document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
                WeixinJSBridge.invoke("getNetworkType", {}, function (e) {
                    audioFN.play();
                })
            })
        }
    };
    global[__INFO__.plug] = PlugCode;   //向window中挂载方法
})(typeof window !== "undefined" ? window : this)
