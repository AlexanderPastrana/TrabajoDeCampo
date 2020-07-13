const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const db = require("./queries");
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user: 'jhonatanrocha97a@gmail.com',
      pass: 'tgyjfrulowzluxni'
  }
});

async function sendmail(mail, body, filePath,zipname) {
  var mailOptions = {
      from: 'File Loader',
      to: mail,
      subject: 'File loader notification',
      text: body + "\n puede descargar el archivo zip en la siguiente direccion:  http://172.22.0.1:3001/"+zipname,
      attachments: [
          {
              filename: 'report.pdf',
              path: filePath
          }
      ]
  };
  transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          console.log(error);
          res.send(500, err.message);
      } else {
          console.log("Email sent");
          res.status(200).jsonp(req.body);
      }
  });
}

async function generatePdf(dir) {
  var paths = []
  var info = []
  await fileInfo.showList(dir).then((data) => {
      for (let i = 1; i < data.length; i++) {
          paths.push("" + data[i]);
      }
  });
  var fs = require('fs');
  paths.forEach(link => {
      var path = require('path');
      var filename = path.basename(link);
      var size = (fs.statSync(link).size) / 1000000.0
      var data = { name: filename, size: size + ' Bytes' }
      info.push(data)
  });
  //---------------generando el pdf------------------

  var pdf = require('html-pdf');
  var tabla = `
      <tr>
          <th style="border: blue 2px solid" >Archivo</th>
          <th style="border: blue 2px solid">Tamaño (bytes)</th> 
      </tr>
      `;
  info.forEach(element => {
      tabla = tabla + `
      <tr>
          <td style="border: blue 2px solid; max-width: 300px">${element.name}</td>    
          <td style="border: blue 2px solid; max-width: 300px" >${element.size}</td>  
      </tr>        
      `
  });
  const content = `
  <!doctype html>
  <html>
     <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
      </head>
      <body style="padding: 40px;">            
          <h1 >Reporte de archivos</h1>
          <table>
              ${tabla}
          </table>          
      </body>
  </html>
  `;
  pdf.create(content).toFile(dir + '/report.pdf', function (err, res) {
      if (err) return console.log(err);
  });
}

async function zip(dir, name) {
  zipFolder(dir, __dirname + '/public/' + name + ".zip", function (err) {
      if (err) {
          console.log('oh no!', err);
      } else {
          console.log('carpeta comprimida con exito');
      }
  });
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// Client
app.get("/api/clients", db.getClients);
app.get("/api/clients/:id", db.getClientById);
app.post("/api/createClient", db.createClient);
app.put("/api/updatedClient/:id", db.updateClient);
app.delete("/api/deleteClient/:id", db.deleteClient);

// Driver
app.get("/api/drivers", db.getDrivers);
app.get("/api/drivers/:id", db.getDriverById);
app.post("/api/createDriver", db.createDriver);
app.put("/api/updatedDriver/:id", db.updateDriver);
app.delete("/api/deleteDriver/:id", db.deleteDriver);

// Order
app.get("/api/orders", db.getOrders);
app.get("/api/orders/:id", db.getOrderById);
app.post("/api/createOrder", db.createOrder);
app.put("/api/updatedOrder/:id", db.updateOrder);
app.delete("/api/deleteOrder/:id", db.deleteOrder);

// Route
app.get("/api/routes", db.getRoutes);
app.get("/api/routes/:id", db.getRouteById);
app.post("/api/createRoute", db.createRoute);
app.put("/api/updatedRoute/:id", db.updateRoute);
app.delete("/api/deleteRoute/:id", db.deleteRoute);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
