(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(13),r=n.n(s),i=n(14),c=n(15),d=n(17),u=n(16),l=n(18),h=n(1),p=n(9),f=n.n(p);n(34);var m={stiffness:300,damping:50},v=20,w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleTouchStart=function(e,t,o){n.handleMouseDown(e,t,o.touches[0])},n.handleTouchMove=function(e){e.preventDefault(),n.handleMouseMove(e.touches[0])},n.handleMouseDown=function(e,t,o){var a=o.pageY;n.setState({topDeltaY:a-t,mouseY:t,isPressed:!0,originalPosOfLastPressed:e})},n.handleMouseMove=function(e){var t,o,a,s=e.pageY,r=n.state,i=r.isPressed,c=r.topDeltaY,d=r.order,u=r.originalPosOfLastPressed;if(i){var l=s-c,h=(t=Math.round(l/100),o=0,a=v-1,Math.max(Math.min(t,a),o)),p=d;h!==d.indexOf(u)&&(p=function(e,t,n){var o=e.slice(0),a=o[t];return o.splice(t,1),o.splice(n,0,a),o}(d,d.indexOf(u),h)),n.setState({mouseY:l,order:p})}},n.handleMouseUp=function(){n.setState({isPressed:!1,topDeltaY:0})},n.state={topDeltaY:0,mouseY:0,isPressed:!1,originalPosOfLastPressed:0,order:f()(v)},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("touchmove",this.handleTouchMove),window.addEventListener("touchend",this.handleMouseUp),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this,t=this.state,n=t.mouseY,o=t.isPressed,s=t.originalPosOfLastPressed,r=t.order;return a.a.createElement("div",{className:"demo8"},f()(v).map(function(t){var i=s===t&&o?{scale:Object(h.spring)(1.1,m),shadow:Object(h.spring)(16,m),y:n}:{scale:Object(h.spring)(1,m),shadow:Object(h.spring)(1,m),y:Object(h.spring)(100*r.indexOf(t),m)};return a.a.createElement(h.Motion,{style:i,key:t},function(n){var o=n.scale,i=n.shadow,c=n.y;return a.a.createElement("div",{onMouseDown:e.handleMouseDown.bind(null,t,c),onTouchStart:e.handleTouchStart.bind(null,t,c),className:"demo8-item",style:{boxShadow:"rgba(0, 0, 0, 0.2) 0px ".concat(i,"px ").concat(2*i,"px 0px"),transform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(o,")"),WebkitTransform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(o,")"),zIndex:t===s?99:t}},r.indexOf(t)+1)})}))}}]),t}(a.a.Component);r.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.205bcba8.chunk.js.map