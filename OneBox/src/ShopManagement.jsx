import React, { useState } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ShopManagement() {
  const [shop, setShop] = useState({
    name: "ABC Mart",
    contact: "9876543210",
    paymentMethods: { upi: true, card: false },
    location: { lat: 28.6139, lng: 77.209 },
    visibility: true,
    inventory: [
      { id: 1, name: "Product A", stock: 10, threshold: 5 },
      { id: 2, name: "Product B", stock: 2, threshold: 3 },
    ],
  });

  const handleInventoryChange = (id, field, value) => {
    const updatedInventory = shop.inventory.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setShop({ ...shop, inventory: updatedInventory });
  };

  const togglePaymentMethod = (method) => {
    setShop({
      ...shop,
      paymentMethods: {
        ...shop.paymentMethods,
        [method]: !shop.paymentMethods[method],
      },
    });
  };

  const toggleVisibility = () => {
    setShop({ ...shop, visibility: !shop.visibility });
  };

  return (
    <Wrapper>
      <Header>
        <h1>Shop Management</h1>
      </Header>

      <Section>
        <h2>Shop Info</h2>
        <Info>
          <p>
            <strong>Name:</strong> {shop.name}
          </p>
          <p>
            <strong>Contact:</strong> {shop.contact}
          </p>
          <MapContainer
            center={[shop.location.lat, shop.location.lng]}
            zoom={13}
            className="map"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[shop.location.lat, shop.location.lng]}>
              <Popup>{shop.name}</Popup>
            </Marker>
          </MapContainer>
        </Info>
      </Section>

      <Section>
        <h2>Inventory Management</h2>
        <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Stock</th>
              <th>Low-Stock Threshold</th>
            </tr>
          </thead>
          <tbody>
            {shop.inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <input
                    type="number"
                    value={item.stock}
                    onChange={(e) =>
                      handleInventoryChange(item.id, "stock", +e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.threshold}
                    onChange={(e) =>
                      handleInventoryChange(item.id, "threshold", +e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Section>
        <h2>Payment Methods</h2>
        <Options>
          <label>
            <input
              type="checkbox"
              checked={shop.paymentMethods.upi}
              onChange={() => togglePaymentMethod("upi")}
            />
            UPI
          </label>
          <label>
            <input
              type="checkbox"
              checked={shop.paymentMethods.card}
              onChange={() => togglePaymentMethod("card")}
            />
            Card
          </label>
        </Options>
      </Section>

      <Section>
        <h2>Heatmap Visibility</h2>
        <Button onClick={toggleVisibility}>
          {shop.visibility ? "Disable" : "Enable"} Visibility
        </Button>
      </Section>
    </Wrapper>
  );
}

export default ShopManagement;

const Wrapper = styled.div`
  padding: 20px;
  font-family: "Roboto", sans-serif;
  color: #333;
  background-color: #f4f4f9;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    color: #0066cc;
    font-size: 2rem;
  }
`;

const Section = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;

  h2 {
    color: #0044cc;
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
`;

const Info = styled.div`
  .map {
    height: 200px;
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;
    overflow: hidden;
  }

  p {
    font-size: 1rem;
    margin: 8px 0;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f0f0f5;
    color: #333;
  }

  td {
    font-size: 1rem;
  }

  input {
    width: 90%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

const Options = styled.div`
  display: flex;
  gap: 20px;

  label {
    font-size: 1rem;
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
    }
  }
`;

const Button = styled.button`
  background: #0066cc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0044aa;
  }
`;
