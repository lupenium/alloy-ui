if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-tooltip-delegate/aui-tooltip-delegate.js']) {
   __coverage__['build/aui-tooltip-delegate/aui-tooltip-delegate.js'] = {"path":"build/aui-tooltip-delegate/aui-tooltip-delegate.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"(anonymous_2)","line":35,"loc":{"start":{"line":35,"column":17},"end":{"line":35,"column":28}}},"3":{"name":"(anonymous_3)","line":54,"loc":{"start":{"line":54,"column":16},"end":{"line":54,"column":27}}},"4":{"name":"(anonymous_4)","line":66,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":23}}},"5":{"name":"(anonymous_5)","line":89,"loc":{"start":{"line":89,"column":16},"end":{"line":89,"column":27}}},"6":{"name":"(anonymous_6)","line":119,"loc":{"start":{"line":119,"column":28},"end":{"line":119,"column":39}}},"7":{"name":"(anonymous_7)","line":138,"loc":{"start":{"line":138,"column":28},"end":{"line":138,"column":44}}},"8":{"name":"(anonymous_8)","line":158,"loc":{"start":{"line":158,"column":27},"end":{"line":158,"column":41}}},"9":{"name":"(anonymous_9)","line":163,"loc":{"start":{"line":163,"column":29},"end":{"line":163,"column":48}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":304,"column":85}},"2":{"start":{"line":9,"column":0},"end":{"line":10,"column":23}},"3":{"start":{"line":23,"column":0},"end":{"line":301,"column":3}},"4":{"start":{"line":36,"column":8},"end":{"line":37,"column":46}},"5":{"start":{"line":39,"column":8},"end":{"line":39,"column":36}},"6":{"start":{"line":41,"column":8},"end":{"line":41,"column":26}},"7":{"start":{"line":43,"column":8},"end":{"line":45,"column":9}},"8":{"start":{"line":44,"column":12},"end":{"line":44,"column":41}},"9":{"start":{"line":55,"column":8},"end":{"line":55,"column":28}},"10":{"start":{"line":57,"column":8},"end":{"line":57,"column":61}},"11":{"start":{"line":67,"column":8},"end":{"line":69,"column":20}},"12":{"start":{"line":70,"column":8},"end":{"line":70,"column":46}},"13":{"start":{"line":71,"column":8},"end":{"line":71,"column":42}},"14":{"start":{"line":73,"column":8},"end":{"line":80,"column":10}},"15":{"start":{"line":90,"column":8},"end":{"line":91,"column":39}},"16":{"start":{"line":93,"column":8},"end":{"line":107,"column":9}},"17":{"start":{"line":94,"column":12},"end":{"line":106,"column":15}},"18":{"start":{"line":109,"column":8},"end":{"line":109,"column":23}},"19":{"start":{"line":120,"column":8},"end":{"line":122,"column":46}},"20":{"start":{"line":124,"column":8},"end":{"line":124,"column":37}},"21":{"start":{"line":126,"column":8},"end":{"line":128,"column":9}},"22":{"start":{"line":127,"column":12},"end":{"line":127,"column":75}},"23":{"start":{"line":139,"column":8},"end":{"line":142,"column":46}},"24":{"start":{"line":144,"column":8},"end":{"line":144,"column":70}},"25":{"start":{"line":146,"column":8},"end":{"line":148,"column":9}},"26":{"start":{"line":147,"column":12},"end":{"line":147,"column":76}},"27":{"start":{"line":159,"column":8},"end":{"line":166,"column":9}},"28":{"start":{"line":160,"column":12},"end":{"line":160,"column":24}},"29":{"start":{"line":162,"column":13},"end":{"line":166,"column":9}},"30":{"start":{"line":163,"column":12},"end":{"line":165,"column":15}},"31":{"start":{"line":164,"column":16},"end":{"line":164,"column":48}},"32":{"start":{"line":168,"column":8},"end":{"line":168,"column":21}}},"branchMap":{"1":{"line":43,"type":"if","locations":[{"start":{"line":43,"column":8},"end":{"line":43,"column":8}},{"start":{"line":43,"column":8},"end":{"line":43,"column":8}}]},"2":{"line":93,"type":"if","locations":[{"start":{"line":93,"column":8},"end":{"line":93,"column":8}},{"start":{"line":93,"column":8},"end":{"line":93,"column":8}}]},"3":{"line":126,"type":"if","locations":[{"start":{"line":126,"column":8},"end":{"line":126,"column":8}},{"start":{"line":126,"column":8},"end":{"line":126,"column":8}}]},"4":{"line":146,"type":"if","locations":[{"start":{"line":146,"column":8},"end":{"line":146,"column":8}},{"start":{"line":146,"column":8},"end":{"line":146,"column":8}}]},"5":{"line":159,"type":"if","locations":[{"start":{"line":159,"column":8},"end":{"line":159,"column":8}},{"start":{"line":159,"column":8},"end":{"line":159,"column":8}}]},"6":{"line":162,"type":"if","locations":[{"start":{"line":162,"column":13},"end":{"line":162,"column":13}},{"start":{"line":162,"column":13},"end":{"line":162,"column":13}}]}},"code":["(function () { YUI.add('aui-tooltip-delegate', function (A, NAME) {","","/**"," * The Toggler Component"," *"," * @module aui-tooltip"," */","","var Lang = A.Lang,","    DOC = A.config.doc;","","/**"," * A base class for Toggler Delegate."," *"," * Check the [live demo](http://alloyui.com/examples/tooltip/)."," *"," * @class A.TooltipDelegate"," * @extends Base"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.TooltipDelegate = A.Base.create('tooltip-delegate', A.Base, [], {","    items: null,","","    tooltip: null,","","    /**","     * Construction logic executed during TooltipDelegate instantiation.","     * Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        var instance = this,","            useARIA = instance.get('useARIA');","","        instance._eventHandles = [];","","        instance.bindUI();","","        if (useARIA) {","            instance.plug(A.Plugin.Aria);","        }","    },","","    /**","     * Destructor lifecycle implementation for the `TooltipDelegate` class.","     *","     * @method destructor","     * @protected","     */","    destructor: function() {","        var instance = this;","","        (new A.EventHandle(instance._eventHandles)).detach();","    },","","    /**","     * Bind the events on the TooltipDelegate UI. Lifecycle.","     *","     * @method bindUI","     * @protected","     */","    bindUI: function() {","        var instance = this,","            container,","            trigger;","        container = instance.get('container');","        trigger = instance.get('trigger');","","        instance._eventHandles.push(","            container.delegate(","                instance.get('triggerShowEvent'),","                A.bind(instance._onUserShowInteraction, instance), trigger),","            container.delegate(","                instance.get('triggerHideEvent'),","                A.bind(instance._onUserHideInteraction, instance), trigger)","        );","    },","","    /**","     * Get the current Tooltip.","     *","     * @method getTooltip","     * @return {Tooltip}","     */","    getTooltip: function() {","        var instance = this,","            tooltip = instance.tooltip;","","        if (!tooltip) {","            tooltip = instance.tooltip = new A.Tooltip({","                align: instance.get('align'),","                bindDOMEvents: false,","                cssClass: instance.get('cssClass'),","                duration: instance.get('duration'),","                formatter: instance.get('formatter'),","                opacity: instance.get('opacity'),","                position: instance.get('position'),","                html: instance.get('html'),","                useARIA: instance.get('useARIA'),","                visible: false,","                zIndex: instance.get('zIndex')","            });","        }","","        return tooltip;","    },","","    /**","     * Show tooltip on user interaction.","     *","     * @method _onUserHideInteraction","     * @param event","     * @protected","     */","    _onUserHideInteraction: function() {","        var instance = this,","            tooltipBoundingBox = instance.getTooltip().get('boundingBox'),","            useARIA = instance.get('useARIA');","","        instance.getTooltip().hide();","","        if (useARIA) {","            instance.aria.setAttribute('hidden', true, tooltipBoundingBox);","        }","    },","","    /**","     * Show tooltip on user interaction.","     *","     * @method _onUserShowInteraction","     * @param event","     * @protected","     */","    _onUserShowInteraction: function(event) {","        var instance = this,","            tooltipBoundingBox = instance.getTooltip().get('boundingBox'),","            trigger = event.currentTarget,","            useARIA = instance.get('useARIA');","","        instance.getTooltip().show().set('trigger', trigger).render();","","        if (useARIA) {","            instance.aria.setAttribute('hidden', false, tooltipBoundingBox);","        }","    },","","    /**","     * Validate the trigger events.","     *","     * @method _validateTriggerEvent","     * @param  {String | Array} val","     * @protected","     */","    _validateTriggerEvent: function(val) {","        if (A.Lang.isString(val)) {","            return true;","        }","        else if (A.Lang.isArray(val)) {","            return val.every(function (element) {","                return A.Lang.isString(element);","            });","        }","","        return false;","    }","}, {","    /**","     * Static property used to define the default attribute","     * configuration for the Toggler Delegate.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * The alignment configuration for this widget.","         *","         * @attribute align","         * @default Guess position.","         * @type Object","         */","        align: {","            value: null","        },","","        /**","         * The container of Toggler Delegate instance.","         *","         * @attribute container","         */","        container: {","            setter: A.one,","            value: DOC,","            writeOnce: true","        },","","        /**","         * The CSS class applied to the tooltip.","         *","         * @attribute cssClass","         */","        cssClass: {","            value: null","        },","","        /**","         * Determine the duration of the tooltip animation.","         *","         * @attribute duration","         * @default 0.15","         * @type {Number}","         */","        duration: {","            value: 0.15,","            writeOnce: true","        },","","        formatter: A.Tooltip.ATTRS.formatter,","","        /**","         * Determines if the tooltip allows arbitary HTML or is plain text.","         *","         * @attribute html","         * @default false","         * @type Boolean","         */","        html: {","            value: false,","            validator: Lang.isBoolean","        },","","        /**","         * Determine the opacity of the tooltip.","         *","         * @attribute opacity","         * @default 0.8","         * @type {Number}","         */","        opacity: {","            value: 0.8,","            writeOnce: true","        },","","        position: A.WidgetPositionAlignSuggestion.ATTRS.position,","","        trigger: A.WidgetPositionAlignSuggestion.ATTRS.trigger,","","        /**","         * DOM event to hide the tooltip.","         *","         * @attribute triggerHideEvent","         * @default MOUSEENTER","         * @type String","         */","        triggerHideEvent: {","            validator: '_validateTriggerEvent',","            value: 'mouseleave',","            writeOnce: true","        },","","        /**","         * DOM event to show the tooltip.","         *","         * @attribute triggerShowEvent","         * @default MOUSEENTER","         * @type String","         */","        triggerShowEvent: {","            validator: '_validateTriggerEvent',","            value: 'mouseenter',","            writeOnce: true","        },","","        /**","        * Boolean indicating if use of the WAI-ARIA Roles and States","        * should be enabled.","        *","        * @attribute useARIA","        * @default true","        * @type Boolean","        */","        useARIA: {","            validator: Lang.isBoolean,","            value: true,","            writeOnce: 'initOnly'","        },","","        /**","         * Specify the zIndex for the tooltips.","         *","         * @attribute zIndex","         * @type {Number}","         */","        zIndex: {}","    }","});","","","}, '3.0.3-deprecated.70', {\"requires\": [\"aui-tooltip-base\", \"node-event-delegate\"]});","","}());"]};
}
var __cov_44U1iAdL39Qwo0nstRdqUw = __coverage__['build/aui-tooltip-delegate/aui-tooltip-delegate.js'];
__cov_44U1iAdL39Qwo0nstRdqUw.s['1']++;YUI.add('aui-tooltip-delegate',function(A,NAME){__cov_44U1iAdL39Qwo0nstRdqUw.f['1']++;__cov_44U1iAdL39Qwo0nstRdqUw.s['2']++;var Lang=A.Lang,DOC=A.config.doc;__cov_44U1iAdL39Qwo0nstRdqUw.s['3']++;A.TooltipDelegate=A.Base.create('tooltip-delegate',A.Base,[],{items:null,tooltip:null,initializer:function(){__cov_44U1iAdL39Qwo0nstRdqUw.f['2']++;__cov_44U1iAdL39Qwo0nstRdqUw.s['4']++;var instance=this,useARIA=instance.get('useARIA');__cov_44U1iAdL39Qwo0nstRdqUw.s['5']++;instance._eventHandles=[];__cov_44U1iAdL39Qwo0nstRdqUw.s['6']++;instance.bindUI();__cov_44U1iAdL39Qwo0nstRdqUw.s['7']++;if(useARIA){__cov_44U1iAdL39Qwo0nstRdqUw.b['1'][0]++;__cov_44U1iAdL39Qwo0nstRdqUw.s['8']++;instance.plug(A.Plugin.Aria);}else{__cov_44U1iAdL39Qwo0nstRdqUw.b['1'][1]++;}},destructor:function(){__cov_44U1iAdL39Qwo0nstRdqUw.f['3']++;__cov_44U1iAdL39Qwo0nstRdqUw.s['9']++;var instance=this;__cov_44U1iAdL39Qwo0nstRdqUw.s['10']++;new A.EventHandle(instance._eventHandles).detach();},bindUI:function(){__cov_44U1iAdL39Qwo0nstRdqUw.f['4']++;__cov_44U1iAdL39Qwo0nstRdqUw.s['11']++;var instance=this,container,trigger;__cov_44U1iAdL39Qwo0nstRdqUw.s['12']++;container=instance.get('container');__cov_44U1iAdL39Qwo0nstRdqUw.s['13']++;trigger=instance.get('trigger');__cov_44U1iAdL39Qwo0nstRdqUw.s['14']++;instance._eventHandles.push(container.delegate(instance.get('triggerShowEvent'),A.bind(instance._onUserShowInteraction,instance),trigger),container.delegate(instance.get('triggerHideEvent'),A.bind(instance._onUserHideInteraction,instance),trigger));},getTooltip:function(){__cov_44U1iAdL39Qwo0nstRdqUw.f['5']++;__cov_44U1iAdL39Qwo0nstRdqUw.s['15']++;var instance=this,tooltip=instance.tooltip;__cov_44U1iAdL39Qwo0nstRdqUw.s['16']++;if(!tooltip){__cov_44U1iAdL39Qwo0nstRdqUw.b['2'][0]++;__cov_44U1iAdL39Qwo0nstRdqUw.s['17']++;tooltip=instance.tooltip=new A.Tooltip({align:instance.get('align'),bindDOMEvents:false,cssClass:instance.get('cssClass'),duration:instance.get('duration'),formatter:instance.get('formatter'),opacity:instance.get('opacity'),position:instance.get('position'),html:instance.get('html'),useARIA:instance.get('useARIA'),visible:false,zIndex:instance.get('zIndex')});}else{__cov_44U1iAdL39Qwo0nstRdqUw.b['2'][1]++;}__cov_44U1iAdL39Qwo0nstRdqUw.s['18']++;return tooltip;},_onUserHideInteraction:function(){__cov_44U1iAdL39Qwo0nstRdqUw.f['6']++;__cov_44U1iAdL39Qwo0nstRdqUw.s['19']++;var instance=this,tooltipBoundingBox=instance.getTooltip().get('boundingBox'),useARIA=instance.get('useARIA');__cov_44U1iAdL39Qwo0nstRdqUw.s['20']++;instance.getTooltip().hide();__cov_44U1iAdL39Qwo0nstRdqUw.s['21']++;if(useARIA){__cov_44U1iAdL39Qwo0nstRdqUw.b['3'][0]++;__cov_44U1iAdL39Qwo0nstRdqUw.s['22']++;instance.aria.setAttribute('hidden',true,tooltipBoundingBox);}else{__cov_44U1iAdL39Qwo0nstRdqUw.b['3'][1]++;}},_onUserShowInteraction:function(event){__cov_44U1iAdL39Qwo0nstRdqUw.f['7']++;__cov_44U1iAdL39Qwo0nstRdqUw.s['23']++;var instance=this,tooltipBoundingBox=instance.getTooltip().get('boundingBox'),trigger=event.currentTarget,useARIA=instance.get('useARIA');__cov_44U1iAdL39Qwo0nstRdqUw.s['24']++;instance.getTooltip().show().set('trigger',trigger).render();__cov_44U1iAdL39Qwo0nstRdqUw.s['25']++;if(useARIA){__cov_44U1iAdL39Qwo0nstRdqUw.b['4'][0]++;__cov_44U1iAdL39Qwo0nstRdqUw.s['26']++;instance.aria.setAttribute('hidden',false,tooltipBoundingBox);}else{__cov_44U1iAdL39Qwo0nstRdqUw.b['4'][1]++;}},_validateTriggerEvent:function(val){__cov_44U1iAdL39Qwo0nstRdqUw.f['8']++;__cov_44U1iAdL39Qwo0nstRdqUw.s['27']++;if(A.Lang.isString(val)){__cov_44U1iAdL39Qwo0nstRdqUw.b['5'][0]++;__cov_44U1iAdL39Qwo0nstRdqUw.s['28']++;return true;}else{__cov_44U1iAdL39Qwo0nstRdqUw.b['5'][1]++;__cov_44U1iAdL39Qwo0nstRdqUw.s['29']++;if(A.Lang.isArray(val)){__cov_44U1iAdL39Qwo0nstRdqUw.b['6'][0]++;__cov_44U1iAdL39Qwo0nstRdqUw.s['30']++;return val.every(function(element){__cov_44U1iAdL39Qwo0nstRdqUw.f['9']++;__cov_44U1iAdL39Qwo0nstRdqUw.s['31']++;return A.Lang.isString(element);});}else{__cov_44U1iAdL39Qwo0nstRdqUw.b['6'][1]++;}}__cov_44U1iAdL39Qwo0nstRdqUw.s['32']++;return false;}},{ATTRS:{align:{value:null},container:{setter:A.one,value:DOC,writeOnce:true},cssClass:{value:null},duration:{value:0.15,writeOnce:true},formatter:A.Tooltip.ATTRS.formatter,html:{value:false,validator:Lang.isBoolean},opacity:{value:0.8,writeOnce:true},position:A.WidgetPositionAlignSuggestion.ATTRS.position,trigger:A.WidgetPositionAlignSuggestion.ATTRS.trigger,triggerHideEvent:{validator:'_validateTriggerEvent',value:'mouseleave',writeOnce:true},triggerShowEvent:{validator:'_validateTriggerEvent',value:'mouseenter',writeOnce:true},useARIA:{validator:Lang.isBoolean,value:true,writeOnce:'initOnly'},zIndex:{}}});},'3.0.3-deprecated.70',{'requires':['aui-tooltip-base','node-event-delegate']});
