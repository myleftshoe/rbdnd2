(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(13),i=n.n(o),r=n(14),c=n(15),d=n(17),u=n(16),l=n(18),h=n(1),p=n(9),v=n.n(p);n(34);var f={stiffness:300,damping:50},m=50,w=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleTouchStart=function(e,t,s){n.handleMouseDown(e,t,s.touches[0])},n.handleTouchMove=function(e){e.preventDefault(),n.handleMouseMove(e.touches[0])},n.handleMouseDown=function(e,t,s){var a=s.pageY;n.setState({topDeltaY:a-t,mouseY:t,isPressed:!0,originalPosOfLastPressed:e})},n.handleMouseMove=function(e){var t,s,a,o=e.pageY,i=n.state,r=i.isPressed,c=i.topDeltaY,d=i.order,u=i.originalPosOfLastPressed;if(r){var l=o-c,h=(t=Math.round(l/100),s=0,a=m-1,Math.max(Math.min(t,a),s)),p=d;h!==d.indexOf(u)&&(p=function(e,t,n){var s=e.slice(0),a=s[t];return s.splice(t,1),s.splice(n,0,a),s}(d,d.indexOf(u),h)),n.setState({mouseY:l,order:p})}},n.handleMouseUp=function(){n.setState({isPressed:!1,topDeltaY:0})},n.state={topDeltaY:0,mouseY:0,isPressed:!1,originalPosOfLastPressed:0,order:v()(m)},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleMouseUp,{passive:!1}),window.addEventListener("mousemove",this.handleMouseMove,{passive:!1}),window.addEventListener("mouseup",this.handleMouseUp,{passive:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.mouseY,s=t.isPressed,o=t.originalPosOfLastPressed,i=t.order;return a.a.createElement("div",{className:"demo8"},v()(m).map(function(t){var r=o===t&&s?{scale:Object(h.spring)(1.1,f),shadow:Object(h.spring)(16,f),y:n}:{scale:Object(h.spring)(1,f),shadow:Object(h.spring)(1,f),y:Object(h.spring)(100*i.indexOf(t),f)};return a.a.createElement(h.Motion,{style:r,key:t},function(n){var s=n.scale,r=n.shadow,c=n.y;return a.a.createElement("div",{onMouseDown:e.handleMouseDown.bind(null,t,c),onTouchStart:e.handleTouchStart.bind(null,t,c),className:"demo8-item",style:{boxShadow:"rgba(0, 0, 0, 0.2) 0px ".concat(r,"px ").concat(2*r,"px 0px"),transform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(s,")"),WebkitTransform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(s,")"),zIndex:t===o?99:t}},i.indexOf(t)+1)})}))}}]),t}(a.a.Component);i.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.c3bcad53.chunk.js.map