window.articleText = '我曾想过一千种一万种求婚方式，在邓总婚礼上求婚，喜上加喜让你措手不及；电影院包场求婚，给予一份专属甜蜜；在飞机上广播求婚，聆听来自天空的欢呼声；去蹦极，在一同经历生死之后的那份透彻；一起去跳伞在空中，握住你的手，向天空呐喊要娶你，一起去千岛湖坐热气球，在美美的夕阳中，向你深情告白；也想过在餐厅，在酒店，大广场等等等，但是由于各种原因这些都没有实现。最后我选择这种比较程序员的方式，我也不知道这会不会是一种遗憾，不知道是不是因为想的太多，突然有一刻我觉得真心是最重要的，其他的都只是形式，而真心的话，才是你愿意看到的，并且感动的那一刻场景。虽然我们这一刻没有影机，没能定格住此时此刻的画面，但我希望在我们彼此的心里会铭记这一刻的温暖。'
window.titleText = '朋友们的祝福 - wishes  from  friends';
////////提示图层
!(function(root) {
  var Controller = function(delay, startFunc) {
    this.delay = delay; //延迟几分钟开始
    this.startFunc = startFunc;
    this.clicks();
    this.time();
    this.text(window.articleText);
    this.title(window.titleText);
    this.show();
  };

  Controller.prototype.start = function() {
    //场景开始后，面板开始有交互
    this.hover();
    this.hide();
    this.startFunc();
  }

  Controller.prototype.clicks = function() {
    var self = this;
    //开始按钮
    $('#start').click(
      function() {
        self.clickBol = true;
        self.start();
        self.hide();
      }
    );
  }

  Controller.prototype.hover = function() {
    var self = this;
    $('#controller').hover(
      function() {
        self.show();
      },
      function() {
        self.hide();
      }
    );
  }

  Controller.prototype.time = function(title) { //进去一个状态，过一段时间发生变化
    var self = this;
    var delay = 12000;

    setTimeout(
      function() {
        if (!self.clickBol) {
          $('#background').css('background', 'rgb(0,180,180)')
        }
      }, (delay - 2000)
    );

    setTimeout(function() {
      if (!self.clickBol) {
        self.hide;
        self.start();
      }
    }, delay);
  }

  Controller.prototype.text = function(text) {
    $('#article')
    .text(text)
    .attr("href", "http://www.52zhongtou.com/ProjectView/Detail/pid/560") 
    .css('cursor','pointer')
  }
  
  Controller.prototype.title = function(title) {
    var len = title.length;
    for(var k = 0; k < len;k++){
      var str = title[k];
      var h = 200 + 160*k/len;
      // var color = Color({hue:h, saturation:1, value:0.9}).toString();
      var color = 'rgb(0,200,200)';
      var span = $('<div></div>')
      .css('color',color)
      .css('fontWeight','bold')
      .css('float','left')
      .css('fontSize','30px')
      .css('textShadow', 'rgba(255, 255, 255, 1) 1px 1px 1px')
      .text(str);
      $('#articleTitle').append(span);
    }
  }


  Controller.prototype.hide = function() {
    $('#controller').css('top', '-82%').css('opacity', 0.3);
    // $('#webgl').removeClass('blur');
    // $('#divDisplay').removeClass('blur');
  }
  Controller.prototype.show = function() {
    $('#controller').css('top', '0%').css('opacity', 0.7)
    // $('#webgl').addClass('blur');
    // $('#divDisplay').addClass('blur');
  }


  Controller.prototype.bg = function(color) {
    $('#background').css('background', '#111');
    setTimeout(function() {
      $('#background').css('background', color);
    }, 1000);
  }

  Controller.prototype.all = function(dataObj) {
    //设置标题
    var title = dataObj.title;
    this.title(title);

    //设置kpi指标
    var kpiArrs = dataObj.kpis;
    for (var k = 0; k < kpiArrs.length; k++) {
      var kpiArr = kpiArrs[k];
      this.kpi(kpiArr, k);
    }
  }

  function clearDiv(div) { ///////////////////
    $(div).find('div').remove();
  }

  root.Controller = Controller;
})(window);