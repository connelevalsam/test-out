var m = require("mithril")
import pageBody from "./containers/pageBody.js";
import Signup from "./containers/signup.js";

var root = document.getElementById("mainPage");

m.route(root, "/", {
	"/":       pageBody,
	"/signup": Signup
});