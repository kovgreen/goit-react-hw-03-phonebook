(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(n,e,t){n.exports=t(24)},21:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),u=(t(21),t(15)),i=t(8),l=t(3),f=t(26),b=t(1),m=t(2);function p(){var n=Object(b.a)(["\n  margin: 20px;\n  display: block;\n  width: 100px;\n  padding: 10px 5px;\n  font-family: sans-serif;\n  font-size: 14px;\n  line-height: 1.2;\n  font-weight: 400;\n  color: #fff;\n  background-color: rgb(0, 106, 177);\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.75);\n  transition: all 0.2s ease-in;\n\n  :hover {\n    cursor: pointer;\n    background-color: rgb(19, 19, 138);\n  }\n"]);return p=function(){return n},n}function d(){var n=Object(b.a)(["\n  display: block;\n  width: 100%;\n  margin-bottom: 15px;\n  padding: 8px 5px;\n  border-radius: 2px;\n  border: 3px solid rgb(120, 120, 120);\n\n  :focus {\n    border-color: rgb(0, 106, 177);\n    outline: none;\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(b.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.2;\n  font-weight: 500;\n"]);return s=function(){return n},n}function g(){var n=Object(b.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 10px;\n"]);return g=function(){return n},n}var v=m.a.form(g()),h=m.a.label(s()),x=m.a.input(d()),O=m.a.button(p()),j=function(n){var e=n.onAddContact,t=Object(r.useState)(""),o=Object(l.a)(t,2),c=o[0],u=o[1],i=Object(r.useState)(""),f=Object(l.a)(i,2),b=f[0],m=f[1];return a.a.createElement(v,{onSubmit:function(n){n.preventDefault(),e({name:c,number:b}),u(""),m("")}},a.a.createElement(h,null,"Name",a.a.createElement(x,{type:"text",name:"name",value:c,onChange:function(n){return u(n.target.value)},autoComplete:"off"})),a.a.createElement(h,null,"Number",a.a.createElement(x,{type:"text",name:"number",value:b,onChange:function(n){return m(n.target.value)},autoComplete:"off"})),a.a.createElement(O,{type:"submit"},"Add contact"))};function E(){var n=Object(b.a)(["\n  display: block;\n  padding: 5px 10px;\n  font-weight: 400;\n  color: #fff;\n  background-color: rgb(218, 1, 1);\n  border: none;\n  border-radius: 4px;\n\n  :hover {\n    cursor: pointer;\n    background-color: rgb(170, 0, 0);\n  }\n"]);return E=function(){return n},n}function w(){var n=Object(b.a)(["\n  margin-right: 10px;\n"]);return w=function(){return n},n}function y(){var n=Object(b.a)(["\n  flex: 1 0 auto;\n"]);return y=function(){return n},n}function C(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return C=function(){return n},n}var k=m.a.div(C()),S=m.a.span(y()),D=m.a.span(w()),N=m.a.button(E()),z=function(n){var e=n.name,t=n.number,r=n.onDeleteContact;return a.a.createElement(k,null,a.a.createElement(S,null,"Name: ",e),a.a.createElement(D,null,"Number: ",t),a.a.createElement(N,{type:"button",onClick:r},"Delete"))};function J(){var n=Object(b.a)(["\n  padding: 10px;\n"]);return J=function(){return n},n}function A(){var n=Object(b.a)(["\n  margin: 0;\n  padding: 0;\n"]);return A=function(){return n},n}var F=m.a.ul(A()),I=m.a.li(J()),P=function(n){var e=n.items,t=n.onDeleteContact;return e.length>0&&a.a.createElement(F,null,e.map((function(n){return a.a.createElement(I,{key:n.id},a.a.createElement(z,Object.assign({},n,{onDeleteContact:function(){return t(n.id)}})))})))};function L(){var n=Object(b.a)(["\n  display: block;\n  width: 100%;\n  padding: 8px 5px;\n  border-radius: 4px;\n  border: 3px solid rgb(120, 120, 120);\n\n  :focus {\n    border-color: rgb(0, 106, 177);\n    outline: none;\n  }\n"]);return L=function(){return n},n}function Y(){var n=Object(b.a)(["\n  font-family: sans-serif;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: 500;\n"]);return Y=function(){return n},n}function B(){var n=Object(b.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 10px 10px 15px;\n"]);return B=function(){return n},n}var M=m.a.div(B()),q=m.a.label(Y()),G=m.a.input(L()),H=function(n){var e=n.value,t=n.onChangeFilter;return a.a.createElement(M,null,a.a.createElement(q,null,"Find contacts by name"),a.a.createElement(G,{type:"text",value:e,onChange:t}))},K=function(n,e){return n.find((function(n){return n.name===e.name}))},Q=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))};function R(){var n=Object(b.a)(["\n  font-size: 20px;\n  line-height: 1.2;\n"]);return R=function(){return n},n}function T(){var n=Object(b.a)(["\n  font-size: 30px;\n  line-height: 1.2;\n"]);return T=function(){return n},n}function U(){var n=Object(b.a)(["\n  max-width: 420px;\n  min-width: 310px;\n  margin: 0 auto;\n  padding: 0 5px;\n"]);return U=function(){return n},n}var V=m.a.div(U()),W=m.a.h1(T()),X=m.a.h2(R()),Z=function(){var n=Object(r.useState)([]),e=Object(l.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(""),b=Object(l.a)(c,2),m=b[0],p=b[1];Object(r.useEffect)((function(){var n=function(n){try{var e=localStorage.getItem(n);return e?JSON.parse(e):null}catch(t){throw new Error}}("contacts");n&&o(n)}),[]),Object(r.useEffect)((function(){!function(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch(t){throw new Error}}("contacts",t)}),[t]);var d=Q(t,m);return a.a.createElement(V,null,a.a.createElement(W,null,"Phonebook"),a.a.createElement(j,{onAddContact:function(n){var e=Object(i.a)(Object(i.a)({},n),{},{id:Object(f.a)()});if(function(n){var e=n.name,t=n.number;return e.length<=1||0===e.trim()?(alert("Your name is not valid. Please enter correct information."),!1):!!t||(alert("Your number is not valid. Please enter correct information."),!1)}(n)){if(K(t,n))return void alert("".concat(n.name," is already in contacts."));o([].concat(Object(u.a)(t),[e]))}}}),a.a.createElement(X,null,"Contacts"),t.length>=2&&a.a.createElement(H,{value:m,onChangeFilter:function(n){var e=n.target.value;p(e)}}),a.a.createElement(P,{items:d,onDeleteContact:function(n){var e=t.filter((function(e){return e.id!==n}));o(e)}}))},$=function(){return a.a.createElement(Z,null)};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4c59cbbe.chunk.js.map