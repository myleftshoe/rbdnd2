(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(36)},34:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),s=t(13),i=t.n(s),r=t(14),c=t(15),l=t(17),u=t(16),d=t(18),p=t(1),h=t(9),m=t.n(h);t(34);var f={stiffness:300,damping:50},v=50,w=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).handleTouchStart=function(e,n,o){t.handleMouseDown(e,n,o.touches[0])},t.handleContextMenu=function(e,n,o){t.handleMouseDown(e,n,o.pageY)},t.handleScroll=function(e){e.preventDefault(),e.stopPropagation()},t.handleTouchMove=function(e){e.preventDefault(),e.stopPropagation(),t.handleMouseMove(e.touches[0])},t.handleMouseDown=function(e,n,o){var a=o.pageY;t.setState({topDeltaY:a-n,mouseY:n,isPressed:!0,originalPosOfLastPressed:e})},t.timeout=null,t.mmw=function(e){var n=e.pageY;t.timeout=setTimeout(function(){return t.handleMouseMove({pageY:n})},1e3)},t.handleMouseMove=function(e){var n,o,a,s=e.pageY,i=t.state,r=i.isPressed,c=i.topDeltaY,l=i.order,u=i.originalPosOfLastPressed;if(r){var d=s-c;t.containerElement.scrollTop=0;var p=(n=Math.round(d/50),o=0,a=v-1,Math.max(Math.min(n,a),o)),h=l;p!==l.indexOf(u)&&(h=function(e,n,t){var o=e.slice(0),a=o[n];return o.splice(n,1),o.splice(t,0,a),o}(l,l.indexOf(u),p)),t.setState({mouseY:d,order:h})}else t.containerElement.scrollTop=t.containerElement.scrollTop+c},t.handleMouseUp=function(){clearTimeout(t.timeout),t.setState({isPressed:!1,topDeltaY:0})},t.setContainerElement=function(e){t.containerElement=e},t.containerElement=null,t.state={topDeltaY:0,mouseY:0,isPressed:!1,originalPosOfLastPressed:0,order:m()(v)},t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("contextmenu",this.handleScroll,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleMouseUp,{passive:!1}),window.addEventListener("mousemove",this.mmw,{passive:!1}),window.addEventListener("mouseup",this.handleMouseUp,{passive:!1})}},{key:"render",value:function(){var e=this,n=this.state,t=n.mouseY,o=n.isPressed,s=n.originalPosOfLastPressed,i=n.order;return a.a.createElement("div",{ref:this.setContainerElement,className:"demo8"},m()(v).map(function(n){var r=s===n&&o?{scale:Object(p.spring)(1,f),shadow:Object(p.spring)(12,f),y:t}:{scale:Object(p.spring)(1,f),shadow:Object(p.spring)(1,f),y:Object(p.spring)(50*i.indexOf(n),f)};return a.a.createElement(p.Motion,{style:r,key:n},function(t){var o=t.scale,r=t.shadow,c=t.y;return a.a.createElement("div",{onMouseDown:e.handleMouseDown.bind(null,n,c),onTouchStart:e.handleTouchStart.bind(null,n,c),className:"demo8-item",style:{boxShadow:"rgba(0, 0, 0, 0.2) 0px ".concat(r,"px ").concat(2*r,"px 0px"),transform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(o,")"),WebkitTransform:"translate3d(0, ".concat(c,"px, 0) scale(").concat(o,")"),zIndex:n===s?99:n}},i.indexOf(n)+1)})}))}}]),n}(a.a.Component);i.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.47a9acfa.chunk.js.map