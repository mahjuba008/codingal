"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[20046],{981102:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoWithContextLogging_pin",selections:[{args:null,kind:"FragmentSpread",name:"VideoWrapper_pin"}],type:"Pin",abstractKey:null};n.hash="93ed23334d5bac81ac8410f05c4f2031";let r=n},909483:(e,t,i)=>{i.d(t,{K:()=>o,Q:()=>l});var n=i(667294);let r=(0,n.createContext)(null),l=r.Provider;function o(){let e=(0,n.useContext)(r);return e?.featuredCommentId}},622468:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(545007),r=i(252071),l=i(625987),o=i(733383),a=i(642758),s=i(701842),d=i(378041),h=i(403764);let u={[o.o.aggregatedComment]:"AggregatedCommentReplyResource",[o.o.pin]:"AggregatedCommentResource",[o.o.didIt]:"DidItCommentsResource"};function c(){let e=(0,n.I0)(),{aggregatedCommentCreated:t,updateCommentCount:i}=(0,l.nf)();return async({commentMedia:n,force:l=!0,fromUnifiedComment:o,objectId:c,objectType:p,orbacSubjectId:m,pinId:_,replyToCommentId:g,tags:v,text:f})=>{let y=u[p],T={force:l,objectId:c,pinId:_,tags:v,text:f,replyToCommentId:g,...m?{orbacSubjectId:m}:{},...n?{commentMedia:n}:{}},I=h.Z.AGGREGATED_COMMENTS;o&&(I="pin"===p?h.Z.UNIFIED_COMMENTS:h.Z.AGGREGATED_COMMENT_REPLIES);let E=await r.Z.create(y,T).callCreate({showError:!1}),w=E.resource_response.data;return t(c,w),e((0,s.vX)({feedType:I,feedId:c,itemIds:[w.id],itemType:w.type,prepend:!0})),"aggregatedComment"===p?i(c,1):"pin"!==p&&e((0,a.L8)(c,1)),_&&e((0,d.R)(_,1)),w.id||E}}},501989:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(667294),r=i(883119),l=i(793874),o=i(144326),a=i(785893);let s=({hasManyComments:e,inCommentFeedPreview:t,isFirstTaggedUserAuthor:i,isInCommentModule:s,marginBottom:d,marginEnd:h,shouldShowFirstNameOnly:u,size:c,tags:p,taggedUsers:m,text:_})=>{let g=(0,o.ZP)(),v=(0,n.useRef)(null),f=(0,l.Yc)()?"#111111":"#FFFFFF",[y,T]=(0,n.useState)(!1),I=g._('...view', 'comment.module.toggle.view', 'label on comment module to open coment thread'),E=g._('...view all', 'comment.module.toggle.viewAll', 'label on comment module to open coment thread'),w=e?E:I,D=t||s;(0,n.useEffect)(()=>{v.current&&T(v.current.scrollHeight>v.current.offsetHeight)},[v,T,_]);let b=(e,t)=>(0,a.jsx)(r.xv,{inline:!0,overflow:"normal",size:c,children:(0,a.jsx)("span",{className:"text-container",children:e})},t),C=(e,t,n,l)=>{let o=u||0===n&&i?m[n].first_name||m[n].username[0]:t;return(0,a.jsx)(r.xv,{color:e,inline:!0,overflow:"normal",size:c,weight:"bold",children:D?o:(0,a.jsx)(r.rU,{display:"inlineBlock",href:`/${m[n].username}`,underline:"hover",children:o})},l)};return(0,a.jsx)("span",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word",marginBottom:d},children:(()=>{if(!p.length||!m||p.length!==m.length)return b(_,"1");let e=0,i=[];return p.forEach((t,n)=>{let r=_.substring(e,t.offset);e=t.offset+t.length;let l=_.substring(t.offset,e);i=i.concat(b(r,`${n}a`)).concat(C(t.color,l,n,`${n}b`))}),i=i.concat(b(_.substring(e),"2")),(0,a.jsx)(r.xu,{display:u?"flex":void 0,marginEnd:h??3,position:"relative",children:(0,a.jsxs)(r.xv,{ref:v,inline:!0,lineClamp:s?2:t?1:void 0,size:c,children:[i,s&&!y&&(0,a.jsxs)(r.xv,{inline:!0,size:c,weight:"bold",children:[" ",w]}),s&&y&&(0,a.jsx)(r.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{background:`linear-gradient(270deg, ${f} 50%, ${f}00 100%)`}},display:"inlineBlock",position:"absolute",right:!0,width:140,children:(0,a.jsxs)(r.xv,{align:"end",size:c,weight:"bold",children:[" ",w]})})]})})})()})}},642593:(e,t,i)=>{i.d(t,{A9:()=>u,F1:()=>y,Ff:()=>f,G_:()=>v,LH:()=>l,Rv:()=>a,TJ:()=>d,WU:()=>p,i$:()=>m,iB:()=>r,mz:()=>g,o:()=>c,pW:()=>h,uC:()=>o,xA:()=>s,zs:()=>_});var n=i(207630);let r=48,l=56,o=500,a=Object.freeze({TOP:0,REPLY_TO_TRIED:1,REPLY_TO_AGGREGATED:2}),s=Object.freeze({PHOTO:0,STICKER:1,PIN:2}),d="comment_featured_ids",h="did_it_featured_ids",u={NONE:"none",WARNING:"warning",BLOCK:"block"},c="transparent",p="#efefef",m=(e,t)=>e?(0,n.Z)(t.ngettext('{{ count }} Comment', '{{ count }} Comments', e, 'closeup.commentThread.heading.commentCount', 'Comment count on a Pin. count: number of comments'),{count:e.toString()}):t._('No comments yet', 'closeup.commentThread.heading.noComments', 'Prompt for user to comment on Pin'),_=(e,t,i,n)=>{let r=t.map(t=>({...t,offset:(t.offset||0)+(n?0:e.length+1),color:"shopping"}));return n?r:[{offset:0,length:e.length,color:i?"light":"dark"},...r]},g=e=>e._('Add one to start the conversation', 'closeup.commentThread.emptyState.message', 'Comment thread empty state message'),v=e=>e._('Post', 'commentComposer.button.post', 'Post new comment'),f=e=>e._('posted a photo', 'comment.preview.text.photo', 'Comment preview text for an image that a user posted'),y=e=>e._('posted a sticker', 'comment.preview.text.sticker', 'Comment preview text for a sticker that a user posted')},731972:(e,t,i)=>{i.d(t,{Z:()=>n});function n(e){let t=!1;return{promise:new Promise((i,n)=>{e.then(e=>t?n({isCanceled:!0}):i(e),e=>t?n({isCanceled:!0}):n(e))}),cancel(){t=!0}}}},852045:(e,t,i)=>{i.d(t,{Z:()=>n});let n=e=>{if(!e)return null;let{rich_metadata:t}=e.pin;return t?{...e,richMetadata:t}:null}},70494:(e,t,i)=>{i.d(t,{Z:()=>n});let n=e=>e?.pin?.id?e:null},639686:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(667294),r=i(731972);function l(){let e=(0,n.useRef)([]),t=(0,n.useRef)({});return(0,n.useEffect)(()=>()=>{[...Object.keys(t.current).map(e=>t.current[e]),...e.current].forEach(e=>e())},[]),function(i,n){if(n){let e=t.current[n];e&&(e(),delete t.current[n])}let{cancel:l,promise:o}=(0,r.Z)(i);return n?t.current[n]=l:e.current=[...e.current,l],o}}},707676:(e,t,i)=>{i.d(t,{Z$:()=>o,by:()=>a,eL:()=>l});var n=i(717067),r=i(1006);let l=e=>{if("undefined"==typeof window)return"";let t=0,i=document.querySelector('[data-test-id="header"]');if(null!==i){let{height:e}=i.getBoundingClientRect();t+=e}switch(e){case"AuthHomefeed":let n=document.querySelector('[data-root-margin="more-ideas-tabs"]');if(null!==n){let{height:e}=n.getBoundingClientRect();t+=e}break;case"SearchItem":let r=document.querySelector('[data-root-margin="search-improvements-bar"]');if(null!==r){let{height:e}=r.getBoundingClientRect();t+=e}let l=document.querySelector('[data-test-id="search-tab-bar"],[data-root-margin="search-one-bar"]');if(null!==l){let{height:e}=l.getBoundingClientRect();t+=e}}return`${-1*t}px 0px 0px 0px`},o=({videosDuration:e,vHLSV4VideoDuration:t,storyPinDataTotalVideoDuration:i})=>(0,n.Z)(e||t||i||0),a=(e,t,i)=>{e?(0,r.My)(`${t}.mute_button.toggle_off`):(0,r.My)(`${t}.mute_button.toggle_on`),i({action:"click",item:"mute-button"})}},733383:(e,t,i)=>{i.d(t,{n:()=>r,o:()=>n});let n={aggregatedComment:"aggregatedComment",didIt:"didIt",pin:"pin"},r={aggregatedComment:"aggregatedcomment",didIt:"userdiditdata",pin:"pin"}},701918:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(667294),r=i(883119),l=i(598259),o=i(785893);let a=function({badgeSize:e,badgeSpacing:t,fullName:i,isVerifiedIdentity:a,isVerifiedMerchant:s,truncate:d=!1}){let h=i.split(" "),u=h.slice(0,h.length-1).join(" "),c=" ".concat(h[h.length-1]);return d?(0,o.jsxs)(r.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,o.jsx)(r.xv,{lineClamp:1,weight:"bold",children:i}),(0,o.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{top:t}},flex:"none",paddingX:1,position:"relative",children:(0,o.jsx)(l.Z,{isVerifiedIdentity:a,isVerifiedMerchant:s,size:e})})]}):(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)("span",{children:u}),(0,o.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[c," ",(0,o.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{top:t}},display:"inlineBlock",flex:"none",position:"relative",children:(0,o.jsx)(l.Z,{isVerifiedIdentity:a,isVerifiedMerchant:s,size:e})})]})]})}},642758:(e,t,i)=>{i.d(t,{DD:()=>u,lg:()=>c,Th:()=>m,YH:()=>s,wH:()=>a,IU:()=>p,L8:()=>h});var n=i(252071),r=i(400416),l=i(701842),o=i(403764);function a({didItDataId:e,isLikedByMe:t,orbacSubjectId:i}){return n=>((0,r.Z)({url:`/v3/did_it/${e}/like/`,method:t?"DELETE":"POST",data:i?{orbac_subject_id:i}:{}}),n({type:"USER_DID_IT_DATA_LIKE_TOGGLED",payload:{id:e,liked_by_me:!t}}))}function s({didItDataId:e,isMarkedHelpfulByMe:t,orbacSubjectId:i}){return n=>((0,r.Z)({url:`/v3/helpful/2/${e}/`,method:t?"DELETE":"POST",data:i?{orbac_subject_id:i}:{}}),n({type:"USER_DID_IT_DATA_HELPFUL_TOGGLED",payload:{id:e,marked_helpful_by_me:!t}}))}function d(e){return{type:"USER_DID_IT_DATA_DELETE",payload:{id:e}}}function h(e,t){return{type:"USER_DID_IT_DATA_UPDATE_COMMENT_COUNT",payload:{id:e,increment:t}}}function u({aggregatedPinDataId:e,details:t,fromUnifiedComment:i,image_signatures:r,pin_id:a,username:s,updateParentDidItCount:d}){let u={aggregatedPinDataId:e,details:t,image_signatures:r,pin_id:a};return t=>n.Z.create("DidItActivityResource",u).callCreate().then(n=>{let r=n.resource_response.data;t({type:"PIN_DID_IT",payload:{id:a,value:!0}}),t({type:"USER_DID_IT_DATA_CREATE",payload:{user_did_it_data:r}}),t((0,l.vX)({feedId:e,feedType:i?o.Z.UNIFIED_COMMENTS:o.Z.TRIED_IT_FEED,itemIds:[r.id],itemType:r.type})),t((0,l.vX)({feedId:s,feedType:o.Z.TRIED_IT_FEED,itemIds:[r.id],itemType:r.type})),d&&t(h(e,1))},()=>{})}function c({aggregatedPinDataId:e,feedType:t,id:i,isOwnedByMe:r,pinId:a,username:s,updateParentDidItCount:u}){return c=>{n.Z.create("DidItActivityResource",{user_did_it_data_id:i,pinId:a}).callDelete().then(()=>{r&&c({type:"PIN_DID_IT",payload:{id:a,value:!1}}),c(d(i)),c((0,l.EX)({feedId:e??"",feedType:t||o.Z.TRIED_IT_FEED,itemIds:[i],itemType:"userdiditdata"})),c((0,l.EX)({feedId:s,feedType:o.Z.TRIED_IT_FEED,itemIds:[i],itemType:"userdiditdata"})),c((0,l.EX)({feedId:s,feedType:o.Z.UNIFIED_COMMENTS,itemIds:e?[e]:[],itemType:"userdiditdata"})),u&&c(h(i,-1))},()=>{})}}function p({id:e,details:t,image_signatures:i,pinId:r}){let l={details:t,image_signatures:i,user_did_it_data_id:e,pin_id:r};return e=>{n.Z.create("DidItActivityResource",l).callUpdate().then(t=>{e({type:"USER_DID_IT_DATA_UPDATE",payload:{user_did_it_data:t.resource_response.data}})},()=>{})}}function m(e,t,i,n,a){return s=>{(0,r.Z)({url:`/v3/did_it/${i}/flag/`,method:"PUT",data:{reason:n,detailed_reasons:t,explanation:void 0}}).then(()=>{s(d(i)),e&&s((0,l.EX)({feedId:e,feedType:o.Z.TRIED_IT_FEED,itemIds:[i],itemType:"userdiditdata"})),s((0,l.EX)({feedId:a,feedType:o.Z.TRIED_IT_FEED,itemIds:[i],itemType:"userdiditdata"}))},()=>{})}}},378041:(e,t,i)=>{i.d(t,{R:()=>n});function n(e,t){return{type:"PIN_UPDATE_COMMENT_COUNT",payload:{id:e,increment:t}}}},966875:(e,t,i)=>{i.d(t,{ZP:()=>C});var n,r=i(667294);i(422578);var l=i(883119),o=i(573706),a=i(955937),s=i(318717),d=i(766546),h=i(297728),u=i(707676),c=i(644797),p=i(299897),m=i(179735),_=i(785893);function g(e,t,i){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let v=(0,m.Z)(()=>Promise.all([i.e(97270),i.e(93041),i.e(88782),i.e(95813)]).then(i.bind(i,99773)),void 0,"app-www-video-VideoWrapper"),f=[0,.25,.5,.75,.95,.97],y=[0,.5,.8,.99,1],T={rootMargin:"-64px 0px 0px 0px",threshold:[...p.iM]},I=Object.freeze({LOADING:0,PLAYING:1,PAUSED:2,STALLING:3}),E=void 0!==n?n:n=i(981102);function w(){return new Date().getTime()}function D(e){return!!e.volume&&e.volume>0}class b extends r.Component{constructor(e){super(e),g(this,"videoWrapperRef",(0,r.createRef)()),g(this,"handleWindowResize",()=>{if(!this.fullscreen){let e=this.getDimensions(),{height:t,width:i}=this.currentInterval;e.height!==t||e.width!==i?this.startNewInterval(e):(this.currentInterval.windowHeight=e.windowHeight,this.currentInterval.windowWidth=e.windowWidth)}}),g(this,"handlePlayheadDown",({event:e})=>{let{onPlayheadDown:t}=this.props;this.setState({seeking:!0}),t&&t({event:e})}),g(this,"handlePlayheadUp",({event:e})=>{let{onPlayheadUp:t}=this.props;this.setState({seeking:!1}),t&&t({event:e})}),g(this,"handleLoop",()=>{this.videoTime=0}),g(this,"handlePlaying",e=>{this.logVideoStart(),this.props.onPlaying&&this.props.onPlaying(e)}),g(this,"handleTimeChange",e=>{let{seeking:t,ready:i}=this.state;if(!this.currentInterval.videoDuration)return;let n=1e3*e.time,r=function(e,t,i,n){if(e>t||i<=0)return null;for(let r of n){let n=r*i;if(e<=n&&t>n)return r}return null}(this.videoTime,n,this.currentInterval.videoDuration,f);if("number"==typeof r&&this.props.playing&&!t&&i){let e=w();this.logVideoEvent(6906,{...this.currentInterval,startTime:e,endTime:e,videoStartTime:0,videoEndTime:0,quartile:Math.floor(4*r),quartilePercentValue:r})}this.videoTime=n,this.props.onTimeChange&&this.props.onTimeChange(e)}),g(this,"handleDurationChange",e=>{this.currentInterval.videoDuration=1e3*e.duration,this.props.onDurationChange&&this.props.onDurationChange(e)}),g(this,"handleReady",e=>{let{ready:t}=this.state;t||this.setState({ready:!0}),this.props.onReady&&this.props.onReady(e)}),g(this,"handleEnded",e=>{this.logFourthQuartileEvent(),this.props.loop&&(this.startNewInterval(),this.currentInterval.videoStartTime=0),this.props.onEnded&&this.props.onEnded(e)}),g(this,"handleVisibilityChange",e=>{if(0===e.length)return;let t=function(e,t){for(let i=0;i<t.length;i+=1){let n=t[i],r=t[i+1];if(null==r||n<=e&&e<r)return n}return null}(Number.parseFloat(e.slice(-1)[0].intersectionRatio.toFixed(2)),y);"number"==typeof t&&(this.visible=t>=.5),null==t||t===this.currentInterval.viewability||this.fullscreen||(0===t?this.startNewInterval({viewability:t,playbackState:I.PAUSED}):this.startNewInterval({viewability:t}))}),g(this,"handleFullscreenChange",({event:e,fullscreen:t})=>{if(t){let{height:e,width:t}=window.screen;this.startNewInterval({height:e,width:t,windowHeight:e,windowWidth:t})}else t||this.startNewInterval(this.getDimensions());this.fullscreen=t,this.props.onFullscreenChange&&this.props.onFullscreenChange({event:e,fullscreen:t})}),g(this,"handleClose",()=>{this.startNewInterval()}),g(this,"handleContextMenu",e=>{e.preventDefault()}),this.state={ready:!1,seeking:!1,started:!1};let t=w();this.handleWindowResize=(0,a.Z)(this.handleWindowResize,1e3),this.currentInterval={videoDuration:0,startTime:t,endTime:t,videoStartTime:0,videoEndTime:0,isAudible:D(e),playbackState:this.getPlaybackState(e,this.state),quartile:-1,quartilePercentValue:0,height:null,width:null,windowHeight:null,windowWidth:null,viewability:null},this.videoTime=0,this.fullscreen=!1,this.visible=null}componentDidMount(){this.currentInterval={...this.currentInterval,...this.getDimensions()},window.addEventListener("resize",this.handleWindowResize),window.addEventListener("beforeunload",this.handleClose)}componentDidUpdate(e,t){let i={};D(e)&&!D(this.props)?i.isAudible=!1:!D(e)&&D(this.props)&&(i.isAudible=!0);let n=this.getPlaybackState(this.props,this.state);this.getPlaybackState(e,t)!==n&&(i.playbackState=n),Object.keys(i).length>0&&this.startNewInterval(i)}componentWillUnmount(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("beforeunload",this.handleClose),this.startNewInterval()}getPlaybackState(e,t){return t.ready?e.playing&&!t.seeking?I.PLAYING:I.PAUSED:I.LOADING}getDimensions(){let e,t;if(this.videoWrapperRef.current){let i=this.videoWrapperRef.current;i.clientHeight&&i.clientWidth&&(e=i.clientHeight,t=i.clientWidth)}return{height:e,width:t,windowHeight:window.innerHeight,windowWidth:window.innerWidth}}logVideoEvent(e,t){let{closeupStoryPinViewability:i,contextLogData:n,logContextEvent:r,playing:l,surface:o}=this.props,{seeking:a}=this.state,{height:s,width:d,windowHeight:h,windowWidth:u,viewability:c,...p}=t;if(null!=s&&null!=d&&null!=h&&null!=u&&null!=c){let t={...p,gridAutoplay:6904===e&&l&&!a&&("AuthHomefeed"===o||"SearchItem"===o||"RelatedPinGrid"===o||"PdpRelatedPinGrid"===o),height:s,width:d,windowHeight:h,windowWidth:u,viewability:i||c};r({event_type:e,...function(e){let{eventData:{videoEvent:{gridAutoplay:t,videoDuration:i,startTime:n,endTime:r,videoStartTime:l,videoEndTime:o,isAudible:a,height:s,width:d,playbackState:h,quartile:u,quartilePercentValue:c,windowHeight:p,windowWidth:m,viewability:_}},component:g,objectId:v,view:f,viewParameter:y,...T}=e;return{component:g,object_id_str:v,view_type:f,view_parameter:y,aux_data:{...T},event_data:{videoEventData:{gridAutoplay:t,videoDuration:i,time:n,endTime:r,videoTime:l,endVideoTime:o,isAudible:a,height:s,width:d,playbackState:h,quartile:u,quartilePercentValue:c,windowHeight:p,windowWidth:m,viewability:_}}}}({...n,view:this.fullscreen?108:n.view,eventData:{videoEvent:t}})})}}logFourthQuartileEvent(){let e=w();this.logVideoEvent(6906,{...this.currentInterval,startTime:e,endTime:e,videoStartTime:0,videoEndTime:0,quartile:4,quartilePercentValue:1})}logVideoStart(){if(this.state.started)return;let{contextLogData:e,setVideoPlayed:t,shouldLogVideoStart:i}=this.props;if(i){let e=w();this.logVideoEvent(3621,{...this.currentInterval,startTime:e,endTime:e,videoEndTime:this.videoTime})}t(e.objectId),this.setState({started:!0})}startNewInterval(e){let t=w();this.logVideoEvent(6904,{...this.currentInterval,endTime:t,videoEndTime:this.videoTime}),this.currentInterval={...this.currentInterval,...e,startTime:t,videoStartTime:this.videoTime,endTime:-1,videoEndTime:-1}}render(){let{rootMargin:e,surface:t,aspectRatio:i,backgroundColor:n,captions:r,contextLogData:o,controls:a,fallback:s,hlsConfig:h,isAutoPlay:c,loop:p,objectFit:m,onLoadedChange:g,onControlsPause:f,onControlsPlay:y,onSeek:I,onVolumeChange:E,pin:w,playbackRate:D,playing:b,playsInline:C,poster:P,preload:A,seekTime:x,src:S,videoStartTime:R,volume:N,video:L}=this.props,{seeking:j}=this.state;return void 0!==e&&(T.rootMargin=t?(0,u.eL)(t):e),(0,_.jsx)(d.Z,{onVisibilityChange:this.handleVisibilityChange,options:T,children:e=>(0,_.jsx)(l.xu,{ref:t=>{e.current=t,this.videoWrapperRef.current=t},height:"inherit",onContextMenu:this.handleContextMenu,children:(0,_.jsx)(v,{aspectRatio:i,backgroundColor:n,captions:r,contextLogData:o,controls:a,fallback:s,hlsConfig:h,isAutoPlay:c,loop:p,objectFit:m,onControlsPause:f,onControlsPlay:y,onDurationChange:this.handleDurationChange,onEnded:this.handleEnded,onFullscreenChange:this.handleFullscreenChange,onLoadedChange:g,onLoop:this.handleLoop,onPlay:()=>{},onPlayError:()=>{},onPlayheadDown:this.handlePlayheadDown,onPlayheadUp:this.handlePlayheadUp,onPlaying:this.handlePlaying,onReady:this.handleReady,onSeek:I,onTimeChange:this.handleTimeChange,onVolumeChange:E,pinKey:w,playbackRate:D,playing:!j&&b,playsInline:C,poster:P,preload:A,seekTime:x,src:S,video:L,videoStartTime:R,visible:this.visible,volume:N})})})}}function C(e){let{pinKey:t}=e,i=(0,s.Z)(E,t),{logContextEvent:n}=(0,o.v)(),{checkExperiment:r}=(0,h.F)(),{setVideoPlayed:l}=(0,c.r)(),a=r("web_video_start_log").anyEnabled;return(0,_.jsx)(b,{...e,logContextEvent:n,pin:i,setVideoPlayed:l,shouldLogVideoStart:a})}g(b,"defaultProps",l.nk.defaultProps)},299897:(e,t,i)=>{i.d(t,{Ul:()=>l,VS:()=>n,hy:()=>o,iM:()=>r,j4:()=>a});let n=2,r=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1],l={backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0))",pointerEvents:"none",bottom:0},o=128,a=e=>e&&document.querySelector(`video[poster="${e}"]`)||null}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/20046-3b84aee38768e4f7.mjs.map