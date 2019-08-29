(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/Components.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/Components.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Components </h1> \r\n\r\n\r\n\r\n<p> Components are basically classes that interact with the .html file of the component,\r\n     which gets displayed on the browser. \r\n    </p>\r\n\r\n    <p>\r\n            The file structure has the app component and it consists of the following files −\r\n        </p>\r\n        <li>  app.component.css </li>\r\n         <li>   app.component.html</li>\r\n         <li>       app.component.spec.ts </li>\r\n            <li> app.component.ts </li>\r\n            <li>     app.module.ts </li>\r\n    <br/>\r\n            <p> And if you have selected angular routing during your project setup,\r\n                 files related to routing will also get added and the files are as follows −\r\n</p>\r\n                   <li> app-routing.module.ts </li>\r\n\r\n<br/>\r\n                   <p> The declarations include the AppComponent variable, which we have already imported. This becomes the parent component.\r\n\r\n                        Now, angular-cli has a command to create your own component. However, the app component which is created by default will always remain the parent and the next components created will form the child components.\r\n                        \r\n                        Let us now run the command to create the component with the below line of code − </p>\r\n                        \r\n                        <p><b> ng g component new-cmp </b></p>\r\n\r\n                        <p> When you run the above command in the command line, you will receive the following output −\r\n                            </p>\r\n\r\n<p>\r\n                                C:\\projectA7\\angular7-app>ng g component new-cmp <br/>\r\n                                CREATE src/app/new-cmp/new-cmp.component.html (26 bytes) <br/>\r\n                                CREATE src/app/new-cmp/new-cmp.component.spec.ts (629 bytes) <br/>\r\n                                CREATE src/app/new-cmp/new-cmp.component.ts (272 bytes) <br/>\r\n                                CREATE src/app/new-cmp/new-cmp.component.css (0 bytes) <br/>\r\n                                UPDATE src/app/app.module.ts (477 bytes)<br/>\r\n                                </p>\r\n                                <p>\r\n                                Now, if we go and check the file structure, we will get the new-cmp new folder created under the src/app folder.\r\n                                </p>\r\n                                <p>The following files are created in the new-cmp folder −\r\n                                \r\n\r\n                                new-cmp.component.css − css file for the new component is created.<br/>\r\n                                new-cmp.component.html − html file is created.<br/>\r\n                                new-cmp.component.spec.ts − this can be used for unit testing.<br/>\r\n                                new-cmp.component.ts − here, we can define the module, properties, etc.</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Layouts/app-banner/app-banner.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Layouts/app-banner/app-banner.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Layouts/app-footer/app-footer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Layouts/app-footer/app-footer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"font-size: 16px\">2019 © Minds NXT Techno Vision Pvt LTD.   - All rights reserved.</h2>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Layouts/app-header/app-header.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Layouts/app-header/app-header.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-brand\">\r\n    <a class=\"link\" routerLink=\"/index\">\r\n        <span class=\"brand\">Angular\r\n            <span class=\"brand-tip\">-8</span>\r\n        </span>\r\n        <span class=\"brand-mini\">MLMS</span>\r\n    </a>\r\n</div>\r\n<div class=\"flexbox flex-1\">\r\n    <!-- START TOP-LEFT TOOLBAR-->\r\n    <ul class=\"nav navbar-toolbar\">\r\n        <li>\r\n            <a class=\"nav-link sidebar-toggler js-sidebar-toggler\"><i class=\"ti-menu\"></i></a>\r\n        </li>\r\n        <li>\r\n            <form class=\"navbar-search\" action=\"javascript:;\">\r\n                <div class=\"rel\">\r\n                    <span class=\"search-icon\"><i class=\"ti-search\"></i></span>\r\n                    <input class=\"form-control\" placeholder=\"Search here...\">\r\n                </div>\r\n            </form>\r\n        </li>\r\n    </ul>\r\n    <!-- END TOP-LEFT TOOLBAR-->\r\n    <!-- START TOP-RIGHT TOOLBAR-->\r\n    <ul  class=\"nav navbar-toolbar\">\r\n        <li class=\"dropdown dropdown-user\">\r\n            <a  class=\"nav-link dropdown-toggle link\" data-toggle=\"dropdown\" routerLink=\"/login-Google\">\r\n                <img src=\"./assets/img/admin-avatar.png\" />\r\n                <span></span>Login<i class=\"fa fa-angle-down m-l-5\"></i></a>\r\n            <ul  class=\"dropdown-menu dropdown-menu-right\">\r\n                <a  class=\"dropdown-item\" routerLink=\"/admin-Profile\"><i class=\"fa fa-user\"></i>Profile</a>\r\n                <a class=\"dropdown-item\" href=\"profile.html\"><i class=\"fa fa-cog\"></i>Settings</a>\r\n                <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-support\"></i>Support</a>\r\n                <li class=\"dropdown-divider\"></li>\r\n                <a class=\"dropdown-item\" routerLink=\"/Login\"><i class=\"fa fa-power-off\"></i>Logout</a>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n    <!-- END TOP-RIGHT TOOLBAR-->\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Layouts/app-sidebar/app-sidebar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Layouts/app-sidebar/app-sidebar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-collapse\">\r\n    <div class=\"admin-block d-flex\">\r\n        <div>\r\n            <img src=\"./assets/img/admin-avatar.png\" width=\"45px\" />\r\n        </div>\r\n        <div class=\"admin-info\">\r\n            <div class=\"font-strong\">Users </div><small>Demo</small></div>\r\n    </div>\r\n    <ul class=\"side-menu metismenu\">\r\n        <li>\r\n            <a routerLinkActive=\"active\" routerLink=\"/Home\"><i class=\"sidebar-item-icon fa fa-th-large\"></i>\r\n                <span class=\"nav-label\">Dashboard</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"heading\">Examples</li>\r\n        <!-- LMS Menu Start -->\r\n        <li>\r\n            <a routerLinkActive=\"active\" routerLink=\"/Components\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                <span class=\"nav-label\">Components </span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n            \r\n        </li>\r\n\r\n        <li>\r\n                <a routerLinkActive=\"active\" routerLink=\"/Modules\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                    <span class=\"nav-label\">Modules </span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n               \r\n            </li>\r\n            <li>\r\n                <a routerLinkActive=\"active\" routerLink=\"/Data-Binding\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                    <span class=\"nav-label\">Data-Binding</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n               \r\n            </li>\r\n\r\n            <li>\r\n                <a routerLinkActive=\"active\" routerLink=\"/Event-Binding\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                    <span class=\"nav-label\">Event-Binding</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n               \r\n            </li>\r\n\r\n            <li>\r\n                <a routerLinkActive=\"active\" routerLink=\"/routersnew\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                    <span class=\"nav-label\">Routers</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n                \r\n            </li>\r\n            <li>\r\n                <a routerLinkActive=\"active\" routerLink=\"/directives\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                    <span class=\"nav-label\">directives</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n                \r\n            </li>\r\n          \r\n            <li>\r\n                <a routerLinkActive=\"active\" routerLink=\"/Pipes-Ex\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                    <span class=\"nav-label\">Pipes</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n                \r\n            </li>\r\n                        \r\n            <!-- <li>\r\n                    <a routerLinkActive=\"active\" routerLink=\"/templates\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                        <span class=\"nav-label\">Templates</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n                    \r\n                </li>           -->\r\n                <li>\r\n                        <a routerLinkActive=\"active\" routerLink=\"/formsnew\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                            <span class=\"nav-label\">Forms</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n                        \r\n                    </li> \r\n                    <li>\r\n                            <a routerLinkActive=\"active\" routerLink=\"/materialnew\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                                <span class=\"nav-label\">Materials</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n                            \r\n                        </li> \r\n                        <li>\r\n                                <a routerLinkActive=\"active\" routerLink=\"/serivcenew\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                                    <span class=\"nav-label\">Services</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n                                \r\n                            </li> \r\n                             \r\n                        <li>\r\n                                <a routerLinkActive=\"active\" routerLink=\"/httpDemo\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                                    <span class=\"nav-label\">Http Services</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n                                \r\n                            </li> \r\n                            <li>\r\n                                <a routerLinkActive=\"active\" routerLink=\"/curd\"><i class=\"sidebar-item-icon fa fa-sitemap\"></i>\r\n                                    <span class=\"nav-label\">Crud Operations</span><i class=\"fa fa-angle-left arrow\"></i></a>\r\n                                \r\n                            </li> \r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Layouts/layouts.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Layouts/layouts.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START HEADER-->\r\n<!-- <header class=\"header\" user-header></header> -->\r\n<header class=\"header\" app-header></header>\r\n\r\n<!-- END HEADER-->\r\n<!-- START SIDEBAR-->\r\n<nav class=\"page-sidebar\" id=\"sidebar\" app-sidebar></nav>\r\n<!-- <nav class=\"page-sidebar\" id=\"sidebar\" app-users></nav> -->\r\n\r\n<!-- END SIDEBAR-->\r\n\r\n<!-- START PAGE CONTENT-->\r\n<div class=\"content-wrapper\">\r\n\t<router-outlet></router-outlet>\r\n    <div app-banner></div>\r\n    <footer class=\"page-footer\" app-footer></footer>\r\n</div>\r\n<!-- END PAGE CONTENT-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dataBinding/dataBinding.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dataBinding/dataBinding.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Data Binding</h3> \r\n<br>\r\n<br>\r\n<p>Data Binding is available right from AngularJS, and all the versions of Angular released later on. \r\n    We use curly braces for data binding - <span>{{</span> <span> }} </span>; this process is called interpolation.\r\n     We have already seen in our previous examples how we declared the value to the variable title and the same is printed in \r\n     the browser.\r\n     <br>\r\n     <br>\r\n\r\nThe variable in the <b>app.component.html</b> file is referred as {{title}} and the value of title is initialized in the \r\n<b>app.component.ts</b> file and in <b>app.component.html</b>, the value is displayed.\r\n<br>\r\n<br>\r\nLet us now create a dropdown of months in the browser. \r\nTo do that, we have created an array of months in app.component.ts as follows −\r\n\r\n<img src=\"../../assets/img/data-binding.JPG\">\r\n<br><br>\r\nThe month’s array that is shown above is to be displayed in a dropdown in the browser.\r\n<br>\r\n<br>\r\nWe have created the normal select tag with option. In option, we have used the for loop. \r\nThe for loop is used to iterate over the months’ array,\r\n which in turn will create the option tag with the value present in the months.\r\n<br>\r\n<br>\r\nThe syntax for in Angular is as follows −\r\n<br><br>\r\n\r\n<img src=\"../../assets//img/data-binding 2.JPG\">\r\n\r\n<br>\r\n<br>\r\nand to get the value of months we are displaying it in −\r\n\r\n<br>\r\n<br>\r\n<img src=\"../../assets//img//data-binding 3.JPG\">\r\n\r\n<br>\r\n<br>\r\n\r\nThe two curly brackets help with data binding. \r\nYou declare the variables in your app.component.ts file and the same will be replaced using the curly brackets.\r\n\r\nFollowing is the output of the above month’s array in the browser −\r\n\r\n<br>\r\n<br>\r\n<img src=\"../../assets//img/data-binding 4.JPG\">\r\n<br>\r\n<br>\r\n\r\nThe variable that is set in the <b>app.component.ts</b> can be binded inside the <b>app.component.html</b>\r\n using the curly brackets. For example: <span>{{</span><span>}}</span>.\r\n<br>\r\n<br>\r\n\r\nLet us now display the data in the browser based on condition. Here, \r\nwe have added a variable and assigned the value as true. Using the if statement, \r\nwe can hide/show the content to be displayed.\r\n<br>\r\n<br>\r\n\r\n<b> Example </b>\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/data-binding 5.JPG\">\r\n\r\n<br>\r\n<br>\r\n\r\n<img src=\"../../assets/img/data-binding 6.JPG\">\r\n\r\n<br>\r\n<br>\r\n\r\n<img src=\"../../assets/img/data-binding 7.JPG\">\r\n\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/event/event.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event/event.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Event Binding</h3> \r\n<br>\r\n<br>\r\n\r\n<p> \r\n        we will discuss how Event Binding works in Angular 8. \r\n        When a user interacts with an application in the form of a keyboard movement, \r\n        a mouse click, or a mouse over, it generates an event. \r\n        These events need to be handled to perform some kind of action. This is where event binding comes into picture.\r\n\r\n        <br>\r\n        <br>\r\n        Let us consider an example to understand this better.\r\n\r\n        <br>\r\n        <br>\r\n\r\n        <img src=\"../../assets/img/event biniding.JPG\">\r\n\r\n        <br>\r\n        <br>\r\n        In the <b>app.component.html</b> file, we have defined a button and added a function to it using the click event.\r\n<br>\r\n<br>\r\nFollowing is the syntax to define a button and add a function to it.\r\n\r\n<br>\r\n<br>\r\n\r\n<img src=\"../../assets/img/event biniding 1.JPG\">\r\n\r\n<br>\r\n<br>\r\nThe function is defined in :<b>app.component.ts</b>\r\n<br>\r\n<br>\r\n\r\n<img src=\"../../assets/img/event biniding 2.JPG\">\r\n<br>\r\n<br>\r\nUpon clicking the button, the control will come to the function\r\n myClickFunction and a dialog box will appear,\r\n  which displays the Button is clicked as shown in the following screenshot −\r\n\r\n  <br>\r\n  <br>\r\n  <img src=\"../../assets/img/event biniding 3.JPG\">\r\n\r\n  <br>\r\n  <br>\r\n  The styling for button is added in add.component.css −\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/event biniding 4.JPG\">\r\n<br>\r\n<br>\r\n\r\nLet us now add the onchange event to the dropdown.\r\n<br>\r\n<br>\r\n\r\nThe following line of code will help you add the change event to the dropdown −\r\n<br>\r\n<br>\r\n<b>app.component.html</b>\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/event biniding 5.JPG\">\r\n\r\n<br><br>\r\n<img src=\"../../assets/img/event biniding 6.JPG\">\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/event biniding 7.JPG\">\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/event biniding 8.JPG\">\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/event biniding 9.JPG\">\r\n<br><br>\r\n</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ex-directives/ex-directives.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ex-directives/ex-directives.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Directives </h1>\r\n<br>\r\n<br>\r\n<p> <b>Component Directives </b>\r\n  <br>\r\n  <br>\r\n    These form the main class having details of how the component should be processed, instantiated and used at runtime. \r\n    \r\n    <br>\r\n    <br>\r\n\r\n  <b>  Structural Directives </b>\r\n\r\n  <br>\r\n  <br>\r\n\r\n    A structure directive basically deals with manipulating the dom elements.\r\n     Structural directives have a * sign before the directive. For example, *ngIf and *ngFor. \r\n<br>\r\n<br>\r\n\r\n<b> Example </b>\r\n<br>\r\n<br>\r\n <b> Structural Directives </b>\r\n <br><br>\r\n </p>\r\n<div > \r\n<b> Months of the Year</b> \r\n<br>\r\n<br>\r\n<table >\r\n    <tr>\r\n    <th>Numeric </th>\r\n    <th>Month</th>\r\n</tr>\r\n<tr *ngFor=\"let monthName of exMonths\">\r\n    <td>{{ monthName.Sl_no }}</td>\r\n    <td>{{ monthName.Months }}</td>\r\n</tr>\r\n</table>\r\n\r\n\r\n</div> \r\n<br><br>\r\n<button type=\"button\" (click)=\"onClickFunction()\">NgIf </button>\r\n<br>\r\n<br>\r\n<b> Example on *ngIf </b> \r\n<div *ngIf=\"isDisable!=true\"> <br><br>\r\n  <p> Ngif based on condition </p>\r\n</div>\r\n\r\n<div *ngIf=\"isDisable==true\"> \r\n  <p> ngif based on checking condition\r\n    </p>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ex-pipes/ex-pipes.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ex-pipes/ex-pipes.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <h4>Pipes </h4>\r\n   <p> Pipes were earlier called filters in Angular1 and called pipes from Angular2 onwards.\r\n\r\nThe | character is used to transform data. Following is the syntax for the same −\r\n</p>\r\n<span>{{</span> Welcome to Angular 7 | lowercase <span>}}</span>\r\n<p>It takes integers, strings, arrays, and date as input separated with | \r\n    to be converted in the format as required and display the same in the browser.</p>\r\n    <ul>\r\n        <li>Lowercasepipe</li>\r\n        <li>Uppercasepipe</li>\r\n        <li>Datepipe</li>\r\n        <li>Currencypipe</li>\r\n        <li>Jsonpipe</li>\r\n        <li>Percentpipe</li>\r\n        <li>Decimalpipe</li>\r\n        <li>Slicepipe</li>\r\n    </ul>\r\n<p>Examples </p>\r\n\r\n<!--The content below is only a placeholder and can be replaced.--> \r\n<div style = \"width:100%;\"> \r\n        <div style = \"width:40%;float:left;border:solid 1px black;\"> \r\n           <h1>Uppercase Pipe</h1> \r\n           <b>{{title | uppercase}}</b>\r\n           <br/> \r\n           \r\n           <h1>Lowercase Pipe</h1> \r\n           <b>{{title | lowercase}}</b> \r\n           <h1>Currency Pipe</h1> \r\n           <b>{{6589.23 | currency:\"INR\"}}</b>\r\n           <br/> \r\n           \r\n           <b>{{6589.23 | currency:\"USD\"}}</b> \r\n            \r\n           <h1>Date pipe</h1> \r\n           <b>{{todaydate | date:'d/M/y'}}</b>\r\n           <br/> \r\n           \r\n           <b>{{todaydate | date:'shortTime'}}</b> \r\n           <h1>Decimal Pipe</h1> \r\n           <b>{{ 454.78787814 | number: '3.4-4' }}</b> \r\n           // 3 is for main integer, 4 -4 are for integers to be displayed. \r\n        </div> \r\n        \r\n        <div style = \"width:40%;float:left;border:solid 1px black;\"> \r\n           <h1>Json Pipe</h1> \r\n           <b>{{ jsonval | json }}</b>\r\n           <h1>Percent Pipe</h1> \r\n           <b>{{00.54565 | percent}}</b> \r\n           <h1>Slice Pipe</h1> \r\n           <b>{{months | slice:2:6}}</b> \r\n           // here 2 and 6 refers to the start and the end index \r\n        </div> \r\n     </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example/crud/crud.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example/crud/crud.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> Crud Operations</h3>\r\n\r\n<br>\r\n<br>\r\n<nav> \r\n    <a routerLink = \"/curd-post\">Post</a> \r\n    <a routerLink = \"/curd-get\">Get/Delete/Put </a> \r\n </nav> \r\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example/curd-get/curd-get.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example/curd-get/curd-get.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h3 > Get Method using FireBase Database </h3>\r\n\r\n\r\n\r\n<table class=\"table table-striped table-bordered table-hover\"  id=\"example-table\" cellspacing=\"0\" width=\"100% auto\">\r\n        <thead>\r\n            <tr>\r\n                <th>User Name</th>\r\n                <th>First Name</th>\r\n                <th>Last name</th>\r\n                <th>Email Id</th>\r\n                <th>Password</th>\r\n                <th>Action</th>\r\n            </tr>\r\n        </thead>\r\n            <tbody *ngFor=\"let userD of userData;let nu=index\">\r\n\r\n                    <tr>\r\n                            <td> {{ userD.userName }} </td>\r\n                            <td> {{ userD.firstName }}</td>\r\n                            <td>{{ userD.lastName }} </td> \r\n                            <td>{{ userD.email }} </td>\r\n                            <td>{{ userD.password }} </td>\r\n                           <td>\r\n                            <button type=\"button\" value=\"edit\"><a routerLink=\"/curd-put/{{nu}}\">edit</a></button>\r\n                            <button type=\"button\" value=\"delete\" ><a (click)=\"onDelete(userD.id)\" style=\"color:lightseagreen\" >delete</a> </button> \r\n\r\n                                    \r\n                           </td>\r\n                        </tr>\r\n\r\n    </tbody>\r\n    </table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example/curd-post/curd-post.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example/curd-post/curd-post.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Post Method using Template Driven Forms</h4>\r\n<br>\r\n<br>\r\n<form #postData=\"ngForm\" (ngSubmit)=\"save(postData.value)\">\r\n    <table>\r\n        <tr><td>\r\n    <label>User Name: </label></td>\r\n    <td><input type=\"text\" name=\"userName\" id=\"userName\"  placeholder=\"User Name\" ngModel><br/></td></tr>\r\n<tr><td>\r\n    <label>First Name: </label>\r\n</td>\r\n<td>  <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" ngModel><br/></td></tr>\r\n<tr>\r\n  <td>  <label>Last Name: </label></td>\r\n  <td>\r\n    <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" ngModel><br/></td></tr>\r\n<tr><td>\r\n    <label>Email Id : </label></td>\r\n    <td>\r\n\r\n    <input type=\"text\" name=\"email\" placeholder=\"Email id\" ngModel><br/></td></tr>\r\n<tr><td>\r\n    <label>Password: </label></td>\r\n    <td>\r\n    <input type=\"password\" name=\"password\" placeholder=\"password\" ngModel><br/></td></tr>\r\n<tr><td></td>\r\n    <td> \r\n\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"post\"></td></tr>\r\n        \r\n</table>\r\n    </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/example/curd-put/curd-put.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/example/curd-put/curd-put.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h3> Edit Form Data Using Mock Servers </h3> \r\n\r\n<div> \r\n    <form [formGroup] = \"formdata\" (ngSubmit) = \"onClickSubmit(formdata)\" > \r\n        <table>\r\n            <tr>\r\n                <td>\r\n            <label>User Name </label>\r\n        </td>\r\n    <td>\r\n       <input type = \"text\" class = \"fortextbox\" name = \"userName\" placeholder = \"userName\" \r\n          formControlName = \"userName\"> \r\n        </td>\r\n        </tr>\r\n    <tr>\r\n        <td><label>First Name</label></td>\r\n    <td>\r\n       <input type = \"text\" class = \"fortextbox\" name = \"firstName\" placeholder = \"firstName\" \r\n          formControlName = \"firstName\"> \r\n        </td>\r\n        </tr>\r\n<tr>\r\n    <td><label> Last Name</label></td>\r\n<td> <input type = \"text\" class = \"fortextbox\" name = \"lastName\" placeholder = \"lastName\" \r\n          formControlName = \"lastName\"> \r\n        </td>\r\n        </tr>\r\n<tr>\r\n    <td> <label> Email </label> </td>\r\n    <td>\r\n       <input type = \"text\" class = \"fortextbox\" name = \"email\" placeholder = \"email\" \r\n          formControlName = \"email\"> \r\n        </td>\r\n        </tr>\r\n<tr>\r\n    <td><label> password </label></td>\r\n    <td>\r\n       <input type = \"password\" class = \"fortextbox\" name = \"password\" \r\n          placeholder = \"password\" formControlName = \"password\"> \r\n        </td>\r\n    </tr>\r\n    <tr></tr>\r\n<tr>\r\n    <td></td>\r\n    <td>\r\n       <input type = \"submit\" class = \"forsubmit\" value = \"Update\"> \r\n    </td>\r\n    </tr>\r\n    </table>\r\n    </form>\r\n </div> \r\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/http-demo/http-demo.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/http-demo/http-demo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>http-demo works!</p>\r\n<h3>Users Data</h3>\r\n<ul>\r\n   <li *ngFor=\"let item of persondata; let i = index\">\r\n      {{item.name}}\r\n   </li>\r\n</ul>\r\n\r\n<h3>Email Data</h3>\r\n<ul>\r\n   <li *ngFor=\"let item of persondata; let i = index\">\r\n      {{item.email}}\r\n   </li>\r\n</ul>\r\n<h3>UserName Data</h3>\r\n<ul>\r\n   <li *ngFor=\"let item of persondata; let i = index\">\r\n      {{item.username}}\r\n   </li>\r\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h2 align=\"center\">Welcome to Angular 8 </h2>\r\n<br>\r\n<br>\r\n\r\n<p align=\"justify\">\r\n        Angular 8 is an open source JavaScript framework for building web applications and apps in JavaScript, \r\n        html, and Typescript which is a superset of JavaScript. Angular provides built-in features for animation, \r\n        http service, and materials which in turn have features such as auto-complete, navigation, toolbar, menus, etc.\r\n        The code is written in Typescript, which compiles to JavaScript and displays the same in the browser.  \r\n</p>\r\n\r\n\r\n<p align=\"justify\">\r\n        Angular 8 is owned by Google and the stable release was done on 28th May 2019. This is the latest version of Angular.\r\n</p>\r\n\r\n<table class=\"table\" align=\"center\">\r\n    <tr align=\"center\">\r\n        <th>\r\n            Versions\r\n        </th>\r\n        <th>\r\n            Release  Date\r\n        </th>\r\n    </tr>\r\n    <tr align=\"center\">\r\n        <td> AngularJs</td>\r\n        <td> October 2010 </td>\r\n    </tr>\r\n    <tr align=\"center\">\r\n        <td> Angular 2</td>\r\n        <td> Sept 2016 </td>\r\n    </tr>\r\n    <tr align=\"center\">\r\n            <td> Angular 4</td>\r\n            <td> March 2017 </td>\r\n        </tr>\r\n        <tr align=\"center\">\r\n                <td> Angular 5</td>\r\n                <td> November 2017</td>\r\n            </tr>\r\n            <tr align=\"center\">\r\n                    <td> Angular 6</td>\r\n                    <td> May 2018</td>\r\n                </tr>\r\n                <tr align=\"center\">\r\n                        <td> Angular 7</td>\r\n                        <td> October 2018</td>\r\n                    </tr>\r\n                    <tr align=\"center\">\r\n                            <td> Angular 8</td>\r\n                            <td> May 2019 </td>\r\n                        </tr>\r\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-google/login-google.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-google/login-google.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login-google works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n            <div class=\"card card-signin my-5\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title text-center\">Sign In as Admin </h5>\r\n                <form #LoginData=\"ngForm\" (ngSubmit)=\"onclickSubmit(LoginData)\" >\r\n                        <div class=\"form-group\">\r\n                        <label>User Name</label>\r\n\r\n                    <input type=\"text\" id=\"userName\" class=\"form-control\" name=\"userName\" placeholder=\"User Name \" required ngModel >\r\n                  </div>\r\n    \r\n                  <div class=\"form-group\">\r\n                    <label>Password</label>\r\n                    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required ngModel>\r\n                  </div>\r\n    \r\n             \r\n                  <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\r\n                  </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/materials-demo/materials-demo.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/materials-demo/materials-demo.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n\r\n\r\n\r\n<form class=\"example-form\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\r\n        </mat-form-field>\r\n      \r\n        <mat-form-field class=\"example-full-width\">\r\n          <textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n        </mat-form-field>\r\n      </form>\r\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/module/module.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/module/module.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Module </h2>\r\n<p>\r\nModule in Angular refers to a place where you can group the components,\r\n directives, pipes, and services, which are related to the application.<br/><br/>\r\n\r\nIn case you are developing a website, the header, footer, left, center and the right section\r\n become part of a module.<br/><br/>\r\n\r\nTo define module, we can use the NgModule. When you create a new project using \r\nthe Angular –cli command, the ngmodule is created in the app.module.ts file by default</p>\r\n\r\n<img src=\"../../assets/img/module.JPG\"/>\r\n<br/>\r\n<br/>\r\n<p>\r\nThe NgModule needs to be imported as follows −\r\n<br/>\r\n<br/>\r\n<img src=\"../../assets/img/module 2.JPG\"/><br/>\r\n<br>\r\n\r\nThe structure for the ngmodule is as shown below −\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/module 3.JPG\">\r\n<br>\r\n<br>\r\nIt starts with @NgModule and contains an object which has declarations, imports, providers and bootstrap.\r\n<br/>\r\n<br>\r\n<b> Declaration </b>\r\n<br>\r\n<br>\r\nIt is an array of components created. If any new component gets created, \r\nit will be imported first and the reference will be included in declarations as shown below −\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/module 4.JPG\">\r\n<br>\r\n<br>\r\n\r\n<b>Import</b>\r\n<br>\r\n<br>\r\nIt is an array of modules required to be used in the application. \r\nIt can also be used by the components in the Declaration array.\r\n For example, right now in the @NgModule, we see the Browser Module imported. \r\n In case your application needs forms, you can include the module with the below code −\r\n\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/module 5.JPG\">\r\n<br>\r\n<br>\r\nThe import in the @NgModule will be like the following −\r\n<br>\r\n<br>\r\n<img src=\"../../assets/img/module 6.JPG\">\r\n<br>\r\n<br>\r\n\r\n<b>Providers</b>\r\n<br>\r\n<br>\r\nThis will include the services created.\r\n<br>\r\n<br>\r\n<b>Bootstrap</b><br/>\r\n<br/>\r\nThis includes the main app component for starting the execution.</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reactive-form/reactive-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reactive-form/reactive-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \r\n        <form [formGroup] = \"formdata\" (ngSubmit) = \"onClickSubmit(formdata.value)\" > \r\n           <input type = \"text\" class = \"fortextbox\" name = \"emailid\" placeholder = \"emailid\" \r\n              formControlName = \"emailid\"> \r\n           <br/> \r\n           \r\n           <input type = \"password\" class = \"fortextbox\" name = \"passwd\" \r\n              placeholder = \"passwd\" formControlName = \"passwd\"> \r\n           <br/>\r\n           \r\n           <input type = \"submit\" class = \"forsubmit\" value = \"Log In\"> \r\n        </form>\r\n     </div> \r\n     <p> Email entered is : {{emailid}} </p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/router-demo/router-demo.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/router-demo/router-demo.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Routers</h4>\r\n\r\n<p>Routing basically means navigating between pages. You have seen many sites with links that direct you to a new page.\r\n     This can be achieved using routing. Here the pages that we are referring to will be in the form of components.\r\n      We have already seen how to create a component. Let us now create a component and see how to use routing with it.</p>\r\n\r\n\r\n<h4> Example </h4>\r\n\r\n<nav> \r\n   <a routerLink = \"/Home\">Home</a> \r\n   <a routerLink = \"/routersnew\">Index </a> \r\n</nav> \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/services-demo/services-demo.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/services-demo/services-demo.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>services-demo works!</p>\r\n<button type=\"button\" (click)=\"Hello()\">Click Me</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/temp-form/temp-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/temp-form/temp-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Example </h4>\r\n\r\n<nav> \r\n   <a routerLink = \"/templateDriven\">Template driven form\r\n    </a> \r\n   <a routerLink = \"/reactiveforms\">Model driven form </a> \r\n</nav> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/template-driven-form/template-driven-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/template-driven-form/template-driven-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #userlogin = \"ngForm\" (ngSubmit) = \"onClickSubmit(userlogin)\"> \r\n        <input type = \"text\" name = \"emailid\" placeholder = \"emailid\"\r\n         ngModel> \r\n        <br/> \r\n        <input type = \"password\" name = \"passwd\" placeholder = \"passwd\"\r\n         ngModel> \r\n        <br/> \r\n        <input type = \"submit\" value = \"submit\"> \r\n</form>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templatestags/templatestags.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templatestags/templatestags.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Templates</h3>\r\n<p>\r\n    Angular 7 uses the \r\n    \"ng-template\" as the tag instead of \"template\"which is used in Angular2. \r\n        \"ng-template\" has been in use since the release of Angular 4 , and the earlier version i.e Angular 2 uses \r\n            \"template\" for the same purpose. The reason it started to use \r\n                \"ng-template\" instead of \r\n                    \"template\" from Angular 4 onwards is because there is a name conflict between the \"template\"\r\n                         tag and the html \"template\" standard tag. It will deprecate completely going ahead.\r\n                              This was one of the major changes made in Angular 4 version.\r\n    \r\n</p>\r\n\r\n<h4> Examples </h4>\r\n\r\n<!--The content below is only a placeholder and can be replaced.--> \r\n\r\n     <div> Months : \r\n        <select (change) = \"changemonths($event)\" name = \"month\"> \r\n           <option *ngFor = \"let i of months\">{{i}}</option>\r\n        </select> \r\n     </div> \r\n     <br/>\r\n     \r\n     <div> \r\n        <span *ngIf = \"isavailable; else condition2\">\r\n           Condition is valid.\r\n        </span>\r\n        <ng-template #condition1>Condition is valid from template </ng-template> \r\n        <ng-template #condition2>Condition is invalid from template</ng-template> \r\n     </div>\r\n     <button (click) = \"myClickFunction($event)\">Click Me</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/templete-demo/templete-demo.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/templete-demo/templete-demo.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <!--==========================\r\n  Header\r\n  ============================-->\r\n  <header id=\"header\" class=\"fixed-top\">\r\n        <div class=\"container\">\r\n    \r\n          <div class=\"logo float-left\">\r\n            <!-- Uncomment below if you prefer to use an image logo -->\r\n            <!-- <h1 class=\"text-light\"><a href=\"#header\"><span>NewBiz</span></a></h1> -->\r\n            <a href=\"#intro\" class=\"scrollto\"><img src=\"img/logo.png\" alt=\"\" class=\"img-fluid\"></a>\r\n          </div>\r\n    \r\n          <nav class=\"main-nav float-right d-none d-lg-block\">\r\n            <ul>\r\n              <li class=\"active\"><a href=\"#intro\">Home</a></li>\r\n              <li><a href=\"#about\">About Us</a></li>\r\n              <li><a href=\"#services\">Services</a></li>\r\n              <li><a href=\"#portfolio\">Portfolio</a></li>\r\n              <li><a href=\"#team\">Team</a></li>\r\n              <li class=\"drop-down\"><a href=\"\">Drop Down</a>\r\n                <ul>\r\n                  <li><a href=\"#\">Drop Down 1</a></li>\r\n                  <li class=\"drop-down\"><a href=\"#\">Drop Down 2</a>\r\n                    <ul>\r\n                      <li><a href=\"#\">Deep Drop Down 1</a></li>\r\n                      <li><a href=\"#\">Deep Drop Down 2</a></li>\r\n                      <li><a href=\"#\">Deep Drop Down 3</a></li>\r\n                      <li><a href=\"#\">Deep Drop Down 4</a></li>\r\n                      <li><a href=\"#\">Deep Drop Down 5</a></li>\r\n                    </ul>\r\n                  </li>\r\n                  <li><a href=\"#\">Drop Down 3</a></li>\r\n                  <li><a href=\"#\">Drop Down 4</a></li>\r\n                  <li><a href=\"#\">Drop Down 5</a></li>\r\n                </ul>\r\n              </li>\r\n              <li><a href=\"#contact\">Contact Us</a></li>\r\n            </ul>\r\n          </nav><!-- .main-nav -->\r\n          \r\n        </div>\r\n      </header><!-- #header -->\r\n    \r\n      <!--==========================\r\n        Intro Section\r\n      ============================-->\r\n      <section id=\"intro\" class=\"clearfix\">\r\n        <div class=\"container\">\r\n    \r\n          <div class=\"intro-img\">\r\n            <img src=\"img/intro-img.svg\" alt=\"\" class=\"img-fluid\">\r\n          </div>\r\n    \r\n          <div class=\"intro-info\">\r\n            <h2>We provide<br><span>solutions</span><br>for your business!</h2>\r\n            <div>\r\n              <a href=\"#about\" class=\"btn-get-started scrollto\">Get Started</a>\r\n              <a href=\"#services\" class=\"btn-services scrollto\">Our Services</a>\r\n            </div>\r\n          </div>\r\n    \r\n        </div>\r\n      </section><!-- #intro -->\r\n    \r\n      <main id=\"main\">\r\n    \r\n        <!--==========================\r\n          About Us Section\r\n        ============================-->\r\n        <section id=\"about\">\r\n          <div class=\"container\">\r\n    \r\n            <header class=\"section-header\">\r\n              <h3>About Us</h3>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n            </header>\r\n    \r\n            <div class=\"row about-container\">\r\n    \r\n              <div class=\"col-lg-6 content order-lg-1 order-2\">\r\n                <p>\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                </p>\r\n    \r\n                <div class=\"icon-box wow fadeInUp\">\r\n                  <div class=\"icon\"><i class=\"fa fa-shopping-bag\"></i></div>\r\n                  <h4 class=\"title\"><a href=\"\">Eiusmod Tempor</a></h4>\r\n                  <p class=\"description\">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>\r\n                </div>\r\n    \r\n                <div class=\"icon-box wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n                  <div class=\"icon\"><i class=\"fa fa-photo\"></i></div>\r\n                  <h4 class=\"title\"><a href=\"\">Magni Dolores</a></h4>\r\n                  <p class=\"description\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n                </div>\r\n    \r\n                <div class=\"icon-box wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n                  <div class=\"icon\"><i class=\"fa fa-bar-chart\"></i></div>\r\n                  <h4 class=\"title\"><a href=\"\">Dolor Sitema</a></h4>\r\n                  <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\r\n                </div>\r\n    \r\n              </div>\r\n    \r\n              <div class=\"col-lg-6 background order-lg-2 order-1 wow fadeInUp\">\r\n                <img src=\"img/about-img.svg\" class=\"img-fluid\" alt=\"\">\r\n              </div>\r\n            </div>\r\n    \r\n            <div class=\"row about-extra\">\r\n              <div class=\"col-lg-6 wow fadeInUp\">\r\n                <img src=\"img/about-extra-1.svg\" class=\"img-fluid\" alt=\"\">\r\n              </div>\r\n              <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0\">\r\n                <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>\r\n                <p>\r\n                  Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.\r\n                </p>\r\n                <p>\r\n                  Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.\r\n                </p>\r\n              </div>\r\n            </div>\r\n    \r\n            <div class=\"row about-extra\">\r\n              <div class=\"col-lg-6 wow fadeInUp order-1 order-lg-2\">\r\n                <img src=\"img/about-extra-2.svg\" class=\"img-fluid\" alt=\"\">\r\n              </div>\r\n    \r\n              <div class=\"col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1\">\r\n                <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>\r\n                <p>\r\n                 Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. \r\n                </p>\r\n                <p>\r\n                  Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.\r\n                </p>\r\n                <p>\r\n                  Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.\r\n                </p>\r\n              </div>\r\n              \r\n            </div>\r\n    \r\n          </div>\r\n        </section><!-- #about -->\r\n    \r\n        <!--==========================\r\n          Services Section\r\n        ============================-->\r\n        <section id=\"services\" class=\"section-bg\">\r\n          <div class=\"container\">\r\n    \r\n            <header class=\"section-header\">\r\n              <h3>Services</h3>\r\n              <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>\r\n            </header>\r\n    \r\n            <div class=\"row\">\r\n    \r\n              <div class=\"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp\" data-wow-duration=\"1.4s\">\r\n                <div class=\"box\">\r\n                  <div class=\"icon\"><i class=\"ion-ios-analytics-outline\" style=\"color: #ff689b;\"></i></div>\r\n                  <h4 class=\"title\"><a href=\"\">Lorem Ipsum</a></h4>\r\n                  <p class=\"description\">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-lg-5 wow bounceInUp\" data-wow-duration=\"1.4s\">\r\n                <div class=\"box\">\r\n                  <div class=\"icon\"><i class=\"ion-ios-bookmarks-outline\" style=\"color: #e9bf06;\"></i></div>\r\n                  <h4 class=\"title\"><a href=\"\">Dolor Sitema</a></h4>\r\n                  <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\r\n                <div class=\"box\">\r\n                  <div class=\"icon\"><i class=\"ion-ios-paper-outline\" style=\"color: #3fcdc7;\"></i></div>\r\n                  <h4 class=\"title\"><a href=\"\">Sed ut perspiciatis</a></h4>\r\n                  <p class=\"description\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-lg-5 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\r\n                <div class=\"box\">\r\n                  <div class=\"icon\"><i class=\"ion-ios-speedometer-outline\" style=\"color:#41cf2e;\"></i></div>\r\n                  <h4 class=\"title\"><a href=\"\">Magni Dolores</a></h4>\r\n                  <p class=\"description\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\r\n                <div class=\"box\">\r\n                  <div class=\"icon\"><i class=\"ion-ios-world-outline\" style=\"color: #d6ff22;\"></i></div>\r\n                  <h4 class=\"title\"><a href=\"\">Nemo Enim</a></h4>\r\n                  <p class=\"description\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-lg-5 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\r\n                <div class=\"box\">\r\n                  <div class=\"icon\"><i class=\"ion-ios-clock-outline\" style=\"color: #4680ff;\"></i></div>\r\n                  <h4 class=\"title\"><a href=\"\">Eiusmod Tempor</a></h4>\r\n                  <p class=\"description\">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>\r\n                </div>\r\n              </div>\r\n    \r\n            </div>\r\n    \r\n          </div>\r\n        </section><!-- #services -->\r\n    \r\n        <!--==========================\r\n          Why Us Section\r\n        ============================-->\r\n        <section id=\"why-us\" class=\"wow fadeIn\">\r\n          <div class=\"container\">\r\n            <header class=\"section-header\">\r\n              <h3>Why choose us?</h3>\r\n              <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>\r\n            </header>\r\n    \r\n            <div class=\"row row-eq-height justify-content-center\">\r\n    \r\n              <div class=\"col-lg-4 mb-4\">\r\n                <div class=\"card wow bounceInUp\">\r\n                    <i class=\"fa fa-diamond\"></i>\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Corporis dolorem</h5>\r\n                    <p class=\"card-text\">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>\r\n                    <a href=\"#\" class=\"readmore\">Read more </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 mb-4\">\r\n                <div class=\"card wow bounceInUp\">\r\n                    <i class=\"fa fa-language\"></i>\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Voluptates dolores</h5>\r\n                    <p class=\"card-text\">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>\r\n                    <a href=\"#\" class=\"readmore\">Read more </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 mb-4\">\r\n                <div class=\"card wow bounceInUp\">\r\n                    <i class=\"fa fa-object-group\"></i>\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Eum ut aspernatur</h5>\r\n                    <p class=\"card-text\">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>\r\n                    <a href=\"#\" class=\"readmore\">Read more </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n            </div>\r\n    \r\n            <div class=\"row counters\">\r\n    \r\n              <div class=\"col-lg-3 col-6 text-center\">\r\n                <span data-toggle=\"counter-up\">274</span>\r\n                <p>Clients</p>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-3 col-6 text-center\">\r\n                <span data-toggle=\"counter-up\">421</span>\r\n                <p>Projects</p>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-3 col-6 text-center\">\r\n                <span data-toggle=\"counter-up\">1,364</span>\r\n                <p>Hours Of Support</p>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-3 col-6 text-center\">\r\n                <span data-toggle=\"counter-up\">18</span>\r\n                <p>Hard Workers</p>\r\n              </div>\r\n      \r\n            </div>\r\n    \r\n          </div>\r\n        </section>\r\n    \r\n        <!--==========================\r\n          Portfolio Section\r\n        ============================-->\r\n        <section id=\"portfolio\" class=\"clearfix\">\r\n          <div class=\"container\">\r\n    \r\n            <header class=\"section-header\">\r\n              <h3 class=\"section-title\">Our Portfolio</h3>\r\n            </header>\r\n    \r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12\">\r\n                <ul id=\"portfolio-flters\">\r\n                  <li data-filter=\"*\" class=\"filter-active\">All</li>\r\n                  <li data-filter=\".filter-app\">App</li>\r\n                  <li data-filter=\".filter-card\">Card</li>\r\n                  <li data-filter=\".filter-web\">Web</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n    \r\n            <div class=\"row portfolio-container\">\r\n    \r\n              <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\">\r\n                <div class=\"portfolio-wrap\">\r\n                  <img src=\"img/portfolio/app1.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">App 1</a></h4>\r\n                    <p>App</p>\r\n                    <div>\r\n                      <a href=\"img/portfolio/app1.jpg\" data-lightbox=\"portfolio\" data-title=\"App 1\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                      <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.1s\">\r\n                <div class=\"portfolio-wrap\">\r\n                  <img src=\"img/portfolio/web3.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">Web 3</a></h4>\r\n                    <p>Web</p>\r\n                    <div>\r\n                      <a href=\"img/portfolio/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                      <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\" data-wow-delay=\"0.2s\">\r\n                <div class=\"portfolio-wrap\">\r\n                  <img src=\"img/portfolio/app2.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">App 2</a></h4>\r\n                    <p>App</p>\r\n                    <div>\r\n                      <a href=\"img/portfolio/app2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                      <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\">\r\n                <div class=\"portfolio-wrap\">\r\n                  <img src=\"img/portfolio/card2.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">Card 2</a></h4>\r\n                    <p>Card</p>\r\n                    <div>\r\n                      <a href=\"img/portfolio/card2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                      <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.1s\">\r\n                <div class=\"portfolio-wrap\">\r\n                  <img src=\"img/portfolio/web2.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">Web 2</a></h4>\r\n                    <p>Web</p>\r\n                    <div>\r\n                      <a href=\"img/portfolio/web2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                      <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\" data-wow-delay=\"0.2s\">\r\n                <div class=\"portfolio-wrap\">\r\n                  <img src=\"img/portfolio/app3.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">App 3</a></h4>\r\n                    <p>App</p>\r\n                    <div>\r\n                      <a href=\"img/portfolio/app3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                      <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\">\r\n                <div class=\"portfolio-wrap\">\r\n                  <img src=\"img/portfolio/card1.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">Card 1</a></h4>\r\n                    <p>Card</p>\r\n                    <div>\r\n                      <a href=\"img/portfolio/card1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                      <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\" data-wow-delay=\"0.1s\">\r\n                <div class=\"portfolio-wrap\">\r\n                  <img src=\"img/portfolio/card3.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">Card 3</a></h4>\r\n                    <p>Card</p>\r\n                    <div>\r\n                      <a href=\"img/portfolio/card3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                      <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.2s\">\r\n                <div class=\"portfolio-wrap\">\r\n                  <img src=\"img/portfolio/web1.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">Web 1</a></h4>\r\n                    <p>Web</p>\r\n                    <div>\r\n                      <a href=\"img/portfolio/web1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                      <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n            </div>\r\n    \r\n          </div>\r\n        </section><!-- #portfolio -->\r\n    \r\n        <!--==========================\r\n          Clients Section\r\n        ============================-->\r\n        <section id=\"testimonials\" class=\"section-bg\">\r\n          <div class=\"container\">\r\n    \r\n            <header class=\"section-header\">\r\n              <h3>Testimonials</h3>\r\n            </header>\r\n    \r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-8\">\r\n    \r\n                <div class=\"owl-carousel testimonials-carousel wow fadeInUp\">\r\n        \r\n                  <div class=\"testimonial-item\">\r\n                    <img src=\"img/testimonial-1.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                    <h3>Saul Goodman</h3>\r\n                    <h4>Ceo &amp; Founder</h4>\r\n                    <p>\r\n                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\r\n                    </p>\r\n                  </div>\r\n        \r\n                  <div class=\"testimonial-item\">\r\n                    <img src=\"img/testimonial-2.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                    <h3>Sara Wilsson</h3>\r\n                    <h4>Designer</h4>\r\n                    <p>\r\n                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\r\n                    </p>\r\n                  </div>\r\n        \r\n                  <div class=\"testimonial-item\">\r\n                    <img src=\"img/testimonial-3.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                    <h3>Jena Karlis</h3>\r\n                    <h4>Store Owner</h4>\r\n                    <p>\r\n                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.\r\n                    </p>\r\n                  </div>\r\n        \r\n                  <div class=\"testimonial-item\">\r\n                    <img src=\"img/testimonial-4.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                    <h3>Matt Brandon</h3>\r\n                    <h4>Freelancer</h4>\r\n                    <p>\r\n                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.\r\n                    </p>\r\n                  </div>\r\n        \r\n                  <div class=\"testimonial-item\">\r\n                    <img src=\"img/testimonial-5.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                    <h3>John Larson</h3>\r\n                    <h4>Entrepreneur</h4>\r\n                    <p>\r\n                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.\r\n                    </p>\r\n                  </div>\r\n    \r\n                </div>\r\n    \r\n              </div>\r\n            </div>\r\n    \r\n    \r\n          </div>\r\n        </section><!-- #testimonials -->\r\n    \r\n        <!--==========================\r\n          Team Section\r\n        ============================-->\r\n        <section id=\"team\">\r\n          <div class=\"container\">\r\n            <div class=\"section-header\">\r\n              <h3>Team</h3>\r\n              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\r\n            </div>\r\n    \r\n            <div class=\"row\">\r\n    \r\n              <div class=\"col-lg-3 col-md-6 wow fadeInUp\">\r\n                <div class=\"member\">\r\n                  <img src=\"img/team-1.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"member-info\">\r\n                    <div class=\"member-info-content\">\r\n                      <h4>Walter White</h4>\r\n                      <span>Chief Executive Officer</span>\r\n                      <div class=\"social\">\r\n                        <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\r\n                <div class=\"member\">\r\n                  <img src=\"img/team-2.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"member-info\">\r\n                    <div class=\"member-info-content\">\r\n                      <h4>Sarah Jhonson</h4>\r\n                      <span>Product Manager</span>\r\n                      <div class=\"social\">\r\n                        <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n                <div class=\"member\">\r\n                  <img src=\"img/team-3.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"member-info\">\r\n                    <div class=\"member-info-content\">\r\n                      <h4>William Anderson</h4>\r\n                      <span>CTO</span>\r\n                      <div class=\"social\">\r\n                        <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.3s\">\r\n                <div class=\"member\">\r\n                  <img src=\"img/team-4.jpg\" class=\"img-fluid\" alt=\"\">\r\n                  <div class=\"member-info\">\r\n                    <div class=\"member-info-content\">\r\n                      <h4>Amanda Jepson</h4>\r\n                      <span>Accountant</span>\r\n                      <div class=\"social\">\r\n                        <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n            </div>\r\n    \r\n          </div>\r\n        </section><!-- #team -->\r\n    \r\n        <!--==========================\r\n          Clients Section\r\n        ============================-->\r\n        <section id=\"clients\" class=\"section-bg\">\r\n    \r\n          <div class=\"container\">\r\n    \r\n            <div class=\"section-header\">\r\n              <h3>Our CLients</h3>\r\n              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome nida.</p>\r\n            </div>\r\n    \r\n            <div class=\"row no-gutters clients-wrap clearfix wow fadeInUp\">\r\n    \r\n              <div class=\"col-lg-3 col-md-4 col-xs-6\">\r\n                <div class=\"client-logo\">\r\n                  <img src=\"img/clients/client-1.png\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"col-lg-3 col-md-4 col-xs-6\">\r\n                <div class=\"client-logo\">\r\n                  <img src=\"img/clients/client-2.png\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n              </div>\r\n            \r\n              <div class=\"col-lg-3 col-md-4 col-xs-6\">\r\n                <div class=\"client-logo\">\r\n                  <img src=\"img/clients/client-3.png\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"col-lg-3 col-md-4 col-xs-6\">\r\n                <div class=\"client-logo\">\r\n                  <img src=\"img/clients/client-4.png\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"col-lg-3 col-md-4 col-xs-6\">\r\n                <div class=\"client-logo\">\r\n                  <img src=\"img/clients/client-5.png\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n              </div>\r\n            \r\n              <div class=\"col-lg-3 col-md-4 col-xs-6\">\r\n                <div class=\"client-logo\">\r\n                  <img src=\"../../assets/img/clients/client-6.png\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"col-lg-3 col-md-4 col-xs-6\">\r\n                <div class=\"client-logo\">\r\n                  <img src=\"../../assets/img/clients/client-7.png\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"col-lg-3 col-md-4 col-xs-6\">\r\n                <div class=\"client-logo\">\r\n                  <img src=\"../../assets/img/clients/client-8.png\" class=\"img-fluid\" alt=\"\">\r\n                </div>\r\n              </div>\r\n    \r\n            </div>\r\n    \r\n          </div>\r\n    \r\n        </section>\r\n    \r\n        <!--==========================\r\n          Contact Section\r\n        ============================-->\r\n        <section id=\"contact\">\r\n          <div class=\"container-fluid\">\r\n    \r\n            <div class=\"section-header\">\r\n              <h3>Contact Us</h3>\r\n            </div>\r\n    \r\n            <div class=\"row wow fadeInUp\">\r\n    \r\n              <div class=\"col-lg-6\">\r\n                <div class=\"map mb-4 mb-lg-0\">\r\n                  <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621\" frameborder=\"0\" style=\"border:0; width: 100%; height: 312px;\" allowfullscreen></iframe>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-6\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-5 info\">\r\n                    <i class=\"ion-ios-location-outline\"></i>\r\n                    <p>A108 Adam Street, NY 535022</p>\r\n                  </div>\r\n                  <div class=\"col-md-4 info\">\r\n                    <i class=\"ion-ios-email-outline\"></i>\r\n                    <p>info@example.com</p>\r\n                  </div>\r\n                  <div class=\"col-md-3 info\">\r\n                    <i class=\"ion-ios-telephone-outline\"></i>\r\n                    <p>+1 5589 55488 55</p>\r\n                  </div>\r\n                </div>\r\n    \r\n                <div class=\"form\">\r\n                  <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\r\n                  <div id=\"errormessage\"></div>\r\n                  <form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\r\n                    <div class=\"form-row\">\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\r\n                        <div class=\"validation\"></div>\r\n                      </div>\r\n                      <div class=\"form-group col-lg-6\">\r\n                        <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\r\n                        <div class=\"validation\"></div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\r\n                      <div class=\"validation\"></div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <textarea class=\"form-control\" name=\"message\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\r\n                      <div class=\"validation\"></div>\r\n                    </div>\r\n                    <div class=\"text-center\"><button type=\"submit\" title=\"Send Message\">Send Message</button></div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n    \r\n            </div>\r\n    \r\n          </div>\r\n        </section><!-- #contact -->\r\n    \r\n      </main>\r\n    \r\n      <!--==========================\r\n        Footer\r\n      ============================-->\r\n      <footer id=\"footer\">\r\n        <div class=\"footer-top\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n    \r\n              <div class=\"col-lg-4 col-md-6 footer-info\">\r\n                <h3>NewBiz</h3>\r\n                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-2 col-md-6 footer-links\">\r\n                <h4>Useful Links</h4>\r\n                <ul>\r\n                  <li><a href=\"#\">Home</a></li>\r\n                  <li><a href=\"#\">About us</a></li>\r\n                  <li><a href=\"#\">Services</a></li>\r\n                  <li><a href=\"#\">Terms of service</a></li>\r\n                  <li><a href=\"#\">Privacy policy</a></li>\r\n                </ul>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-3 col-md-6 footer-contact\">\r\n                <h4>Contact Us</h4>\r\n                <p>\r\n                  A108 Adam Street <br>\r\n                  New York, NY 535022<br>\r\n                  United States <br>\r\n                  <strong>Phone:</strong> +1 5589 55488 55<br>\r\n                  <strong>Email:</strong> info@example.com<br>\r\n                </p>\r\n    \r\n                <div class=\"social-links\">\r\n                  <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n                  <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n                  <a href=\"#\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\r\n                  <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\r\n                  <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n    \r\n              </div>\r\n    \r\n              <div class=\"col-lg-3 col-md-6 footer-newsletter\">\r\n                <h4>Our Newsletter</h4>\r\n                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>\r\n                <form action=\"\" method=\"post\">\r\n                  <input type=\"email\" name=\"email\"><input type=\"submit\"  value=\"Subscribe\">\r\n                </form>\r\n              </div>\r\n    \r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n        <div class=\"container\">\r\n          <div class=\"copyright\">\r\n            &copy; Copyright <strong>NewBiz</strong>. All Rights Reserved\r\n          </div>\r\n          <div class=\"credits\">\r\n            <!--\r\n              All the links in the footer should remain intact.\r\n              You can delete the links only if you purchased the pro version.\r\n              Licensing information: https://bootstrapmade.com/license/\r\n              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz\r\n            -->\r\n            Designed by <a href=\"https://bootstrapmade.com/\">BootstrapMade</a>\r\n          </div>\r\n        </div>\r\n      </footer><!-- #footer -->\r\n    \r\n      <a href=\"#\" class=\"back-to-top\"><i class=\"fa fa-chevron-up\"></i></a>\r\n      <!-- Uncomment below i you want to use a preloader -->\r\n      <!-- <div id=\"preloader\"></div> -->"

/***/ }),

