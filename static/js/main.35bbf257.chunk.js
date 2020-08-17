(this["webpackJsonpcoalition-game"]=this["webpackJsonpcoalition-game"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/game_class.b52faa08.png"},18:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r);a(23),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,s=a(3),i=a(13);!function(e){e.P1="P1",e.P2="P2",e.P3="P3"}(l||(l={}));var u,E=[l.P1,l.P2,l.P3],f={screen:"INTRO",coalitionsValues:{12:50,13:60,23:70,123:100},players:[l.P1,l.P2,l.P3],currentTurn:l.P1,coalitionForOffer:"23",offers:[],reason:"OFFER_ACCEPTED",states:[]},m=a(14),p=a(2),d=a(1);!function(e){e.START_GAME="START_GAME",e.CONFIGURE_GAME="CONFIGURE_GAME",e.RESTART_GAME="RESTART_GAME",e.SELECT_COALITION="SELECT_COALITION",e.SUBMIT_OFFER="SUBMIT_OFFER",e.RESPOND_OFFER="RESPOND_OFFER",e.UNDO="UNDO",e.SETUP="SETUP",e.UPDATE_COALITION_VALUES="UPDATE_COALITION_VALUES",e.BACK="BACK",e.GIVE_UP="GIVE_UP"}(u||(u={}));var P={12:[l.P1,l.P2],13:[l.P1,l.P3],23:[l.P2,l.P3],123:[l.P1,l.P2,l.P3]},O=function(e){switch(e){case l.P1:return"P1";case l.P2:return"P2";case l.P3:return"P3"}},C=function(e){return P[e]},b=function(e){return N(e[l.P1])&&N(e[l.P2])&&N(e[l.P3])},N=function(e){return-1!==["PROPOSED","ACCEPTED","REJECTED","NON_RELEVANT"].indexOf(e)},v=function(e){var t=function(e){return-1!==["PROPOSED","ACCEPTED","NON_RELEVANT"].indexOf(e)};return t(e[l.P1])&&t(e[l.P2])&&t(e[l.P3])},T=function(e){return b(e)&&!v(e)},_=function(e){switch(e){case"123":case"23":return l.P1;case"13":return l.P2;case"12":return l.P3}},S=function(e){return e.slice().reverse().find(v)},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.START_GAME:return Object(d.a)({},e,{screen:"SELECT_COAL",coalitionsValues:Object(d.a)({},e.coalitionsValues),offers:[g(e)],states:[].concat(Object(p.a)(e.states),[A(e)])});case u.RESTART_GAME:return Object(d.a)({},e,{screen:"INTRO"});case u.SELECT_COALITION:return Object(d.a)({},e,{screen:"OFFER",coalitionForOffer:t.payload.selectedCoalition,states:[].concat(Object(p.a)(e.states),[A(e)])});case u.SUBMIT_OFFER:var a=t.payload,n=a.actor,c=a.selectedCoalition,r=a.split,o=C(c),l={actor:n,selectedCoalition:c,split:r,P1:"NON_RELEVANT",P2:"NON_RELEVANT",P3:"NON_RELEVANT"};return o.forEach((function(e){return l[e]="TBD"})),l[n]="PROPOSED",Object(d.a)({},e,{screen:"ACK",offers:[].concat(Object(p.a)(e.offers),[l]),states:[].concat(Object(p.a)(e.states),[A(e)])});case u.RESPOND_OFFER:var s=t.payload,i=s.actor,E=s.status,m=Object(d.a)({},e.offers.pop());if("ACCEPT"===E&&(m[i]="ACCEPTED"),"REJECT"===E&&(m[i]="REJECTED"),!b(m))return Object(d.a)({},e,{offers:[].concat(Object(p.a)(e.offers),[m]),states:[].concat(Object(p.a)(e.states),[A(e)])});if(T(m))return Object(d.a)({},e,{offers:[].concat(Object(p.a)(e.offers),[m]),reason:"OFFER_REJECTED",screen:"SELECT_COAL",states:[].concat(Object(p.a)(e.states),[A(e)])});if(v(m)){var P="SELECT_COAL";return"123"===m.selectedCoalition&&(P="FINISHED"),Object(d.a)({},e,{offers:[].concat(Object(p.a)(e.offers),[m]),reason:"OFFER_ACCEPTED",screen:P,currentTurn:_(m.selectedCoalition),states:[].concat(Object(p.a)(e.states),[A(e)])})}throw new Error("Should not happen");case u.UNDO:if(e.states){var O=e.states[e.states.length-1];return Object(d.a)({},O,{states:e.states.slice(0,-1)})}return Object(d.a)({},e);case u.GIVE_UP:return Object(d.a)({},e,{states:[].concat(Object(p.a)(e.states),[A(e)]),screen:"FINISHED"});case u.SETUP:return Object(d.a)({},e,{screen:"SETUP",states:[].concat(Object(p.a)(e.states),[A(e)])});case u.UPDATE_COALITION_VALUES:return Object(d.a)({},e,{coalitionsValues:Object(d.a)({},t.payload.c)});default:return Object(d.a)({},e)}},A=function(e){var t=Object(d.a)({},e);return t.states=[],t},g=function(e){return{P1:"NON_RELEVANT",P2:"ACCEPTED",P3:"ACCEPTED",actor:l.P1,selectedCoalition:"23",split:{P1:0,P2:Math.floor(e.coalitionsValues[23]/2),P3:Math.ceil(e.coalitionsValues[23]/2)}}},R=function(){return function(e){var t=e.getState;return function(e){return function(a){console.groupCollapsed("dispatching action => ".concat(a.type)),console.log("will dispatch",a);var n=e(a);return console.log("state after dispatch",t()),console.groupEnd(),n}}}},y=a(8),I=(a(30),a(31),function(e){return c.a.createElement("div",{className:"root_topbar"},c.a.createElement("span",{className:"root_topbar_title"},"The Coalition Parachute game"),c.a.createElement("span",null,"INTRO"===e.screen&&c.a.createElement("button",{className:"root_topbar_button",onClick:e.onSetupClick},"Setup"),"INTRO"!==e.screen&&c.a.createElement("button",{className:"root_topbar_button",onClick:e.onUndo},"Undo"),("INTRO"===e.screen||"SETUP"===e.screen)&&c.a.createElement("button",{className:"root_topbar_button",onClick:e.onStartGame},"Start Game"),"INTRO"!==e.screen&&"SETUP"!==e.screen&&c.a.createElement("button",{className:"root_topbar_button",onClick:e.onIntroClick},"Restart")))}),j=a(16),U=a.n(j),F=function(e){return c.a.createElement("div",{className:"intro_root"},c.a.createElement("p",null,"This game is going to simulate the parachute game we did in class, playing in turns, On each turn a player \n    will have the chance to make an offer to the other participants to join him, create a coalition, and share the \n    point of the coalition they have created."),c.a.createElement("p",null,"Pay attention that the point of the coalition you create are not split evenly and try to get the best value \n      you can in the current game set"),c.a.createElement("p",null,"Good luck"),c.a.createElement("img",{className:"intro_img",src:U.a,alt:"parachute"}))},D=function(e){var t=e.className,a=e.children;return c.a.createElement("div",{className:t},a)},k=a(7),L=function(e){var t=e.coalitionsValues,a=e.players,n=e.editable,r=e.onUpdateCoalition,o=void 0===r?function(){}:r,l=Object(d.a)({},t),s=function(e){return function(a){var n=Object(d.a)({},t,Object(k.a)({},e,a));o(n)}};return console.log(l),c.a.createElement("div",{className:"par_root"},c.a.createElement("div",{className:"par_top"},c.a.createElement(V,{disabled:!n,value:l[13],onUpdate:s("13")})),c.a.createElement("div",{className:"par_second"},c.a.createElement(V,{disabled:!n,value:l[12],onUpdate:s("12")}),c.a.createElement(V,{disabled:!n,value:l[23],onUpdate:s("23")})),c.a.createElement("div",{className:"par_row_of_players"},c.a.createElement(w,null,a[0]),c.a.createElement(w,null,a[1]),c.a.createElement(w,null,a[2])),c.a.createElement("div",{className:"par_bottom"},c.a.createElement(V,{disabled:!n,value:l[123],onUpdate:s("123")})))},V=function(e){return c.a.createElement("input",{type:"number",disabled:!!e.disabled,className:"value_button",value:e.value,onChange:function(t){return e.onUpdate(parseInt(t.target.value))}})},w=function(e){return c.a.createElement("button",{className:"player_button"},e.children)},G=function(e){return c.a.createElement("div",{className:"coal_select_root"},c.a.createElement(L,e),c.a.createElement("div",null,"Its ".concat(O(e.currentTurn),"'s Turn to make an offer:")),c.a.createElement(B,{latestAcceptedOffer:S(e.offers)}),c.a.createElement(M,e))},M=function(e){var t=e.coalitionsValues,a=e.currentTurn,n=e.onGiveUp,r=function(e){switch(e){case l.P1:return["12","13","123"];case l.P2:return["12","23","123"];case l.P3:return["13","23","123"]}}(a);return c.a.createElement("div",{className:"coal_selections"},r.map((function(a,n){return c.a.createElement(x,{key:n,coalitionsValues:t,coalitionId:a,onCoalitionSelect:e.onCoalitionSelect})})),c.a.createElement("div",{className:"give_up_root"},c.a.createElement("p",null,"Can't offer anything better."),c.a.createElement("button",{onClick:n,className:"give_up_btn"},"Give up")))},x=function(e){var t=e.coalitionId,a=e.coalitionsValues,n=e.onCoalitionSelect,r=function(e){switch(e){case"12":return"Coalition of ".concat(O(l.P1)," and ").concat(O(l.P2));case"13":return"Coalition of ".concat(O(l.P1)," and ").concat(O(l.P3));case"23":return"Coalition of ".concat(O(l.P2)," and ").concat(O(l.P3));case"123":return"Coalition of ".concat(O(l.P1),", ").concat(O(l.P2)," and ").concat(O(l.P3))}}(e.coalitionId);return c.a.createElement("div",{className:"single_coal_selection"},c.a.createElement("p",null,"".concat(r)),c.a.createElement("p",null,"value: ".concat(a[t])),c.a.createElement("button",{onClick:function(){return n(t)}},"Select"))},B=function(e){var t=e.latestAcceptedOffer;return c.a.createElement("div",{className:"aggr"},c.a.createElement("p",null,"If nobody will accept any offers, The split will be As follows:",c.a.createElement("br",null),[l.P1,l.P2,l.P3].map((function(e,a){return c.a.createElement("span",{key:a,className:"aggr_split"},"".concat(e," will get:"),c.a.createElement("span",{className:"value"},"".concat(t.split[e])))}))))},J=a(17),K=function(e){var t=e.coalitionForOffer,a=e.coalitionsValues,r=e.onOfferSubmit,o=e.currentTurn,l=e.offers,s=Object(n.useState)({P1:0,P2:0,P3:0}),i=Object(J.a)(s,2),u=i[0],E=i[1],f=C(t),m=function(e){return function(n){var c=Object(d.a)({},u);c[e]=n>=0?n>a[t]?a[t]:n:0,E(c)}},p=function(){return!!l.find((function(e){return u.P1===e.split.P1&&u.P2===e.split.P2&&u.P3===e.split.P3&&"PROPOSED"===e[o]&&e.selectedCoalition===t}))};return c.a.createElement("div",{className:"offer_form_root"},c.a.createElement(L,e),c.a.createElement("form",{className:"offer_form",onSubmit:function(e){e.preventDefault(),r(u,t,o)}},f.map((function(e){return c.a.createElement(W,{maxForCoalition:a[t],value:u[e],player:e,onChange:m(e)})})),c.a.createElement("p",null,"Total input: ".concat(u.P1+u.P2+u.P3,", Expected input: ").concat(a[t])),c.a.createElement("input",{type:"submit",value:"Submit",disabled:u.P1+u.P2+u.P3!==a[t]||p()}),p()&&c.a.createElement("p",null,"This offer was already rejected")))},W=function(e){var t=e.player,a=e.value,n=e.onChange,r=e.maxForCoalition;return c.a.createElement("div",{className:"offer_input"},c.a.createElement("label",null,t," will get:"),c.a.createElement("input",{value:a||"",min:0,max:r,type:"number",onChange:function(e){n(parseInt(e.target.value||"0"))}}))},H=function(e){var t=e.onOfferRespond,a=e.offers[e.offers.length-1],n=function(e){return function(a){t(e,a),console.log("Clicked ".concat(e,",").concat(a," "))}};return c.a.createElement("div",{className:"ack_form_root"},c.a.createElement(L,e),c.a.createElement("div",{className:"ack_form"},[l.P1,l.P2,l.P3].map((function(e,t){return"NON_RELEVANT"!==(r=a[e])&&"PROPOSED"!==r&&c.a.createElement(q,{key:t,onClick:n(e),player:e,disabled:"TBD"!==a[e]});var r}))))},q=function(e){var t=e.player,a=e.onClick,n=e.disabled;return c.a.createElement("div",{className:"single_ack"},c.a.createElement("p",{className:"question"},"".concat(t,", What do you think about the offer?")),c.a.createElement("div",{className:"answer"},c.a.createElement("span",null,"Looks good!"),c.a.createElement("button",{className:"accept",onClick:function(){return a("ACCEPT")},disabled:n},"Accept")),c.a.createElement("div",{className:"answer"},c.a.createElement("span",null,"No way!"),c.a.createElement("button",{className:"reject",onClick:function(){return a("REJECT")},disabled:n},"Reject")))},Y=function(e){var t=e.offer;return c.a.createElement("li",null,c.a.createElement("span",null,"Values: P1: ".concat(t.split.P1,", P2: ").concat(t.split.P2,", P3: ").concat(t.split.P3)),c.a.createElement("span",null,"P1: ".concat(t[l.P1])),c.a.createElement("span",null,"P2: ".concat(t[l.P2])),c.a.createElement("span",null,"P3: ".concat(t[l.P3])))},$=function(e){var t=e.offers;return c.a.createElement("ul",{className:"list_offers"},t.map((function(e){return c.a.createElement(Y,{offer:e})})))},z=function(e){var t=S(e.offers);return c.a.createElement("div",null,"The game was finished and we have a coalition !!",E.map((function(e){return c.a.createElement("p",null,"".concat(e," gets "),c.a.createElement("span",{className:"finish_value"},"".concat(t.split[e])))})),c.a.createElement($,e))},Q=[{12:50,13:70,23:90,123:110},{12:40,13:70,23:80,123:90},{12:50,13:70,23:20,123:80},{12:15,13:25,23:30,123:100},{12:10,13:70,23:90,123:92},{12:56,13:70,23:88,123:100},{12:25,13:30,23:40,123:70}],X=function(e){return c.a.createElement("div",{className:"setup_root"},c.a.createElement("h2",null,"You can edit the values of the coalitions:"),c.a.createElement(L,Object.assign({},e,{coalitionsValues:e.coalitionsValues,editable:!0})),c.a.createElement("h2",null,"Or you can select one of the preset games:"),c.a.createElement("div",{className:"preset_btns"},Q.map((function(t,a){return c.a.createElement("button",{onClick:function(){return a=t,void e.onUpdateCoalition(a);var a},className:"game_btn",title:JSON.stringify(t),key:a},"Game ".concat(a+1))}))))},Z={P1:"NON_RELEVANT",P2:"ACCEPTED",P3:"ACCEPTED",actor:l.P2,selectedCoalition:"23",split:{P1:0,P2:25,P3:25}},ee=Object(y.b)((function(e){return{screen:e.screen,coalitionsValues:e.coalitionsValues,players:e.players,currentTurn:e.currentTurn,coalitionForOffer:e.coalitionForOffer,offers:e.offers}}),(function(e){return{onUndo:function(){return e({type:u.UNDO,payload:{}})},onCoalitionSelect:function(t){return e(function(e){return{type:u.SELECT_COALITION,payload:{selectedCoalition:e}}}(t))},onGameRestart:function(){return e({type:u.RESTART_GAME,payload:{}})},onGameStart:function(){return e((t=Z,{type:u.START_GAME,payload:{offer:t}}));var t},onOfferSubmit:function(t,a,n){return e(function(e,t,a){return{type:u.SUBMIT_OFFER,payload:{actor:a,selectedCoalition:t,split:e}}}(t,a,n))},onOfferRespond:function(t,a){return e((n=t,c=a,{type:u.RESPOND_OFFER,payload:{actor:n,status:c}}));var n,c},onGiveUp:function(){return e({type:u.GIVE_UP,payload:{}})},onSetupClick:function(){return e({type:u.SETUP,payload:{}})},onUpdateCoalition:function(t){return e(function(e){return{type:u.UPDATE_COALITION_VALUES,payload:{c:e}}}(t))}}}))((function(e){var t=e.onGameStart,a=e.screen,n=e.onCoalitionSelect,r=e.onUndo,o=e.onSetupClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement(I,{onStartGame:t,onIntroClick:e.onGameRestart,screen:a,onUndo:r,onSetupClick:o}),c.a.createElement(D,{className:"app"},"SETUP"===a&&c.a.createElement(X,e),"INTRO"===a&&c.a.createElement(F,null),"SELECT_COAL"===a&&c.a.createElement(G,Object.assign({},e,{onCoalitionSelect:n})),"OFFER"===a&&c.a.createElement(K,e),"ACK"===a&&c.a.createElement(H,e),"FINISHED"===a&&c.a.createElement(z,e)))})),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=Object(m.composeWithDevTools)({});return Object(s.createStore)(h,e,t(Object(s.applyMiddleware)(i.a,R())))}(localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):f);te.subscribe((function(){return localStorage["redux-store"]=JSON.stringify(te.getState())})),o.a.render(c.a.createElement(y.a,{store:te},c.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.35bbf257.chunk.js.map