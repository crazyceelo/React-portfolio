var React = require("react");
var ReactDOM = require("react-dom");
import { Router, Route, IndexRoute, hashHistory } from "react-router";

var routes = require("./config/routes");

reactDOM.render(routes, document.getElementById("app"));
