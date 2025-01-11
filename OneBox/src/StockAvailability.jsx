import React, { useState } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function StockAvailability() {
  const [search, setSearch] = useState("");
  const stock = [
    { id: 1, name: "Product A", category: "Electronics", quantity: 10, price: 100, location: [51.505, -0.09] },
    { id: 2, name: "Product B", category: "Furniture", quantity: 2, price: 50, location: [51.515, -0.1] },
    { id: 3, name: "Product C", category: "Clothing", quantity: 0, price: 20, location: [51.525, -0.08] },
    { id: 4, name: "Product D", category: "Groceries", quantity: 15, price: 10, location: [51.535, -0.07] },
    { id: 5, name: "Product E", category: "Toys", quantity: 5, price: 30, location: [51.545, -0.11] },
    { id: 6, name: "Product F", category: "Electronics", quantity: 0, price: 120, location: [51.555, -0.12] },
    { id: 7, name: "Product G", category: "Furniture", quantity: 8, price: 75, location: [51.565, -0.13] },
  ];

  // Filter stock based on search
  const filteredStock = stock.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Wrapper>
      <h2>Stock Availability</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by product name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Stock Table */}
      <div className="table-container">
        <table className="stock-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map((item) => (
              <tr
                key={item.id}
                className={item.quantity === 0 ? "low-stock" : ""}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td
                  className={
                    item.quantity === 0 ? "out-of-stock" : "in-stock"
                  }
                >
                  {item.quantity === 0 ? "Out of Stock" : "In Stock"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Interactive Map */}
      <div className="map-container">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredStock.map((item) => (
            <Marker key={item.id} position={item.location}>
              <Popup>
                <strong>{item.name}</strong>
                <br />
                Category: {item.category}
                <br />
                Quantity: {item.quantity}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Wrapper>
  );
}

export default StockAvailability;

// Styled Components
const Wrapper = styled.div`
  margin: 20px;
  font-family: "Arial", sans-serif;

  h2 {
    font-size: 1.8rem;
    color: #0044cc;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .table-container {
    max-height: 400px;
    overflow-y: auto;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .stock-table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 12px 15px;
      text-align: center;
    }

    th {
      background-color: #f4f4f4;
      color: #333;
      font-size: 1rem;
      font-weight: 600;
    }

    td {
      font-size: 0.9rem;
      color: #666;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    .low-stock {
      background-color: rgba(255, 0, 0, 0.1);
    }

    .out-of-stock {
      color: #d9534f;
      font-weight: bold;
    }

    .in-stock {
      color: #5cb85c;
      font-weight: bold;
    }
  }

  .map-container {
    margin-top: 20px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
