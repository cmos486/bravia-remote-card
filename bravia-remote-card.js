const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(s,t,i)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,g=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const r=this.constructor;if(!1===s&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??x)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,f?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");const v=globalThis,w=t=>t,A=v.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,P=`<${C}>`,U=document,O=()=>U.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,H="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,D=/>/g,z=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),q=new WeakMap,G=U.createTreeWalker(U,129);function F(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=M;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===M?"!--"===l[1]?n=N:void 0!==l[1]?n=D:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=z):void 0!==l[3]&&(n=z):n===z?">"===l[0]?(n=o??M,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?z:'"'===l[3]?I:L):n===I||n===L?n=z:n===N||n===D?n=M:(n=z,o=void 0);const h=n===z&&t[e+1].startsWith("/>")?" ":"";r+=n===M?i+P:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+k+h):i+k+(-2===c?e:h)}return[F(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=W(t,e);if(this.el=K.createElement(l,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[r++],i=s.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Q}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),G.nextNode(),a.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===V)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=T(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);G.currentNode=s;let o=G.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Z(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=G.nextNode(),r++)}return G.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),T(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new J(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Z(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=X(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=X(this,s[i+n],e,n),a===V&&(a=this._$AH[n]),r||=!T(a)||a!==this._$AH[n],a===Y?t=Y:t!==Y&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class it extends Q{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??Y)===V)return;const i=this._$AH,s=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Y&&(i===Y||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=v.litHtmlPolyfillSupport;ot?.(K,Z),(v.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;class nt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Z(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}nt._$litElement$=!0,nt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:nt});const at=rt.litElementPolyfillSupport;at?.({LitElement:nt}),(rt.litElementVersions??=[]).push("4.2.2");const lt=[[{cmd:"PowerOff",icon:"mdi:power",label:"Power",cls:"power"},{cmd:"Input",icon:"mdi:video-input-hdmi",label:"Input"},{cmd:"Home",icon:"mdi:home",label:"Home"},{cmd:"Mute",icon:"mdi:volume-off",label:"Mute"}],[{cmd:"Netflix",icon:"mdi:netflix",label:"Netflix",cls:"netflix"},{cmd:"YouTube",icon:"mdi:youtube",label:"YouTube",cls:"youtube"},{cmd:"Prime",text:"P",label:"Prime",cls:"prime"},{cmd:"Disney",text:"D+",label:"Disney+",cls:"disney"}],[null,{cmd:"Up",icon:"mdi:chevron-up",label:""},null,{cmd:"VolumeUp",icon:"mdi:volume-plus",label:"Vol +"}],[{cmd:"Left",icon:"mdi:chevron-left",label:""},{cmd:"Confirm",icon:"mdi:circle-outline",label:"OK"},{cmd:"Right",icon:"mdi:chevron-right",label:""},{cmd:"VolumeDown",icon:"mdi:volume-minus",label:"Vol −"}],[null,{cmd:"Down",icon:"mdi:chevron-down",label:""},null,{cmd:"ChannelUp",icon:"mdi:arrow-up-bold",label:"CH +"}],[{cmd:"Return",icon:"mdi:arrow-u-left-top",label:"Back"},{cmd:"Options",icon:"mdi:dots-vertical",label:"Options"},{cmd:"EPG",icon:"mdi:television-guide",label:"Guide"},{cmd:"ChannelDown",icon:"mdi:arrow-down-bold",label:"CH −"}],[{cmd:"Display",icon:"mdi:information-outline",label:"Info"},{cmd:"Teletext",icon:"mdi:text-box-outline",label:"Text"},{cmd:"Subtitle",icon:"mdi:subtitles-outline",label:"Subs"},null],[{cmd:"Red",icon:"mdi:square-rounded",label:"",cls:"clr-red"},{cmd:"Green",icon:"mdi:square-rounded",label:"",cls:"clr-green"},{cmd:"Yellow",icon:"mdi:square-rounded",label:"",cls:"clr-yellow"},{cmd:"Blue",icon:"mdi:square-rounded",label:"",cls:"clr-blue"}],[{cmd:"Rewind",icon:"mdi:rewind",label:"Rew"},{cmd:"Play",icon:"mdi:play-pause",label:"Play"},{cmd:"Forward",icon:"mdi:fast-forward",label:"FF"},{cmd:"Stop",icon:"mdi:stop",label:"Stop"}]];class ct extends nt{static getConfigElement(){return document.createElement("bravia-remote-card-editor")}static getStubConfig(){return{entity:"remote.bravia",style:"physical"}}setConfig(t){if(!t.entity)throw new Error("Please define an entity");this._config={style:"physical",...t}}getCardSize(){return"grid"===this._config?.style?8:12}_send(t){this.hass&&this._config.entity&&this.hass.callService("remote","send_command",{entity_id:this._config.entity,command:t})}_click(t){const e=t.currentTarget.dataset.cmd;e&&this._send(e)}_pb(t,e,i=""){return j`<button class="btn ${i}" data-cmd=${t} @click=${this._click}>${e}</button>`}_renderPhysical(){const t=(t,e,i="")=>this._pb(t,e,i),e=t=>j`<ha-icon icon=${t}></ha-icon>`;return j`
      <ha-card>
        <div class="remote-body">

          <!-- Power / Input / Mic -->
          <div class="row top-row">
            ${t("PowerOff",e("mdi:power"),"pwr")}
            ${t("Input",e("mdi:video-input-hdmi"),"")}
            ${t("GoogAssistant",e("mdi:microphone"),"")}
          </div>

          <!-- Apps -->
          <div class="row app-row">
            ${t("Netflix",j`<span class="atxt">NETFLIX</span>`,"app netflix")}
            ${t("YouTube",e("mdi:youtube"),"app youtube")}
            ${t("Prime",j`<span class="atxt">prime</span>`,"app prime")}
            ${t("Disney",j`<span class="atxt">D+</span>`,"app disney")}
          </div>

          <!-- D-Pad -->
          <div class="dpad-wrap">
            <div class="dpad">
              <button class="dp up" data-cmd="Up" @click=${this._click}>
                ${e("mdi:chevron-up")}
              </button>
              <button class="dp left" data-cmd="Left" @click=${this._click}>
                ${e("mdi:chevron-left")}
              </button>
              <button class="dp ctr" data-cmd="Confirm" @click=${this._click}>
                OK
              </button>
              <button class="dp right" data-cmd="Right" @click=${this._click}>
                ${e("mdi:chevron-right")}
              </button>
              <button class="dp down" data-cmd="Down" @click=${this._click}>
                ${e("mdi:chevron-down")}
              </button>
            </div>
          </div>

          <!-- Back / Home / Options -->
          <div class="row">
            ${t("Return",e("mdi:arrow-u-left-top"),"")}
            ${t("Home",e("mdi:home"),"")}
            ${t("Options",e("mdi:dots-vertical"),"")}
          </div>

          <!-- Info / Teletext / Guide -->
          <div class="row">
            ${t("Display",e("mdi:information-outline"),"sm")}
            ${t("Teletext",e("mdi:text-box-outline"),"sm")}
            ${t("EPG",e("mdi:television-guide"),"sm")}
          </div>

          <!-- Volume / Mute / Channel -->
          <div class="vol-ch">
            <div class="rocker">
              ${t("VolumeUp",e("mdi:plus"),"rock-t")}
              <span class="rock-lbl">VOL</span>
              ${t("VolumeDown",e("mdi:minus"),"rock-b")}
            </div>
            ${t("Mute",e("mdi:volume-off"),"rnd")}
            <div class="rocker">
              ${t("ChannelUp",e("mdi:chevron-up"),"rock-t")}
              <span class="rock-lbl">CH</span>
              ${t("ChannelDown",e("mdi:chevron-down"),"rock-b")}
            </div>
          </div>

          <!-- Color buttons -->
          <div class="row clr-row">
            ${t("Red",j``,"clr red")}
            ${t("Green",j``,"clr green")}
            ${t("Yellow",j``,"clr yellow")}
            ${t("Blue",j``,"clr blue")}
          </div>

          <!-- Media -->
          <div class="row">
            ${t("Rewind",e("mdi:rewind"),"")}
            ${t("Forward",e("mdi:fast-forward"),"")}
            ${t("Play",e("mdi:play-pause"),"")}
            ${t("Stop",e("mdi:stop"),"")}
          </div>

        </div>
      </ha-card>
    `}_renderGrid(){return j`
      <ha-card>
        <div class="grid">
          ${lt.map(t=>t.map(t=>t?j`
              <button
                class="gb ${t.cls?`g-${t.cls}`:""}"
                data-cmd=${t.cmd}
                @click=${this._click}
              >
                ${t.icon?j`<ha-icon icon=${t.icon}></ha-icon>`:j`<span class="gt">${t.text}</span>`}
                ${t.label?j`<span class="gl">${t.label}</span>`:Y}
              </button>
            `:j`<div class="ge"></div>`))}
        </div>
      </ha-card>
    `}render(){return this._config&&this.hass?"grid"===this._config.style?this._renderGrid():this._renderPhysical():j``}}ct.properties={hass:{attribute:!1},_config:{state:!0}},ct.styles=r`
    :host { display: block; }
    ha-card { overflow: hidden; }

    /* ============================================================
       PHYSICAL STYLE
       ============================================================ */

    .remote-body {
      max-width: 280px;
      margin: 0 auto;
      padding: 30px 22px;
      background: linear-gradient(165deg, #3a3a3a 0%, #1a1a1a 100%);
      border-radius: 38px 38px 46px 46px;
      box-shadow:
        0 10px 40px rgba(0, 0, 0, 0.55),
        inset 0 1px 0 rgba(255, 255, 255, 0.07),
        inset 0 -2px 0 rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      gap: 14px;
      align-items: center;
    }

    /* ── Rows ── */
    .row {
      display: flex;
      gap: 12px;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .top-row { margin-bottom: 2px; }

    /* ── Base button ── */
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      cursor: pointer;
      background: linear-gradient(180deg, #3d3d3d 0%, #2b2b2b 100%);
      color: #ccc;
      border-radius: 10px;
      min-width: 56px;
      min-height: 44px;
      padding: 8px 14px;
      font-family: inherit;
      font-size: 13px;
      box-shadow:
        0 3px 8px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      transition: transform 0.1s, box-shadow 0.1s;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:active {
      transform: translateY(1px);
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }
    .btn ha-icon { --mdc-icon-size: 22px; }
    .btn.sm { min-width: 48px; min-height: 38px; padding: 6px 10px; }
    .btn.sm ha-icon { --mdc-icon-size: 20px; }

    /* ── Power ── */
    .pwr {
      background: linear-gradient(180deg, #c62828 0%, #8e1a1a 100%);
      border-radius: 50%;
      width: 46px; height: 46px;
      min-width: 46px; min-height: 46px;
      padding: 0;
      color: #fff;
      box-shadow:
        0 3px 10px rgba(198, 40, 40, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    /* ── App buttons ── */
    .app-row { gap: 8px; }
    .app {
      flex: 1;
      min-height: 36px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 11px;
      color: #fff;
      padding: 6px 4px;
      letter-spacing: 0.5px;
    }
    .app.netflix  { background: #e50914; }
    .app.youtube  { background: #c4302b; }
    .app.prime    { background: #00a8e1; }
    .app.disney   { background: #1a3064; }
    .app ha-icon  { --mdc-icon-size: 20px; }
    .atxt { font-size: 11px; font-weight: 700; }

    /* ── D-Pad ── */
    .dpad-wrap {
      position: relative;
      width: 176px;
      height: 176px;
      margin: 4px 0;
    }
    .dpad {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(150deg, #383838 0%, #252525 100%);
      box-shadow:
        0 5px 16px rgba(0, 0, 0, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.06),
        inset 0 -2px 0 rgba(0, 0, 0, 0.3);
      position: relative;
    }
    .dp {
      position: absolute;
      border: none;
      outline: none;
      cursor: pointer;
      background: transparent;
      color: #aaa;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.1s, background 0.1s;
      -webkit-tap-highlight-color: transparent;
      font-family: inherit;
    }
    .dp:active { color: #fff; background: rgba(255, 255, 255, 0.08); }
    .dp ha-icon { --mdc-icon-size: 30px; }

    .dp.up {
      top: 6px; left: 50%; transform: translateX(-50%);
      width: 58px; height: 48px;
      border-radius: 29px 29px 14px 14px;
    }
    .dp.down {
      bottom: 6px; left: 50%; transform: translateX(-50%);
      width: 58px; height: 48px;
      border-radius: 14px 14px 29px 29px;
    }
    .dp.left {
      left: 6px; top: 50%; transform: translateY(-50%);
      width: 48px; height: 58px;
      border-radius: 29px 14px 14px 29px;
    }
    .dp.right {
      right: 6px; top: 50%; transform: translateY(-50%);
      width: 48px; height: 58px;
      border-radius: 14px 29px 29px 14px;
    }
    .dp.ctr {
      top: 50%; left: 50%; transform: translate(-50%, -50%);
      width: 62px; height: 62px;
      border-radius: 50%;
      background: linear-gradient(150deg, #484848 0%, #353535 100%);
      color: #ddd;
      font-weight: 700;
      font-size: 14px;
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    .dp.ctr:active {
      background: linear-gradient(150deg, #555 0%, #444 100%);
      color: #fff;
    }

    /* ── Volume / Channel ── */
    .vol-ch {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .rocker {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
    .rock-lbl {
      font-size: 9px;
      color: #777;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      padding: 2px 0;
    }
    .rock-t {
      border-radius: 12px 12px 4px 4px !important;
      min-width: 54px; min-height: 38px;
    }
    .rock-b {
      border-radius: 4px 4px 12px 12px !important;
      min-width: 54px; min-height: 38px;
    }
    .rnd {
      border-radius: 50% !important;
      width: 48px; height: 48px;
      min-width: 48px; min-height: 48px;
      padding: 0;
    }

    /* ── Color buttons ── */
    .clr-row { gap: 18px; }
    .clr {
      width: 30px; height: 30px;
      min-width: 30px; min-height: 30px;
      border-radius: 50% !important;
      padding: 0;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }
    .clr.red    { background: #f44336 !important; }
    .clr.green  { background: #4caf50 !important; }
    .clr.yellow { background: #ffeb3b !important; }
    .clr.blue   { background: #2196f3 !important; }

    /* ============================================================
       GRID STYLE
       ============================================================ */

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      padding: 16px;
    }

    .gb {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border: none;
      outline: none;
      cursor: pointer;
      background: var(--secondary-background-color, #e8e8e8);
      color: var(--primary-text-color, #333);
      border-radius: 12px;
      padding: 12px 6px;
      min-height: 52px;
      font-family: inherit;
      font-size: 12px;
      transition: transform 0.1s, opacity 0.1s;
      -webkit-tap-highlight-color: transparent;
    }
    .gb:active { transform: scale(0.93); opacity: 0.8; }
    .gb ha-icon {
      --mdc-icon-size: 24px;
      color: var(--primary-text-color, #333);
    }

    .gl {
      font-size: 10px;
      opacity: 0.7;
      line-height: 1.2;
    }
    .gt {
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }
    .ge {
      /* empty grid cell */
    }

    /* Power */
    .g-power { color: var(--error-color, #f44336); }
    .g-power ha-icon { color: var(--error-color, #f44336); }

    /* Apps */
    .g-netflix  { background: #e50914; color: #fff; }
    .g-netflix ha-icon  { color: #fff; }
    .g-youtube  { background: #c4302b; color: #fff; }
    .g-youtube ha-icon  { color: #fff; }
    .g-prime    { background: #00a8e1; color: #fff; }
    .g-prime .gt { color: #fff; }
    .g-prime .gl { color: rgba(255,255,255,0.85); }
    .g-disney   { background: #1a3064; color: #fff; }
    .g-disney .gt { color: #fff; }
    .g-disney .gl { color: rgba(255,255,255,0.85); }

    /* Color buttons */
    .g-clr-red    { background: #f44336; color: #fff; }
    .g-clr-red ha-icon    { color: #fff; }
    .g-clr-green  { background: #4caf50; color: #fff; }
    .g-clr-green ha-icon  { color: #fff; }
    .g-clr-yellow { background: #ffeb3b; color: #333; }
    .g-clr-yellow ha-icon { color: #333; }
    .g-clr-blue   { background: #2196f3; color: #fff; }
    .g-clr-blue ha-icon   { color: #fff; }
  `;class dt extends nt{constructor(){super(...arguments),this._haSelector=!1}async connectedCallback(){super.connectedCallback(),customElements.get("ha-selector")?this._haSelector=!0:customElements.whenDefined("ha-selector").then(()=>{this._haSelector=!0,this.requestUpdate()})}setConfig(t){this._config=t}_entityChanged(t){this._config&&(this._config={...this._config,entity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}_styleChanged(t){if(!this._config)return;const e=t.target.value;e!==this._config.style&&(this._config={...this._config,style:e},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}_renderEntityField(){return this._haSelector?j`
        <ha-selector
          .hass=${this.hass}
          .selector=${{entity:{domain:"remote"}}}
          .value=${this._config?.entity||""}
          .label=${"Entity"}
          @value-changed=${this._entityChanged}
        ></ha-selector>
      `:j`
      <div class="yaml-hint">
        <p>Configure entity in YAML:</p>
        <code>entity: remote.your_tv</code>
      </div>
    `}render(){return this._config?j`
      <div class="editor">
        ${this._renderEntityField()}
        <label for="style">Style</label>
        <select id="style" @change=${this._styleChanged}>
          <option value="physical" ?selected=${"grid"!==this._config.style}>
            Physical Remote
          </option>
          <option value="grid" ?selected=${"grid"===this._config.style}>
            Grid
          </option>
        </select>
      </div>
    `:j``}}dt.properties={hass:{attribute:!1},_config:{state:!0},_haSelector:{state:!0}},dt.styles=r`
    .editor {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }
    label {
      font-weight: 500;
      color: var(--primary-text-color);
    }
    select {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
      width: 100%;
      box-sizing: border-box;
    }
    .yaml-hint {
      padding: 12px;
      border-radius: 4px;
      background: var(--secondary-background-color, #f5f5f5);
      color: var(--primary-text-color);
    }
    .yaml-hint p { margin: 0 0 8px; }
    .yaml-hint code {
      display: block;
      padding: 8px;
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      font-size: 13px;
    }
  `,customElements.define("bravia-remote-card",ct),customElements.define("bravia-remote-card-editor",dt),window.customCards=window.customCards||[],window.customCards.push({type:"bravia-remote-card",name:"Bravia Remote Card",description:"Sony Bravia TV remote control card for Home Assistant — designed for Bravia REST API integration",preview:!0,documentationURL:"https://github.com/cmos486/bravia-remote-card"});
