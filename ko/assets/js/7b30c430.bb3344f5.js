"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||i;return n?r.createElement(u,a(a({ref:t},c),{},{components:n})):r.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i=n.p+"assets/images/zero_shot-1af9e1cb88412f9fdefa3b07b67c4193.png",a=n.p+"assets/images/zero_shot_example-89065990663d4ef044011844ff77f9af.png",s={sidebar_position:4},p="\ud83d\udfe2 \uc81c\ub85c\uc0f7(zero shot) \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",l={unversionedId:"intermediate/zero_shot_cot",id:"intermediate/zero_shot_cot",title:"\ud83d\udfe2 \uc81c\ub85c\uc0f7(zero shot) \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",description:'\uc81c\ub85c\uc0f7 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305(\uc81c\ub85c\uc0f7 COT)\ub294 \uc544\uc8fc \uac04\ub2e8\ud55c \uc81c\ub85c\uc0f7 \ud504\ub86c\ud504\ud305 \uae30\uc220\uc774\uba74\uc11c CoT \ud504\ub86c\ud504\ud305(@wei2022chain)\uc758 \ud6c4\uc18d \uae30\uc220\uc774\ub2e4. ""Let\'s think step',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/intermediate/zero_shot_cot.md",sourceDirName:"intermediate",slug:"/intermediate/zero_shot_cot",permalink:"/ko/docs/intermediate/zero_shot_cot",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intermediate/zero_shot_cot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",permalink:"/ko/docs/intermediate/chain_of_thought"},next:{title:"\ud83d\udfe1 \uc790\uae30 \uc77c\uad00\uc131",permalink:"/ko/docs/intermediate/self_consistency"}},c={},d=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"\uc2e4\ud328",id:"\uc2e4\ud328",level:4},{value:"\uc131\uacf5",id:"\uc131\uacf5",level:4},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:2},{value:"\uc120\ud0dd\uc9c0 \uc904\uc774\uae30",id:"\uc120\ud0dd\uc9c0-\uc904\uc774\uae30",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:2}],m={toc:d},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-\uc81c\ub85c\uc0f7zero-shot-\uc0ac\uace0-\uc0ac\uc2ac-\ud504\ub86c\ud504\ud305"},"\ud83d\udfe2 \uc81c\ub85c\uc0f7(zero shot) \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305"),(0,o.kt)("p",null,"\uc81c\ub85c\uc0f7 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305(\uc81c\ub85c\uc0f7 COT)\ub294 \uc544\uc8fc \uac04\ub2e8\ud55c \uc81c\ub85c\uc0f7 \ud504\ub86c\ud504\ud305 \uae30\uc220\uc774\uba74\uc11c CoT \ud504\ub86c\ud504\ud305",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),'\uc758 \ud6c4\uc18d \uae30\uc220\uc774\ub2e4. ""',(0,o.kt)("strong",{parentName:"p"},"Let's think step\nby step."),'""\uc744 \uc9c8\ubb38\uc758 \ub9c8\uc9c0\ub9c9\uc5d0 \ub123\uac8c \ub418\uba74 LLM\uc740 \uc9c8\ubb38\uc5d0 \ub300\ud55c \uc0ac\uace0 \uc0ac\uc2ac\uc744 \uc0dd\uc131\ud558\uac8c \ub418\uace0 \uc774 \uc0ac\uace0 \uc0ac\uc2ac\uc744 \uc774\uc6a9\ud574\uc11c \ub354 \uc815\ud655\ud55c \ub2f5\ubcc0\uc744 \ucd94\ucd9c\ud574\ub0bc \uc218 \uc788\ub2e4.  '),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i,style:{width:"500px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"\uc81c\ub85c\uc0f7(Zero Shot) CoT (Kojima et al.)"),(0,o.kt)("p",null,"\uae30\uc220\uc801\uc73c\ub85c \uc81c\ub85c\uc0f7 COT \uacfc\uc815\uc740 \ub450\uac00\uc9c0\uc758 \uac1c\ubcc4\uc801\uc778 \ud504\ub86c\ud504\ud2b8->\ub2f5\ubcc0\uc73c\ub85c \uc774\ub8e8\uc5b4\uc838\uc788\ub2e4.\n\uc544\ub798\uc758 \uc774\ubbf8\uc9c0\ub97c \ubcf4\uba74 \uc67c\ucabd \uc704\uc758 \uc0c1\uc790\uc5d0\uc11c\ub294 \uc0ac\uace0 \uc0ac\uc2ac\uc744 \uc0dd\uc131\ud558\uace0 \uc624\ub978\ucabd \uc0c1\uc790\uc5d0\uc11c\ub294 \uccab\ubc88\uc9f8 \ud504\ub86c\ud504\ud2b8\uc5d0\uc11c \ub098\uc628 \ub2f5\ubcc0\uc744 \uc774\uc6a9\ud574\uc11c \ub2f5\ubcc0\uc744 \ucd94\ucd9c\ud55c\ub2e4.\n\uadf8\ub798\uc11c \ub450\ubc88\uc9f8 \ud504\ub86c\ud504\ud2b8\ub294 \ud558\ub098\uc758 ",(0,o.kt)("em",{parentName:"p"},"\uc790\uae30 \uac15\ud654")," \ud504\ub86c\ud504\ud2b8\uac00 \ub41c\ub2e4."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:a,style:{width:"500px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"\uc804\uccb4 \uc81c\ub85c\uc0f7(Zero Shot) CoT \uacfc\uc815 (Kojima et al.)"),(0,o.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,o.kt)("p",null,"\uc5ec\uae30 \ucd94\ub860\uc5d0 \ub300\ud55c \uba87\uac00\uc9c0 \uc608\uc2dc\uac00 \uc788\uc2b5\ub2c8\ub2e4.\n\uccab\ubc88\uc9f8 \ub370\ubaa8\ub294 GPT-3(davinci-003)\uc774 \uac04\ub2e8\ud55c \uc218\ud559 \ubb38\uc81c\ub97c \ud478\ub294\ub370 \uc2e4\ud328\ud558\ub294 \uac83\uc744 \ubcf4\uc5ec\uc8fc\uace0\n\ub450\ubc88\uc9f8 \ub370\ubaa8\ub294 \uc81c\ub85c\uc0f7 COT \ud504\ub86c\ud504\ud2b8\ub97c \uc774\uc694\ud574\uc11c \uc131\uacf5\uc801\uc73c\ub85c \ubb38\uc81c\ub97c \ud478\ub294 \uac83\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc758 OpenAI API \ud0a4\ub97c \ub123\uc5b4\uc11c \uc608\uc2dc\ub4e4\uc744 \uc2e4\ud589\uc2dc\ucf1c\ubcf4\uc138\uc694.\n\uc81c\ub85c\uc0f7 COT\uac00 \uae30\uc874\uc758 COT \ud504\ub86c\ud504\ud2b8\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \uac04\ub2e8\ud558\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("h4",{id:"\uc2e4\ud328"},"\uc2e4\ud328"),(0,o.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?","initial-response":"John has 8 pears.","max-tokens":"256","box-rows":"3","model-temp":"0.7","top-p":"1"}),(0,o.kt)("h4",{id:"\uc131\uacf5"},"\uc131\uacf5"),(0,o.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?\\n\\nLet's think step by step.","initial-response":"John starts with 5 pears. He eats 2 pears, leaving him with 3 pears. He buys 5 more pears, giving him a total of 8 pears. He gives 3 pears to his friend, leaving him with only 5 pears.","max-tokens":"256","box-rows":"5","model-temp":"0.7","top-p":"1"}),(0,o.kt)("h2",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,o.kt)("p",null,"\uc81c\ub85c\uc0f7 COT \ub610\ud55c \uc0b0\uc218, \uc0c1\uc2dd \ubc0f \uc0c1\uc9d5\uc801 \ucd94\ub860 \uc791\uc5c5\uc5d0\uc11c \ub354 \ub098\uc740 \uacb0\uacfc\ub97c \ub0b4\ub294\ub370 \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \ub2f9\uc5f0\ud558\uac8c\ub3c4 \uae30\uc874\uc758 COT\ubcf4\ub2e4\ub294 \ub35c \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4.\n\uc81c\ub85c\uc0f7 COT\ub294 COT \ud504\ub86c\ud504\ud2b8\uc758 \ud4e8\uc0f7 \uc608\uc81c\ub97c \uc5bb\uae30\uac00 \uc5b4\ub824\uc6b8 \ub54c \uac00\uc7a5 \ud6a8\uacfc\uc801\uc778 \ub300\uc548\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4. "),(0,o.kt)("h2",{id:"\uc120\ud0dd\uc9c0-\uc904\uc774\uae30"},"\uc120\ud0dd\uc9c0 \uc904\uc774\uae30"),(0,o.kt)("p",null,'Kojima \ub4f1, \ub9ce\uc740 \uc81c\ub85c\uc0f7 COT \ud504\ub86c\ud504\ud2b8 \uc5f0\uad6c\uc5d0 \ub530\ub974\uba74\n"Let\u2019s solve this problem by splitting it into steps." or "Let\u2019s think about this logically."\ub4f1 \ub2e4\uc591\ud55c \uc5b4\uad6c\ub4e4\uc774 \uc788\uc9c0\ub9cc\n"Let\'s think step by step"\uac00 \uac00\uc7a5 \ud6a8\uacfc\uc801\uc774\uc600\uc2b5\ub2c8\ub2e4. '),(0,o.kt)("h2",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,o.kt)("p",null,"\ucd94\ucd9c \ub2e8\uacc4\ub294 \uc885\uc885 \uc791\uc5c5\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc57c\uc838\uc57c \ud558\ubbc0\ub85c \uc81c\ub85c\uc0f7 COT(Zero-Shot-CoT)\uc744 \ucc98\uc74c\uc5d0 \ubcf4\uc774\ub294 \uac83\ubcf4\ub2e4 \ub354 \ud2b9\uc218\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc77c\ub840\ub85c \uc800\ub294 \uc0dd\uc131 \uc791\uc5c5\uc5d0\uc11c \ub2f5\ubcc0\uc758 \uae38\uc774\ub97c \ub298\ub9ac\ub294 \ub370\uc5d0\uc11c \uc81c\ub85c\uc0f7 COT\uac00 \ud6a8\uacfc\uc801\uc774\ub77c\ub294 \uac83\uc744 \ubc1c\uacac\ud588\uc2b5\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4\uc11c, \ub2f5\ubcc0\uc758 \uae38\uc774\ub97c \ub298\ub9ac\uae30 \uc704\ud574\uc11c\n\ub2e8\uc21c\ud788 ",(0,o.kt)("inlineCode",{parentName:"p"},"Write a story about a frog and a mushroom who become friends."),"\ubcf4\ub2e4\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Let's think step by step."),"\ub97c \ub9d0\ubbf8\uc5d0 \ucd94\uac00\ud558\ub294 \uac83\uc744 \uace0\ub824\ud574\ubcfc \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);