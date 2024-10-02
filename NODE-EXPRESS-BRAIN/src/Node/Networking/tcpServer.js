var net = require("net");

var server = net.createServer(function (connectionListener) {
  console.log("connected");

  //get the configured address from the server
  console.log(this.address());

  //get connections takes callback function
  this.getConnections(function (err, count) {
    if (err) {
      console.log("Error getting connections");
    } else {
      console.log("Connections count" + count);
    }
  });

  connectionListener.on("end", function () {
    console.log("connected");
  });
  //write to the connection sockets
  connectionListener.write("hey");
});

server.on("error", function (err) {
  console.log("server error");
});
server.listen(8181, function () {
  console.log("server is listening");
});
