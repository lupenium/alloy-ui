YUI.add("aui-event-delegate-submit",function(e,t){function o(e){n.some(e,function(t,n){if(t.args&&t.args[0]==="submit_delegate"){var r=e.splice(e.length-1,1)[0];return e.splice(n,0,r),!0}})}function u(e,t){var n=t,i={},s=t[e.sub.id],o=!1;return r.each(t,function(e){!o&&e.args&&e.args[0]==="submit_delegate"&&(i[s.id]=s,o=!0),e!==s&&(i[e.id]=e)}),o&&(n=i),n}function a(e,t,n,r,i){var s=this;r&&r[0]==="submit_on"&&(i==="after"&&s._afters.length?o.call(s,s._afters):s._subscribers.length&&o.call(s,s._subscribers))}function f(e,t,n,i,s){var o=this;i&&i[0]==="submit_on"&&(s==="after"&&!r.isEmpty(o.afters)?o.afters=u.call(o,e,o.afters):r.isEmpty(o.subscribers)||(o.subscribers=u.call(o,o.subscribers)))}var n=e.Array,r=e.Object,i=e.Selector;e.Event.define("submit",{delegate:function(e,t,n,i){var s=this,o=s._prepareHandles(t,e);r.owns(o,"click")||(o.click=e.delegate("click",function(r){var o=r.target;if(s._getNodeName(o,"input")||s._getNodeName(o,"button")){var u=o.get("form");u&&s._attachEvent(u,e,t,n,i)}},i))},detach:function(e,t,n){var r=this;r._detachEvents(e,t,n)},detachDelegate:function(e,t,n){var r=this;r._detachEvents(e,t,n)},on:function(e,t,n){var r=this;r._attachEvent(e,e,t,n)},_attachEvent:function(t,n,s,o,u){var a=this,f=function(r){var s=!0;if(u){if(!r.stopped||!a._hasParent(r._stoppedOnNode,n)){var f=n.getDOM(),l=t.getDOM();do l&&i.test(l,u)&&(r.currentTarget=e.one(l),r.container=n,s=o.fire(r),r.stopped&&!r._stoppedOnNode&&(r._stoppedOnNode=n)),l=l.parentNode;while(s!==!1&&!r.stopped&&l&&l!==f);s=s!==!1&&r.stopped!==2}}else s=o.fire(r),r.stopped&&!r._stoppedOnNode&&(r._stoppedOnNode=n);return s},l=a._prepareHandles(s,t);r.owns(l,"submit")||(l.submit=e.Event._attach(["submit",f,t,o,u?"submit_delegate":"submit_on"]))},_detachEvents:function(t,n){e.each(n._handles,function(t){e.each(t,function(e){e.detach()})}),delete n._handles},_getNodeName:function(e,t){var n=e.get("nodeName");return n&&n.toLowerCase()===t.toLowerCase()},_hasParent:function(e,t){return e.ancestor(function(e){return e===t},!1)},_prepareHandles:function(e,t){r.owns(e,"_handles")||(e._handles={});var n=e._handles;return r.owns(n,t)||(n[t]={}),n[t]}},!0);var s=e.CustomEvent.prototype._on;e.CustomEvent.prototype._on=function(e,t,n,r){var i=this,o=s.apply(i,arguments);return i._kds?f.call(i,o,e,t,n,r):a.call(i,o,e,t,n,r),o}},"3.0.3-deprecated.70",{requires:["aui-event-base","event-delegate","event-synthetic"]});
