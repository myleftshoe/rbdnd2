(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(13),r=n.n(s),i=n(14),c=n(15),l=n(17),u=n(16),d=n(18),p=n(1),m=n(9),h=n.n(m);n(34);var f={stiffness:300,damping:50},v=50,w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleTouchStart=function(e,t,o){n.mmw(e,t,o.touches[0])},n.handleContextMenu=function(e,t,o){n.handleMouseDown(e,t,o.pageY)},n.handleScroll=function(e){e.preventDefault(),e.stopPropagation()},n.handleTouchMove=function(e){n.canStart&&(e.preventDefault(),e.stopPropagation(),n.handleMouseMove(e.touches[0]))},n.handleMouseDown=function(e,t,o){var a=o.pageY;n.setState({topDeltaY:a-t,mouseY:t,isPressed:!0,originalPosOfLastPressed:e})},n.timeout=null,n.canStart=!1,n.mmw=function(e,t,o){var a=o.pageY;n.timeout=setTimeout(function(){n.canStart=!0,n.handleMouseDown(e,t,{pageY:a})},1e3)},n.autoscroll=!1,n.lastPageY=0,n.handleMouseMove=function(e){var t,o,a,s=e.pageY,r=n.state,i=r.isPressed,c=r.topDeltaY,l=r.order,u=r.originalPosOfLastPressed;if(i){var d=s-c;console.log(d,s,c),s>300?(n.containerElement.scrollTop=n.containerElement.scrollTop+10,d+=10,n.autoscroll=!0,n.lastPageY=s):n.containerElement.scrollTop=0;var p=(t=Math.round((d+n.containerElement.scrollTop)/50),o=0,a=v-1,Math.max(Math.min(t,a),o)),m=l;p!==l.indexOf(u)&&(m=function(e,t,n){var o=e.slice(0),a=o[t];return o.splice(t,1),o.splice(n,0,a),o}(l,l.indexOf(u),p)),n.setState({mouseY:d,order:m})}},n.handleMouseUp=function(){clearTimeout(n.timeout),n.canStart=!1,n.autoscroll=!1,n.setState({isPressed:!1,topDeltaY:0})},n.setContainerElement=function(e){n.containerElement=e},n.containerElement=null,n.state={topDeltaY:0,mouseY:0,isPressed:!1,originalPosOfLastPressed:0,order:h()(v)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("contextmenu",this.handleScroll,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleMouseUp,{passive:!1}),window.addEventListener("mousemove",this.handleMouseMove,{passive:!1}),window.addEventListener("mouseup",this.handleMouseUp,{passive:!1})}},{key:"componentDidUpdate",value:function(){var e=this;this.autoscroll&&setTimeout(function(){return e.handleMouseMove({pageY:e.lastPageY})},500)}},{key:"render",value:function(){var e=this,t=this.state,n=t.mouseY,o=t.isPressed,s=t.originalPosOfLastPressed,r=t.order,i=this.containerElement?this.containerElement.scrollTop:0;return a.a.createElement("div",{ref:this.setContainerElement,className:"demo8"},h()(v).map(function(t){var c=s===t&&o?{scale:Object(p.spring)(1,f),shadow:Object(p.spring)(12,f),y:n+i}:{scale:Object(p.spring)(1,f),shadow:Object(p.spring)(1,f),y:Object(p.spring)(50*r.indexOf(t),f)};return a.a.createElement(p.Motion,{style:c,key:t},function(n){var o=n.scale,i=n.shadow,c=n.y;return a.a.createElement("div",{onMouseDown:e.mmw.bind(null,t,c),onTouchStart:e.handleTouchStart.bind(null,t,c),className:"demo8-item",style:{boxShadow:"rgba(0, 0, 0, 0.2) 0px ".concat(i,"px ").concat(2*i,"px 0px"),transform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(o,")"),WebkitTransform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(o,")"),zIndex:t===s?99:t}},r.indexOf(t)+1)})}))}}]),t}(a.a.Component);r.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.4f8f3978.chunk.js.map