# MusicPlug-in
一个原生JS写的简约音乐播放器

## 她可以做什么
  1.可控的音乐状态；<br>
  2.自定义加载音乐资源播放（单个、多个）；<br>
  3.自动音乐列表；<br>
  4.可指定容器；<br>
  5.可自定义容器元素样式；<br>
  6.可自定义按钮图片；<br>
  7.兼容微信运行
  
## 怎么使用
  我这里demo里面写的方法是zlMusic()，若有命名冲突可修改__INFO__.plug中定义的命名函数。
  引入js文件后，最好在body最下面写一下方法调用：
  <script>
     zlMusic({
                audioUrl: [     //音乐资源，多首歌曲请用数组传入
                            { title: "Marnoon - Maps", source: "music/Maps.mp3" },
                            { title: "Marnoon - Sugar", source: "music/Sugar.mp3" }
                ],
                //audioUrl: "music/Sugar.mp3" ,   //单首请直接传入音乐资源地址
                nodeID: "",       //插入的节点id
                boxStyle: "",     //播放器外层box的样式
                buttonSrc: "",    //按钮的资源地址（图片高宽比为2:1，上为暂停，下为播放，我这里直接把默认图标转换成base64位）
            });
  </script>