/***/ "./src/app/Components/Components.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Components/Components.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQ29tcG9uZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/Components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Components/Components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
        this.app = 'Angular';
    }
    ComponentsComponent.prototype.msg = function () {
        alert('Hello.....!!!!');
    };
    ComponentsComponent.prototype.ngOnInit = function () {
    };
    ComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-Components',
            template: __webpack_require__(/*! raw-loader!./Components.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/Components.component.html"),
            styles: [__webpack_require__(/*! ./Components.component.css */ "./src/app/Components/Components.component.css")]
        })
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/app-banner/app-banner.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Layouts/app-banner/app-banner.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvYXBwLWJhbm5lci9hcHAtYmFubmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Layouts/app-banner/app-banner.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Layouts/app-banner/app-banner.component.ts ***!
  \************************************************************/
/*! exports provided: AppBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBannerComponent", function() { return AppBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppBannerComponent = /** @class */ (function () {
    function AppBannerComponent() {
    }
    AppBannerComponent.prototype.ngOnInit = function () {
    };
    AppBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-banner]',
            template: __webpack_require__(/*! raw-loader!./app-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/Layouts/app-banner/app-banner.component.html"),
            styles: [__webpack_require__(/*! ./app-banner.component.css */ "./src/app/Layouts/app-banner/app-banner.component.css")]
        })
    ], AppBannerComponent);
    return AppBannerComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/app-footer/app-footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Layouts/app-footer/app-footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvYXBwLWZvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Layouts/app-footer/app-footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Layouts/app-footer/app-footer.component.ts ***!
  \************************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-footer]',
            template: __webpack_require__(/*! raw-loader!./app-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/Layouts/app-footer/app-footer.component.html"),
            styles: [__webpack_require__(/*! ./app-footer.component.css */ "./src/app/Layouts/app-footer/app-footer.component.css")]
        })
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/app-header/app-header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Layouts/app-header/app-header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Layouts/app-header/app-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Layouts/app-header/app-header.component.ts ***!
  \************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-header]',
            template: __webpack_require__(/*! raw-loader!./app-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/Layouts/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.css */ "./src/app/Layouts/app-header/app-header.component.css")]
        })
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/app-sidebar/app-sidebar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Layouts/app-sidebar/app-sidebar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xheW91dHMvYXBwLXNpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Layouts/app-sidebar/app-sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Layouts/app-sidebar/app-sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent() {
    }
    AppSidebarComponent.prototype.ngOnInit = function () {
    };
    AppSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-sidebar]',
            template: __webpack_require__(/*! raw-loader!./app-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/Layouts/app-sidebar/app-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./app-sidebar.component.css */ "./src/app/Layouts/app-sidebar/app-sidebar.component.css")]
        })
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/layouts.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Layouts/layouts.component.ts ***!
  \**********************************************/
