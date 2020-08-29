function modulePostRender(D){function y(a,b,c){var e=null!=window.mozInnerScreenX;c=document.createElement("div");c.id="input-textarea-caret-position-mirror-div";document.body.appendChild(c);var f=c.style,g=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle;f.whiteSpace="pre-wrap";f.wordWrap="break-word";f.position="absolute";f.visibility="hidden";"direction boxSizing width height overflowX overflowY borderTopWidth borderRightWidth borderBottomWidth borderLeftWidth borderStyle paddingTop paddingRight paddingBottom paddingLeft fontStyle fontVariant fontWeight fontStretch fontSize fontSizeAdjust lineHeight fontFamily textAlign textTransform textIndent textDecoration letterSpacing wordSpacing tabSize MozTabSize".split(" ").forEach(function(k){f[k]=
g[k]});e?a.scrollHeight>parseInt(g.height)&&(f.overflowY="scroll"):f.overflow="hidden";c.textContent=a.value.substring(0,b);e=document.createElement("span");e.textContent=a.value.substring(b)||".";c.appendChild(e);a={top:e.offsetTop+parseInt(g.borderTopWidth),left:e.offsetLeft+parseInt(g.borderLeftWidth),height:parseInt(g.lineHeight)};document.body.removeChild(c);return a}function z(a){$("#"+a+"-modal").remove();return $("<div></div>").attr("id",a+"-modal").attr("role","menu-modal").addClass("dropdown-menu-modal").click(function(b){$(this).css({display:"none"});
b=$(this).attr("id");b=b.substr(0,b.length-6);$("#"+b).css({display:"none"})})}function A(a){$("#"+a).remove();return $("<ul></ul>").attr("id",a).attr("role","menu").addClass("dropdown-menu")}function n(a){$("body").append(z(a+"-menu")).append(A(a+"-menu"))}function u(a,b){$("#"+a+"-menu").css({position:"fixed",display:"block",left:b.left+"px",top:b.top+"px"});$("#"+a+"-menu-modal").css({display:"block"})}function B(a,b,c){return a.attr("id",b).attr("context",b+"-menu").attr("openon",c).bind(c,function(e){e.preventDefault();
var f=this.getBoundingClientRect();u(b,{left:"mouseover"===c?f.right:e.clientX,top:"mouseover"===c?f.top:e.clientY})})}function v(a,b,c,e){$("#"+a+"-menu").append($("<li></li>").append($("<a></a>").text(c).click(function(){p(this);e(this)})).attr("id",a+"-menu-item-"+b))}function p(a){var b=a+"-menu";"string"!==typeof a&&(b=$(a).closest('[role="menu"]').attr("id"));$("#"+b).css({display:"none"});$("#"+b+"-modal").css({display:"none"})}function d(a,b,c,e){$("#"+a+"-menu").append($("<li></li>").append($("<a></a>").text(b).click(function(){p(this);
l(c,e)})))}function q(a){$("#"+a+"-menu").append($("<li></li>").addClass("divider"))}function r(a,b,c){$(".highlight-editor-holder .toolbar").append(B($("<li></li>").append($("<a></a>").append($("<i> "+c+"</i>").addClass("fas "+b))),a,"click"));n(a)}function C(){var a=h.get(0),b=a.selectionStart,c=a.value.substr(0,b).lastIndexOf("\n")+1;a=a.value.substr(c,b-c);b="";for(c=0;" "===(ch=a.substr(c,1))||"\t"===ch;)c++,b+=ch;"{"===a.substr(a.length-1,1)&&(b+="  ");return b}function l(a){var b=h.get(0),
c=b.selectionStart;a=a.split("\n").map(function(e,f){if(0===f)var g="";else{var k=h.get(0).selectionStart;k=h.val().substr(0,k);for(var t="",w=1;" "===(g=k.substr(-w,1))||"\t"===g;)w++,t=g+t;g=t}return g+e}).join("\n");h.setRangeText?h.setRangeText(a):(h.focus(),document.execCommand("insertText",!1,a));a=function(e){for(var f=0;f<m.length;f++){var g=e.indexOf(m[f]);if(-1!==g)return g}return-1}(a);-1!==a&&(b.selectionStart=a+c,b.selectionEnd=b.selectionStart+1);h.blur();h.focus()}function x(a){h.val(a+
h.val().trimEnd());l("\n")}if(window.chrome){$(".alpaca-field.alpaca-field-textarea textarea").addClass("editor allow-tabs").wrap($("<div></div>").addClass("scroller")).parent().append($("<pre></pre>").append($("<code></code>").addClass("syntax-highight javascript"))).wrap($("<div></div>").addClass("highlight-editor-holder")).parent().prepend($("<ul></ul>").addClass("toolbar"));r("easy-scripting-devices-events","fa-play","__m_events__");r("easy-scripting-devices-objects","fa-lightbulb","__m_devices__");
r("easy-scripting-syntax","fa-code","__m_expressions__");$.ajax("/ZAutomation/api/v1/devices").done(function(a){a.data.devices.sort(function(b,c){return b.metrics.title===c.metrics.title?b.id<c.id?-1:1:b.metrics.title<c.metrics.title?-1:1}).forEach(function(b){v("easy-scripting-devices-events",b.id,b.metrics.title+" ("+b.id+")",function(){x("### "+b.id+" // "+b.metrics.title+"\n")});v("easy-scripting-devices-objects",b.id,b.metrics.title+" ("+b.id+")",function(){l('vdev("'+b.id+'")')})})}).fail(function(){alert("no devices")});
var m=["\u229c","\u2299","\u2026"],h=$(".alpaca-field.alpaca-field-textarea textarea");n("easy-scripting-syntax");d("easy-scripting-syntax","__m_if__","if (\u229c) {\n  \u2026\n}");d("easy-scripting-syntax","__m_for_loop__","for (var i = 0; i < \u2299; i++) {\n  \u2026\n}");d("easy-scripting-syntax","__m_while_loop__","while (\u229c) {\n  \u2026\n}");q("easy-scripting-syntax");d("easy-scripting-syntax","__m_or__","\u229c || \u229c");d("easy-scripting-syntax","__m_and__","\u229c && \u229c");q("easy-scripting-syntax");
d("easy-scripting-syntax","__m_http_request__",'http.request({method: "GET", async: true, url: \u2299});');d("easy-scripting-syntax","__m_set_timeout__","setTimeout(function() {\n  \u2026\n}, \u2299*1000)");n("easy-scripting-device-methods");d("easy-scripting-device-methods","__m_turn_on__","on()");d("easy-scripting-device-methods","__m_turn_off__","off()");d("easy-scripting-device-methods","__m_turn_set__","set(\u2299)");q("easy-scripting-device-methods");d("easy-scripting-device-methods","__m_is_on__",
'value() === "on"');d("easy-scripting-device-methods","__m_is_off__",'value() === "off"');d("easy-scripting-device-methods","__m_equals__","value() === \u2299");d("easy-scripting-device-methods","__m_ne__","value() !== \u2299");d("easy-scripting-device-methods","__m_gt__","value() > \u2299");d("easy-scripting-device-methods","__m_ge__","value() >= \u2299");d("easy-scripting-device-methods","__m_lt__","value() < \u2299");d("easy-scripting-device-methods","__m_le__","value() <= \u2299");d("easy-scripting-device-methods",
"__m_value__","value()");$(h).click(function(){this.selectionStart===this.selectionEnd&&-1!==m.indexOf(this.value.substr(this.selectionStart,1))?this.selectionEnd=this.selectionStart+1:this.selectionStart===this.selectionEnd&&-1!==m.indexOf(this.value.substr(this.selectionStart-1,1))&&(this.selectionEnd=this.selectionStart,this.selectionStart--)});$(h).keypress(function(a){if("."===a.key){if(this.value.substr(0,this.selectionStart).match(/.*vdev\("[\w-]+"\)$/)){a=y(this,this.selectionEnd);var b=this.getBoundingClientRect();
a.top+=b.top+10;a.left+=b.left+10;u("easy-scripting-device-methods",a)}}else if("Enter"===a.key){var c=C();setTimeout(function(){l(c)},0)}else p("easy-scripting-device-methods")});document.querySelectorAll("pre code").forEach(function(a){hljs.highlightBlock(a)});x("")}else $(".alpaca-field.alpaca-field-textarea textarea").parent().prepend($("<div></div>").text("__h_unsupported__"))};