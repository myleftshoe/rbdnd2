(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(13),i=n.n(s),r=n(14),c=n(15),l=n(17),u=n(16),d=n(18),p=n(1),h=n(9),m=n.n(h);n(34);var f={stiffness:300,damping:50},v=50,w=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleTouchStart=function(e,t,a){n.mmw(e,t,a.touches[0])},n.handleContextMenu=function(e,t,a){n.handleMouseDown(e,t,a.pageY)},n.handleScroll=function(e){e.preventDefault(),e.stopPropagation()},n.handleTouchMove=function(e){n.canStart&&n.handleMouseMove(e.touches[0])},n.handleMouseDown=function(e,t,a){var o=a.pageY;n.setState({topDeltaY:o-t,mouseY:t,isPressed:!0,originalPosOfLastPressed:e})},n.timeout=null,n.canStart=!1,n.mmw=function(e,t,a){var o=a.pageY;n.timeout=setTimeout(function(){n.canStart=!0,n.handleMouseDown(e,t,{pageY:o})},1e3)},n.handleMouseMove=function(e){var t,a,o,s=e.pageY,i=n.state,r=i.isPressed,c=i.topDeltaY,l=i.order,u=i.originalPosOfLastPressed;if(r){var d=s-c;console.log(d,s,c),s<500&&(n.containerElement.scrollTop=0);var p=(t=Math.round(d/50),a=0,o=v-1,Math.max(Math.min(t,o),a)),h=l;p!==l.indexOf(u)&&(h=function(e,t,n){var a=e.slice(0),o=a[t];return a.splice(t,1),a.splice(n,0,o),a}(l,l.indexOf(u),p)),n.setState({mouseY:d,order:h})}},n.handleMouseUp=function(){clearTimeout(n.timeout),n.canStart=!1,n.setState({isPressed:!1,topDeltaY:0})},n.setContainerElement=function(e){n.containerElement=e},n.containerElement=null,n.state={topDeltaY:0,mouseY:0,isPressed:!1,originalPosOfLastPressed:0,order:m()(v)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("contextmenu",this.handleScroll,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleMouseUp,{passive:!1}),window.addEventListener("mousemove",this.handleMouseMove,{passive:!1}),window.addEventListener("mouseup",this.handleMouseUp,{passive:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.mouseY,a=t.isPressed,s=t.originalPosOfLastPressed,i=t.order;return o.a.createElement("div",{ref:this.setContainerElement,className:"demo8"},m()(v).map(function(t){var r=s===t&&a?{scale:Object(p.spring)(1,f),shadow:Object(p.spring)(12,f),y:n}:{scale:Object(p.spring)(1,f),shadow:Object(p.spring)(1,f),y:Object(p.spring)(50*i.indexOf(t),f)};return o.a.createElement(p.Motion,{style:r,key:t},function(n){var a=n.scale,r=n.shadow,c=n.y;return o.a.createElement("div",{onMouseDown:e.mmw.bind(null,t,c),onTouchStart:e.handleTouchStart.bind(null,t,c),className:"demo8-item",style:{boxShadow:"rgba(0, 0, 0, 0.2) 0px ".concat(r,"px ").concat(2*r,"px 0px"),transform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(a,")"),WebkitTransform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(a,")"),zIndex:t===s?99:t}},i.indexOf(t)+1)})}))}}]),t}(o.a.Component);i.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.ad27feed.chunk.js.map