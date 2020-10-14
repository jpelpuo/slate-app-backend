(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{110:function(e,n,t){},112:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(27),o=t.n(c),i=(t(86),t(13)),l=t(34),u=t(5),s=t(6),d=t(118),m=t(122),p=t(114),f=t(115),b=t(26);function g(){var e=Object(u.a)(["\n    width: 40%;\n    background: transparent;\n    border-radius: 0.9rem;\n    border: 1px solid white;\n    text-decoration: none;\n    color: inherit;\n    padding: 0.375rem 0.75rem;\n\n    &:hover{\n        text-decoration: none;\n        color: inherit;\n    }\n"]);return g=function(){return e},e}var h=Object(s.a)(b.a)(g()),v=function(e){var n=e.children,t=e.to;return a.a.createElement(h,{to:t},n)},x=t(14),E={USER_LOGIN:"user/USER_LOGIN",ADMIN_LOGIN:"admin/ADMIN_LOGIN",LOGOUT:"LOGOUT",TAKE_PICTURE:"user/TAKE_PICTURE",SAVE_PICTURE:"user/SAVE_PICTURE",REGISTER:"user/REGISTER",SET_STATE:"SET_STATE",TOGGLE_NAV:"TOGGLE_NAV"},O=function(e){return{type:E.SET_STATE,payload:e}};function w(){var e=Object(u.a)(["\n    background: rgb(131,58,180);\n    border: none;\n    border-radius: 0.9rem;\n    width: 50%;\n"]);return w=function(){return e},e}function j(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n"]);return j=function(){return e},e}function y(){var e=Object(u.a)(["\n    @media screen and (max-width: 540px){\n        display: none;\n    }\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n    font-weight: 700;\n"]);return k=function(){return e},e}function N(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    width: 100%;\n"]);return N=function(){return e},e}function S(){var e=Object(u.a)(["\n    display: flex;\n    width: 50%;\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,91,29,1) 100%);\n    justify-content: center;\n    align-items: center;\n    flex-flow: column nowrap;\n    color: white;\n    // border-top-left-radius: 0.5rem;\n    // border-bottom-left-radius: 0.5rem;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    box-sizing: border-box;\n    transition: 0.2s all;\n\n    \n    @media screen and (max-width: 768px){\n        width: 100%;\n        height: 25%;\n        border-bottom-left-radius: 0;\n        border-top-right-radius: 0;\n        flex-flow: row nowrap;\n        padding: 0.5rem 1rem;\n    }\n"]);return S=function(){return e},e}function I(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 50%;\n    align-items: center;\n    justify-content: center;\n    transition: 0.2s all;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n        padding: 2rem !important;\n        height: 75%;\n    }\n"]);return I=function(){return e},e}function T(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    width: 100%;\n    height: 100vh;\n    border: none;\n    border-radius: 0.5rem;\n    box-shadow: 0px 0px 57px -4px rgba(0,0,0,0.75);\n    transition: 0.2s all;\n\n\n    @media screen and (max-width: 768px){\n        flex-flow: column nowrap;\n        justify-content: center;\n        align-items: center;\n    }\n"]);return T=function(){return e},e}d.a.Text;var C=d.a.Row,G=(d.a.Label,Object(s.a)(m.a)(T())),A=s.a.div(I()),R=s.a.div(S()),_=Object(s.a)(d.a)(N()),M=s.a.span(k()),L=s.a.div(y()),P=Object(s.a)(C)(j()),B=Object(s.a)(p.a)(w()),U=Object(x.c)((function(e){return{errorOccurred:e.user.errorOccurred,errorMessage:e.user.errorMessage,loading:e.user.loading}}),{adminLogin:function(e){return{type:E.ADMIN_LOGIN,payload:e}},userLogin:function(e){return{type:E.USER_LOGIN,payload:e}}})((function(e){var n=e.adminLogin,t=e.userLogin,c=e.loading,o=e.errorMessage,i=e.errorOccurred,l=Object(r.useRef)(),u=Object(r.useRef)(),s=Object(r.useRef)();return a.a.createElement(G,null,a.a.createElement(R,null,a.a.createElement("h2",null,a.a.createElement(M,null,"Welcome to Slate")),a.a.createElement(L,{className:"px-5 my-3"},"Enter your details to start learning with us"),a.a.createElement(v,{to:"/register"},"Sign Up")),a.a.createElement(A,{className:"p-5"},a.a.createElement(_,{onSubmit:function(e){e.preventDefault();var r={email:l.current.value.trim(),password:u.current.value.trim()};s.current.checked?n(r):t(r)}},a.a.createElement("h2",{className:"mb-4"},a.a.createElement(M,null,"Sign in")),a.a.createElement(m.a.Subtitle,{className:"text-muted mb-4"},i?a.a.createElement("span",{className:"text-danger"},o):"enter details to sign in"),a.a.createElement(d.a.Group,{controlId:"email"},a.a.createElement(d.a.Control,{type:"email",ref:l,placeholder:"Email"})),a.a.createElement(d.a.Group,{controlId:"password"},a.a.createElement(d.a.Control,{type:"password",ref:u,placeholder:"Password"})),a.a.createElement(d.a.Group,{controlId:"adminCheck"},a.a.createElement(d.a.Check,{type:"checkbox",label:"Sign in as admin",ref:s})),a.a.createElement(P,null,a.a.createElement(B,{type:"submit"},c?a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{animation:"border",size:"sm",as:"span"}),a.a.createElement("span",{className:"ml-1"},"Signing in")):"Sign in")))))})),F=t(10),z=t.n(F),V=t(24);function D(){var e=Object(u.a)(["\n    background: rgb(131,58,180);\n    border: none;\n    border-radius: 0.9rem;\n    width: 50%;\n"]);return D=function(){return e},e}function J(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n"]);return J=function(){return e},e}function W(){var e=Object(u.a)(["\n    @media screen and (max-width: 540px){\n        display: none;\n    }\n"]);return W=function(){return e},e}function H(){var e=Object(u.a)(["\n    font-weight: 700;\n"]);return H=function(){return e},e}function K(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    width: 100%;\n"]);return K=function(){return e},e}function q(){var e=Object(u.a)(["\n    display: flex;\n    width: 50%;\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,91,29,1) 100%);\n    justify-content: center;\n    align-items: center;\n    flex-flow: column nowrap;\n    color: white;\n    // border-top-right-radius: 0.5rem;\n    // border-bottom-right-radius: 0.5rem;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    box-sizing: border-box;\n    transition: 0.2s all;\n\n    \n    @media screen and (max-width: 768px){\n        width: 100%;\n        height: 20%;\n        // border-bottom-left-radius:  0.5rem;\n        border-top-right-radius: 0;\n        flex-flow: row nowrap;\n        padding: 1rem 1rem;\n    }\n"]);return q=function(){return e},e}function Y(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    width: 50%;\n    align-items: center;\n    justify-content: center;\n\n    @media screen and (max-width: 768px){\n        width: 90%;\n        padding: 2rem !important;\n        height: 80%;\n    }\n"]);return Y=function(){return e},e}function $(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    width: 100%;\n    min-height: 100vh;\n    border: none;\n    border-radius: 0.5rem;\n    // box-shadow: 0px 0px 57px -4px rgba(0,0,0,0.75);\n\n\n    @media screen and (max-width: 768px){\n        flex-flow: column nowrap;\n        justify-content: center;\n        align-items: center;\n    }\n"]);return $=function(){return e},e}d.a.Text;var Q=d.a.Row,X=(d.a.Label,Object(s.a)(m.a)($())),Z=s.a.div(Y()),ee=s.a.div(q()),ne=Object(s.a)(d.a)(K()),te=s.a.span(H()),re=s.a.div(W()),ae=Object(s.a)(Q)(J()),ce=Object(s.a)(p.a)(D()),oe=Object(x.c)((function(e){return{errorOccurred:e.user.errorOccurred,errorMessage:e.user.errorMessage,loading:e.user.loading,registrationSuccess:e.user.registrationSuccess}}),{register:function(e){return{type:E.REGISTER,payload:e}}})((function(e){var n=e.register,t=e.errorOccurred,c=e.errorMessage,o=e.loading,i=(e.registrationSuccess,Object(r.useRef)()),l=Object(r.useRef)(),u=Object(r.useRef)(),s=Object(r.useRef)(),p=Object(r.useRef)(),b=Object(r.useRef)(),g=Object(r.useRef)(),h=Object(r.useRef)(),x=function(){var e=Object(V.a)(z.a.mark((function e(t){var r,a,c,o,d,m,f,v;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=i.current.value.trim(),a=l.current.value.trim(),c=u.current.value,o=s.current.value.trim(),d=p.current.value.trim(),m=b.current.value.trim(),f=g.current.value.trim(),v=h.current.value.trim(),f===v){e.next=12;break}return console.log("Password do not match"),e.abrupt("return");case 12:n({firstName:r,lastName:a,gender:c,college:o,mobile:d,email:m,password:f});case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(X,null,a.a.createElement(ee,null,a.a.createElement("h2",null,a.a.createElement(te,null,"Welcome to Slate")),a.a.createElement(re,{className:"px-5 my-3"},"Enter your details to continue where you left off"),a.a.createElement(v,{to:"/auth"},"Sign in")),a.a.createElement(Z,{className:"p-5"},a.a.createElement(ne,{onSubmit:x},a.a.createElement("h2",{className:"mb-4"},a.a.createElement(te,null,"Create Account")),a.a.createElement(m.a.Subtitle,{className:"text-muted mb-4"},t?a.a.createElement("span",{className:"text-danger"},c):"enter details to create account"),a.a.createElement(d.a.Group,{controlId:"firstName"},a.a.createElement(d.a.Control,{type:"text",ref:i,placeholder:"First Name"})),a.a.createElement(d.a.Group,{controlId:"lastName"},a.a.createElement(d.a.Control,{type:"text",ref:l,placeholder:"Last Name"})),a.a.createElement(d.a.Group,{controlId:"gender"},a.a.createElement(d.a.Control,{as:"select",ref:u,defaultValue:"Gender"},a.a.createElement("option",{disabled:!0},"Gender"),a.a.createElement("option",{value:"Male"},"Male"),a.a.createElement("option",{value:"Female"},"Female"))),a.a.createElement(d.a.Group,{controlId:"college"},a.a.createElement(d.a.Control,{type:"text",ref:s,placeholder:"College"})),a.a.createElement(d.a.Group,{controlId:"mobile"},a.a.createElement(d.a.Control,{type:"tel",ref:p,placeholder:"Mobile Number"})),a.a.createElement(d.a.Group,{controlId:"email"},a.a.createElement(d.a.Control,{type:"email",ref:b,placeholder:"Email"})),a.a.createElement(d.a.Group,{controlId:"password"},a.a.createElement(d.a.Control,{type:"password",ref:g,placeholder:"Password"})),a.a.createElement(d.a.Group,{controlId:"confirmPassword"},a.a.createElement(d.a.Control,{type:"password",ref:h,placeholder:"Confirm Password"})),a.a.createElement(ae,null,a.a.createElement(ce,{type:"submit"},o?a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{animation:"border",size:"sm",as:"span"}),a.a.createElement("span",{className:"ml-1"},"Creating account")):"Sign up")))))})),ie=t(116);function le(){var e=Object(u.a)(["\n    display: flex;\n    width: 100%;\n    min-height: 100vh;\n    // height: 100%;\n    justify-content: center;\n    align-items: center;\n"]);return le=function(){return e},e}function ue(){var e=Object(u.a)(["\n    padding: 0;\n"]);return ue=function(){return e},e}var se=Object(s.a)(ie.a)(ue()),de=s.a.div(le()),me=function(e){var n=e.children;return a.a.createElement(se,{fluid:!0},a.a.createElement(de,null,n))},pe=t(80),fe=function(e){return Object(x.c)((function(e){return{authenticated:e.user.authenticated}}),null)((function(n){var t=n.authenticated,r=Object(pe.a)(n,["authenticated"]);return t?a.a.createElement(e,r):a.a.createElement(i.a,{path:"/",to:"/auth"})}))},be=t(120),ge=t(119),he=t(70),ve=t.n(he),xe=t(15);function Ee(){var e=Object(u.a)(["\n    color: gray;\n    background-color: inherit !important;\n    border-color: gray !important;\n\n    &:hover{\n        background-color: orange !important;\n    }\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(u.a)(["\n    margin-left: 0.2rem;\n    vertical-align: middle;\n"]);return Oe=function(){return e},e}function we(){var e=Object(u.a)(["\n    color: gray;\n    margin: auto 0.8rem;\n\n    &:hover{\n        color: orange;\n        text-decoration: none;\n    }\n"]);return we=function(){return e},e}function je(){var e=Object(u.a)(["\n    background-color: #000000 !important;\n    color: #ffffff !important;\n\n    a.active{\n        color: orange;\n    }\n"]);return je=function(){return e},e}var ye=Object(s.a)(be.a)(je()),ke=Object(s.a)(b.b)(we()),Ne=s.a.span(Oe()),Se=Object(s.a)(p.a)(Ee()),Ie=Object(x.c)((function(e){return{role:e.user.role,firstName:e.user.firstName,lastName:e.user.lastName}}),{logout:function(){return{type:E.LOGOUT}}})((function(e){var n=e.logout,t=e.role,r=e.firstName,c=e.lastName;return a.a.createElement(ye,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},a.a.createElement(be.a.Brand,{href:"/home"},a.a.createElement("img",{src:ve.a,alt:"Slate logo",width:"150",height:"40"})),a.a.createElement(be.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(be.a.Collapse,{id:"responsive-navbar-nav"},"user"===t?a.a.createElement(ge.a,{className:"mr-auto"},a.a.createElement(ke,{to:"/user/home"},a.a.createElement(xe.e,null),a.a.createElement(Ne,null,"Home")),a.a.createElement(ke,{to:"/user/courses"},a.a.createElement(xe.d,null),a.a.createElement(Ne,null,"Courses")),a.a.createElement(ke,{to:"/user/exams"},a.a.createElement(xe.c,null),a.a.createElement(Ne,null,"Exams")),a.a.createElement(ke,{to:"/user/ranking"},a.a.createElement(xe.b,null),a.a.createElement(Ne,null,"Ranking"))):a.a.createElement(ge.a,{className:"mr-auto"},a.a.createElement(ke,{to:"/admin/home"},a.a.createElement(Ne,null,"Admin Dashboard"))),a.a.createElement(ge.a,null,a.a.createElement(ke,{to:"/user/profile"},a.a.createElement(xe.i,null),a.a.createElement(Ne,null,"Hi! ","user"===t?"".concat(r," ").concat(c):"Admin")),a.a.createElement(Se,{onClick:function(){n()}},a.a.createElement(xe.h,null),a.a.createElement(Ne,null,"Sign out")))))})),Te=function(e){return{type:E.SET_STATE,payload:e}};function Ce(){var e=Object(u.a)(["\n    vertical-align: -2px;\n"]);return Ce=function(){return e},e}function Ge(){var e=Object(u.a)(["\n    width: 100%;\n    text-align: left;\n    background-color: inherit;\n    border: none;\n    outline: none;\n    color: gray;\n    padding: 1rem;\n    transition: all 0.2s;\n    cursor: pointer;\n\n    &:hover{\n        background-color: white;\n        color: black;\n    }\n\n    & + ","{\n        height: ",";\n    }\n"]);return Ge=function(){return e},e}function Ae(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    overflow: hidden;\n    transition: all 0.2s;\n    background-color: darkorange;\n"]);return Ae=function(){return e},e}function Re(){var e=Object(u.a)(["\n    width: 100%;\n    text-align: left;\n    text-decoration: none;\n    padding: 0.9rem;\n    color: gray;\n    transition: all 0.2s;\n\n    &:hover{\n        text-decoration: none;\n        color: black;\n        background-color: white;\n        border-right: 4px solid black;\n    }\n"]);return Re=function(){return e},e}function _e(){var e=Object(u.a)(["\n    width: 100%;\n\n    a.active {\n        color: gray;\n        border-right: 4px solid black;\n        background-color: lightgray;\n    }\n"]);return _e=function(){return e},e}function Me(){var e=Object(u.a)(["\n    width: 15%;\n    height: 100%;\n    border-right: 1px solid lightgray;\n    position: fixed;\n    left: 0;\n    display: flex;\n    padding-top: 2.6rem;\n    background-color: white;\n    // opacity: 1;\n    \n"]);return Me=function(){return e},e}var Le=s.a.div(Me()),Pe=Object(s.a)(ge.a)(_e()),Be=Object(s.a)(b.b)(Re()),Ue=s.a.div(Ae()),Fe=s.a.div(Ge(),Ue,(function(e){return e.navButtonClicked&&e.Id===e.navId?"6.6rem":"0px"})),ze=s.a.span(Ce()),Ve=Object(x.c)((function(e){return{navButtonClicked:e.app.navButtonClicked,navId:e.app.navId,navOpen:e.app.navOpen}}),{toggleNav:function(e){return{type:E.TOGGLE_NAV,payload:e}}})((function(e){var n=e.navButtonClicked,t=e.toggleNav,r=e.navId,c=e.navOpen,o=function(e){t(e===r?{navButtonClicked:!n,navId:e}:{navButtonClicked:!0,navId:e})};return a.a.createElement(Le,null,a.a.createElement(Pe,{className:"flex-column"},a.a.createElement(Be,{to:"/admin/home",className:""},a.a.createElement(xe.e,null),a.a.createElement(ze,{className:"ml-1",style:{verticalAlign:"-2px"}},"Home")),a.a.createElement(Fe,{onClick:function(e){return o("course")},Id:"course",navButtonClicked:n,navId:r,navOpen:c},a.a.createElement(xe.d,null),a.a.createElement(ze,{className:"ml-1",style:{verticalAlign:"-2px"}},"Course")),a.a.createElement(Ue,{className:"",navId:"course"},a.a.createElement(Be,{to:"/admin/courses"},"All Courses"),a.a.createElement(Be,{to:"/admin/add/course"},"Add Course")),a.a.createElement(Fe,{onClick:function(e){return o("exams")},Id:"exams",navButtonClicked:n,navId:r,navOpen:c},a.a.createElement(xe.c,null),a.a.createElement(ze,{className:"ml-1"},"Exams")),a.a.createElement(Ue,{className:"",navId:"exams"},a.a.createElement(Be,{to:"/admin/home/add/test"},"Add Test"))))}));function De(){var e=Object(u.a)(["\n    width: 80%;\n    flex-direction: column;\n    margin-left: 15%;\n    margin-top: 3rem;\n"]);return De=function(){return e},e}function Je(){var e=Object(u.a)(["\n    display: flex;\n    width: 100%;\n    min-height: 100vh;\n    justify-content: center;\n    padding-top: 3rem;\n    box-sizing: border-box;\n    flex-direction: row;\n"]);return Je=function(){return e},e}function We(){var e=Object(u.a)(["\n    padding: 0;\n"]);return We=function(){return e},e}var He=Object(s.a)(ie.a)(We()),Ke=s.a.div(Je()),qe=s.a.div(De()),Ye=Object(x.c)((function(e){return{role:e.user.role}}),null)(fe((function(e){var n=e.children,t=e.role;return a.a.createElement(He,{fluid:!0},a.a.createElement(Ie,null),a.a.createElement(Ke,{className:""},"admin"===t&&a.a.createElement(Ve,null),a.a.createElement(qe,null,n)))}))),$e=function(){return a.a.createElement("div",null,"Home")},Qe=function(){return a.a.createElement("div",null,"Courses")},Xe=function(){return a.a.createElement("div",null,"Exams")},Ze=function(){return a.a.createElement("div",null,"Profile")},en=t(121),nn=t(76),tn=t.n(nn);function rn(){var e=Object(u.a)(["\n    background: rgb(131,58,180);\n    border: none;\n    border-radius: 0.9rem;\n"]);return rn=function(){return e},e}function an(){var e=Object(u.a)(["\n    @media screen and (max-width: 540px){\n        display: none;\n    }\n"]);return an=function(){return e},e}function cn(){var e=Object(u.a)(["\n    font-weight: 700;\n"]);return cn=function(){return e},e}function on(){var e=Object(u.a)(["\n    display: flex;\n    width: 60%;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    transition: 0.2s all;\n\n    @media screen and (max-width: 900px){\n        width: 100%;\n    }\n\n"]);return on=function(){return e},e}function ln(){var e=Object(u.a)(["\n    display: flex;\n    width: 40%;\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,91,29,1) 100%);\n    justify-content: center;\n    align-items: center;\n    flex-flow: column nowrap;\n    color: white;\n    box-sizing: border-box;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    transition: 0.2s all;\n\n    @media screen and (max-width: 900px){\n        width: 100%;\n        height: 25%;\n        padding: 1rem 1rem;\n        border-top-right-radius: 0;\n    }\n"]);return ln=function(){return e},e}function un(){var e=Object(u.a)(["\n    position: relative; \n    right: 0; \n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background-size: cover;\n"]);return un=function(){return e},e}function sn(){var e=Object(u.a)(["\n    position: relative; \n    right: 0; \n    bottom: 0;\n    width: 100%; \n    height: 100%; \n    overflow: hidden;\n    background-size: cover;\n    object-fit: cover;\n"]);return sn=function(){return e},e}function dn(){var e=Object(u.a)(["\n    width: 400px;\n    height: 400px;\n    box-sizing: border-box;\n    padding: 0.5rem;\n    border: 1px solid lightgray;\n    border-radius: 0.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 1rem;\n\n    @media screen and (max-width: 900px){\n        margin: 1rem auto;\n    }\n"]);return dn=function(){return e},e}function mn(){var e=Object(u.a)(["\n    margin: 1rem;\n    padding: 0.5rem;\n    border: 1px solid lightgray;\n    border-radius: 0.2rem;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    width: 400px;\n    height: 400px;\n\n    @media screen and (max-width: 900px){\n        margin: 1rem auto;\n        width: 95%;\n    }\n"]);return mn=function(){return e},e}function pn(){var e=Object(u.a)(["\n    margin: 1rem 0;\n"]);return pn=function(){return e},e}function fn(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n\n    @media screen and (max-width: 1280px){\n        flex-flow: column nowrap;\n    }\n"]);return fn=function(){return e},e}function bn(){var e=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    min-height: 100vh;\n    justify-content: center;\n    flex-flow: row nowrap;\n    border-box: box-sizing;\n    border: none;\n    transition: 0.2s all;\n\n    @media screen and (max-width: 900px){\n        flex-flow: column nowrap;\n    }\n"]);return bn=function(){return e},e}var gn=Object(s.a)(m.a)(bn()),hn=s.a.div(fn()),vn=s.a.div(pn()),xn=s.a.div(mn()),En=s.a.div(dn()),On=Object(s.a)(tn.a)(sn()),wn=s.a.img(un()),jn=s.a.div(ln()),yn=s.a.div(on()),kn=s.a.span(cn()),Nn=s.a.div(an()),Sn=Object(s.a)(p.a)(rn()),In=Object(x.c)((function(e){return{image:e.user.image,userName:e.user.userName,imageSaved:e.user.imageSaved}}),{takePicture:function(e){return{type:E.TAKE_PICTURE,payload:e}},savePicture:function(e){return{type:E.SAVE_PICTURE,payload:e}}})((function(e){var n=e.image,t=e.takePicture,c=e.savePicture,o=e.userName,i=e.imageSaved,l=Object(r.useRef)(),u=Object(r.useCallback)((function(){var e=l.current.getScreenshot({width:200,height:200});t(e)}),[l,t]);return a.a.createElement(gn,{className:""},a.a.createElement(jn,null,a.a.createElement("h2",null,a.a.createElement(kn,null,"Finish Setting up your account")),a.a.createElement(Nn,{className:"px-5 my-3"},"We want to be able to recognise you better for exam purposes")),a.a.createElement(yn,{className:"my-auto"},a.a.createElement("h2",{className:"mb-4"},a.a.createElement(kn,null,"Add your picture")),a.a.createElement(m.a.Subtitle,{className:"text-muted mb-4"},i?a.a.createElement(en.a,{variant:"success"},"Image saved... Redirecting to login"):"Get the best shot and save it"),a.a.createElement(hn,null,a.a.createElement(xn,null,a.a.createElement(On,{audio:!1,ref:l,screenshotFormat:"image/jpeg",mirrored:!0})),a.a.createElement(En,null,n?a.a.createElement(wn,{src:n,alt:"Your picture will appear here"}):a.a.createElement("div",null,"Your picture will appear here"))),a.a.createElement(vn,null,a.a.createElement(Sn,{className:"mx-1",onClick:u},a.a.createElement(xe.a,null),a.a.createElement("span",{className:"ml-1",style:{verticalAlign:"middle"}},"Take Picture")),a.a.createElement(Sn,{className:"mx-1",disabled:""===n,onClick:function(){c({imageBase64:n,userName:o})}},a.a.createElement(xe.g,null),a.a.createElement("span",{className:"ml-1",style:{verticalAlign:"middle"}},"Save Picture")))))})),Tn=function(){return a.a.createElement("div",null,"AdminHome")},Cn=t(117);function Gn(){var e=Object(u.a)(["\n    font-weight: bolder;\n    text-align: left;\n"]);return Gn=function(){return e},e}function An(){var e=Object(u.a)(["\n    padding: 0.2rem 0.3rem;\n"]);return An=function(){return e},e}function Rn(){var e=Object(u.a)(["\n    color: gray;\n    font-weight: bolder;\n    text-align: left;\n"]);return Rn=function(){return e},e}function _n(){var e=Object(u.a)(["\n    padding: 1.4rem;\n    border-radius: 0.5rem;\n"]);return _n=function(){return e},e}function Mn(){var e=Object(u.a)(["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n"]);return Mn=function(){return e},e}var Ln=s.a.div(Mn()),Pn=Object(s.a)(Cn.a)(_n()),Bn=s.a.h2(Rn()),Un=s.a.div(An()),Fn=s.a.h4(Gn()),zn=function(){return a.a.createElement(Ln,null,a.a.createElement(Pn,{fluid:!0},a.a.createElement(Bn,null,a.a.createElement(xe.d,null)," ",a.a.createElement("span",null,"Add Course"))),a.a.createElement(Un,null,a.a.createElement(Fn,{className:"text-muted"},"Enter course details")),a.a.createElement(d.a,null,a.a.createElement(d.a.Group,{controlId:"exampleForm.ControlInput1"},a.a.createElement(d.a.Control,{type:"text",placeholder:"Course name",required:!0})),a.a.createElement(d.a.Group,{controlId:"exampleForm.ControlInput1"},a.a.createElement(d.a.Control,{type:"text",placeholder:"Subject",required:!0})),a.a.createElement(d.a.Group,{controlId:"exampleForm.ControlTextarea1"},a.a.createElement(d.a.Control,{as:"textarea",rows:"8",placeholder:"Course description",required:!0})),a.a.createElement(d.a.Group,null,a.a.createElement(d.a.File,{id:"exampleFormControlFile1"})),a.a.createElement(p.a,{variant:"primary",type:"submit",className:"float-left"},a.a.createElement(xe.f,null)," Add course")))},Vn=[{path:"/auth",exact:!0,component:a.a.createElement(U,null)},{path:"/register",exact:!0,component:a.a.createElement(oe,null)},{path:"/user/picture",exact:!0,component:a.a.createElement(In,null)}],Dn=[{path:"/user/home",exact:!0,component:a.a.createElement($e,null)},{path:"/user/courses",exact:!0,component:a.a.createElement(Qe,null)},{path:"/user/exams",exact:!0,component:a.a.createElement(Xe,null)},{path:"/user/profile",exact:!0,component:a.a.createElement(Ze,null)},{path:"/admin/home",exact:!0,component:a.a.createElement(Tn,null)},{path:"/admin/add/course",exact:!0,component:a.a.createElement(zn,null)}],Jn=Object(x.c)((function(e){return{accessToken:e.user.accessToken}}),null)((function(e){var n=e.history,t=e.accessToken;return a.a.createElement(l.a,{history:n},a.a.createElement(i.d,null,a.a.createElement(i.a,{exact:!0,path:"/",to:"/auth"}),t&&a.a.createElement(i.a,{path:"/auth",to:"/user/home"}),t&&a.a.createElement(i.a,{path:"/register",to:"/user/home"}),t&&a.a.createElement(i.a,{path:"/picture",to:"/user/home"}),Vn.map((function(e){return a.a.createElement(i.b,{exact:e.exact,path:e.path,key:e.path,render:function(){return a.a.createElement(me,null,e.component)}})})),a.a.createElement(Ye,null,Dn.map((function(e){return a.a.createElement(i.b,{exact:e.exact,path:e.path,key:e.path},e.component)}))),a.a.createElement(i.a,{path:"/",to:"/auth",exact:!0})))})),Wn=t(22),Hn=t(37),Kn={accessToken:sessionStorage.getItem("accessToken"),firstName:"",lastName:"",role:sessionStorage.getItem("role"),loading:!1,errorOccurred:!1,errorMessage:"",authenticated:sessionStorage.getItem("authenticated"),registrationSuccess:!1,image:"",imageSaved:!1,userName:"",registeredCourses:[],email:""},qn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case E.SET_STATE:return Object(Hn.a)({},e,{},n.payload);default:return e}},Yn={navButtonClicked:!1,navId:"",navOpen:!1},$n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case E.SET_STATE:return Object(Hn.a)({},e,{},n.payload);default:return e}},Qn=function(e){return Object(Wn.combineReducers)({user:qn,router:Object(l.b)(e),app:$n})},Xn=t(19),Zn=t(77),et=t(79),nt=t(65),tt=t(9),rt=t(78),at=t(17),ct=t(33),ot=t.n(ct),it="http://localhost:7500/api/user",lt=function(){var e=Object(V.a)(z.a.mark((function e(n,t){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ot.a.post("".concat(it,"/auth"),JSON.stringify({email:n,password:t}),{headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),ut=function(){var e=Object(V.a)(z.a.mark((function e(n,t,r,a,c,o,i){var l;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ot.a.post("".concat(it,"/register"),JSON.stringify({firstName:n,lastName:t,gender:r,college:a,mobile:c,email:o,password:i}),{headers:{"Content-Type":"application/json"}});case 3:return l=e.sent,e.abrupt("return",l);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t,r,a,c,o,i){return e.apply(this,arguments)}}(),st=function(){var e=Object(V.a)(z.a.mark((function e(n,t){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ot.a.post("".concat(it,"/savepicture"),JSON.stringify({imageBase64:n,userName:t}),{headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),dt=function(){var e=Object(V.a)(z.a.mark((function e(n,t){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ot.a.get("".concat(it,"/").concat(n),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),mt=function(){var e=Object(V.a)(z.a.mark((function e(n,t){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ot.a.post("".concat("http://localhost:7500/api/admin","/auth"),JSON.stringify({email:n,password:t}),{headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),pt=z.a.mark(Et),ft=z.a.mark(Ot),bt=z.a.mark(wt),gt=z.a.mark(jt),ht=z.a.mark(yt),vt=z.a.mark(kt),xt=z.a.mark(Nt);function Et(e){var n,t,r,a;return z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.payload,t=n.email,r=n.password,c.prev=1,c.next=4,Object(tt.d)(O({loading:!0}));case 4:return c.next=6,Object(tt.b)(mt,t,r);case 6:if(!(a=c.sent)){c.next=15;break}return c.next=10,Object(tt.d)(O({loading:!1,accessToken:a.data.accessToken,authenticated:!0,errorOccurred:!1,errorMessage:"",role:"admin"}));case 10:return c.next=12,Object(tt.d)(Object(at.d)("/admin/home"));case 12:sessionStorage.setItem("accessToken",a.data.accessToken),sessionStorage.setItem("authenticated",!0),sessionStorage.setItem("role","admin");case 15:c.next=21;break;case 17:return c.prev=17,c.t0=c.catch(1),c.next=21,Object(tt.d)(O({errorOccurred:!0,errorMessage:c.t0.response.data.error.message,loading:!1}));case 21:case"end":return c.stop()}}),pt,null,[[1,17]])}function Ot(e){var n,t,r,a,c;return z.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e.payload,t=n.email,r=n.password,o.prev=1,o.next=4,Object(tt.d)(O({loading:!0}));case 4:return o.next=6,Object(tt.b)(lt,t,r);case 6:if(!(a=o.sent)){o.next=18;break}return o.next=10,Object(tt.b)(dt,t,a.data.accessToken);case 10:return c=o.sent,o.next=13,Object(tt.d)(O({loading:!1,accessToken:a.data.accessToken,errorOccurred:!1,errorMessage:"",authenticated:!0,role:"user",firstName:c.data.userInfo.firstName,lastName:c.data.userInfo.lastName,registeredCourses:Object(rt.a)(c.data.userInfo.registeredCourses)}));case 13:return o.next=15,Object(tt.d)(Object(at.d)("/user/home"));case 15:sessionStorage.setItem("accessToken",a.data.accessToken),sessionStorage.setItem("authenticated",!0),sessionStorage.setItem("role","user");case 18:o.next=24;break;case 20:return o.prev=20,o.t0=o.catch(1),o.next=24,Object(tt.d)(O({errorOccurred:!0,errorMessage:o.t0.response.data.error.message,loading:!1}));case 24:case"end":return o.stop()}}),ft,null,[[1,20]])}function wt(e){var n,t,r,a,c,o,i,l;return z.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return n=e.payload,t=n.firstName,r=n.lastName,a=n.gender,c=n.college,o=n.mobile,i=n.email,l=n.password,u.prev=1,u.next=4,Object(tt.d)(O({loading:!0}));case 4:return u.next=6,Object(tt.b)(ut,t,r,a,c,o,i,l);case 6:if(!u.sent){u.next=12;break}return u.next=10,Object(tt.d)(O({loading:!1,errorOccurred:!1,errorMessage:"",registrationSuccess:!0,userName:"".concat(t," ").concat(r," ").concat(i)}));case 10:return u.next=12,Object(tt.d)(Object(at.d)("/user/picture"));case 12:u.next=18;break;case 14:return u.prev=14,u.t0=u.catch(1),u.next=18,Object(tt.d)(O({errorOccurred:!0,errorMessage:u.t0.response.data.error.message,loading:!1,registrationSuccess:!1}));case 18:case"end":return u.stop()}}),bt,null,[[1,14]])}function jt(e){var n;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,t.next=3,Object(tt.d)(O({image:n}));case 3:case"end":return t.stop()}}),gt)}function yt(e){var n,t,r;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,t=n.imageBase64,r=n.userName,a.prev=1,a.next=4,Object(tt.d)(O({loading:!0}));case 4:return a.next=6,Object(tt.b)(st,t,r);case 6:if(!a.sent){a.next=16;break}return a.next=10,Object(tt.d)(O({loading:!1,imageSaved:!0}));case 10:return a.next=12,Object(tt.c)(3e3);case 12:return a.next=14,Object(tt.d)(Object(at.d)("/auth"));case 14:return a.next=16,Object(tt.d)(O({imageSaved:!1}));case 16:a.next=22;break;case 18:return a.prev=18,a.t0=a.catch(1),a.next=22,Object(tt.d)(O({errorOccurred:!0,errorMessage:a.t0.response.data.error.message,loading:!1,imageSaved:!1}));case 22:case"end":return a.stop()}}),ht,null,[[1,18]])}function kt(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(tt.d)(O({authenticated:!1,accessToken:"",loading:!1,errorOccurred:!1,errorMessage:"",image:"",navButtonClicked:!1,navId:""}));case 2:return sessionStorage.setItem("accessToken",""),sessionStorage.setItem("authenticated",!1),e.next=6,Object(tt.d)(Object(at.d)("/auth"));case 6:case"end":return e.stop()}}),vt)}function Nt(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(tt.a)([Object(tt.e)(E.ADMIN_LOGIN,Et),Object(tt.e)(E.USER_LOGIN,Ot),Object(tt.e)(E.REGISTER,wt),Object(tt.e)(E.TAKE_PICTURE,jt),Object(tt.e)(E.SAVE_PICTURE,yt),Object(tt.e)(E.LOGOUT,kt)]);case 2:case"end":return e.stop()}}),xt)}var St=z.a.mark(Tt),It=z.a.mark(Ct);function Tt(e){var n;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,t.next=3,Object(tt.d)(Te(Object(Hn.a)({},n)));case 3:case"end":return t.stop()}}),St)}function Ct(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(tt.a)([Object(tt.e)(E.TOGGLE_NAV,Tt)]);case 2:case"end":return e.stop()}}),It)}var Gt=z.a.mark(At);function At(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(tt.a)([Nt(),Ct()]);case 2:case"end":return e.stop()}}),Gt)}var Rt=Object(et.a)(),_t=Object(Xn.a)(),Mt=[Rt,Object(nt.a)(_t)],Lt=Object(Wn.createStore)(Qn(_t),Object(Zn.composeWithDevTools)(Wn.applyMiddleware.apply(void 0,Mt)));_t.loaction;_t.listen((function(){Lt.dispatch(O({errorOccurred:!1,errorMessage:""}))})),Rt.run(At);var Pt=Lt;t(110);var Bt=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Jn,{history:_t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(111);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x.a,{store:Pt},a.a.createElement(Bt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,n,t){e.exports=t.p+"static/media/slate.fe8971ce.png"},81:function(e,n,t){e.exports=t(112)},86:function(e,n,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.ea3c5486.chunk.js.map