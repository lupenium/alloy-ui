YUI.add("aui-promise",function(e,t){function n(e,t){this._errorCallback=t,n.superclass.constructor.apply(this,arguments)}function r(e){r.superclass.constructor.apply(this,arguments),this.message=e}e.Promise.prototype.thenAlways=function(e){var t=this;return this.then(function(){e.call(t)},function(){e.call(t)})},e.Promise.prototype.thenCatch=function(e){return this.then(null,e)},e.extend(n,e.Promise,{_childPromises:null,_errorCallback:null,cancel:function(t){var n=this,r=this._resolver,i=new e.CancellablePromise.Error(t);try{n._cancelChildPromises(t),n._errorCallback&&n.getStatus()==="pending"&&e.soon(e.bind(n._errorCallback,n,i))}catch(s){r.reject(s)}return r.reject(i),this},then:function(t,r){function o(){var e=t.apply(i,arguments);return i._childPromises||(i._childPromises=[]),i._childPromises.push(e),e}var i=this,s;return s=n.superclass.then.call(this,o,function(t){try{e.Lang.isFunction(r)&&r(t)}catch(n){throw n}if(e.instanceOf(t,e.CancellablePromise.Error))throw t}),s.cancel=e.bind(i.cancel,i),s},_cancelChildPromises:function(t){e.Array.invoke(this._childPromises,"cancel",t),this._childPromises=null}}),n.resolve=e.Promise.resolve,n.reject=e.Promise.reject,n.all=function(t){var n=[];return new e.CancellablePromise(function(r,i){function a(e,t){o[e-1]=t,u--,u||r(o)}if(!e.Lang.isArray(t)){i(new TypeError("CancellablePromise.all expects an array of values or promises"));return}var s=this,o=[],u=t.length;e.Array.each(t,function(t){var r=e.CancellablePromise.resolve(t);r.then(e.bind(a,s,n.push(r)),e.bind(s.cancel,s))})},function(){e.Array.invoke(n,"cancel"),n=null})},e.CancellablePromise=n,e.extend(r,Error,{name:"cancel"}),e.CancellablePromise.Error=r},"3.0.3-deprecated.70",{requires:["array-invoke","promise","oop"]});