/*! exports provided: LayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsComponent", function() { return LayoutsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutsComponent = /** @class */ (function () {
    function LayoutsComponent() {
    }
    LayoutsComponent.prototype.ngOnInit = function () {
    };
    LayoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layouts',
            template: __webpack_require__(/*! raw-loader!./layouts.component.html */ "./node_modules/raw-loader/index.js!./src/app/Layouts/layouts.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        })
    ], LayoutsComponent);
    return LayoutsComponent;
}());



/***/ }),

/***/ "./src/app/Layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//layouts.component */ "./src/app/Layouts/layouts.component.ts");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/Layouts/app-header/app-header.component.ts");
/* harmony import */ var _app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-sidebar/app-sidebar.component */ "./src/app/Layouts/app-sidebar/app-sidebar.component.ts");
/* harmony import */ var _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-footer/app-footer.component */ "./src/app/Layouts/app-footer/app-footer.component.ts");
/* harmony import */ var _app_banner_app_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-banner/app-banner.component */ "./src/app/Layouts/app-banner/app-banner.component.ts");









var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _layouts_component__WEBPACK_IMPORTED_MODULE_4__["LayoutsComponent"],
                _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"],
                _app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["AppSidebarComponent"],
                _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__["AppFooterComponent"],
                _app_banner_app_banner_component__WEBPACK_IMPORTED_MODULE_8__["AppBannerComponent"]
            ],
            exports: [
                _layouts_component__WEBPACK_IMPORTED_MODULE_4__["LayoutsComponent"],
                _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"],
                _app_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["AppSidebarComponent"],
                _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__["AppFooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], LayoutsModule);
    return LayoutsModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _module_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/module.component */ "./src/app/module/module.component.ts");
/* harmony import */ var _ex_pipes_ex_pipes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ex-pipes/ex-pipes.component */ "./src/app/ex-pipes/ex-pipes.component.ts");
/* harmony import */ var _templatestags_templatestags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templatestags/templatestags.component */ "./src/app/templatestags/templatestags.component.ts");
/* harmony import */ var _router_demo_router_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router-demo/router-demo.component */ "./src/app/router-demo/router-demo.component.ts");
/* harmony import */ var _template_driven_form_template_driven_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template-driven-form/template-driven-form.component */ "./src/app/template-driven-form/template-driven-form.component.ts");
/* harmony import */ var _temp_form_temp_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./temp-form/temp-form.component */ "./src/app/temp-form/temp-form.component.ts");
/* harmony import */ var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "./src/app/reactive-form/reactive-form.component.ts");
/* harmony import */ var _services_demo_services_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services-demo/services-demo.component */ "./src/app/services-demo/services-demo.component.ts");
/* harmony import */ var _http_demo_http_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http-demo/http-demo.component */ "./src/app/http-demo/http-demo.component.ts");
/* harmony import */ var _materials_demo_materials_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./materials-demo/materials-demo.component */ "./src/app/materials-demo/materials-demo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _ex_directives_ex_directives_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ex-directives/ex-directives.component */ "./src/app/ex-directives/ex-directives.component.ts");
/* harmony import */ var _Layouts_layouts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Layouts/layouts.component */ "./src/app/Layouts/layouts.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _example_crud_crud_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./example/crud/crud.component */ "./src/app/example/crud/crud.component.ts");
/* harmony import */ var _example_curd_post_curd_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./example/curd-post/curd-post.component */ "./src/app/example/curd-post/curd-post.component.ts");
/* harmony import */ var _example_curd_get_curd_get_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./example/curd-get/curd-get.component */ "./src/app/example/curd-get/curd-get.component.ts");
/* harmony import */ var _example_curd_put_curd_put_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./example/curd-put/curd-put.component */ "./src/app/example/curd-put/curd-put.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _Components_Components_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Components/Components.component */ "./src/app/Components/Components.component.ts");
/* harmony import */ var _dataBinding_dataBinding_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dataBinding/dataBinding.component */ "./src/app/dataBinding/dataBinding.component.ts");
/* harmony import */ var _login_google_login_google_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./login-google/login-google.component */ "./src/app/login-google/login-google.component.ts");






















