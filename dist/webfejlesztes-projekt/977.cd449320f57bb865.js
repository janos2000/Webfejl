"use strict";(self.webpackChunkwebfejlesztes_projekt=self.webpackChunkwebfejlesztes_projekt||[]).push([[977],{7977:(je,ie,o)=>{o.d(ie,{ST:()=>Ne});var l=o(4650),ae=o(4986),oe=o(9751),E=o(8996),j=o(9646),h=o(4976),N=o(8675),le=o(4482),de=o(5403);function U(){return(0,le.e)((s,e)=>{let t,r=!1;s.subscribe((0,de.x)(e,i=>{const a=t;t=i,r&&e.next([a,i]),r=!0}))})}var g=o(4004),L=o(5026),ue=o(1884),J=o(9300),b=o(2011),ce=o(6895),he=(o(9568),o(3942)),n=o(2810),z=o(2090),fe=o(4859);function G(s,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new n.WA("invalid-argument",`Invalid options passed to function ${s}(): You cannot specify both "merge" and "mergeFields".`);return e}function K(){if(typeof Uint8Array>"u")throw new n.WA("unimplemented","Uint8Arrays are not available in this environment.")}function Q(){if(!(0,n.Me)())throw new n.WA("unimplemented","Blobs are unavailable in Firestore in this environment.")}class C{constructor(e){this._delegate=e}static fromBase64String(e){return Q(),new C(n.Jj.fromBase64String(e))}static fromUint8Array(e){return K(),new C(n.Jj.fromUint8Array(e))}toBase64(){return Q(),this._delegate.toBase64()}toUint8Array(){return K(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}function M(s){return function pe(s,e){if("object"!=typeof s||null===s)return!1;const t=s;for(const r of e)if(r in t&&"function"==typeof t[r])return!0;return!1}(s,["next","error","complete"])}class ye{enableIndexedDbPersistence(e,t){return(0,n.ST)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return(0,n.fH)(e._delegate)}clearIndexedDbPersistence(e){return(0,n.Fc)(e._delegate)}}class V{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof n.l7||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&(0,n.yq)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,r={}){(0,n.at)(this._delegate,e,t,r)}enableNetwork(){return(0,n.Ix)(this._delegate)}disableNetwork(){return(0,n.TF)(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,(0,n.Wi)("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,n.Mx)(this._delegate)}onSnapshotsInSync(e){return(0,n.sc)(this._delegate,e)}get app(){if(!this._appCompat)throw new n.WA("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new _(this,(0,n.hJ)(this._delegate,e))}catch(t){throw d(t,"collection()","Firestore.collection()")}}doc(e){try{return new f(this,(0,n.JU)(this._delegate,e))}catch(t){throw d(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new u(this,(0,n.B$)(this._delegate,e))}catch(t){throw d(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return(0,n.i3)(this._delegate,t=>e(new Z(this,t)))}batch(){return(0,n.qY)(this._delegate),new X(new n.PU(this._delegate,e=>(0,n.GL)(this._delegate,e)))}loadBundle(e){return(0,n.Pb)(this._delegate,e)}namedQuery(e){return(0,n.L$)(this._delegate,e).then(t=>t?new u(this,t):null)}}class T extends n.u7{constructor(e){super(),this.firestore=e}convertBytes(e){return new C(new n.Jj(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return f.forKey(t,this.firestore,null)}}class Z{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new T(e)}get(e){const t=w(e);return this._delegate.get(t).then(r=>new F(this._firestore,new n.xU(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=w(e);return r?(G("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const a=w(e);return 2===arguments.length?this._delegate.update(a,t):this._delegate.update(a,t,r,...i),this}delete(e){const t=w(e);return this._delegate.delete(t),this}}class X{constructor(e){this._delegate=e}set(e,t,r){const i=w(e);return r?(G("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const a=w(e);return 2===arguments.length?this._delegate.update(a,t):this._delegate.update(a,t,r,...i),this}delete(e){const t=w(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class y{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new n.$q(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new I(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=y.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let a=i.get(t);return a||(a=new y(e,new T(e),t),i.set(t,a)),a}}y.INSTANCES=new WeakMap;class f{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new T(e)}static forPath(e,t,r){if(e.length%2!=0)throw new n.WA("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new f(t,new n.my(t._delegate,r,new n.Ky(e)))}static forKey(e,t,r){return new f(t,new n.my(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new _(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new _(this.firestore,(0,n.hJ)(this._delegate,e))}catch(t){throw d(t,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=(0,z.m9)(e))instanceof n.my&&(0,n.Eo)(this._delegate,e)}set(e,t){t=G("DocumentReference.set",t);try{return t?(0,n.pl)(this._delegate,e,t):(0,n.pl)(this._delegate,e)}catch(r){throw d(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return 1===arguments.length?(0,n.r7)(this._delegate,e):(0,n.r7)(this._delegate,e,t,...r)}catch(i){throw d(i,"updateDoc()","DocumentReference.update()")}}delete(){return(0,n.oe)(this._delegate)}onSnapshot(...e){const t=Y(e),r=H(e,i=>new F(this.firestore,new n.xU(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return(0,n.cf)(this._delegate,t,r)}get(e){let t;return t="cache"===e?.source?(0,n.kl)(this._delegate):"server"===e?.source?(0,n.Xk)(this._delegate):(0,n.QT)(this._delegate),t.then(r=>new F(this.firestore,new n.xU(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new f(this.firestore,this._delegate.withConverter(e?y.getInstance(this.firestore,e):null))}}function d(s,e,t){return s.message=s.message.replace(e,t),s}function Y(s){for(const e of s)if("object"==typeof e&&!M(e))return e;return{}}function H(s,e){var t,r;let i;return i=M(s[0])?s[0]:M(s[1])?s[1]:"function"==typeof s[0]?{next:s[0],error:s[1],complete:s[2]}:{next:s[1],error:s[2],complete:s[3]},{next:a=>{i.next&&i.next(e(a))},error:null===(t=i.error)||void 0===t?void 0:t.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class F{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new f(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return(0,n.qK)(this._delegate,e._delegate)}}class I extends F{data(e){const t=this._delegate.data(e);return(0,n.K9)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class u{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new T(e)}where(e,t,r){try{return new u(this.firestore,(0,n.IO)(this._delegate,(0,n.ar)(e,t,r)))}catch(i){throw d(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new u(this.firestore,(0,n.IO)(this._delegate,(0,n.Xo)(e,t)))}catch(r){throw d(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new u(this.firestore,(0,n.IO)(this._delegate,(0,n.b9)(e)))}catch(t){throw d(t,"limit()","Query.limit()")}}limitToLast(e){try{return new u(this.firestore,(0,n.IO)(this._delegate,(0,n.vh)(e)))}catch(t){throw d(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new u(this.firestore,(0,n.IO)(this._delegate,(0,n.e0)(...e)))}catch(t){throw d(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new u(this.firestore,(0,n.IO)(this._delegate,(0,n.TQ)(...e)))}catch(t){throw d(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new u(this.firestore,(0,n.IO)(this._delegate,(0,n.Lx)(...e)))}catch(t){throw d(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new u(this.firestore,(0,n.IO)(this._delegate,(0,n.Wu)(...e)))}catch(t){throw d(t,"endAt()","Query.endAt()")}}isEqual(e){return(0,n.iE)(this._delegate,e._delegate)}get(e){let t;return t="cache"===e?.source?(0,n.UQ)(this._delegate):"server"===e?.source?(0,n.zN)(this._delegate):(0,n.PL)(this._delegate),t.then(r=>new W(this.firestore,new n.W(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Y(e),r=H(e,i=>new W(this.firestore,new n.W(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return(0,n.cf)(this._delegate,t,r)}withConverter(e){return new u(this.firestore,this._delegate.withConverter(e?y.getInstance(this.firestore,e):null))}}class ve{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new I(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class W{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new u(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new I(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new ve(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new I(this._firestore,r))})}isEqual(e){return(0,n.qK)(this._delegate,e._delegate)}}class _ extends u{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new f(this.firestore,e):null}doc(e){try{return new f(this.firestore,void 0===e?(0,n.JU)(this._delegate):(0,n.JU)(this._delegate,e))}catch(t){throw d(t,"doc()","CollectionReference.doc()")}}add(e){return(0,n.ET)(this._delegate,e).then(t=>new f(this.firestore,t))}isEqual(e){return(0,n.Eo)(this._delegate,e._delegate)}withConverter(e){return new _(this.firestore,this._delegate.withConverter(e?y.getInstance(this.firestore,e):null))}}function w(s){return(0,n.Cf)(s,n.my)}class R{constructor(...e){this._delegate=new n.Lz(...e)}static documentId(){return new R(n.Xb.keyField().canonicalString())}isEqual(e){return(e=(0,z.m9)(e))instanceof n.Lz&&this._delegate._internalPath.isEqual(e._internalPath)}}class v{constructor(e){this._delegate=e}static serverTimestamp(){const e=(0,n.Bt)();return e._methodName="FieldValue.serverTimestamp",new v(e)}static delete(){const e=(0,n.AK)();return e._methodName="FieldValue.delete",new v(e)}static arrayUnion(...e){const t=(0,n.vr)(...e);return t._methodName="FieldValue.arrayUnion",new v(t)}static arrayRemove(...e){const t=(0,n.Ab)(...e);return t._methodName="FieldValue.arrayRemove",new v(t)}static increment(e){const t=(0,n.nP)(e);return t._methodName="FieldValue.increment",new v(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}const _e={Firestore:V,GeoPoint:n.F8,Timestamp:n.EK,Blob:C,Transaction:Z,WriteBatch:X,DocumentReference:f,DocumentSnapshot:F,Query:u,QueryDocumentSnapshot:I,QuerySnapshot:W,CollectionReference:_,FieldPath:R,FieldValue:v,setLogLevel:function we(s){(0,n.Ub)(s)},CACHE_SIZE_UNLIMITED:n.IX};!function Fe(s){(function Ce(s,e){s.INTERNAL.registerComponent(new fe.wA("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},_e)))})(s,(e,t)=>new V(e,t,new ye)),s.registerVersion("@firebase/firestore-compat","0.3.8")}(he.Z);var p=o(1205),Ie=o(2313);function k(s,e){return function Se(s,e=ae.z){return new oe.y(t=>{let r;return null!=e?e.schedule(()=>{r=s.onSnapshot({includeMetadataChanges:!0},t)}):r=s.onSnapshot({includeMetadataChanges:!0},t),()=>{r?.()}})}(s,e)}function B(s,e){return k(s,e).pipe((0,g.U)(t=>({payload:t,type:"query"})))}function D(s,e){return B(s,e).pipe((0,N.O)(void 0),U(),(0,g.U)(([t,r])=>{const i=r.payload.docChanges(),a=i.map(c=>({type:c.type,payload:c}));return t&&JSON.stringify(t.payload.metadata)!==JSON.stringify(r.payload.metadata)&&r.payload.docs.forEach((c,m)=>{const S=i.find(x=>x.doc.ref.isEqual(c.ref)),P=t?.payload.docs.find(x=>x.ref.isEqual(c.ref));S&&JSON.stringify(S.doc.metadata)===JSON.stringify(c.metadata)||!S&&P&&JSON.stringify(P.metadata)===JSON.stringify(c.metadata)||a.push({type:"modified",payload:{oldIndex:m,newIndex:m,type:"modified",doc:c}})}),a}))}function ee(s,e,t){return D(s,t).pipe((0,L.R)((r,i)=>function Ae(s,e,t){return e.forEach(r=>{t.indexOf(r.type)>-1&&(s=function Ee(s,e){switch(e.type){case"added":if(!s[e.newIndex]||!s[e.newIndex].doc.ref.isEqual(e.doc.ref))return q(s,e.newIndex,0,e);break;case"modified":if(null==s[e.oldIndex]||s[e.oldIndex].doc.ref.isEqual(e.doc.ref)){if(e.oldIndex!==e.newIndex){const t=s.slice();return t.splice(e.oldIndex,1),t.splice(e.newIndex,0,e),t}return q(s,e.newIndex,1,e)}break;case"removed":if(s[e.oldIndex]&&s[e.oldIndex].doc.ref.isEqual(e.doc.ref))return q(s,e.oldIndex,1)}return s}(s,r))}),s}(r,i.map(a=>a.payload),e),[]),(0,ue.x)(),(0,g.U)(r=>r.map(i=>({type:i.type,payload:i}))))}function q(s,e,t,...r){const i=s.slice();return i.splice(e,t,...r),i}function te(s){return(!s||0===s.length)&&(s=["added","removed","modified"]),s}o(9260);class re{constructor(e,t,r){this.ref=e,this.query=t,this.afs=r}stateChanges(e){let t=D(this.query,this.afs.schedulers.outsideAngular);return e&&e.length>0&&(t=t.pipe((0,g.U)(r=>r.filter(i=>e.indexOf(i.type)>-1)))),t.pipe((0,N.O)(void 0),U(),(0,J.h)(([r,i])=>i.length>0||!r),(0,g.U)(([r,i])=>i),h.iC)}auditTrail(e){return this.stateChanges(e).pipe((0,L.R)((t,r)=>[...t,...r],[]))}snapshotChanges(e){const t=te(e);return ee(this.query,t,this.afs.schedulers.outsideAngular).pipe(h.iC)}valueChanges(e={}){return B(this.query,this.afs.schedulers.outsideAngular).pipe((0,g.U)(t=>t.payload.docs.map(r=>e.idField?Object.assign(Object.assign({},r.data()),{[e.idField]:r.id}):r.data())),h.iC)}get(e){return(0,E.D)(this.query.get(e)).pipe(h.iC)}add(e){return this.ref.add(e)}doc(e){return new se(this.ref.doc(e),this.afs)}}class se{constructor(e,t){this.ref=e,this.afs=t}set(e,t){return this.ref.set(e,t)}update(e){return this.ref.update(e)}delete(){return this.ref.delete()}collection(e,t){const r=this.ref.collection(e),{ref:i,query:a}=ne(r,t);return new re(i,a,this.afs)}snapshotChanges(){return function xe(s,e){return k(s,e).pipe((0,N.O)(void 0),U(),(0,g.U)(([t,r])=>r.exists?t?.exists?{payload:r,type:"modified"}:{payload:r,type:"added"}:{payload:r,type:"removed"}))}(this.ref,this.afs.schedulers.outsideAngular).pipe(h.iC)}valueChanges(e={}){return this.snapshotChanges().pipe((0,g.U)(({payload:t})=>e.idField?Object.assign(Object.assign({},t.data()),{[e.idField]:t.id}):t.data()))}get(e){return(0,E.D)(this.ref.get(e)).pipe(h.iC)}}class be{constructor(e,t){this.query=e,this.afs=t}stateChanges(e){return e&&0!==e.length?D(this.query,this.afs.schedulers.outsideAngular).pipe((0,g.U)(t=>t.filter(r=>e.indexOf(r.type)>-1)),(0,J.h)(t=>t.length>0),h.iC):D(this.query,this.afs.schedulers.outsideAngular).pipe(h.iC)}auditTrail(e){return this.stateChanges(e).pipe((0,L.R)((t,r)=>[...t,...r],[]))}snapshotChanges(e){const t=te(e);return ee(this.query,t,this.afs.schedulers.outsideAngular).pipe(h.iC)}valueChanges(e={}){return B(this.query,this.afs.schedulers.outsideAngular).pipe((0,g.U)(r=>r.payload.docs.map(i=>e.idField?Object.assign({[e.idField]:i.id},i.data()):i.data())),h.iC)}get(e){return(0,E.D)(this.query.get(e)).pipe(h.iC)}}const Te=new l.OlP("angularfire2.enableFirestorePersistence"),De=new l.OlP("angularfire2.firestore.persistenceSettings"),Pe=new l.OlP("angularfire2.firestore.settings"),Oe=new l.OlP("angularfire2.firestore.use-emulator");function ne(s,e=(t=>t)){return{query:e(s),ref:s}}let Ne=(()=>{class s{constructor(t,r,i,a,c,m,S,P,x,Ue,Le,Ge,Me,We,Re,Be,Qe){this.schedulers=S;const O=(0,b.on)(t,m,r),$=x;Ue&&(0,p.nw)(O,m,Le,Me,We,Re,Ge,Be),[this.firestore,this.persistenceEnabled$]=(0,b.cc)(`${O.name}.firestore`,"AngularFirestore",O.name,()=>{const A=m.runOutsideAngular(()=>O.firestore());if(a&&A.settings(a),$&&A.useEmulator(...$),i&&!(0,ce.PM)(c)){const qe=()=>{try{return(0,E.D)(A.enablePersistence(P||void 0).then(()=>!0,()=>!1))}catch($e){return typeof console<"u"&&console.warn($e),(0,j.of)(!1)}};return[A,m.runOutsideAngular(qe)]}return[A,(0,j.of)(!1)]},[a,$,i])}collection(t,r){let i;i="string"==typeof t?this.firestore.collection(t):t;const{ref:a,query:c}=ne(i,r),m=this.schedulers.ngZone.run(()=>a);return new re(m,c,this)}collectionGroup(t,r){const i=r||(c=>c),a=this.firestore.collectionGroup(t);return new be(i(a),this)}doc(t){let r;r="string"==typeof t?this.firestore.doc(t):t;const i=this.schedulers.ngZone.run(()=>r);return new se(i,this)}createId(){return this.firestore.collection("_").doc().id}}return s.\u0275fac=function(t){return new(t||s)(l.LFG(b.Dh),l.LFG(b.xv,8),l.LFG(Te,8),l.LFG(Pe,8),l.LFG(l.Lbi),l.LFG(l.R0b),l.LFG(h.HU),l.LFG(De,8),l.LFG(Oe,8),l.LFG(p.zQ,8),l.LFG(p.Qv,8),l.LFG(p.L6,8),l.LFG(p._Q,8),l.LFG(p.rT,8),l.LFG(p.lh,8),l.LFG(p.f7,8),l.LFG(Ie.nm,8))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"any"}),s})()}}]);