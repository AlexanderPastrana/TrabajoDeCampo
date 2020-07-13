const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "jhonedisonrod21@gmail.com",
    pass: "tgyjfrulowzluxni"
  }
});

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "driversAppDB",
  password: "a123",
  port: 5432
});

const getClients = (request, response) => {
  pool.query("SELECT * FROM clients", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getClientById = (request, response) => {
  const id = request.params.id;
  pool.query(
    "SELECT * FROM clients WHERE document_number = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createClient = (request, response) => {
  const {
    first_name,
    last_name,
    document_type,
    document_number,
    phone_number,
    address,
    date,
    city,
    department
  } = request.body;

  pool.query(
    "INSERT INTO clients (first_name, last_name, document_type, document_number, phone_number, address, date, city, department) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [
      first_name,
      last_name,
      document_type,
      document_number,
      phone_number,
      address,
      date,
      city,
      department
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};

const updateClient = (request, response) => {
  const id = request.params.id;
  const {
    first_name,
    last_name,
    document_type,
    document_number,
    phone_number,
    address,
    city,
    department
  } = request.body;

  pool.query(
    "UPDATE clients SET first_name = $1, last_name = $2, document_type = $3, document_number = $4, phone_number = $5, address = $6, city = $7, department = $8 WHERE document_number = $9",
    [
      first_name,
      last_name,
      document_type,
      document_number,
      phone_number,
      address,
      city,
      department,
      id
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteClient = (request, response) => {
  const id = request.params.id;

  pool.query("DELETE FROM clients WHERE _id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const getDrivers = (request, response) => {
  pool.query("SELECT * FROM drivers", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getDriverById = (request, response) => {
  const id = request.params.id;
  pool.query(
    "SELECT * FROM drivers WHERE document_number = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createDriver = (request, response) => {
  const {
    first_name,
    last_name,
    document_type,
    document_number,
    phone_number,
    driving_license_number,
    transit_license_number,
    soat,
    mechanical_technical_review,
    national_cargo_transportation_registraion_card,
    email,
    vehicle_plate,
    date
  } = request.body;

  pool.query(
    "INSERT INTO drivers (first_name, last_name, document_type, document_number, phone_number, driving_license_number, transit_license_number, soat, mechanical_technical_review, national_cargo_transportation_registraion_card, email, vehicle_plate, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
    [
      first_name,
      last_name,
      document_type,
      document_number,
      phone_number,
      driving_license_number,
      transit_license_number,
      soat,
      mechanical_technical_review,
      national_cargo_transportation_registraion_card,
      email,
      vehicle_plate,
      date
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User driver with ID: ${results.insertId}`);
    }
  );
};

const updateDriver = (request, response) => {
  const id = request.params.id;
  const {
    first_name,
    last_name,
    document_type,
    document_number,
    phone_number,
    driving_license_number,
    transit_license_number,
    soat,
    mechanical_technical_review,
    national_cargo_transportation_registraion_card,
    email,
    vehicle_plate
  } = request.body;

  pool.query(
    "UPDATE drivers SET first_name = $1, last_name = $2, document_type = $3, document_number = $4, phone_number = $5, driving_license_number = $6, transit_license_number = $7, soat = $8, mechanical_technical_review = $9, national_cargo_transportation_registraion_card = $10, email = $11, vehicle_plate = $12   WHERE document_number = $13",
    [
      first_name,
      last_name,
      document_type,
      document_number,
      phone_number,
      driving_license_number,
      transit_license_number,
      soat,
      mechanical_technical_review,
      national_cargo_transportation_registraion_card,
      email,
      vehicle_plate,
      id
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteDriver = (request, response) => {
  const id = request.params.id;

  pool.query("DELETE FROM drivers WHERE _id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const getOrders = (request, response) => {
  pool.query("SELECT * FROM orders", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getOrderById = (request, response) => {
  const id = request.params.id;
  pool.query(
    "SELECT * FROM orders WHERE order_identification_number = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createOrder = (request, response) => {
  const {
    order_identification_number,
    description,
    quantity_of_merchadise,
    merchandise_weight,
    latitude,
    longitude,
    charging_date,
    departure_date,
    observations
  } = request.body;

  pool.query(
    "INSERT INTO orders (order_identification_number,description,quantity_of_merchadise,merchandise_weight,latitude,longitude,charging_date,departure_date,observations) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [
      order_identification_number,
      description,
      quantity_of_merchadise,
      merchandise_weight,
      latitude,
      longitude,
      charging_date,
      departure_date,
      observations
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User order with ID: ${results.insertId}`);
    }
  );
};

const updateOrder = (request, response) => {
  const id = request.params.id;
  const {
    order_identification_number,
    description,
    quantity_of_merchadise,
    merchandise_weight,
    shipping_point,
    arrival_point,
    charging_date,
    departure_date,
    observations
  } = request.body;

  pool.query(
    "UPDATE orders SET order_identification_number = $1, description = $2, quantity_of_merchadise = $3, merchandise_weight = $4, shipping_point = $5, arrival_point = $6, charging_date = $7, departure_date = $8, observations =$9 WHERE document_number = $10",
    [
      order_identification_number,
      description,
      quantity_of_merchadise,
      merchandise_weight,
      shipping_point,
      arrival_point,
      charging_date,
      departure_date,
      observations,
      id
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Order modified with ID: ${id}`);
    }
  );
};

const deleteOrder = (request, response) => {
  const id = request.params.id;

  pool.query("DELETE FROM orders WHERE _id= $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Order deleted with ID: ${id}`);
  });
};

const getRoutes = (request, response) => {
  pool.query("SELECT * FROM routes", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getRouteById = (request, response) => {
  const id = request.params.id;
  pool.query(
    "SELECT * FROM routes WHERE route_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createRoute = (request, response) => {
  const { route_name, shipping_place, place_of_delivery, date } = request.body;

  pool.query(
    "INSERT INTO routes (route_name, shipping_place, place_of_delivery, date) VALUES ($1, $2, $3, $4)",
    [route_name, shipping_place, place_of_delivery, date],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Route create with ID: ${results.insertId}`);
    }
  );
};

const updateRoute = (request, response) => {
  const id = request.params.id;
  const { route_name, shipping_place, place_of_delivery } = request.body;

  pool.query(
    "UPDATE routes SET route_name = $1, shipping_place = $2, place_of_delivery = $3 WHERE route_id = $4",
    [route_name, shipping_place, place_of_delivery, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Route modified with ID: ${id}`);
    }
  );
};

const deleteRoute = (request, response) => {
  const id = request.params.id;

  pool.query("DELETE FROM routes WHERE _id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Route deleted with ID: ${id}`);
  });
};

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  getDrivers,
  getDriverById,
  createDriver,
  updateDriver,
  deleteDriver,
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getRoutes,
  getRouteById,
  createRoute,
  updateRoute,
  deleteRoute
};
