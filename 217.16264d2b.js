(window.webpackJsonp_trillion_muld=window.webpackJsonp_trillion_muld||[]).push([[217],{4838:(n,e,t)=>{"use strict";t.d(e,{HL:()=>r,ok:()=>o,Am:()=>i,GB:()=>a,TS:()=>s,Lv:()=>l,wp:()=>c,Tt:()=>u,tn:()=>d,x$:()=>p,Q3:()=>h,uD:()=>f,qv:()=>m,kC:()=>g,x6:()=>v,AI:()=>x,qQ:()=>b});var r="#323233",o="#1989fa",i="#8080ff",a="#4fc08d",s="#34495e",l="#f7f8fa",c="#666",u="#58727e",d="#f1f4f8",p="'Source Code Pro', 'Monaco', 'Inconsolata', monospace",h="30px",f="1680px",m="220px",g="12px",v="60px",x="360px",b=function(n){return Number(n.replace(/[^0-9]/g,""))}},1217:(n,e,t)=>{"use strict";var r=t(7294),o=t(1893),i=t(1055),a=t.n(i),s=t(4838),l=t(5693),c=t(3935),u=t(7617),d=t(4184),p=t.n(d);function h(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-doc-header {\n        width: 100%;\n        background-color: #001938;\n        user-select: none;\n\n        .mul-doc-header__top {\n            display: flex;\n            align-items: center;\n            height: ",";\n            padding: 0 ",";\n            line-height: ",";\n\n            &-nav {\n                flex: 1;\n                font-size: 0;\n                text-align: right;\n\n                > li {\n                    position: relative;\n                    display: inline-block;\n                    vertical-align: middle;\n                }\n\n                &-item {\n                    margin-left: 20px;\n                }\n\n                &-title {\n                    display: block;\n                    font-size: 15px;\n                }\n            }\n        }\n\n        .mul-doc-header__cube {\n            position: relative;\n            display: block;\n            padding: 0 12px;\n            color: #fff;\n            font-size: 14px;\n            font-family: 'Helvetica Neue', Arial, sans-serif;\n            line-height: 24px;\n            text-align: center;\n            border: 1px solid rgba(255, 255, 255, 0.7);\n            border-radius: 20px;\n            cursor: pointer;\n            transition: 0.3s ease-in-out;\n        }\n\n        .mul-doc-header__version {\n            padding-right: 20px;\n\n            &::after {\n                position: absolute;\n                top: 7px;\n                right: 7px;\n                width: 5px;\n                height: 5px;\n                color: rgba(255, 255, 255, 0.9);\n                border: 1px solid;\n                border-color: transparent transparent currentColor currentColor;\n                transform: rotate(-45deg);\n                content: '';\n            }\n\n            &-pop {\n                position: absolute;\n                top: 30px;\n                right: 0;\n                left: 0;\n                z-index: 99;\n                color: #333;\n                line-height: 36px;\n                text-align: left;\n                background-color: #fff;\n                border-radius: ",";\n                box-shadow: 0 4px 12px #ebedf0;\n                transform-origin: top;\n                transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n                &-item {\n                    padding-left: 12px;\n                    transition: 0.2s;\n\n                    &:hover {\n                        color: $mul_doc_blue;\n                    }\n                }\n            }\n        }\n\n        .mul-doc-header__logo {\n            display: block;\n\n            img,\n            span {\n                display: inline-block;\n                vertical-align: middle;\n            }\n\n            img {\n                width: 24px;\n                margin-right: 10px;\n            }\n\n            span {\n                color: #fff;\n                font-size: 22px;\n            }\n        }\n\n        .mul-doc-header__logo-link {\n            img {\n                display: block;\n                width: 26px;\n                height: 26px;\n                transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n\n                &:hover {\n                    transform: scale(1.2);\n                }\n            }\n            .octicon-mark-github {\n                display: inline-block;\n                vertical-align: middle;\n                color: #fff;\n                fill: currentColor;\n                &:hover {\n                    transform: scale(1.2);\n                }\n            }\n        }\n        .mul-doc-dropdown {\n            &-enter,\n            &-leave-active {\n                transform: scaleY(0);\n                opacity: 0;\n            }\n        }\n    }\n"]);return h=function(){return n},n}function f(n){var e,t=n.config,o=(n.lang,t.links),i=t.logo,a=t.title;return o.length>0&&(e=o.map((function(n,e){return r.createElement("li",{key:e,className:"mul-doc-header__top-nav-item"},r.createElement("a",{className:"mul-doc-header__logo-link",target:"_blank",href:n.url},r.createElement("svg",{className:"octicon-mark-github",height:"26",viewBox:"0 0 16 16",version:"1.1",width:"26","aria-hidden":"true"},r.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))))}))),r.createElement(m,{className:"mul-doc-header"},r.createElement("div",{className:"mul-doc-row"},r.createElement("div",{className:"mul-doc-header__top"},r.createElement("a",{className:"mul-doc-header__logo"},r.createElement("img",{src:i}),r.createElement("span",null,a)),r.createElement("ul",{className:"mul-doc-header__top-nav"},e))))}var m=o.ZP.div(h(),s.x6,s.Q3,s.x6,s.kC);function g(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-doc-nav {\n        position: fixed;\n        top: 60px;\n        bottom: 0;\n        left: 0;\n        z-index: 1;\n        min-width: ",";\n        max-width: ",";\n        padding: 24px 0 72px;\n        overflow-y: scroll;\n        background-color: #fff;\n        box-shadow: 0 8px 12px #ebedf0;\n\n        @media (min-width: ",") {\n            left: 50%;\n            margin-left: -","px;\n        }\n\n        &::-webkit-scrollbar {\n            width: 6px;\n            height: 6px;\n            background-color: transparent;\n        }\n\n        &::-webkit-scrollbar-thumb {\n            background-color: transparent;\n            border-radius: 6px;\n        }\n\n        &:hover::-webkit-scrollbar-thumb {\n            background-color: rgba(69, 90, 100, 0.2);\n        }\n\n        .mul-doc-nav__group {\n            margin-bottom: 16px;\n        }\n\n        .mul-doc-nav__title {\n            padding: 8px 0 8px ",";\n            color: #455a64;\n            font-weight: 500;\n            font-size: 15px;\n            line-height: 28px;\n        }\n\n        .mul-doc-nav__item {\n            a {\n                display: block;\n                margin: 0;\n                padding: 8px 0 8px ",";\n                color: #455a64;\n                font-size: 14px;\n                line-height: 28px;\n                transition: color 0.2s;\n\n                &:hover,\n                &.active {\n                    color: ",";\n                }\n\n                &.active {\n                    -webkit-font-smoothing: auto;\n                }\n\n                span {\n                    font-size: 13px;\n                }\n            }\n        }\n\n        @media (max-width: 1300px) {\n            &__item {\n                a {\n                    font-size: 13px;\n                }\n\n                &:active {\n                    font-size: 14px;\n                }\n            }\n        }\n    }\n"]);return g=function(){return n},n}function v(n){var e=n.config,t=n.lang,o=e.nav,i=r.useState(60),a=i[0],s=i[1],l=function(){var n=window.pageYOffset;s(Math.max(0,60-n))},c={top:a+"px",bottom:"0px"};r.useEffect((function(){window.addEventListener("scroll",l),l()}),[]);var u=r.useState(window.location.hash),d=u[0],p=(u[1],t?"/"+t+"/":"/");return r.createElement(x,{className:"mul-doc-nav",style:c},o.length>0&&o.map((function(n,e){return r.createElement("div",{key:e,className:"mul-doc-nav__group"},r.createElement("div",{className:"mul-doc-nav__title"},n.title),n.items.length>0&&n.items.map((function(n,e){var t=(n.title||n.name).split(" ");return r.createElement("div",{key:e,className:"mul-doc-nav__item"},r.createElement("a",{href:"#"+p+n.path,className:n.path===d?"active":""},t[0]," ",r.createElement("span",null,t.slice(1).join(" "))))})))})))}var x=o.ZP.div(g(),s.qv,s.qv,s.uD,(0,s.qQ)(s.uD)/2,s.Q3,s.Q3,s.GB);function b(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-doc-container {\n        box-sizing: border-box;\n        padding-left: ",";\n        overflow: hidden;\n\n        &--with-simulator {\n            padding-right: ","px;\n        }\n    }\n"]);return b=function(){return n},n}var y=o.ZP.div(b(),s.qv,(0,s.qQ)(s.AI)+(0,s.qQ)(s.Q3));function w(n){return r.createElement(y,{className:p()("mul-doc-container mul-doc-row",{"mul-doc-container--with-simulator":n.hasSimulator})},n.children)}function _(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-doc-content {\n        position: relative;\n        flex: 1;\n        padding: 0 0 75px;\n\n        .card {\n            margin-bottom: 24px;\n            padding: 24px;\n            background-color: #fff;\n            border-radius: ",";\n            box-shadow: 0 8px 12px #ebedf0;\n        }\n\n        a {\n            margin: 0 1px;\n            color: ",";\n            -webkit-font-smoothing: auto;\n\n            &:hover {\n                color: darken(",", 10%);\n            }\n\n            &:active {\n                color: darken(",", 20%);\n            }\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n            color: ",";\n            font-weight: normal;\n            line-height: 1.5;\n\n            &[id] {\n                cursor: pointer;\n            }\n        }\n\n        h1 {\n            margin: 0 0 30px;\n            font-size: 30px;\n            cursor: default;\n        }\n\n        h2 {\n            margin: 45px 0 20px;\n            font-size: 22px;\n        }\n\n        h3 {\n            margin-bottom: 16px;\n            font-weight: 500;\n            font-size: 18px;\n        }\n\n        h4 {\n            margin: 24px 0 12px;\n            font-weight: 500;\n            font-size: 15px;\n        }\n\n        h5 {\n            margin: 24px 0 12px;\n            font-weight: 500;\n            font-size: 14px;\n        }\n\n        p {\n            color: ",";\n            font-size: 14px;\n            line-height: 26px;\n        }\n\n        table {\n            width: 100%;\n            margin-top: 12px;\n            color: ",";\n            font-size: 13px;\n            line-height: 1.5;\n            border-collapse: collapse;\n\n            th {\n                padding: 8px 10px;\n                font-weight: 500;\n                text-align: left;\n\n                &:first-child {\n                    padding-left: 0;\n                }\n\n                &:last-child {\n                    padding-right: 0;\n                }\n            }\n\n            td {\n                padding: 8px;\n                border-top: 1px solid ",";\n\n                &:first-child {\n                    padding-left: 0;\n\n                    // version tag\n                    code {\n                        margin: 0;\n                        padding: 2px 6px;\n                        color: ",";\n                        font-weight: 500;\n                        font-size: 10px;\n                        background-color: fade(",", 10%);\n                        border-radius: 20px;\n                    }\n                }\n\n                &:last-child {\n                    padding-right: 0;\n                }\n            }\n\n            em {\n                color: ",";\n                font-size: 12.5px;\n                font-family: ",";\n                font-style: normal;\n                -webkit-font-smoothing: auto;\n            }\n        }\n\n        ul li,\n        ol li {\n            position: relative;\n            margin: 5px 0 5px 10px;\n            padding-left: 15px;\n            color: ",";\n            font-size: 14px;\n            line-height: 26px;\n\n            &::before {\n                position: absolute;\n                top: 0;\n                left: 0;\n                box-sizing: border-box;\n                width: 6px;\n                height: 6px;\n                margin-top: 10px;\n                border: 1px solid ",";\n                border-radius: 50%;\n                content: '';\n            }\n        }\n\n        hr {\n            margin: 30px 0;\n            border: 0 none;\n            border-top: 1px solid #eee;\n        }\n\n        p > code,\n        li > code,\n        table code {\n            display: inline;\n            margin: 2px 3px;\n            padding: 2px 5px;\n            font-size: 13px;\n            font-family: inherit;\n            word-break: keep-all;\n            background-color: #f0f2f5;\n            border-radius: 4px;\n            -webkit-font-smoothing: antialiased;\n        }\n\n        p > code {\n            font-size: 14px;\n        }\n\n        section {\n            padding: 30px;\n            overflow: hidden;\n        }\n\n        blockquote {\n            margin: 20px 0 0;\n            padding: 16px;\n            color: rgba(52, 73, 94, 0.8);\n            font-weight: 500;\n            font-size: 14px;\n            background-color: #ecf9ff;\n            border-radius: ",";\n        }\n\n        img {\n            width: 100%;\n            margin: 16px 0;\n            border-radius: ",";\n        }\n\n        &--changelog {\n            strong {\n                display: block;\n                margin: 24px 0 12px;\n                font-weight: 500;\n                font-size: 15px;\n            }\n\n            h3 {\n                + p code {\n                    margin: 0;\n                }\n\n                a {\n                    color: inherit;\n                    font-size: 20px;\n                }\n            }\n        }\n    }\n"]);return _=function(){return n},n}function S(n){return r.createElement(C,{className:p()(["mul-doc-content","mul-doc-content--"+function(){var n=window.location.hash.match(/(?:\/(.+))?\/(.+)/);if(n)return n[2]}()])},n.children)}var C=o.ZP.div(_(),s.kC,s.ok,s.ok,s.ok,s.HL,s.TS,s.TS,s.tn,s.ok,s.ok,s.GB,s.x$,s.TS,s.wp,s.kC,s.kC);function k(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    &.mul-doc-simulator {\n        position: absolute;\n        top: ","px;\n        right: ",";\n        z-index: 1;\n        box-sizing: border-box;\n        width: ",";\n        min-width: ",";\n        overflow: hidden;\n        background: #fafafa;\n        border-radius: ",";\n        box-shadow: #ebedf0 0 4px 12px;\n\n        @media (max-width: 1100px) {\n            right: auto;\n            left: 750px;\n        }\n\n        @media (min-width: ",") {\n            right: 50%;\n            margin-right: -","px;\n        }\n\n        &-fixed {\n            position: fixed;\n            top: ",";\n        }\n\n        iframe {\n            display: block;\n            width: 100%;\n            border: 0;\n        }\n    }\n"]);return k=function(){return n},n}function E(n){var e=r.useState(window.scrollY),t=e[0],o=e[1],i=r.useState(window.innerHeight),a=i[0],s=i[1],l=r.useRef(null);r.useEffect((function(){window.addEventListener("scroll",(function(){o(window.scrollY)})),window.addEventListener("resize",(function(){s(window.innerHeight)}))}),[t,a]);var c={height:Math.min(640,a-90)+"px"};return r.createElement(N,{className:p()("mul-doc-simulator ",{"mul-doc-simulator-fixed":t>60})},r.createElement("iframe",{ref:l,src:n.src,style:c}))}var N=o.ZP.div(k(),(0,s.qQ)(s.Q3)+(0,s.qQ)(s.x6),s.Q3,s.AI,s.AI,s.kC,s.uD,(0,s.qQ)(s.uD)/2+40,s.Q3);function z(n){var e=n.config,t=n.lang,o=n.simulator;return r.createElement("div",{className:"mul-doc"},r.createElement(f,{lang:t,config:e}),r.createElement(v,{lang:t,config:e}),r.createElement(w,{hasSimulator:!!o},r.createElement(S,null,n.children)),r.createElement(E,{src:o}))}var I=t(1652),j=t(2924),A=t(3079),Z=t(4595),R=t(8179),P=t(1876),T=t(2043),O=t(3034),L=t(2598),U=t(6830),B=t(1151),D=t(3023),G=t(5672),$=t(8325),q=t(1924),Q=t(933),F=t(2774),M=t(531),H=t(9620),Y=t(3800),J=t(1796),V=t(7310),W=t(9576),X=t(1163),K=t(1173),nn=t(8977),en=t(8990),tn=t(2809),rn=t(9535);const on={Button_zh_CN:l.Z,Card_zh_CN:u.Z,Cell_zh_CN:I.Z,Col_zh_CN:j.Z,CommonLayout_zh_CN:A.Z,Icon_zh_CN:Z.Z,Image_zh_CN:R.Z,List_zh_CN:P.Z,Loading_zh_CN:T.Z,NoticeBar_zh_CN:O.Z,Overlay_zh_CN:L.Z,Picker_zh_CN:U.Z,Popup_zh_CN:B.Z,StackLayout_zh_CN:D.Z,Stepper_zh_CN:G.Z,Tag_zh_CN:$.Z,Button_en_US:q.Z,Card_en_US:Q.Z,Cell_en_US:F.Z,Col_en_US:M.Z,Icon_en_US:H.Z,Image_en_US:Y.Z,List_en_US:J.Z,Loading_en_US:V.Z,NoticeBar_en_US:W.Z,Overlay_en_US:X.Z,Picker_en_US:K.Z,Popup_en_US:nn.Z,StackLayout_en_US:en.Z,Stepper_en_US:tn.Z,Tag_en_US:rn.Z};const an=navigator.userAgent.toLowerCase(),sn=/ios|iphone|ipod|ipad|android/.test(an);function ln(n,e="-"){return n.replace(/([a-z\d])([A-Z])/g,"$1"+e+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}var cn=t(9426);sn&&location.replace("mobile.html"+location.hash);var un=a().site,dn=(un.locales,un.defaultLang);function pn(){var n=[];return Object.keys(on).forEach((function(e){var t=function(n){if(-1!==n.indexOf("_")){var e=n.split("_");return{component:""+ln(e.shift()),lang:e.join("-")}}return{component:""+ln(n),lang:""}}(e),o=t.component,i=t.lang;"home"===o&&function(e,t){n.push({name:t,path:"/"+(t||""),element:r.createElement(e,null),meta:{lang:t}})}(on[e],i);var a=on[e];i?n.push({name:i+"/"+o,path:"/"+i+"/"+o,element:r.createElement(a,null),meta:{lang:i,name:o}}):n.push({name:""+o,path:"/"+o,element:r.createElement(a,null),meta:{name:o}})})),n}(0,cn.GO)(dn);var hn=t(6974),fn=t(9711);function mn(){return(0,hn.V$)(pn())}function gn(){var n=window.location.pathname.replace(/\/index(\.html)?/,"/"),e=r.useState(n+"mobile.html"+window.location.hash),t=e[0],o=e[1];r.useEffect((function(){window.onhashchange=function(){o(n+"mobile.html"+window.location.hash)},window.location.hash}),[]);var i=r.useState(localStorage.getItem("MULD_LANGUAGE")||"zh-CN"),s=i[0],l=(i[1],a().site.locales[s]);return r.createElement("div",{className:"app"},r.createElement(fn.UT,null,r.createElement(z,{lang:s,config:l,simulator:t},r.createElement(mn,null))))}var vn=t(9548);function xn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["",""]);return xn=function(){return n},n}var bn="\ncode {\n  position: relative;\n  display: block;\n  overflow-x: auto;\n  color: "+s.Tt+";\n  font-weight: 400;\n  font-size: 13.4px;\n  font-family: "+s.x$+";\n  line-height: 26px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  -webkit-font-smoothing: auto;\n}\n\npre {\n  margin: 20px 0 0;\n\n  + p {\n    margin-top: 20px;\n  }\n}\n\n.hljs {\n  display: block;\n  padding: 0.5em;\n  overflow-x: auto;\n  background: #fff;\n}\n\n.hljs-subst {\n  color: "+s.Tt+";\n}\n\n.hljs-string,\n.hljs-meta,\n.hljs-symbol,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition {\n  color: "+s.GB+";\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #999;\n}\n\n.hljs-params,\n.hljs-keyword,\n.hljs-attribute {\n  color: "+s.Am+";\n}\n\n.hljs-deletion,\n.hljs-variable,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-bullet,\n.hljs-link {\n  color: #eb6f6f;\n}\n\n.hljs-attr,\n.hljs-selector-tag,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-doctag,\n.hljs-type,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-strong {\n  color: #4994df;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}",yn=(0,o.vJ)(xn(),bn);function wn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n    .mul-doc-intro {\n        padding-top: 20px;\n        font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n        text-align: center;\n\n        p {\n            margin-bottom: 20px;\n        }\n    }\n"]);return wn=function(){return n},n}(0,c.render)(r.createElement(r.Fragment,null,r.createElement(vn.X,null),r.createElement(yn,null),r.createElement(gn,null)),document.getElementById("app"));o.ZP.div(wn())},7294:(n,e,t)=>{"use strict";n.exports=t(2408)},1893:(n,e,t)=>{"use strict";t.d(e,{ZP:()=>jn,vJ:()=>In});var r=t(9864),o=t(7294),i=t.n(o),a=(t(6774),t(8285)),s=t(351),l=t(8594),c=t(8679),u=t.n(c);function d(){return(d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var p=function(n,e){for(var t=[n[0]],r=0,o=e.length;r<o;r+=1)t.push(e[r],n[r+1]);return t},h=function(n){return null!==n&&"object"==typeof n&&"[object Object]"===(n.toString?n.toString():Object.prototype.toString.call(n))&&!(0,r.typeOf)(n)},f=Object.freeze([]),m=Object.freeze({});function g(n){return"function"==typeof n}function v(n){return n.displayName||n.name||"Component"}function x(n){return n&&"string"==typeof n.styledComponentId}var b="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",y="undefined"!=typeof window&&"HTMLElement"in window,w="boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY||"undefined"!=typeof process&&(process.env.REACT_APP_SC_DISABLE_SPEEDY||process.env.SC_DISABLE_SPEEDY)||!1,_={},S=function(){return t.nc};function C(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];throw new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+n+" for more information."+(t.length>0?" Additional arguments: "+t.join(", "):""))}var k=function(n){var e=document.head,t=n||e,r=document.createElement("style"),o=function(n){for(var e=n.childNodes,t=e.length;t>=0;t--){var r=e[t];if(r&&1===r.nodeType&&r.hasAttribute(b))return r}}(t),i=void 0!==o?o.nextSibling:null;r.setAttribute(b,"active"),r.setAttribute("data-styled-version","5.1.1");var a=S();return a&&r.setAttribute("nonce",a),t.insertBefore(r,i),r},E=function(){function n(n){var e=this.element=k(n);e.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var e=document.styleSheets,t=0,r=e.length;t<r;t++){var o=e[t];if(o.ownerNode===n)return o}C(17)}(e),this.length=0}var e=n.prototype;return e.insertRule=function(n,e){try{return this.sheet.insertRule(e,n),this.length++,!0}catch(n){return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var e=this.sheet.cssRules[n];return void 0!==e&&"string"==typeof e.cssText?e.cssText:""},n}(),N=function(){function n(n){var e=this.element=k(n);this.nodes=e.childNodes,this.length=0}var e=n.prototype;return e.insertRule=function(n,e){if(n<=this.length&&n>=0){var t=document.createTextNode(e),r=this.nodes[n];return this.element.insertBefore(t,r||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},n}(),z=function(){function n(n){this.rules=[],this.length=0}var e=n.prototype;return e.insertRule=function(n,e){return n<=this.length&&(this.rules.splice(n,0,e),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},n}(),I=function(){function n(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=n.prototype;return e.indexOfGroup=function(n){for(var e=0,t=0;t<n;t++)e+=this.groupSizes[t];return e},e.insertRules=function(n,e){if(n>=this.groupSizes.length){for(var t=this.groupSizes,r=t.length,o=r;n>=o;)(o<<=1)<0&&C(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(t),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(n+1),s=0,l=e.length;s<l;s++)this.tag.insertRule(a,e[s])&&(this.groupSizes[n]++,a++)},e.clearGroup=function(n){if(n<this.length){var e=this.groupSizes[n],t=this.indexOfGroup(n),r=t+e;this.groupSizes[n]=0;for(var o=t;o<r;o++)this.tag.deleteRule(t)}},e.getGroup=function(n){var e="";if(n>=this.length||0===this.groupSizes[n])return e;for(var t=this.groupSizes[n],r=this.indexOfGroup(n),o=r+t,i=r;i<o;i++)e+=this.tag.getRule(i)+"/*!sc*/\n";return e},n}(),j=new Map,A=new Map,Z=1,R=function(n){if(j.has(n))return j.get(n);var e=Z++;return j.set(n,e),A.set(e,n),e},P=function(n){return A.get(n)},T=function(n,e){e>=Z&&(Z=e+1),j.set(n,e),A.set(e,n)},O="style["+b+'][data-styled-version="5.1.1"]',L=new RegExp("^"+b+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),U=function(n,e,t){for(var r,o=t.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&n.registerName(e,r)},B=function(n,e){for(var t=e.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=t.length;o<i;o++){var a=t[o].trim();if(a){var s=a.match(L);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(T(c,l),U(n,c,s[3]),n.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},D=y,G={isServer:!y,useCSSOMInjection:!w},$=function(){function n(n,e,t){void 0===n&&(n=G),void 0===e&&(e={}),this.options=d({},G,{},n),this.gs=e,this.names=new Map(t),!this.options.isServer&&y&&D&&(D=!1,function(n){for(var e=document.querySelectorAll(O),t=0,r=e.length;t<r;t++){var o=e[t];o&&"active"!==o.getAttribute(b)&&(B(n,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}n.registerId=function(n){return R(n)};var e=n.prototype;return e.reconstructWithOptions=function(e){return new n(d({},this.options,{},e),this.gs,this.names)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.isServer,r=e.useCSSOMInjection,o=e.target,n=t?new z(o):r?new E(o):new N(o),new I(n)));var n,e,t,r,o},e.hasNameForId=function(n,e){return this.names.has(n)&&this.names.get(n).has(e)},e.registerName=function(n,e){if(R(n),this.names.has(n))this.names.get(n).add(e);else{var t=new Set;t.add(e),this.names.set(n,t)}},e.insertRules=function(n,e,t){this.registerName(n,e),this.getTag().insertRules(R(n),t)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(R(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var e=n.getTag(),t=e.length,r="",o=0;o<t;o++){var i=P(o);if(void 0!==i){var a=n.names.get(i),s=e.getGroup(o);if(void 0!==a&&0!==s.length){var l=b+".g"+o+'[id="'+i+'"]',c="";void 0!==a&&a.forEach((function(n){n.length>0&&(c+=n+",")})),r+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},n}(),q=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Q=function(n){return q(5381,n)};var F=/^\s*\/\/.*$/gm;function M(n){var e,t,r,o=void 0===n?m:n,i=o.options,s=void 0===i?m:i,l=o.plugins,c=void 0===l?f:l,u=new a.Z(s),d=[],p=function(n){function e(e){if(e)try{n(e+"}")}catch(n){}}return function(t,r,o,i,a,s,l,c,u,d){switch(t){case 1:if(0===u&&64===r.charCodeAt(0))return n(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return n(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(e)}}}((function(n){d.push(n)})),h=function(n,r,o){return r>0&&-1!==o.slice(0,r).indexOf(t)&&o.slice(r-t.length,r)!==t?"."+e:n};function g(n,o,i,a){void 0===a&&(a="&");var s=n.replace(F,""),l=o&&i?i+" "+o+" { "+s+" }":s;return e=a,t=o,r=new RegExp("\\"+t+"\\b","g"),u(i||!o?"":o,l)}return u.use([].concat(c,[function(n,e,o){2===n&&o.length&&o[0].lastIndexOf(t)>0&&(o[0]=o[0].replace(r,h))},p,function(n){if(-2===n){var e=d;return d=[],e}}])),g.hash=c.length?c.reduce((function(n,e){return e.name||C(15),q(n,e.name)}),5381).toString():"",g}var H=i().createContext(),Y=(H.Consumer,i().createContext()),J=(Y.Consumer,new $),V=M();function W(){return(0,o.useContext)(H)||J}function X(){return(0,o.useContext)(Y)||V}var K=function(){function n(n,e){var t=this;this.inject=function(n){n.hasNameForId(t.id,t.name)||n.insertRules(t.id,t.name,V.apply(void 0,t.stringifyArgs))},this.toString=function(){return C(12,String(t.name))},this.name=n,this.id="sc-keyframes-"+n,this.stringifyArgs=e}return n.prototype.getName=function(){return this.name},n}(),nn=/([A-Z])/g,en=/^ms-/;function tn(n){return n.replace(nn,"-$1").toLowerCase().replace(en,"-ms-")}var rn=function(n){return null==n||!1===n||""===n},on=function n(e,t){var r=[];return Object.keys(e).forEach((function(t){if(!rn(e[t])){if(h(e[t]))return r.push.apply(r,n(e[t],t)),r;if(g(e[t]))return r.push(tn(t)+":",e[t],";"),r;r.push(tn(t)+": "+(o=t,(null==(i=e[t])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||o in s.Z?String(i).trim():i+"px")+";"))}var o,i;return r})),t?[t+" {"].concat(r,["}"]):r};function an(n,e,t){if(Array.isArray(n)){for(var r,o=[],i=0,a=n.length;i<a;i+=1)""!==(r=an(n[i],e,t))&&(Array.isArray(r)?o.push.apply(o,r):o.push(r));return o}return rn(n)?"":x(n)?"."+n.styledComponentId:g(n)?"function"!=typeof(s=n)||s.prototype&&s.prototype.isReactComponent||!e?n:an(n(e),e,t):n instanceof K?t?(n.inject(t),n.getName()):n:h(n)?on(n):n.toString();var s}function sn(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return g(n)||h(n)?an(p(f,[n].concat(t))):0===t.length&&1===n.length&&"string"==typeof n[0]?n:an(p(n,t))}var ln=function(n){return"function"==typeof n||"object"==typeof n&&null!==n&&!Array.isArray(n)},cn=function(n){return"__proto__"!==n&&"constructor"!==n&&"prototype"!==n};function un(n,e,t){var r=n[t];ln(e)&&ln(r)?dn(r,e):n[t]=e}function dn(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];for(var o=0,i=t;o<i.length;o++){var a=i[o];if(ln(a))for(var s in a)cn(s)&&un(n,a[s],s)}return n}var pn=/(a)(d)/gi,hn=function(n){return String.fromCharCode(n+(n>25?39:97))};function fn(n){var e,t="";for(e=Math.abs(n);e>52;e=e/52|0)t=hn(e%52)+t;return(hn(e%52)+t).replace(pn,"$1-$2")}function mn(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(g(t)&&!x(t))return!1}return!0}var gn=function(){function n(n,e){this.rules=n,this.staticRulesId="",this.isStatic=mn(n),this.componentId=e,this.baseHash=Q(e),$.registerId(e)}return n.prototype.generateAndInjectStyles=function(n,e,t){var r=this.componentId;if(this.isStatic&&!t.hash){if(this.staticRulesId&&e.hasNameForId(r,this.staticRulesId))return this.staticRulesId;var o=an(this.rules,n,e).join(""),i=fn(q(this.baseHash,o.length)>>>0);if(!e.hasNameForId(r,i)){var a=t(o,"."+i,void 0,r);e.insertRules(r,i,a)}return this.staticRulesId=i,i}for(var s=this.rules.length,l=q(this.baseHash,t.hash),c="",u=0;u<s;u++){var d=this.rules[u];if("string"==typeof d)c+=d;else{var p=an(d,n,e),h=Array.isArray(p)?p.join(""):p;l=q(l,h+u),c+=h}}var f=fn(l>>>0);if(!e.hasNameForId(r,f)){var m=t(c,"."+f,void 0,r);e.insertRules(r,f,m)}return f},n}(),vn=(new Set,function(n,e,t){return void 0===t&&(t=m),n.theme!==t.theme&&n.theme||e||t.theme}),xn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bn=/(^-|-$)/g;function yn(n){return n.replace(xn,"-").replace(bn,"")}function wn(n){return"string"==typeof n&&!0}var _n=function(n){return fn(Q(n)>>>0)};var Sn=i().createContext();Sn.Consumer;var Cn={};function kn(n,e,t){var r=n.attrs,i=n.componentStyle,a=n.defaultProps,s=n.foldedComponentIds,c=n.shouldForwardProp,u=n.styledComponentId,p=n.target;(0,o.useDebugValue)(u);var h=function(n,e,t){void 0===n&&(n=m);var r=d({},e,{theme:n}),o={};return t.forEach((function(n){var e,t,i,a=n;for(e in g(a)&&(a=a(r)),a)r[e]=o[e]="className"===e?(t=o[e],i=a[e],t&&i?t+" "+i:t||i):a[e]})),[r,o]}(vn(e,(0,o.useContext)(Sn),a)||m,e,r),f=h[0],v=h[1],x=function(n,e,t,r){var i=W(),a=X(),s=n.isStatic&&!e?n.generateAndInjectStyles(m,i,a):n.generateAndInjectStyles(t,i,a);return(0,o.useDebugValue)(s),s}(i,r.length>0,f),b=t,y=v.$as||e.$as||v.as||e.as||p,w=wn(y),_=v!==e?d({},e,{},v):e,S=c||w&&l.Z,C={};for(var k in _)"$"!==k[0]&&"as"!==k&&("forwardedAs"===k?C.as=_[k]:S&&!S(k,l.Z)||(C[k]=_[k]));return e.style&&v.style!==e.style&&(C.style=d({},e.style,{},v.style)),C.className=Array.prototype.concat(s,u,x!==u?x:null,e.className,v.className).filter(Boolean).join(" "),C.ref=b,(0,o.createElement)(y,C)}function En(n,e,t){var r=x(n),o=!wn(n),a=e.displayName,s=void 0===a?function(n){return wn(n)?"styled."+n:"Styled("+v(n)+")"}(n):a,l=e.componentId,c=void 0===l?function(n,e){var t="string"!=typeof n?"sc":yn(n);Cn[t]=(Cn[t]||0)+1;var r=t+"-"+_n(t+Cn[t]);return e?e+"-"+r:r}(e.displayName,e.parentComponentId):l,p=e.attrs,h=void 0===p?f:p,m=e.displayName&&e.componentId?yn(e.displayName)+"-"+e.componentId:e.componentId||c,g=r&&n.attrs?Array.prototype.concat(n.attrs,h).filter(Boolean):h,b=e.shouldForwardProp;r&&n.shouldForwardProp&&(b=b?function(t,r){return n.shouldForwardProp(t,r)&&e.shouldForwardProp(t,r)}:n.shouldForwardProp);var y,w=new gn(r?n.componentStyle.rules.concat(t):t,m),_=function(n,e){return kn(y,n,e)};return _.displayName=s,(y=i().forwardRef(_)).attrs=g,y.componentStyle=w,y.displayName=s,y.shouldForwardProp=b,y.foldedComponentIds=r?Array.prototype.concat(n.foldedComponentIds,n.styledComponentId):f,y.styledComponentId=m,y.target=r?n.target:n,y.withComponent=function(n){var r=e.componentId,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(e,["componentId"]),i=r&&r+"-"+(wn(n)?n:yn(v(n)));return En(n,d({},o,{attrs:g,componentId:i}),t)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?dn({},n.defaultProps,e):e}}),y.toString=function(){return"."+y.styledComponentId},o&&u()(y,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,self:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Nn=function(n){return function n(e,t,o){if(void 0===o&&(o=m),!(0,r.isValidElementType)(t))return C(1,String(t));var i=function(){return e(t,o,sn.apply(void 0,arguments))};return i.withConfig=function(r){return n(e,t,d({},o,{},r))},i.attrs=function(r){return n(e,t,d({},o,{attrs:Array.prototype.concat(o.attrs,r).filter(Boolean)}))},i}(En,n)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(n){Nn[n]=Nn(n)}));var zn=function(){function n(n,e){this.rules=n,this.componentId=e,this.isStatic=mn(n)}var e=n.prototype;return e.createStyles=function(n,e,t,r){var o=r(an(this.rules,e,t).join(""),""),i=this.componentId+n;t.insertRules(i,i,o)},e.removeStyles=function(n,e){e.clearRules(this.componentId+n)},e.renderStyles=function(n,e,t,r){$.registerId(this.componentId+n),this.removeStyles(n,t),this.createStyles(n,e,t,r)},n}();function In(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=sn.apply(void 0,[n].concat(t)),s="sc-global-"+_n(JSON.stringify(a)),l=new zn(a,s);function c(n){var e=W(),t=X(),r=(0,o.useContext)(Sn),i=(0,o.useRef)(null);null===i.current&&(i.current=e.allocateGSInstance(s));var a=i.current;if(l.isStatic)l.renderStyles(a,_,e,t);else{var u=d({},n,{theme:vn(n,r,c.defaultProps)});l.renderStyles(a,u,e,t)}return(0,o.useEffect)((function(){return function(){return l.removeStyles(a,e)}}),f),null}return i().memo(c)}const jn=Nn}}]);