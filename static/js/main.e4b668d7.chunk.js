(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(13),i=n.n(s),r=n(14),c=n(15),l=n(17),u=n(16),d=n(18),m=n(1),p=n(9),h=n.n(p);n(34);var f={stiffness:300,damping:50},v=50,w=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleTouchStart=function(e,t,o){n.mmw(e,t,o.touches[0])},n.handleContextMenu=function(e,t,o){n.handleMouseDown(e,t,o.pageY)},n.handleScroll=function(e){e.preventDefault(),e.stopPropagation()},n.handleTouchMove=function(e){n.canStart&&n.handleMouseMove(e.touches[0])},n.handleMouseDown=function(e,t,o){var a=o.pageY;n.setState({topDeltaY:a-t,mouseY:t,isPressed:!0,originalPosOfLastPressed:e})},n.timeout=null,n.canStart=!1,n.mmw=function(e,t,o){var a=o.pageY;n.timeout=setTimeout(function(){n.canStart=!0,n.handleMouseDown(e,t,{pageY:a})},1e3)},n.autoscroll=!1,n.lastPageY=0,n.handleMouseMove=function(e){var t,o,a,s=e.pageY,i=n.state,r=i.isPressed,c=i.topDeltaY,l=i.order,u=i.originalPosOfLastPressed;if(r){var d=s-c;console.log(d,s,c),s>300?(n.containerElement.scrollBy(0,10),d+=10,n.autoscroll=!0,n.lastPageY=s):n.containerElement.scrollTop=0;var m=(t=Math.round((d+n.containerElement.scrollTop)/50),o=0,a=v-1,Math.max(Math.min(t,a),o)),p=l;m!==l.indexOf(u)&&(p=function(e,t,n){var o=e.slice(0),a=o[t];return o.splice(t,1),o.splice(n,0,a),o}(l,l.indexOf(u),m)),n.setState({mouseY:d,order:p})}},n.handleMouseUp=function(){clearTimeout(n.timeout),n.canStart=!1,n.autoscroll=!1,n.setState({isPressed:!1,topDeltaY:0})},n.setContainerElement=function(e){n.containerElement=e},n.containerElement=null,n.state={topDeltaY:0,mouseY:0,isPressed:!1,originalPosOfLastPressed:0,order:h()(v)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("contextmenu",this.handleScroll,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleMouseUp,{passive:!1}),window.addEventListener("mousemove",this.handleMouseMove,{passive:!1}),window.addEventListener("mouseup",this.handleMouseUp,{passive:!1})}},{key:"componentDidUpdate",value:function(){var e=this;this.autoscroll&&setTimeout(function(){return e.handleMouseMove({pageY:e.lastPageY})},50)}},{key:"render",value:function(){var e=this,t=this.state,n=t.mouseY,o=t.isPressed,s=t.originalPosOfLastPressed,i=t.order,r=this.containerElement?this.containerElement.scrollTop:0;return a.a.createElement("div",{ref:this.setContainerElement,className:"demo8"},h()(v).map(function(t){var c=s===t&&o?{scale:Object(m.spring)(1,f),shadow:Object(m.spring)(12,f),y:n+r}:{scale:Object(m.spring)(1,f),shadow:Object(m.spring)(1,f),y:Object(m.spring)(50*i.indexOf(t),f)};return a.a.createElement(m.Motion,{style:c,key:t},function(n){var o=n.scale,r=n.shadow,c=n.y;return a.a.createElement("div",{onMouseDown:e.mmw.bind(null,t,c),onTouchStart:e.handleTouchStart.bind(null,t,c),className:"demo8-item",style:{boxShadow:"rgba(0, 0, 0, 0.2) 0px ".concat(r,"px ").concat(2*r,"px 0px"),transform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(o,")"),WebkitTransform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(o,")"),zIndex:t===s?99:t}},i.indexOf(t)+1)})}))}}]),t}(a.a.Component);i.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.e4b668d7.chunk.js.map