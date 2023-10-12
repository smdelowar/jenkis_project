(self.webpackChunkprocessFlowWeb=self.webpackChunkprocessFlowWeb||[]).push([[3023],{4516:(N,m,s)=>{s.r(m),s.d(m,{MAT_INPUT_VALUE_ACCESSOR:()=>g,MatInput:()=>A,MatInputModule:()=>D,getMatInputUnsupportedTypeError:()=>M});var h=s(2495),_=s(2831),f=s(6263),i=s(2937),l=s(9228),o=s(5995),d=s(1835),v=s(2079);function M(n){return Error(`Input type "${n}" isn't supported by matInput.`)}const g=new i.InjectionToken("MAT_INPUT_VALUE_ACCESSOR"),E=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let C=0;const b=(0,o.mixinErrorState)(class{constructor(n,r,e,t){this._defaultErrorStateMatcher=n,this._parentForm=r,this._parentFormGroup=e,this.ngControl=t,this.stateChanges=new v.xQ}});let A=(()=>{class n extends b{get disabled(){return this._disabled}set disabled(e){this._disabled=(0,h.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(l.Validators.required)??!1}set required(e){this._required=(0,h.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,_.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,h.Ig)(e)}constructor(e,t,u,O,S,T,P,R,F,I){super(T,O,S,u),this._elementRef=e,this._platform=t,this._autofillMonitor=R,this._formField=I,this._uid="mat-input-"+C++,this.focused=!1,this.stateChanges=new v.xQ,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(p=>(0,_.qK)().has(p)),this._iOSKeyupListener=p=>{const a=p.target;!a.value&&0===a.selectionStart&&0===a.selectionEnd&&(a.setSelectionRange(1,1),a.setSelectionRange(0,0))};const c=this._elementRef.nativeElement,y=c.nodeName.toLowerCase();this._inputValueAccessor=P||c,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&F.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===y,this._isTextarea="textarea"===y,this._isInFormField=!!I,this._isNativeSelect&&(this.controlType=c.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){const e=this._getPlaceholder();if(e!==this._previousPlaceholder){const t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){E.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(_.t4),i.\u0275\u0275directiveInject(l.NgControl,10),i.\u0275\u0275directiveInject(l.NgForm,8),i.\u0275\u0275directiveInject(l.FormGroupDirective,8),i.\u0275\u0275directiveInject(o.ErrorStateMatcher),i.\u0275\u0275directiveInject(g,10),i.\u0275\u0275directiveInject(f.Lq),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(d.MAT_FORM_FIELD,8))},n.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(e,t){1&e&&i.\u0275\u0275listener("focus",function(){return t._focusChanged(!0)})("blur",function(){return t._focusChanged(!1)})("input",function(){return t._onInput()}),2&e&&(i.\u0275\u0275hostProperty("id",t.id)("disabled",t.disabled)("required",t.required),i.\u0275\u0275attribute("name",t.name||null)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-invalid",t.empty&&t.required?null:t.errorState)("aria-required",t.required)("id",t.id),i.\u0275\u0275classProp("mat-input-server",t._isServer)("mat-mdc-form-field-textarea-control",t._isInFormField&&t._isTextarea)("mat-mdc-form-field-input-control",t._isInFormField)("mdc-text-field__input",t._isInFormField)("mat-mdc-native-select-inline",t._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[i.\u0275\u0275ProvidersFeature([{provide:d.MatFormFieldControl,useExisting:n}]),i.\u0275\u0275InheritDefinitionFeature,i.\u0275\u0275NgOnChangesFeature]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({imports:[o.MatCommonModule,d.MatFormFieldModule,d.MatFormFieldModule,f.Ky,o.MatCommonModule]}),n})()}}]);