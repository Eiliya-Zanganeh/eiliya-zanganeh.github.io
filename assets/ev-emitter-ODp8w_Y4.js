import{c as E}from"./@srexi-B99z6guL.js";var v={exports:{}},h;function _(){return h||(h=1,function(u){(function(s,i){u.exports?u.exports=i():s.EvEmitter=i()})(typeof window<"u"?window:E,function(){function s(){}var i=s.prototype;return i.on=function(n,e){if(!(!n||!e)){var t=this._events=this._events||{},r=t[n]=t[n]||[];return r.indexOf(e)==-1&&r.push(e),this}},i.once=function(n,e){if(!(!n||!e)){this.on(n,e);var t=this._onceEvents=this._onceEvents||{},r=t[n]=t[n]||{};return r[e]=!0,this}},i.off=function(n,e){var t=this._events&&this._events[n];if(!(!t||!t.length)){var r=t.indexOf(e);return r!=-1&&t.splice(r,1),this}},i.emitEvent=function(n,e){var t=this._events&&this._events[n];if(!(!t||!t.length)){t=t.slice(0),e=e||[];for(var r=this._onceEvents&&this._onceEvents[n],f=0;f<t.length;f++){var o=t[f],c=r&&r[o];c&&(this.off(n,o),delete r[o]),o.apply(this,e)}return this}},i.allOff=function(){delete this._events,delete this._onceEvents},s})}(v)),v.exports}export{_ as r};