// import { AppComponent } from './app.component';













var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"] },
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"] },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    {
        "path": "",
        "component": _Layouts_layouts_component__WEBPACK_IMPORTED_MODULE_23__["LayoutsComponent"],
        "children": [
            {
                path: 'Home',
                component: _index_index_component__WEBPACK_IMPORTED_MODULE_21__["IndexComponent"],
            }, {
                path: 'Components',
                component: _Components_Components_component__WEBPACK_IMPORTED_MODULE_31__["ComponentsComponent"]
            },
            {
                path: 'directives',
                component: _ex_directives_ex_directives_component__WEBPACK_IMPORTED_MODULE_22__["ExDirectivesComponent"]
            },
            {
                path: 'Modules',
                component: _module_module_component__WEBPACK_IMPORTED_MODULE_3__["ModuleComponent"]
            },
            {
                path: 'Data-Binding',
                component: _dataBinding_dataBinding_component__WEBPACK_IMPORTED_MODULE_32__["DataBindingComponent"]
            },
            {
                path: 'Event-Binding',
                component: _event_event_component__WEBPACK_IMPORTED_MODULE_29__["EventComponent"]
            },
            {
                path: 'Pipes-Ex',
                component: _ex_pipes_ex_pipes_component__WEBPACK_IMPORTED_MODULE_4__["ExPipesComponent"]
            },
            {
                path: 'templates',
                component: _templatestags_templatestags_component__WEBPACK_IMPORTED_MODULE_5__["TemplatestagsComponent"]
            },
            {
                path: 'routersnew',
                component: _router_demo_router_demo_component__WEBPACK_IMPORTED_MODULE_6__["RouterDemoComponent"]
            },
            {
                path: 'formsnew',
                component: _temp_form_temp_form_component__WEBPACK_IMPORTED_MODULE_8__["TempFormComponent"]
            },
            {
                path: 'templateDriven',
                component: _template_driven_form_template_driven_form_component__WEBPACK_IMPORTED_MODULE_7__["TemplateDrivenFormComponent"]
            },
            {
                path: 'reactiveforms',
                component: _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormComponent"]
            },
            {
                path: 'materialnew',
                component: _materials_demo_materials_demo_component__WEBPACK_IMPORTED_MODULE_12__["MaterialsDemoComponent"]
            },
            {
                path: 'serivcenew',
                component: _services_demo_services_demo_component__WEBPACK_IMPORTED_MODULE_10__["ServicesDemoComponent"]
            },
            {
                path: 'httpDemo',
                component: _http_demo_http_demo_component__WEBPACK_IMPORTED_MODULE_11__["HttpDemoComponent"]
            },
            {
                path: 'curd',
                component: _example_crud_crud_component__WEBPACK_IMPORTED_MODULE_25__["CrudComponent"]
            },
            {
                path: 'curd-post',
                component: _example_curd_post_curd_post_component__WEBPACK_IMPORTED_MODULE_26__["CurdPostComponent"]
            },
            {
                path: 'curd-put/:id',
                component: _example_curd_put_curd_put_component__WEBPACK_IMPORTED_MODULE_28__["CurdPutComponent"]
            },
            {
                path: 'curd-get',
                component: _example_curd_get_curd_get_component__WEBPACK_IMPORTED_MODULE_27__["CurdGetComponent"]
            },
            {
                path: 'login-Google',
                component: _login_google_login_google_component__WEBPACK_IMPORTED_MODULE_33__["LoginGoogleComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _Components_Components_component__WEBPACK_IMPORTED_MODULE_31__["ComponentsComponent"],
                _dataBinding_dataBinding_component__WEBPACK_IMPORTED_MODULE_32__["DataBindingComponent"],
                _module_module_component__WEBPACK_IMPORTED_MODULE_3__["ModuleComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_21__["IndexComponent"],
                _ex_directives_ex_directives_component__WEBPACK_IMPORTED_MODULE_22__["ExDirectivesComponent"],
                _ex_pipes_ex_pipes_component__WEBPACK_IMPORTED_MODULE_4__["ExPipesComponent"],
                _templatestags_templatestags_component__WEBPACK_IMPORTED_MODULE_5__["TemplatestagsComponent"],
                _router_demo_router_demo_component__WEBPACK_IMPORTED_MODULE_6__["RouterDemoComponent"],
                _template_driven_form_template_driven_form_component__WEBPACK_IMPORTED_MODULE_7__["TemplateDrivenFormComponent"],
                _temp_form_temp_form_component__WEBPACK_IMPORTED_MODULE_8__["TempFormComponent"],
                _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormComponent"],
                _services_demo_services_demo_component__WEBPACK_IMPORTED_MODULE_10__["ServicesDemoComponent"],
                _http_demo_http_demo_component__WEBPACK_IMPORTED_MODULE_11__["HttpDemoComponent"],
                _materials_demo_materials_demo_component__WEBPACK_IMPORTED_MODULE_12__["MaterialsDemoComponent"],
                _example_crud_crud_component__WEBPACK_IMPORTED_MODULE_25__["CrudComponent"],
                _example_curd_post_curd_post_component__WEBPACK_IMPORTED_MODULE_26__["CurdPostComponent"],
                _example_curd_get_curd_get_component__WEBPACK_IMPORTED_MODULE_27__["CurdGetComponent"],
                _example_curd_put_curd_put_component__WEBPACK_IMPORTED_MODULE_28__["CurdPutComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_29__["EventComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
                _login_google_login_google_component__WEBPACK_IMPORTED_MODULE_33__["LoginGoogleComponent"]
                // AppComponent
            ],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angproject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layouts/layouts.module */ "./src/app/Layouts/layouts.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _templete_demo_templete_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templete-demo/templete-demo.component */ "./src/app/templete-demo/templete-demo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");









//import { ServiceDemoService } from './myservice/service-demo.service';





// import { LayoutsComponent } from './layouts/layouts.component';
// import { AppHeaderComponent } from './layouts/app-header/app-header.component';
// import { AppFooterComponent } from './layouts/app-footer/app-footer.component';
// import { AppSidebarComponent } from './layouts/app-sidebar/app-sidebar.component';
// import { IndexComponent } from './index/index.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                // ExDirectivesComponent,
                _templete_demo_templete_demo_component__WEBPACK_IMPORTED_MODULE_7__["TempleteDemoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _Layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__["LayoutsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
            ],
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_9__["MyserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dataBinding/dataBinding.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dataBinding/dataBinding.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFCaW5kaW5nL2RhdGFCaW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dataBinding/dataBinding.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dataBinding/dataBinding.component.ts ***!
  \******************************************************/
/*! exports provided: DataBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBindingComponent", function() { return DataBindingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataBindingComponent = /** @class */ (function () {
    function DataBindingComponent() {
    }
    DataBindingComponent.prototype.ngOnInit = function () {
    };
    DataBindingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataBinding',
            template: __webpack_require__(/*! raw-loader!./dataBinding.component.html */ "./node_modules/raw-loader/index.js!./src/app/dataBinding/dataBinding.component.html"),
            styles: [__webpack_require__(/*! ./dataBinding.component.css */ "./src/app/dataBinding/dataBinding.component.css")]
        })
    ], DataBindingComponent);
    return DataBindingComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventComponent = /** @class */ (function () {
    function EventComponent() {
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! raw-loader!./event.component.html */ "./node_modules/raw-loader/index.js!./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
        })
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/ex-directives/ex-directives.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ex-directives/ex-directives.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4LWRpcmVjdGl2ZXMvZXgtZGlyZWN0aXZlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ex-directives/ex-directives.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ex-directives/ex-directives.component.ts ***!
  \**********************************************************/
/*! exports provided: ExDirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExDirectivesComponent", function() { return ExDirectivesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExDirectivesComponent = /** @class */ (function () {
    function ExDirectivesComponent() {
        this.title = 'Directives Examples';
        this.exMonths = [
            {
                "Sl_no": 1,
                "Months": "Jan"
            },
            {
                "Sl_no": 2,
                "Months": "Feb"
            },
            {
                "Sl_no": 3,
                "Months": "Mar"
            },
            {
                "Sl_no": 4,
                "Months": "Apr"
            }
        ];
        this.isDisable = false;
    }
    ExDirectivesComponent.prototype.onClickFunction = function () {
        if (this.isDisable == true) {
            this.isDisable = false;
        }
        else {
            this.isDisable = true;
        }
    };
    ExDirectivesComponent.prototype.ngOnInit = function () {
    };
    ExDirectivesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ex-directives',
            template: __webpack_require__(/*! raw-loader!./ex-directives.component.html */ "./node_modules/raw-loader/index.js!./src/app/ex-directives/ex-directives.component.html"),
            styles: [__webpack_require__(/*! ./ex-directives.component.css */ "./src/app/ex-directives/ex-directives.component.css")]
        })
    ], ExDirectivesComponent);
    return ExDirectivesComponent;
}());



