(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{27:function(A,e,C){},37:function(A,e,C){"use strict";C.r(e);for(var Q=C(0),g=C.n(Q),c=C(19),t=C.n(c),B=(C(27),C(9)),n=C(8),o=C(4),r=10,I=10,u=C(1),s=function(A){for(var e=[],C=0;C<I;C++)e.push("");return e},w=[],f=0;f<r;f++)w.push(s());for(var E=[],a=[],i=0;i<r;i++)E.push([""]),a.push(0);var v={boardCells:w,forecastCells:E,forecastCooldowns:a,selectedItem:"",selectedItemIndex:0,damage:0,step:0,interval:null,score:0},l=g.a.createContext();function D(A){var e=A.children,C=Object(Q.useState)(v),g=Object(o.a)(C,2),c=g[0],t=g[1];return Object(u.jsx)(l.Provider,{value:[c,t],children:e})}function d(A){var e=Object(Q.useContext)(l)[0];return Object(u.jsx)("div",{className:"header",onClick:A.startGame,children:Object(u.jsxs)("h1",{children:["Damage: ",e.damage,"; Score: ",e.score]})})}var h={upArrow:"data:image/png;base64,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AXDTjJ+VhS8/VlcAMDri2RPPoDZrbQDcNuuX5alVD9YVAIyueAbFs6itWhkA98z9bZn14l11BQBjI55F8Uxqo9YFwIPzLy/Tlt5SVwAwtuKZFM+mthl3oqe+3XivbV1a38ptUJfsV/f+t/oW0FW3/HRRfYuhOjlzx40b1//nSbEfe1+fyf/5P/3X+lbztSoAGJy1W54XAJBABMDf/NXf1hWZtf6PAQIAwycAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAiZw4caK+RXYCAAASEgAAiYwbN66+RXYCAAASEgAAkJAAAICEBAAAJCQAACAhAQCQiK8DwEkCAAASEgAAifg6AJwkAAAgIQEAAAkJAABISAAAQEICAAASEgAAifg6AJwkAAAS8ccAOUkAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAkIivA8BJAgAgEV8HgJMEAAAkJAAAICEBAAAJCQAASGjcCb8llJ61W573m4Mgib/5q7+tb5GZAACAhPwSAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEinlP8HjSooMg91Y2sAAAAASUVORK5CYII=",rightArrow:"data:image/png;base64,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",downArrow:C.p+"static/media/downArrow.8bccc270.png",leftArrow:"data:image/png;base64,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",crossBlue:C.p+"static/media/crossBlue.57dc105e.png",crossRed:C.p+"static/media/crossRed.3b422763.png",bomb:C.p+"static/media/bomb.357a087a.png"};function b(A){var e=Object(Q.useContext)(l)[0],C=A.value,g="forecast"===A.className&&e.forecastCooldowns[A.rowIndex]>e.step,c=function(Q){return!Q&&("forecast"===A.className?A.rowIndex!==e.selectedItemIndex:""===C||e.selectedItem.includes("Blue"))}(g),t=A.rowIndex+1,B=t+1,n=A.startingColumn+A.columnIndex,o=n+1,r={gridArea:"".concat(t," / ").concat(n," / ").concat(B," / ").concat(o)},I="forecast"===A.className&&A.rowIndex===e.selectedItemIndex,s="";return s="number"===typeof C||""===C?C:Object(u.jsx)("img",{src:h[C],alt:C}),Object(u.jsx)("div",{className:"cell cell-".concat(A.className).concat(c?" clickable":"").concat(I?" selected":"").concat(g?" greyed-out":""),onClick:function(){if(!c)return console.log(C,typeof C),void console.log(e.selectedItem,e.selectedItem.includes("Blue"));A.cellClick(A.rowIndex,A.columnIndex)},style:r,children:Object(u.jsx)("div",{className:"cell-value",children:s})})}function J(A){var e=A.cells,C=function(e,C){if("object"===typeof e)return e.map((function(e,Q){return Object(u.jsx)(b,{rowIndex:C,columnIndex:Q,value:e,setCell:A.setCell,className:A.className,startingColumn:A.startingColumn,cellClick:A.cellClick},"cell-".concat(Q,",").concat(C))}));console.log("non-object")};return void 0===e?(console.log("cells undefined"),void console.log(A.className)):"object"===typeof e[0]?e.map((function(A,e){return C(A,e)})):C(e,0)}var P=C(18),j={upArrow:1,rightArrow:1,downArrow:1,leftArrow:1,crossBlue:1,crossRed:1,bomb:1},x=function(){return k(j)};function k(A){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(0===Object.keys(A).length)return null;var C=L(A),Q=Math.floor(Math.random()*C.length),g=C[Q];return e||"object"!==typeof g?g:k(g)}function L(A){if(Array.isArray(A))return A;var e=[];for(var C in A)F(e,C,A[C]);return e}function F(A,e,C){for(var Q=0;Q<C;Q++)A.push(e);return A}var X=C(38),m=function(A,e,C,Q,g,c){var t=[[g,c]],B=[];B.push(g),B.push(c);for(var n={up:"down",down:"up",right:"left",left:"right"}[Q],r=0;r<12&&(B=H(B,Q));r++)if(t.push([B[0],B[1]]),A[B[0]][B[1]]==="".concat(n,"Arrow")){var I=O(t,A,e),u=Object(o.a)(I,2);A=u[0],e=u[1],C=!1;break}return[A,e,C]},H=function(A,e){switch(e){case"up":A[0]--;break;case"right":A[1]++;break;case"down":A[0]++;break;case"left":A[1]--}return A[0]<0||A[1]<0||A[0]>=r||A[1]>=I?null:A};function O(A,e,C){var Q,g=Object(B.a)(A);try{for(g.s();!(Q=g.n()).done;){var c=Q.value,t=S(e,c[0],c[1],C),n=Object(o.a)(t,2);e=n[0],C=n[1]}}catch(r){g.e(r)}finally{g.f()}return[e,C]}var S=function(A,e,C,Q){var g=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if("number"!==typeof Q)throw"No number!";var c=A[e][C];return"crossRed"!==c||g?"bomb"!==c||g?("number"===typeof c&&(Q+=c),A[e][C]="",[A,Q]):N(A,e,C,Q):M(A,e,C,Q)},M=function(A,e,C,Q){if("number"!==typeof Q)throw"No number!";var g=S(A,e,C,Q,!0),c=Object(o.a)(g,2);A=c[0],Q=c[1];var t,n=[[e+1,C],[e-1,C],[e,C+1],[e,C-1]].filter((function(A){return A[0]>=0&&A[1]>=0&&A[0]<r&&A[1]<I})),u=Object(B.a)(n);try{for(u.s();!(t=u.n()).done;){var s=t.value,w=S(A,s[0],s[1],Q),f=Object(o.a)(w,2);A=f[0],Q=f[1]}}catch(E){u.e(E)}finally{u.f()}return[A,Q]},N=function(A,e,C,Q){if("number"!==typeof Q)throw"No number!";var g=S(A,e,C,Q,!0);A=g[0],Q=g[1];var c,t=Object(B.a)([e-1,e,e+1].filter((function(A){return A>=0&&A<r})));try{for(t.s();!(c=t.n()).done;){var n=c.value,o=y(A,Q,e,C,n);A=o[0],Q=o[1]}}catch(I){t.e(I)}finally{t.f()}return[A,Q]},y=function(A,e,C,Q,g){if("number"!==typeof e)throw"No number!";var c,t=Object(B.a)([Q-1,Q,Q+1].filter((function(A){return A>=0&&A<I&&(C!==g||Q!==A)})));try{for(t.s();!(c=t.n()).done;){var n=c.value,o=S(A,g,n,e);A=o[0],e=o[1]}}catch(r){t.e(r)}finally{t.f()}return[A,e]};function G(A){var e=Object(Q.useContext)(l),C=Object(o.a)(e,2),g=C[0],c=C[1];return Object(u.jsx)(J,{cells:g.boardCells,className:"board",startingColumn:1,cellClick:function(A,e){var C=g.boardCells,Q=g.forecastCells,t=g.selectedItemIndex,B=g.score,r=function(A,e,C,Q,g){var c=!0;if("crossBlue"===A)return M(e,C,Q,g);if(A.includes("Arrow")){var t=A.slice(0,A.length-5),B=m(e,g,c,t,C,Q);e=B[0],g=B[1],c=B[2]}return c&&(e[C][Q]=A),[e,g]}(g.selectedItem,C,A,e,B),I=Object(o.a)(r,2),u=I[0],s=I[1],w=function(A,e){return[].concat(Object(P.a)(A.slice(0,e)),Object(P.a)(A.slice(e+1)),[[x()]])}(Q,t),f=g.forecastCooldowns;t>0&&(f[t]=g.step+5*t),c(Object(n.a)(Object(n.a)({},g),{},{boardCells:u,forecastCells:w,score:s,selectedItemIndex:0,selectedItem:w[0][0],forecastCooldowns:f}))}})}function p(A){var e=Object(Q.useContext)(l),C=Object(o.a)(e,2),g=C[0],c=C[1];return Object(u.jsx)(J,{cells:g.forecastCells,className:"forecast",startingColumn:12,cellClick:function(A){c(Object(n.a)(Object(n.a)({},g),{},{selectedItemIndex:A,selectedItem:g.forecastCells[A][0]}))}})}function U(A){var e={gridTemplateColumns:"repeat(".concat(12,", 1fr)")};return Object(u.jsxs)("div",{className:"game-grid",style:e,children:[Object(u.jsx)(G,{}),Object(u.jsx)(p,{})]})}function z(A){return Object(u.jsx)("div",{children:"Game Over!"})}function K(){return Object(u.jsx)("div",{className:"footer",children:"Footer"})}function V(A){var e=Object(Q.useContext)(l),C=Object(o.a)(e,2),g=C[0],c=C[1],t=function(){for(var A=[],e=0;e<r;e++)A.push([x()]);return A},s=function(){c((function(A){for(var e=w(A),C=0,Q=A.boardCells.map((function(A){return A.map((function(A){return"number"===typeof A?A+1:A}))})),g=0;g<r;g++)C=E(Q,g,C,e);var c=A.damage+C,t=c>999;return t&&(!function(A,e){var C={name:A,score:e,id:Object(X.a)()},Q={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(C)};fetch("http://localhost:3000/high_scores_db",Q)}("Jim",A.score),clearInterval(A.interval)),Object(n.a)(Object(n.a)({},A),{},{damage:c,boardCells:Q,step:A.step+1,gameOver:t})}))},w=function(A){if(A.step%10!==0)return null;for(var e=[],C=0;C<r;C++)f(e,C);return k(e,!0)},f=function(A,e){for(var C=g.boardCells[e],Q=0;Q<I;Q++){""===C[Q]&&A.push([e,Q])}},E=function(A,e,C,Q){for(var g=0;g<I;g++){var c=A[e][g];C=a(c,A,e,g,C,Q)}return C},a=function(A,e,C,Q,g,c){return"number"===typeof A&&A>9?(e[C][Q]=9,g+i(C,Q,e,g)):(c&&c[0]===C&&c[1]===Q&&(e[C][Q]=1),g)},i=function(A,e,C,Q){var g,c=[[A,e+1],[A,e-1],[A+1,e],[A-1,e]].filter((function(A){return A[0]>=0&&A[1]>=0&&A[0]<r&&A[1]<I})),t=Object(B.a)(c);try{for(t.s();!(g=t.n()).done;){var n=g.value;Q=v(C,n,Q)}}catch(o){t.e(o)}finally{t.f()}return Q},v=function(A,e,C){var Q=A[e[0]][e[1]];return""===Q?(A[e[0]][e[1]]=1,0):("number"===typeof Q&&(Q>=9?C++:A[e[0]][e[1]]+=1),C)};return Object(u.jsxs)("div",{className:"game",children:[Object(u.jsx)(d,{startGame:function(){var A=t(),e=setInterval(s,1500);c(Object(n.a)(Object(n.a)({},g),{},{forecastCells:A,selectedItem:A[0][0],interval:e}))}}),g.gameOver?Object(u.jsx)(z,{}):Object(u.jsx)(U,{}),Object(u.jsx)(K,{})]})}var q=C(20),T=C(2);function R(A){return Object(u.jsx)("div",{children:"Home"})}function Y(A){var e=Object(Q.useState)([]),C=Object(o.a)(e,2),g=C[0],c=C[1];Object(Q.useEffect)((function(){fetch("http://localhost:3000/high_scores_db").then((function(A){return A.json()})).then((function(A){c(A)}))}),[]);return Object(u.jsxs)("div",{children:[g.map((function(A){return Object(u.jsxs)("div",{children:[A.name,": ",A.score]})})),Object(u.jsx)("button",{onClick:function(){},children:"Click Me"})]})}function W(A){return Object(u.jsx)(D,{children:Object(u.jsx)(V,{})})}var Z=function(A){return Object(u.jsx)(q.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(T.a,{exact:!0,path:"/",component:R}),Object(u.jsx)(T.a,{exact:!0,path:"/game",component:W}),Object(u.jsx)(T.a,{exact:!0,path:"/high-scores",component:Y})]})})},_=function(A){A&&A instanceof Function&&C.e(3).then(C.bind(null,39)).then((function(e){var C=e.getCLS,Q=e.getFID,g=e.getFCP,c=e.getLCP,t=e.getTTFB;C(A),Q(A),g(A),c(A),t(A)}))};t.a.render(Object(u.jsx)(g.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),_()}},[[37,1,2]]]);
//# sourceMappingURL=main.a0fcd293.chunk.js.map