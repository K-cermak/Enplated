var loadersData = {
    spinkit: {
      plane: {
        html: "<div class='selector'></div>",
        css: ".selector{width:40px;height:40px;background-color:#333;margin:40px auto;-webkit-animation:1.2s ease-in-out infinite selector-rotateplane;animation:1.2s ease-in-out infinite selector-rotateplane}@-webkit-keyframes selector-rotateplane{0%{-webkit-transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg)}100%{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}@keyframes selector-rotateplane{0%{transform:perspective(120px) rotateX(0) rotateY(0);-webkit-transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0);-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"
      },
      chase: {
        html: "<div class='selector-chase'><div class='selector-chase-dot'></div><div class='selector-chase-dot'></div><div class='selector-chase-dot'></div><div class='selector-chase-dot'></div><div class='selector-chase-dot'></div><div class='selector-chase-dot'></div></div>",
        css: ".selector-chase{margin:40px auto;width:40px;height:40px;position:relative;animation:2.5s linear infinite both selector-chase}.selector-chase-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:2s ease-in-out infinite both selector-chase-dot}.selector-chase-dot:before{content:'';display:block;width:25%;height:25%;background-color:#333;border-radius:100%;animation:2s ease-in-out infinite both selector-chase-dot-before}.selector-chase-dot:first-child,.selector-chase-dot:first-child:before{animation-delay:-1.1s}.selector-chase-dot:nth-child(2),.selector-chase-dot:nth-child(2):before{animation-delay:-1s}.selector-chase-dot:nth-child(3),.selector-chase-dot:nth-child(3):before{animation-delay:-.9s}.selector-chase-dot:nth-child(4),.selector-chase-dot:nth-child(4):before{animation-delay:-.8s}.selector-chase-dot:nth-child(5),.selector-chase-dot:nth-child(5):before{animation-delay:-.7s}.selector-chase-dot:nth-child(6),.selector-chase-dot:nth-child(6):before{animation-delay:-.6s}@keyframes selector-chase{100%{transform:rotate(360deg)}}@keyframes selector-chase-dot{100%,80%{transform:rotate(360deg)}}@keyframes selector-chase-dot-before{50%{transform:scale(.4)}0%,100%{transform:scale(1)}}"
      },
      bounce: {
        html: "<div class='selector'><div class='selector-bounce1'></div><div class='selector-bounce2'></div></div>",
        css: ".selector{width:40px;height:40px;position:relative;margin:40px auto}.selector-bounce1,.selector-bounce2{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite selector-bounce;animation:2s ease-in-out infinite selector-bounce}.selector-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes selector-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes selector-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}"
      },
      wave: {
        html: "<div class='selector'><div class='selectorRect1'></div><div class='selectorRect2'></div><div class='selectorRect3'></div><div class='selectorRect4'></div><div class='selectorRect5'></div></div>",
        css: ".selector{margin:40px auto;width:50px;height:40px;text-align:center;font-size:10px}.selector>div{background-color:#333;height:100%;width:6px;display:inline-block;margin-left:2px;-webkit-animation:1.2s ease-in-out infinite selector-stretchdelay;animation:1.2s ease-in-out infinite selector-stretchdelay}.selector .selectorRect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.selector .selectorRect3{-webkit-animation-delay:-1s;animation-delay:-1s}.selector .selectorRect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.selector .selectorRect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes selector-stretchdelay{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes selector-stretchdelay{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}"
      },
      pulse: {
        html: "<div class='selector'><div class='selectorcube1'></div><div class='selectorcube2'></div></div>",
        css: ".selector{margin:40px auto;width:40px;height:40px;position:relative}.selectorcube1,.selectorcube2{background-color:#333;width:15px;height:15px;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out infinite selector-selectorcubemove;animation:1.8s ease-in-out infinite selector-selectorcubemove}.selectorcube2{-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes selector-selectorcubemove{25%{-webkit-transform:translateX(42px) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(42px) translateY(42px) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(42px) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg)}}@keyframes selector-selectorcubemove{25%{transform:translateX(42px) rotate(-90deg) scale(.5);-webkit-transform:translateX(42px) rotate(-90deg) scale(.5)}50%{transform:translateX(42px) translateY(42px) rotate(-179deg);-webkit-transform:translateX(42px) translateY(42px) rotate(-179deg)}50.1%{transform:translateX(42px) translateY(42px) rotate(-180deg);-webkit-transform:translateX(42px) translateY(42px) rotate(-180deg)}75%{transform:translateX(0) translateY(42px) rotate(-270deg) scale(.5);-webkit-transform:translateX(0) translateY(42px) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg);-webkit-transform:rotate(-360deg)}}"
      },
      flow: {
        html: "<div class='spinner'></div>",
        css: ".spinner{width:40px;height:40px;margin:40px auto;background-color:#333;border-radius:100%;-webkit-animation:1s ease-in-out infinite selector-scaleout;animation:1s ease-in-out infinite selector-scaleout}@-webkit-keyframes selector-scaleout{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes selector-scaleout{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"
      },
      swing: {
        html: "<div class='selector'><div class='selectordot1'></div><div class='selectordot2'></div></div>",
        css: ".selector{margin:40px auto;width:40px;height:40px;position:relative;text-align:center;-webkit-animation:2s linear infinite selector-rotate;animation:2s linear infinite selector-rotate}.selectordot1,.selectordot2{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:#333;border-radius:100%;-webkit-animation:2s ease-in-out infinite selector-bounce;animation:2s ease-in-out infinite selector-bounce}.selectordot2{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes selector-rotate{100%{-webkit-transform:rotate(360deg)}}@keyframes selector-rotate{100%{transform:rotate(360deg);-webkit-transform:rotate(360deg)}}@-webkit-keyframes selector-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes selector-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}"
      },
      circle: {
        html: "<div class='selector'><div class='selectorbounce1'></div><div class='selectorbounce2'></div><div class='selectorbounce3'></div></div>",
        css: ".selector{margin:40px auto 0;width:70px;text-align:center}.selector>div{width:18px;height:18px;background-color:#333;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both selector-selectorbouncedelay;animation:1.4s ease-in-out infinite both selector-selectorbouncedelay}.selector .selectorbounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.selector .selectorbounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes selector-selectorbouncedelay{0%,100%,80%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes selector-selectorbouncedelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}"
      },
      circlefade: {
        html: "<div class='selector-circle'><div class='selector-circle1 selector-child'></div><div class='selector-circle2 selector-child'></div><div class='selector-circle3 selector-child'></div><div class='selector-circle4 selector-child'></div><div class='selector-circle5 selector-child'></div><div class='selector-circle6 selector-child'></div><div class='selector-circle7 selector-child'></div><div class='selector-circle8 selector-child'></div><div class='selector-circle9 selector-child'></div><div class='selector-circle10 selector-child'></div><div class='selector-circle11 selector-child'></div><div class='selector-circle12 selector-child'></div></div>",
        css: ".selector-circle{margin:40px auto;width:40px;height:40px;position:relative}.selector-circle .selector-child{width:100%;height:100%;position:absolute;left:0;top:0}.selector-circle .selector-child:before{content:'';display:block;margin:40px auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both selector-circleBounceDelay;animation:1.2s ease-in-out infinite both selector-circleBounceDelay}.selector-circle .selector-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.selector-circle .selector-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.selector-circle .selector-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.selector-circle .selector-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.selector-circle .selector-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.selector-circle .selector-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.selector-circle .selector-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.selector-circle .selector-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.selector-circle .selector-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.selector-circle .selector-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.selector-circle .selector-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.selector-circle .selector-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.selector-circle .selector-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.selector-circle .selector-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.selector-circle .selector-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.selector-circle .selector-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.selector-circle .selector-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.selector-circle .selector-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.selector-circle .selector-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.selector-circle .selector-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.selector-circle .selector-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.selector-circle .selector-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes selector-circleBounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes selector-circleBounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}"
      },
      grid: {
        html: "<div class='selector-cube-grid'><div class='selector-cube selector-cube1'></div><div class='selector-cube selector-cube2'></div><div class='selector-cube selector-cube3'></div><div class='selector-cube selector-cube4'></div><div class='selector-cube selector-cube5'></div><div class='selector-cube selector-cube6'></div><div class='selector-cube selector-cube7'></div><div class='selector-cube selector-cube8'></div><div class='selector-cube selector-cube9'></div></div>",
        css: ".selector-cube-grid{width:40px;height:40px;margin:40px auto}.selector-cube-grid .selector-cube{width:33%;height:33%;background-color:#333;float:left;-webkit-animation:1.3s ease-in-out infinite selector-cubeGridScaleDelay;animation:1.3s ease-in-out infinite selector-cubeGridScaleDelay}.selector-cube-grid .selector-cube1,.selector-cube-grid .selector-cube5,.selector-cube-grid .selector-cube9{-webkit-animation-delay:.2s;animation-delay:.2s}.selector-cube-grid .selector-cube2,.selector-cube-grid .selector-cube6{-webkit-animation-delay:.3s;animation-delay:.3s}.selector-cube-grid .selector-cube3{-webkit-animation-delay:.4s;animation-delay:.4s}.selector-cube-grid .selector-cube4,.selector-cube-grid .selector-cube8{-webkit-animation-delay:.1s;animation-delay:.1s}.selector-cube-grid .selector-cube7{-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes selector-cubeGridScaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes selector-cubeGridScaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}"
      },
      fold: {
        html: "<div class='selector-fading-circle'><div class='selector-circle1 selector-circle'></div><div class='selector-circle2 selector-circle'></div><div class='selector-circle3 selector-circle'></div><div class='selector-circle4 selector-circle'></div><div class='selector-circle5 selector-circle'></div><div class='selector-circle6 selector-circle'></div><div class='selector-circle7 selector-circle'></div><div class='selector-circle8 selector-circle'></div><div class='selector-circle9 selector-circle'></div><div class='selector-circle10 selector-circle'></div><div class='selector-circle11 selector-circle'></div><div class='selector-circle12 selector-circle'></div></div>",
        css: ".selector-fading-circle{margin:40px auto;width:40px;height:40px;position:relative}.selector-fading-circle .selector-circle{width:100%;height:100%;position:absolute;left:0;top:0}.selector-fading-circle .selector-circle:before{content:'';display:block;margin:40px auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both selector-circleFadeDelay;animation:1.2s ease-in-out infinite both selector-circleFadeDelay}.selector-fading-circle .selector-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.selector-fading-circle .selector-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.selector-fading-circle .selector-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.selector-fading-circle .selector-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.selector-fading-circle .selector-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.selector-fading-circle .selector-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.selector-fading-circle .selector-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.selector-fading-circle .selector-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.selector-fading-circle .selector-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.selector-fading-circle .selector-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.selector-fading-circle .selector-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.selector-fading-circle .selector-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.selector-fading-circle .selector-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.selector-fading-circle .selector-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.selector-fading-circle .selector-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.selector-fading-circle .selector-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.selector-fading-circle .selector-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.selector-fading-circle .selector-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.selector-fading-circle .selector-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.selector-fading-circle .selector-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.selector-fading-circle .selector-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.selector-fading-circle .selector-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes selector-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes selector-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"
      },
      wander: {
        html: "<div class='selector-folding-cube'><div class='selector-cube1 selector-cube'></div><div class='selector-cube2 selector-cube'></div><div class='selector-cube4 selector-cube'></div><div class='selector-cube3 selector-cube'></div></div>",
        css: ".selector-folding-cube{margin:40px auto;width:40px;height:40px;position:relative;-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.selector-folding-cube .selector-cube{float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.selector-folding-cube .selector-cube:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#333;-webkit-animation:2.4s linear infinite both selector-foldCubeAngle;animation:2.4s linear infinite both selector-foldCubeAngle;-webkit-transform-origin:100% 100%;-ms-transform-origin:100% 100%;transform-origin:100% 100%}.selector-folding-cube .selector-cube2{-webkit-transform:scale(1.1) rotateZ(90deg);transform:scale(1.1) rotateZ(90deg)}.selector-folding-cube .selector-cube3{-webkit-transform:scale(1.1) rotateZ(180deg);transform:scale(1.1) rotateZ(180deg)}.selector-folding-cube .selector-cube4{-webkit-transform:scale(1.1) rotateZ(270deg);transform:scale(1.1) rotateZ(270deg)}.selector-folding-cube .selector-cube2:before{-webkit-animation-delay:.3s;animation-delay:.3s}.selector-folding-cube .selector-cube3:before{-webkit-animation-delay:.6s;animation-delay:.6s}.selector-folding-cube .selector-cube4:before{-webkit-animation-delay:.9s;animation-delay:.9s}@-webkit-keyframes selector-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes selector-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}"
      }
    },
    vinloaders: {
        simplewheel: {
            css: ".selector{width:48px;height:48px;border:5px solid #fff;border-bottom-color:#ff3d00;border-radius:50%;display:inline-block;box-sizing:border-box;animation:1s linear infinite selector}@keyframes selector{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"
        },
        onewheel: {
            css: ".selector{width:48px;height:48px;border:5px solid #ff3d00;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:1s linear infinite selector}@keyframes selector{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"
        },
        doublewheel: {
            css: ".selector{width:48px;height:48px;border:3px solid #fff;border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:1s linear infinite selector}.selector::after{content:'';box-sizing:border-box;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:40px;height:40px;border-radius:50%;border:3px solid;border-color:#ff3d00 transparent}@keyframes selector{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"
        },
        dotwheel: {
            css: ".selector{width:48px;height:48px;border:3px solid #fff;border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:1s linear infinite selector}.selector::after{content:'';box-sizing:border-box;position:absolute;left:0;top:0;background:#ff3d00;width:16px;height:16px;transform:translate(-50%,50%);border-radius:50%}@keyframes selector{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"
        },
        mutliwheel: {
            css: ".selector,.selector::after,.selector::before{box-sizing:border-box;box-sizing:border-box}.selector{width:48px;height:48px;border-radius:50%;display:inline-block;position:relative;border:3px solid;border-color:#fff #fff transparent transparent;animation:1s linear infinite selector}.selector::after,.selector::before{content:'';position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;border:3px solid;border-color:transparent transparent #ff3d00 #ff3d00;width:40px;height:40px;border-radius:50%;animation:.5s linear infinite selectorBack;transform-origin:center center}.selector::before{width:32px;height:32px;border-color:#fff #fff transparent transparent;animation:1.5s linear infinite selector}@keyframes selector{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes selectorBack{0%{transform:rotate(0)}100%{transform:rotate(-360deg)}}"
        },
        lightwheel: {
            css: ".selector,.selector::after{box-sizing:border-box;border-radius:50%}.selector{width:48px;height:48px;display:inline-block;position:relative;background:linear-gradient(0deg,#fff 33%,#ff3d00 100%);animation:1s linear infinite selector}.selector::after{content:'';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:44px;height:44px;background:#eee}@keyframes selector{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"
        },
        line: {
            css: ".selector{width:100%;height:4.8px;display:inline-block;position:relative;overflow:hidden}.selector::after{content:'';width:96px;height:4.8px;background:#ff3d00;position:absolute;top:0;left:0;box-sizing:border-box;animation:.6s ease-in-out infinite alternate selector}@keyframes selector{0%{left:0;transform:translateX(-1%)}100%{left:100%;transform:translateX(-99%)}}"
        }
    }
}