/***/ }),

/***/ "./src/app/ex-pipes/ex-pipes.component.css":
/*!*************************************************!*\
  !*** ./src/app/ex-pipes/ex-pipes.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4LXBpcGVzL2V4LXBpcGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ex-pipes/ex-pipes.component.ts":
/*!************************************************!*\
  !*** ./src/app/ex-pipes/ex-pipes.component.ts ***!
  \************************************************/
/*! exports provided: ExPipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExPipesComponent", function() { return ExPipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExPipesComponent = /** @class */ (function () {
    function ExPipesComponent() {
        this.title = "Example";
        this.todaydate = new Date();
        this.jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
        this.months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug",
            "Sept", "Oct", "Nov", "Dec"];
    }
    ExPipesComponent.prototype.ngOnInit = function () {
    };
    ExPipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ex-pipes',
            template: __webpack_require__(/*! raw-loader!./ex-pipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/ex-pipes/ex-pipes.component.html"),
            styles: [__webpack_require__(/*! ./ex-pipes.component.css */ "./src/app/ex-pipes/ex-pipes.component.css")]
        })
    ], ExPipesComponent);
    return ExPipesComponent;
}());



/***/ }),

/***/ "./src/app/example/crud/crud.component.css":
/*!*************************************************!*\
  !*** ./src/app/example/crud/crud.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:link, a:visited { \r\n    background-color: #848686; \r\n    color: white; \r\n    padding: 10px 25px; \r\n    text-align: center; \r\n    text-decoration: none; \r\n    display: inline-block; \r\n } \r\n a:hover, a:active {\r\n    background-color: #BD9696;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS9jcnVkL2NydWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0NBQ3hCO0NBQ0E7SUFDRyx5QkFBeUI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9leGFtcGxlL2NydWQvY3J1ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpsaW5rLCBhOnZpc2l0ZWQgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NDg2ODY7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiB9IFxyXG4gYTpob3ZlciwgYTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JEOTY5NjtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/example/crud/crud.component.ts":
/*!************************************************!*\
  !*** ./src/app/example/crud/crud.component.ts ***!
  \************************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CrudComponent = /** @class */ (function () {
    function CrudComponent() {
    }
    CrudComponent.prototype.ngOnInit = function () {
    };
    CrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crud',
            template: __webpack_require__(/*! raw-loader!./crud.component.html */ "./node_modules/raw-loader/index.js!./src/app/example/crud/crud.component.html"),
            styles: [__webpack_require__(/*! ./crud.component.css */ "./src/app/example/crud/crud.component.css")]
        })
    ], CrudComponent);
    return CrudComponent;
}());



