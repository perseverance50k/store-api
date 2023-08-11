# Store API

This API allows to use advanced filtering,
sorting, and dynamic population of the DB.

This project has no front-end part.

## Dependencies
- "dotenv" v.16.3.1
- "express" v.4.18.2
- "mongoose" v.7.4.2
- "nodemon" v.3.0.1 (dev dependency)
- "express-async-errors" v.3.1.1

## Installation

In terminal, go to the directory you want to import the project to. Type the next command:
```bash
git clone https://github.com/perseverance50k/store-api.git
```

Open the project in your code editor and type the command provided below to install all the required dependencies:
```bash
npm install
```
Create the `.env` file in the root directory of the project and add the following property:
```bash
MONGO_URI="mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@<YOUR_CLUSTER_NAME>/store-api-db?retryWrites=true&w=majority"
```

Note that you have to replace the `<YOUR_USERNAME>`, `<YOUR_PASSWORD>`, `<YOUR_CLUSTER_NAME>` with your actual data.

In order to learn how to get your MongoDB connection string, head over to [this guide](https://www.mongodb.com/docs/atlas/driver-connection/);

From the project's root folder, type this command to populate the database:
```bash
node config/populate.js
```

## Usage

### Endpoints
- GET /api/v1/products/
- GET /api/v1/products/static/ – testing route

### Starting

Type the following command to start the application:
```bash
npm run start
```

### Examples
Go to Postman and try out some of these examples:

#### Example #1
Query: get all products which names contain the string 'ac'.

```bash
http://localhost:3000/api/v1/products/products?name=ac
```

#### Example #2
Query: get all products of the `ikea` company and sort them
by `price` in the descending order.

```bash
http://localhost:3000/api/v1/products?company=ikea&sort=-price
```

#### Example #3

Query: get all products with the `price` greater than or equal to 30,
sort the documents by the `price` and `name` fields, display only
the `name`, `price`, and `rating` fields, and show results on the second `page`
with the `limit` of products per page set to 5.

```bash
http://localhost:3000/api/v1/products?numericFilters=price>=30&sort=price,name&fields=name,price,rating&page=2&limit=5
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
