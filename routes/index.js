(function(){
  "use strict";

  var Routes = {
    Root: require("./Root"),
    Weekly: require("./Weekly"),
    Login: require("./Login")
  };

  // route, function, mongo, auth level, methods
  // auth level: 0 = not required, 1 = required
  var routeList = [
    ["/",                Routes.Root,   0, 0, ["get"        ]],
    ["/weekly/:offset?", Routes.Weekly, 1, 1, ["get"        ]],
    ["/login",           Routes.Login,  0, 1, ["get", "post"]]
  ];

  exports.list = routeList;
}());