/***/ }),

/***/ "./src/app/example/curd-get/curd-get.component.css":
/*!*********************************************************!*\
  !*** ./src/app/example/curd-get/curd-get.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUvY3VyZC1nZXQvY3VyZC1nZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/example/curd-get/curd-get.component.ts":
/*!********************************************************!*\
  !*** ./src/app/example/curd-get/curd-get.component.ts ***!
  \********************************************************/
/*! exports provided: CurdGetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurdGetComponent", function() { return CurdGetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CurdGetComponent = /** @class */ (function () {
    function CurdGetComponent(myservice, router) {
        this.myservice = myservice;
        this.router = router;
        this.userData = [];
        this.id = [];
    }
    CurdGetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myservice.getDatas()
            .subscribe(function (data) {
            console.log("Data From Server ", data);
            _this.userData = Array.from(Object.keys(data), function (k) { return data[k]; });
            _this.id = Array.from(Object.keys(data));
            console.log("Data From id ", _this.userData);
        });
    };
    CurdGetComponent.prototype.onDelete = function (numb) {
        var _this = this;
        this.myservice.getdelete(numb)
            .subscribe(function () {
            alert("Record Deleted");
            _this.router.navigate(['/curd']);
        }, function (error) { return alert("Somthing went wrong"); });
    };
    CurdGetComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CurdGetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-curd-get',
            template: __webpack_require__(/*! raw-loader!./curd-get.component.html */ "./node_modules/raw-loader/index.js!./src/app/example/curd-get/curd-get.component.html"),
            styles: [__webpack_require__(/*! ./curd-get.component.css */ "./src/app/example/curd-get/curd-get.component.css")]
        })
    ], CurdGetComponent);
    return CurdGetComponent;
}());



