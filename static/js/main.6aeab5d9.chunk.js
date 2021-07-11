(this["webpackJsonpproject-todo"]=this["webpackJsonpproject-todo"]||[]).push([[0],{18:function(t){t.exports=JSON.parse('[{"_id":1,"title":"Learn React","description":"This is required to level up the Web Development Game.","tasks":[{"_id":1,"title":"Learn Routing","notes":"Haven\'t started"},{"_id":2,"title":"Learn Api","notes":"Haven\'t started"},{"_id":3,"title":"Learn Authentication using Firebase","notes":"Haven\'t started"}]},{"_id":2,"title":"Learn MongoDB","description":"To learn a modern and trending backend technology","tasks":[{"_id":1,"title":"Learn Basics","notes":"Haven\'t started"}]},{"_id":3,"title":"Complete MERN Project","description":"Hands-on experience on new tech stack","tasks":[{"_id":1,"title":"Learn Basics","notes":"Haven\'t started"}]}]')},23:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(17),o=n.n(a),i=(n(23),n(6)),r=n(2),l=(n(8),n(42),n(43),n(44),n(0));function j(t){var e=Object(c.useState)(""),n=Object(r.a)(e,2),s=n[0],a=n[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),j=i[0],d=i[1];return Object(l.jsx)("div",{id:"formContainer",children:Object(l.jsxs)("form",{onSubmit:function(){console.log("submit button clicked")},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(t){a(t.target.value)},className:"form-control",id:"inputUsername",placeholder:"Username"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",value:j,onChange:function(t){d(t.target.value)},className:"form-control",id:"inputPassword",placeholder:"Password"})]}),Object(l.jsx)("h6",{children:Object(l.jsx)("a",{href:"#",children:"Forgot password"})}),Object(l.jsxs)("div",{className:"form-group",id:"buttonContainer",children:[Object(l.jsx)("button",{type:"cancel",className:"btn btn-danger formButton",onClick:function(){t.show_modal(!1)},children:"Cancel"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary formButton",children:"Sign in"})]}),Object(l.jsxs)("h4",{children:["New User? ",Object(l.jsx)("a",{href:"#",style:{textDecoration:"underline"},children:"Sign up"})]})]})})}function d(t){var e=t.user,n=(t.setUser,Object(c.useState)(!1)),s=Object(r.a)(n,2),a=s[0],o=s[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:"Project-ToDo"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsxs)("a",{className:"nav-link",href:"#",children:["Home ",Object(l.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)("a",{className:"nav-link",href:"https://github.com/codesahib/Project-ToDo/tree/master/frontend",target:"_blank",children:["GitHub Repo ",Object(l.jsx)("span",{className:"sr-only",children:"(current)"})]})})]}),"\xa0\xa0",""===e?Object(l.jsx)("button",{className:"btn btn-info my-2 my-sm-0",onClick:function(){console.log("login"),o(!0)},children:"Login"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Hi ",e]}),Object(l.jsx)("button",{className:"btn btn-info my-2 my-sm-0",onClick:function(){console.log("logout")},children:"Logout"})," "]})]})]})}),a&&Object(l.jsx)(j,{show_modal:o})]})}n(46);n(47);function b(t){var e=t.project,n=Object(c.useState)(e.title),s=Object(r.a)(n,2),a=s[0],o=s[1],i=Object(c.useState)(e.description),j=Object(r.a)(i,2),d=j[0],b=j[1];return Object(l.jsx)("div",{id:"formContainer",children:Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.title=a,e.description=d,t.updateProject(e),t.show_settings(!1)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Change Title"}),Object(l.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)},className:"form-control",id:"inputTitle",placeholder:"Title"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"description",children:"Change Description"}),Object(l.jsx)("input",{type:"text",value:d,onChange:function(t){b(t.target.value)},className:"form-control",id:"inputDescription",placeholder:"Description"})]}),Object(l.jsxs)("div",{className:"form-group",id:"buttonContainer",children:[Object(l.jsx)("button",{type:"cancel",className:"btn btn-danger formButton",onClick:function(){t.show_settings(!1)},children:"Cancel"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary formButton",children:"Change"})]})]})})}n(48);function u(t){var e=t.task,n=Object(c.useState)(e.title),s=Object(r.a)(n,2),a=s[0],o=s[1];return Object(l.jsx)("div",{id:"formContainer",children:Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.title=a,t.updateTask(e),t.show_settings(!1)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"description",children:"Change Title"}),Object(l.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)},className:"form-control",id:"inputDescription",placeholder:"Description"})]}),Object(l.jsxs)("div",{className:"form-group",id:"buttonContainer",children:[Object(l.jsx)("button",{type:"cancel",className:"btn btn-danger formButton",onClick:function(){t.show_settings(!1)},children:"Cancel"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary formButton",children:"Change"})]})]})})}n(49);function h(t){var e=Object(c.useState)(t.notes),n=Object(r.a)(e,2),s=n[0],a=n[1];return Object(l.jsx)("div",{id:"formContainer",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.update_notes(s),t.show_notes(!1)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"notes",children:"Task Notes"}),Object(l.jsx)("textarea",{className:"form-control inputNotes",placeholder:"Notes",rows:"4",cols:"50",value:s,onChange:function(t){a(t.target.value)}})]}),Object(l.jsxs)("div",{className:"form-group",id:"buttonContainer",children:[Object(l.jsx)("button",{type:"cancel",className:"btn btn-danger formButton",onClick:function(){t.show_notes(!1)},children:"Cancel"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary formButton",children:"Update"})]})]})})}function m(t){var e=t.task,n=t.delete_task,s=Object(c.useState)(!1),a=Object(r.a)(s,2),o=a[0],i=a[1],j=Object(c.useState)(!1),d=Object(r.a)(j,2),b=d[0],m=d[1],O=Object(c.useState)(e),p=Object(r.a)(O,2),f=p[0],x=p[1],g=Object(c.useState)(e.notes),v=Object(r.a)(g,2),N=v[0],k=v[1];return Object(l.jsxs)(l.Fragment,{children:[o&&Object(l.jsx)(u,{show_settings:i,task:f,updateTask:x}),Object(l.jsxs)("div",{id:"task",children:[Object(l.jsx)("input",{type:"checkbox",className:"taskCheckbox"}),Object(l.jsx)("h5",{id:"taskTitle",children:f.title}),Object(l.jsxs)("div",{className:"taskOptionsList",children:[Object(l.jsx)("i",{className:"fa fa-gear taskOption",onClick:function(){i(!0)}}),Object(l.jsx)("i",{className:"fa fa-sticky-note-o taskOption",onClick:function(){m(!0)}}),Object(l.jsx)("i",{className:"fa fa-trash taskOption",onClick:function(){n(f)}})]})]}),b&&Object(l.jsx)(h,{show_notes:m,notes:N,update_notes:k})]})}n(50);function O(t){return Object(l.jsxs)("div",{id:"taskContainer",children:[0===t.tasks.length?Object(l.jsx)("h2",{id:"textNoTasks",children:"No Tasks Recorded"}):t.tasks.map((function(e){return Object(l.jsx)(m,{task:e,delete_task:t.delete_task},e._id)})),Object(l.jsx)("button",{style:{display:"flex",width:"fit-content",alignSelf:"center"},id:"buttonAddTask",className:"btn btn-info",onClick:function(){t.show_modal(!0)},children:"+ Add Task"})]})}n(51);function p(t){var e=Object(c.useState)(""),n=Object(r.a)(e,2),s=n[0],a=n[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),j=i[0],d=i[1];return Object(l.jsx)("div",{id:"formContainer",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s?t.add_task(s,j):alert("Title is not defined")},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Task Title"}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(t){a(t.target.value)},className:"form-control",id:"inputTitle",placeholder:"Title"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"notes",children:"Task Notes"}),Object(l.jsx)("textarea",{value:j,onChange:function(t){d(t.target.value)},className:"form-control",id:"inputNotes",placeholder:"Notes"})]}),Object(l.jsxs)("div",{className:"form-group",id:"buttonContainer",children:[Object(l.jsx)("button",{type:"cancel",className:"btn btn-danger formButton",onClick:function(){t.show_modal(!1)},children:"Cancel"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary formButton",children:"Add"})]})]})})}function f(t){var e=t.project,n=t.delete_project,s=Object(c.useState)(!1),a=Object(r.a)(s,2),o=a[0],j=a[1],d=Object(c.useState)(!1),u=Object(r.a)(d,2),h=u[0],m=u[1],f=Object(c.useState)(!1),x=Object(r.a)(f,2),g=x[0],v=x[1],N=Object(c.useState)(!1),k=Object(r.a)(N,2),C=k[0],_=k[1],y=Object(c.useState)(e),S=Object(r.a)(y,2),w=S[0],T=S[1],D=Object(c.useState)(e.tasks),F=Object(r.a)(D,2),B=F[0],P=F[1];return Object(l.jsxs)(l.Fragment,{children:[h&&Object(l.jsx)(b,{show_settings:m,project:w,updateProject:T}),Object(l.jsxs)("div",{id:"project",children:[Object(l.jsxs)("div",{id:"projectSummary",children:[Object(l.jsx)("input",{type:"checkbox",className:"projectCheckbox"}),Object(l.jsx)("h5",{id:"projectTitle",children:w.title}),Object(l.jsxs)("div",{className:"projectOptionsList",children:[Object(l.jsx)("i",{className:"fa fa-gear projectOption",onClick:function(){m(!0)}}),Object(l.jsx)("i",{className:"fa fa-list-alt projectOption",onClick:function(t){C=!C,t.target.style.color=C?"green":"",_(C)}}),Object(l.jsx)("i",{className:"fa fa-trash projectOption",onClick:function(){n(w)}}),!1===g?Object(l.jsx)("i",{className:"fa fa-chevron-down projectOption",onClick:function(){v(!0)}}):Object(l.jsx)("i",{className:"fa fa-chevron-up projectOption",onClick:function(){v(!1)}})]})]}),C&&Object(l.jsx)("div",{className:"projectDescriptionContainer",children:Object(l.jsx)("p",{children:w.description})}),g&&Object(l.jsx)(O,{tasks:B,delete_task:function(t){P(B.filter((function(e){return e!==t})))},show_modal:j})]}),o&&Object(l.jsx)(p,{add_task:function(t,e){var n={t_id:0===B.length?1:B[B.length-1].id+1,title:t,notes:e};P([].concat(Object(i.a)(B),[n])),j(!1)},show_modal:j,project_title:w.title})]})}n(52);function x(t){return Object(l.jsxs)("div",{id:"projectContainer",children:[0===t.projects.length?Object(l.jsx)("h2",{id:"textNoProjects",children:"No Projects Recorded"}):t.projects.map((function(e){return Object(l.jsx)(f,{project:e,delete_project:t.delete_project},e._id)})),Object(l.jsx)("button",{id:"buttonAddProject",className:"btn btn-info",onClick:function(){t.show_modal(!0)},children:"+ Add Project"})]})}n(53);function g(t){var e=Object(c.useState)(""),n=Object(r.a)(e,2),s=n[0],a=n[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),j=i[0],d=i[1];return Object(l.jsx)("div",{id:"formContainer",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&j?(a(""),d(""),t.add_project(s,j)):alert("Title or description is not defined")},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Project Title"}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(t){a(t.target.value)},className:"form-control",id:"inputTitle",placeholder:"Title"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"description",children:"Project Description"}),Object(l.jsx)("input",{type:"text",value:j,onChange:function(t){d(t.target.value)},className:"form-control",id:"inputDescription",placeholder:"Description"})]}),Object(l.jsxs)("div",{className:"form-group",id:"buttonContainer",children:[Object(l.jsx)("button",{type:"cancel",className:"btn btn-danger formButton",onClick:function(){t.show_modal(!1)},children:"Cancel"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary formButton",children:"Add"})]})]})})}var v=n(18);var N=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)(!1),o=Object(r.a)(a,2),j=o[0],b=o[1],u=Object(c.useState)(v),h=Object(r.a)(u,2),m=h[0],O=h[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"App-header",children:[Object(l.jsx)("h1",{children:"Project-ToDo"}),Object(l.jsx)("i",{children:"by Gursahib Singh"})]}),Object(l.jsx)(d,{setUser:s,user:n}),Object(l.jsx)(x,{projects:m,delete_project:function(t){O(m.filter((function(e){return e!==t})))},show_modal:b}),j&&Object(l.jsx)(g,{add_project:function(t,e){var n={id:0===m.length?1:m[m.length-1].id+1,title:t,description:e,tasks:[]};O([].concat(Object(i.a)(m),[n])),b(!1)},show_modal:b})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),a(t),o(t)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),k()}},[[54,1,2]]]);
//# sourceMappingURL=main.6aeab5d9.chunk.js.map