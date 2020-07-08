import{S as e,i as t,s as n,e as a,t as r,j as o,c as s,a as i,b as c,d as h,l,o as u,f as d,g as f,h as p,n as y}from"./client.b71557a8.js";function g(e){let t,n,g,m,b,v,w,R,E,I,M,k,B,x,j,A,L,P,T,q,G,W,D,H,S,z,C,O,N,V,_,F,K,U,J,Q,X,Y,Z,$,ee,te,ne,ae,re,oe,se,ie,ce,he,le,ue,de,fe,pe,ye,ge,me,be,ve,we,Re,Ee,Ie,Me,ke,Be,xe="type Guitarist struct{ Name string } //object\n\nfunc (g Guitarist) Run() { fmt.Println(g) } // method\n\ntype Musician interface{ Run() } //interface that uses the method\n",je="type Musician interface{ Run() } //interface that uses the method\n",Ae="type Musicman interface{ Musician }\n",Le='\n1. type Guitarist struct{ Name string } //object\n\n2. func (g Guitarist) Run() { fmt.Println(g) } // method\n\n3. func Running(m Musicman) { fmt.Println("Musician works") } // function\n\n4. type Musician interface{ Run() } //interface that has the method\n\n5. type Musicman interface{ Musician } //interface that is embedded\n\n';return{c(){t=a("h3"),n=r("I Love Go because of it's simplicity."),g=o(),m=a("br"),b=o(),v=a("div"),w=r("I Love Go because of it's simplicity.\r\n"),R=a("p"),E=r("What does this mean? I am referring to it's api and it's ability to uncouple code.\r\nWhy is this important? Many developers are bound to the constraints\r\nto their language and tech stack.  The point is so that when your \r\nproject gets bigger you are not constrained to what you have already\r\ncreated.  \r\n"),I=a("br"),M=r("\r\nAn example of what I am referring to."),k=o(),B=a("pre"),x=a("code"),j=r(xe),A=r("\r\n\r\n\r\nThe three bits of code that are stated are pretty simple.\r\nbut they are the building blocks to uncoupling code.\r\n"),L=a("ul"),P=a("li"),T=r("1. struct"),q=o(),G=a("li"),W=r("2. method"),D=o(),H=a("li"),S=r("3. interface"),z=r("\r\n\r\n\r\nLets say you are building a Service on Musican.\r\n"),C=a("pre"),O=a("code"),N=r(je),V=r("\r\nMeaning...."),_=a("br"),F=r("\r\nWe used the interface Musician to allow for any struct with run() to be passed in.\r\nA lot of poeple miss this point when seeing the word interface because of it's\r\ndifferent meaning in other languages.  \r\n\r\nThis allows for not having to think about your data or concrete data type.\r\nSomething many languages you are tied to.\r\n\r\n"),K=a("br"),U=r("\r\nAnother thing a lot of people miss from other languages is that you can do embedding \r\non this interface type.\r\n\r\n"),J=a("pre"),Q=a("code"),X=r(Ae),Y=r('\r\n\r\nBy doing so you are attempting to turn an interface "type" into a value.\r\nA value that initally does not have a value but carries methods.\r\n\r\n'),Z=a("br"),$=a("br"),ee=o(),te=a("p"),ne=r("Why would you want to do such a thing?"),ae=o(),re=a("hr"),oe=o(),se=a("br"),ie=r("\r\n\r\nReally it is more of the later open decision to extend a type.\r\nMeaning if you have a lot of methods tied up to this type and so\r\nit is bound by the adding of methods, then you need a way to utilize \r\nthis type but still not couple it to a hierachy. \r\n"),ce=a("pre"),he=a("code"),le=r(Le),ue=r("\r\n5. is just a function that takes in the embedded interface type.\r\nThe reason I added this was to demonstrate the use of embedded networkInterface types.\r\n"),de=a("br"),fe=o(),pe=a("br"),ye=r("\r\n3. is utilizing the embedded interface as a parameter. \r\n"),ge=a("br"),me=o(),be=a("br"),ve=r("\r\nHere is a working "),we=a("a"),Re=r("example"),Ee=r(" of the code. \r\n\r\n"),Ie=a("br"),Me=o(),ke=a("hr"),Be=r("\r\nAn abstract class will only get you so far in uncoupling code.  Mainly because it is an object\r\nand it becomes coupled when you want to start or change instances of it.  It also becomes \r\nheavy when you attempt to remove or add properties/methods and create objects of it.\r\nThis is why I personally love go.  It really shines in a future uncoupling sense. \r\nI hope people who read this can get a good idea of the importance of uncoupling code."),this.h()},l(e){t=s(e,"H3",{style:!0});var a=i(t);n=c(a,"I Love Go because of it's simplicity."),a.forEach(h),g=l(e),m=s(e,"BR",{}),b=l(e),v=s(e,"DIV",{class:!0});var r=i(v);w=c(r,"I Love Go because of it's simplicity.\r\n"),R=s(r,"P",{});var o=i(R);E=c(o,"What does this mean? I am referring to it's api and it's ability to uncouple code.\r\nWhy is this important? Many developers are bound to the constraints\r\nto their language and tech stack.  The point is so that when your \r\nproject gets bigger you are not constrained to what you have already\r\ncreated.  \r\n"),I=s(o,"BR",{}),M=c(o,"\r\nAn example of what I am referring to."),o.forEach(h),k=l(r),B=s(r,"PRE",{class:!0});var u=i(B);x=s(u,"CODE",{class:!0});var d=i(x);j=c(d,xe),d.forEach(h),u.forEach(h),A=c(r,"\r\n\r\n\r\nThe three bits of code that are stated are pretty simple.\r\nbut they are the building blocks to uncoupling code.\r\n"),L=s(r,"UL",{});var f=i(L);P=s(f,"LI",{});var p=i(P);T=c(p,"1. struct"),p.forEach(h),q=l(f),G=s(f,"LI",{});var y=i(G);W=c(y,"2. method"),y.forEach(h),D=l(f),H=s(f,"LI",{});var Pe=i(H);S=c(Pe,"3. interface"),Pe.forEach(h),f.forEach(h),z=c(r,"\r\n\r\n\r\nLets say you are building a Service on Musican.\r\n"),C=s(r,"PRE",{class:!0});var Te=i(C);O=s(Te,"CODE",{class:!0});var qe=i(O);N=c(qe,je),qe.forEach(h),Te.forEach(h),V=c(r,"\r\nMeaning...."),_=s(r,"BR",{}),F=c(r,"\r\nWe used the interface Musician to allow for any struct with run() to be passed in.\r\nA lot of poeple miss this point when seeing the word interface because of it's\r\ndifferent meaning in other languages.  \r\n\r\nThis allows for not having to think about your data or concrete data type.\r\nSomething many languages you are tied to.\r\n\r\n"),K=s(r,"BR",{}),U=c(r,"\r\nAnother thing a lot of people miss from other languages is that you can do embedding \r\non this interface type.\r\n\r\n"),J=s(r,"PRE",{class:!0});var Ge=i(J);Q=s(Ge,"CODE",{class:!0});var We=i(Q);X=c(We,Ae),We.forEach(h),Ge.forEach(h),Y=c(r,'\r\n\r\nBy doing so you are attempting to turn an interface "type" into a value.\r\nA value that initally does not have a value but carries methods.\r\n\r\n'),Z=s(r,"BR",{}),$=s(r,"BR",{}),ee=l(r),te=s(r,"P",{style:!0});var De=i(te);ne=c(De,"Why would you want to do such a thing?"),De.forEach(h),ae=l(r),re=s(r,"HR",{}),oe=l(r),se=s(r,"BR",{}),ie=c(r,"\r\n\r\nReally it is more of the later open decision to extend a type.\r\nMeaning if you have a lot of methods tied up to this type and so\r\nit is bound by the adding of methods, then you need a way to utilize \r\nthis type but still not couple it to a hierachy. \r\n"),ce=s(r,"PRE",{class:!0});var He=i(ce);he=s(He,"CODE",{class:!0});var Se=i(he);le=c(Se,Le),Se.forEach(h),He.forEach(h),ue=c(r,"\r\n5. is just a function that takes in the embedded interface type.\r\nThe reason I added this was to demonstrate the use of embedded networkInterface types.\r\n"),de=s(r,"BR",{}),fe=l(r),pe=s(r,"BR",{}),ye=c(r,"\r\n3. is utilizing the embedded interface as a parameter. \r\n"),ge=s(r,"BR",{}),me=l(r),be=s(r,"BR",{}),ve=c(r,"\r\nHere is a working "),we=s(r,"A",{style:!0,href:!0,target:!0});var ze=i(we);Re=c(ze,"example"),ze.forEach(h),Ee=c(r," of the code. \r\n\r\n"),Ie=s(r,"BR",{}),Me=l(r),ke=s(r,"HR",{}),Be=c(r,"\r\nAn abstract class will only get you so far in uncoupling code.  Mainly because it is an object\r\nand it becomes coupled when you want to start or change instances of it.  It also becomes \r\nheavy when you attempt to remove or add properties/methods and create objects of it.\r\nThis is why I personally love go.  It really shines in a future uncoupling sense. \r\nI hope people who read this can get a good idea of the importance of uncoupling code."),r.forEach(h),this.h()},h(){u(t,"text-decoration","underline"),d(x,"class","svelte-106qo07"),d(B,"class","svelte-106qo07"),d(O,"class","svelte-106qo07"),d(C,"class","svelte-106qo07"),d(Q,"class","svelte-106qo07"),d(J,"class","svelte-106qo07"),u(te,"color","#95e152"),u(te,"text-shadow","0 0 3px #000000, 0 0 5px #f0f0f0"),d(he,"class","svelte-106qo07"),d(ce,"class","svelte-106qo07"),u(we,"color","#f9845b"),d(we,"href","https://play.golang.org/p/Fs_PKx1mN6V"),d(we,"target","_blank"),d(v,"class","body svelte-106qo07")},m(e,a){f(e,t,a),p(t,n),f(e,g,a),f(e,m,a),f(e,b,a),f(e,v,a),p(v,w),p(v,R),p(R,E),p(R,I),p(R,M),p(v,k),p(v,B),p(B,x),p(x,j),p(v,A),p(v,L),p(L,P),p(P,T),p(L,q),p(L,G),p(G,W),p(L,D),p(L,H),p(H,S),p(v,z),p(v,C),p(C,O),p(O,N),p(v,V),p(v,_),p(v,F),p(v,K),p(v,U),p(v,J),p(J,Q),p(Q,X),p(v,Y),p(v,Z),p(v,$),p(v,ee),p(v,te),p(te,ne),p(v,ae),p(v,re),p(v,oe),p(v,se),p(v,ie),p(v,ce),p(ce,he),p(he,le),p(v,ue),p(v,de),p(v,fe),p(v,pe),p(v,ye),p(v,ge),p(v,me),p(v,be),p(v,ve),p(v,we),p(we,Re),p(v,Ee),p(v,Ie),p(v,Me),p(v,ke),p(v,Be)},p:y,i:y,o:y,d(e){e&&h(t),e&&h(g),e&&h(m),e&&h(b),e&&h(v)}}}export default class extends e{constructor(e){super(),t(this,e,null,g,n,{})}}