/***/ }),

/***/ "./src/app/example/curd-post/curd-post.component.css":
/*!***********************************************************!*\
  !*** ./src/app/example/curd-post/curd-post.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS9jdXJkLXBvc3QvY3VyZC1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZXhhbXBsZS9jdXJkLXBvc3QvY3VyZC1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/example/curd-post/curd-post.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/example/curd-post/curd-post.component.ts ***!
  \**********************************************************/
/*! exports provided: CurdPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurdPostComponent", function() { return CurdPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CurdPostComponent = /** @class */ (function () {
    function CurdPostComponent(myservice, router) {
        this.myservice = myservice;
        this.router = router;
    }
    CurdPostComponent.prototype.ngOnInit = function () {
    };
    CurdPostComponent.prototype.save = function (crud) {
        var _this = this;
        this.myservice.create(crud)
            .subscribe(function () {
            alert("Data Saved Successfully"),
                _this.router.navigate(['/curd']);
        }, function (error) { return console.log(error); });
    };
    CurdPostComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CurdPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-curd-post',
            template: __webpack_require__(/*! raw-loader!./curd-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/example/curd-post/curd-post.component.html"),
            styles: [__webpack_require__(/*! ./curd-post.component.css */ "./src/app/example/curd-post/curd-post.component.css")]
        })
    ], CurdPostComponent);
    return CurdPostComponent;
}());



/***/ }),

/***/ "./src/app/example/curd-put/curd-put.component.css":
/*!*********************************************************!*\
  !*** ./src/app/example/curd-put/curd-put.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUvY3VyZC1wdXQvY3VyZC1wdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/example/curd-put/curd-put.component.ts":
/*!********************************************************!*\
  !*** ./src/app/example/curd-put/curd-put.component.ts ***!
  \********************************************************/
/*! exports provided: CurdPutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurdPutComponent", function() { return CurdPutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _curd_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../curd.model */ "./src/app/example/curd.model.ts");






var CurdPutComponent = /** @class */ (function () {
    function CurdPutComponent(myservice, route, router) {
        this.myservice = myservice;
        this.route = route;
        this.router = router;
        this.editMode = false;
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    CurdPutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    CurdPutComponent.prototype.initForm = function () {
        var _this = this;
        if (this.editMode) {
            this.myservice.getPut(this.id)
                .subscribe(function (data) {
                _this.formdata.setValue({
                    userName: data.userName,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password
                });
            });
        }
    };
    CurdPutComponent.prototype.onClickSubmit = function (data) {
        var _this = this;
        if (confirm("Are you sure you want to update") == true) {
            var datas = data.value;
            console.log("from Data are", datas);
            var FormModelsData = new _curd_model__WEBPACK_IMPORTED_MODULE_5__["Curd"](datas.userName, datas.firstName, datas.lastName, datas.password, datas.email);
            this.myservice.putdata(this.id, FormModelsData)
                .subscribe(function (data) {
                alert("Data Updated Successfully"),
                    _this.router.navigate(['/curd']);
            }, function (error) { return alert("Something went wrong"); });
        }
        else {
            this.router.navigate(['/curd-put', this.id]);
        }
    };
    CurdPutComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CurdPutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-curd-put',
            template: __webpack_require__(/*! raw-loader!./curd-put.component.html */ "./node_modules/raw-loader/index.js!./src/app/example/curd-put/curd-put.component.html"),
            styles: [__webpack_require__(/*! ./curd-put.component.css */ "./src/app/example/curd-put/curd-put.component.css")]
        })
    ], CurdPutComponent);
    return CurdPutComponent;
}());



/***/ }),

/***/ "./src/app/example/curd.model.ts":
/*!***************************************!*\
  !*** ./src/app/example/curd.model.ts ***!
  \***************************************/
/*! exports provided: Curd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curd", function() { return Curd; });
var Curd = /** @class */ (function () {
    function Curd(userName, firstName, lastName, password, email) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
    }
    Curd.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Curd;
}());



/***/ }),

/***/ "./src/app/http-demo/http-demo.component.css":
/*!***************************************************!*\
  !*** ./src/app/http-demo/http-demo.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2h0dHAtZGVtby9odHRwLWRlbW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/http-demo/http-demo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/http-demo/http-demo.component.ts ***!
  \**************************************************/
/*! exports provided: HttpDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpDemoComponent", function() { return HttpDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");



var HttpDemoComponent = /** @class */ (function () {
    function HttpDemoComponent(obj) {
        this.obj = obj;
        this.persondata = [];
    }
    HttpDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.obj.getData().subscribe(function (data) {
            _this.persondata = Array.from(Object.keys(data), function (k) { return data[k]; });
            console.log(_this.persondata);
        }, function (error) { return console.log("Somthing Went wrong"); });
    };
    HttpDemoComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] }
    ]; };
    HttpDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-http-demo',
            template: __webpack_require__(/*! raw-loader!./http-demo.component.html */ "./node_modules/raw-loader/index.js!./src/app/http-demo/http-demo.component.html"),
            styles: [__webpack_require__(/*! ./http-demo.component.css */ "./src/app/http-demo/http-demo.component.css")]
        })
    ], HttpDemoComponent);
    return HttpDemoComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        })
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/login-google/login-google.component.css":
/*!*********************************************************!*\
  !*** ./src/app/login-google/login-google.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWdvb2dsZS9sb2dpbi1nb29nbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login-google/login-google.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login-google/login-google.component.ts ***!
  \********************************************************/
/*! exports provided: LoginGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGoogleComponent", function() { return LoginGoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginGoogleComponent = /** @class */ (function () {
    function LoginGoogleComponent() {
    }
    LoginGoogleComponent.prototype.ngOnInit = function () {
    };
    LoginGoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-google',
            template: __webpack_require__(/*! raw-loader!./login-google.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-google/login-google.component.html"),
            styles: [__webpack_require__(/*! ./login-google.component.css */ "./src/app/login-google/login-google.component.css")]
        })
    ], LoginGoogleComponent);
    return LoginGoogleComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: .75rem;\r\n}\r\n\r\nbody {\r\n  background: #007bff;\r\n  background: -webkit-gradient(linear, left top, right top, from(#0062E6), to(#33AEFF));\r\n  background: linear-gradient(to right, #0062E6, #33AEFF);\r\n}\r\n\r\n.card-signin {\r\n  border: 0;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  -webkit-transition: all 0.2s;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  height: auto;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  -webkit-transition: all .1s ease-in-out;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-moz-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}\r\n\r\n/* Fallback for Edge\r\n-------------------------------------------------- */\r\n\r\n@supports (-ms-ime-align: auto) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n\r\n/* Fallback for IE\r\n-------------------------------------------------- */\r\n\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input:-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUZBQXVEO0VBQXZELHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDRCQUFvQjtFQUFwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLHVDQUErQjtFQUEvQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBTUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0RUFBNEU7RUFDNUUsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLGdEQUFnRDtFQUNoRCxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7b0RBQ29EOztBQUVwRDtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtvREFDb0Q7O0FBRXBEO0VBRUU7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2MkU2LCAjMzNBRUZGKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICBmb250LXNpemU6IDgwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XHJcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbn1cclxuXHJcbi8qIEZhbGxiYWNrIGZvciBFZGdlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxufVxyXG5cclxuLyogRmFsbGJhY2sgZm9yIElFXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLFxyXG4oLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onclickSubmit = function (data) {
        var value = data.value;
        if (value.userName == "admin" && value.password == "admin") {
            this.router.navigate(['/Home']);
        }
        else {
            alert("Invaild User Name and Password");
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/materials-demo/materials-demo.component.css":
/*!*************************************************************!*\
  !*** ./src/app/materials-demo/materials-demo.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWxzLWRlbW8vbWF0ZXJpYWxzLWRlbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWxzLWRlbW8vbWF0ZXJpYWxzLWRlbW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/materials-demo/materials-demo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/materials-demo/materials-demo.component.ts ***!
  \************************************************************/
/*! exports provided: MaterialsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsDemoComponent", function() { return MaterialsDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaterialsDemoComponent = /** @class */ (function () {
    function MaterialsDemoComponent() {
    }
    MaterialsDemoComponent.prototype.ngOnInit = function () {
    };
    MaterialsDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-materials-demo',
            template: __webpack_require__(/*! raw-loader!./materials-demo.component.html */ "./node_modules/raw-loader/index.js!./src/app/materials-demo/materials-demo.component.html"),
            styles: [__webpack_require__(/*! ./materials-demo.component.css */ "./src/app/materials-demo/materials-demo.component.css")]
        })
    ], MaterialsDemoComponent);
    return MaterialsDemoComponent;
}());



/***/ }),

/***/ "./src/app/module/module.component.css":
/*!*********************************************!*\
  !*** ./src/app/module/module.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9tb2R1bGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/module/module.component.ts":
/*!********************************************!*\
  !*** ./src/app/module/module.component.ts ***!
  \********************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModuleComponent = /** @class */ (function () {
    function ModuleComponent() {
    }
    ModuleComponent.prototype.ngOnInit = function () {
    };
    ModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-module',
            template: __webpack_require__(/*! raw-loader!./module.component.html */ "./node_modules/raw-loader/index.js!./src/app/module/module.component.html"),
            styles: [__webpack_require__(/*! ./module.component.css */ "./src/app/module/module.component.css")]
        })
    ], ModuleComponent);
    return ModuleComponent;
}());



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");






var MyserviceService = /** @class */ (function () {
    // private apiurl='https://angularwirebase.firebaseio.com/datas.json'
    function MyserviceService(http, db) {
        this.http = http;
        this.db = db;
        // private apiurl = "http://jsonplaceholder.typicode.com/users";
        // private apiurl = "http://localhost:8956/gets";
        this.apiurl = "https://authdemo2-eb18c.firebaseio.com/product.json";
    }
    MyserviceService.prototype.postdata = function (data) {
        return this.http.post(this.apiurl, data);
    };
    MyserviceService.prototype.msg = function (data) {
        console.log("Data From Service Class", data);
        console.log("The Email Id from template Driven form " + data.emailid);
        //alert('Hello ..... World!'+ "  " + email);
    };
    MyserviceService.prototype.display = function () {
        alert('Hello ..... World!');
    };
    MyserviceService.prototype.create = function (crud) {
        console.log("Created Method called", crud);
        return this.http.post(this.apiurl, crud);
    };
    MyserviceService.prototype.getDatas = function () {
        return this.http.get('https://authdemo2-eb18c.firebaseio.com/product.json');
    };
    MyserviceService.prototype.getdelete = function (id) {
        return this.http.delete("http://localhost:8956/gets/" + id);
    };
    MyserviceService.prototype.getData = function () {
        return this.http.get(this.apiurl);
    };
    MyserviceService.prototype.getPut = function (id) {
        return this.http.get("https://authdemo2-eb18c.firebaseio.com/product.json/" + id) //, options)
            .map(function (response) {
            return response;
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw('Something went wrong');
        });
    };
    MyserviceService.prototype.putdata = function (id, datas) {
        return this.http.put("http://localhost:8956/gets/" + id, datas);
    };
    MyserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }
    ]; };
    MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MyserviceService);
    return MyserviceService;
}());



/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0aXZlLWZvcm0vcmVhY3RpdmUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormComponent", function() { return ReactiveFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");




var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent(obj) {
        this.obj = obj;
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("angular@gmail.com"),
            passwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("abcd1234")
        });
    };
    ReactiveFormComponent.prototype.onClickSubmit = function (data) { this.emailid = data.emailid; };
    ReactiveFormComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] }
    ]; };
    ReactiveFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reactive-form',
            template: __webpack_require__(/*! raw-loader!./reactive-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/reactive-form/reactive-form.component.html"),
            styles: [__webpack_require__(/*! ./reactive-form.component.css */ "./src/app/reactive-form/reactive-form.component.css")]
        })
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());



/***/ }),

/***/ "./src/app/router-demo/router-demo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/router-demo/router-demo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:link, a:visited { \r\n    background-color: #848686; \r\n    color: white; \r\n    padding: 10px 25px; \r\n    text-align: center; \r\n    text-decoration: none; \r\n    display: inline-block; \r\n } \r\n a:hover, a:active {\r\n    background-color: #BD9696;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVyLWRlbW8vcm91dGVyLWRlbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0NBQ3hCO0NBQ0E7SUFDRyx5QkFBeUI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXItZGVtby9yb3V0ZXItZGVtby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpsaW5rLCBhOnZpc2l0ZWQgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NDg2ODY7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiB9IFxyXG4gYTpob3ZlciwgYTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JEOTY5NjtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/router-demo/router-demo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/router-demo/router-demo.component.ts ***!
  \******************************************************/
/*! exports provided: RouterDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterDemoComponent", function() { return RouterDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RouterDemoComponent = /** @class */ (function () {
    function RouterDemoComponent() {
    }
    RouterDemoComponent.prototype.ngOnInit = function () {
    };
    RouterDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-router-demo',
            template: __webpack_require__(/*! raw-loader!./router-demo.component.html */ "./node_modules/raw-loader/index.js!./src/app/router-demo/router-demo.component.html"),
            styles: [__webpack_require__(/*! ./router-demo.component.css */ "./src/app/router-demo/router-demo.component.css")]
        })
    ], RouterDemoComponent);
    return RouterDemoComponent;
}());



/***/ }),

/***/ "./src/app/services-demo/services-demo.component.css":
/*!***********************************************************!*\
  !*** ./src/app/services-demo/services-demo.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzLWRlbW8vc2VydmljZXMtZGVtby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/services-demo/services-demo.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/services-demo/services-demo.component.ts ***!
  \**********************************************************/
/*! exports provided: ServicesDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesDemoComponent", function() { return ServicesDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");



var ServicesDemoComponent = /** @class */ (function () {
    function ServicesDemoComponent(obj) {
        this.obj = obj;
    }
    ServicesDemoComponent.prototype.Hello = function () {
        this.obj.display();
    };
    ServicesDemoComponent.prototype.ngOnInit = function () {
    };
    ServicesDemoComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] }
    ]; };
    ServicesDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-demo',
            template: __webpack_require__(/*! raw-loader!./services-demo.component.html */ "./node_modules/raw-loader/index.js!./src/app/services-demo/services-demo.component.html"),
            styles: [__webpack_require__(/*! ./services-demo.component.css */ "./src/app/services-demo/services-demo.component.css")]
        })
    ], ServicesDemoComponent);
    return ServicesDemoComponent;
}());



/***/ }),

/***/ "./src/app/temp-form/temp-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/temp-form/temp-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:link, a:visited { \r\n    background-color: #848686; \r\n    color: white; \r\n    padding: 10px 25px; \r\n    text-align: center; \r\n    text-decoration: none; \r\n    display: inline-block; \r\n } \r\n a:hover, a:active {\r\n    background-color: #BD9696;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcC1mb3JtL3RlbXAtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7Q0FDeEI7Q0FDQTtJQUNHLHlCQUF5QjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL3RlbXAtZm9ybS90ZW1wLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6bGluaywgYTp2aXNpdGVkIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4Njg2OyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gfSBcclxuIGE6aG92ZXIsIGE6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRDk2OTY7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/temp-form/temp-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/temp-form/temp-form.component.ts ***!
  \**************************************************/
/*! exports provided: TempFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempFormComponent", function() { return TempFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TempFormComponent = /** @class */ (function () {
    function TempFormComponent() {
    }
    TempFormComponent.prototype.ngOnInit = function () {
    };
    TempFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-temp-form',
            template: __webpack_require__(/*! raw-loader!./temp-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/temp-form/temp-form.component.html"),
            styles: [__webpack_require__(/*! ./temp-form.component.css */ "./src/app/temp-form/temp-form.component.css")]
        })
    ], TempFormComponent);
    return TempFormComponent;
}());



/***/ }),

/***/ "./src/app/template-driven-form/template-driven-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/template-driven-form/template-driven-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type = text], input[type = password] { \r\n    width: 40%; \r\n    padding: 12px 20px; \r\n    margin: 8px 0; \r\n    display: inline-block; \r\n    border: 1px solid #B3A9A9; \r\n    box-sizing: border-box; \r\n } \r\n input[type = submit] { \r\n    padding: 12px 20px; \r\n    margin: 8px 0; \r\n    display: inline-block; \r\n    border: 1px solid #B3A9A9; \r\n    box-sizing: border-box; \r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUtZHJpdmVuLWZvcm0vdGVtcGxhdGUtZHJpdmVuLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsc0JBQXNCO0NBQ3pCO0NBQ0E7SUFDRyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGUtZHJpdmVuLWZvcm0vdGVtcGxhdGUtZHJpdmVuLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGUgPSB0ZXh0XSwgaW5wdXRbdHlwZSA9IHBhc3N3b3JkXSB7IFxyXG4gICAgd2lkdGg6IDQwJTsgXHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7IFxyXG4gICAgbWFyZ2luOiA4cHggMDsgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0IzQTlBOTsgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuIH0gXHJcbiBpbnB1dFt0eXBlID0gc3VibWl0XSB7IFxyXG4gICAgcGFkZGluZzogMTJweCAyMHB4OyBcclxuICAgIG1hcmdpbjogOHB4IDA7IFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCM0E5QTk7IFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/template-driven-form/template-driven-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/template-driven-form/template-driven-form.component.ts ***!
  \************************************************************************/
/*! exports provided: TemplateDrivenFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDrivenFormComponent", function() { return TemplateDrivenFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");



var TemplateDrivenFormComponent = /** @class */ (function () {
    function TemplateDrivenFormComponent(myservice) {
        this.myservice = myservice;
    }
    TemplateDrivenFormComponent.prototype.ngOnInit = function () { };
    TemplateDrivenFormComponent.prototype.onClickSubmit = function (formdata) {
        var value = formdata.value;
        console.log("Form Data", value);
        this.myservice.msg(value);
    };
    TemplateDrivenFormComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] }
    ]; };
    TemplateDrivenFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template-driven-form',
            template: __webpack_require__(/*! raw-loader!./template-driven-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/template-driven-form/template-driven-form.component.html"),
            styles: [__webpack_require__(/*! ./template-driven-form.component.css */ "./src/app/template-driven-form/template-driven-form.component.css")]
        })
    ], TemplateDrivenFormComponent);
    return TemplateDrivenFormComponent;
}());



/***/ }),

/***/ "./src/app/templatestags/templatestags.component.css":
/*!***********************************************************!*\
  !*** ./src/app/templatestags/templatestags.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlc3RhZ3MvdGVtcGxhdGVzdGFncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/templatestags/templatestags.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/templatestags/templatestags.component.ts ***!
  \**********************************************************/
/*! exports provided: TemplatestagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatestagsComponent", function() { return TemplatestagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TemplatestagsComponent = /** @class */ (function () {
    function TemplatestagsComponent() {
        // declared array of months. 
        this.months = ["January", "Feburary", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.isavailable = false; //variable is set to true  
    }
    TemplatestagsComponent.prototype.ngOnInit = function () {
    };
    TemplatestagsComponent.prototype.myClickFunction = function (event) {
        this.isavailable = !this.isavailable;
        // variable is toggled onclick of the button 
    };
    TemplatestagsComponent.prototype.changemonths = function (event) {
        alert("Changed month from the Dropdown");
    };
    TemplatestagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-templatestags',
            template: __webpack_require__(/*! raw-loader!./templatestags.component.html */ "./node_modules/raw-loader/index.js!./src/app/templatestags/templatestags.component.html"),
            styles: [__webpack_require__(/*! ./templatestags.component.css */ "./src/app/templatestags/templatestags.component.css")]
        })
    ], TemplatestagsComponent);
    return TemplatestagsComponent;
}());



/***/ }),

/***/ "./src/app/templete-demo/templete-demo.component.css":
/*!***********************************************************!*\
  !*** ./src/app/templete-demo/templete-demo.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZXRlLWRlbW8vdGVtcGxldGUtZGVtby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/templete-demo/templete-demo.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/templete-demo/templete-demo.component.ts ***!
  \**********************************************************/
/*! exports provided: TempleteDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempleteDemoComponent", function() { return TempleteDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TempleteDemoComponent = /** @class */ (function () {
    function TempleteDemoComponent() {
    }
    TempleteDemoComponent.prototype.ngOnInit = function () {
    };
    TempleteDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-templete-demo',
            template: __webpack_require__(/*! raw-loader!./templete-demo.component.html */ "./node_modules/raw-loader/index.js!./src/app/templete-demo/templete-demo.component.html"),
            styles: [__webpack_require__(/*! ./templete-demo.component.css */ "./src/app/templete-demo/templete-demo.component.css")]
        })
    ], TempleteDemoComponent);
    return TempleteDemoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD7Rq8SUlMDSnMiHrVaXepplIlgjY5-gyQ",
        authDomain: "authdemo2-eb18c.firebaseapp.com",
        databaseURL: "https://authdemo2-eb18c.firebaseio.com/",
        projectId: "authdemo2-eb18c",
        storageBucket: "",
        messagingSenderId: "27194366650",
        appId: "1:27194366650:web:264d7b35d22a1d8b"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular-8\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map