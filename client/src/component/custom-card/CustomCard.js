import React from "react";
import { Card } from "react-bootstrap";
import "./customCard.css";

const CustomCard = ({ title, count }) => {
  return (
    <Card style={{ minWidth: "18rem" }}>
      <Card.Body className="py-3 fw-bold">
        <Card.Title className="mt-5">{count}</Card.Title>
        <Card.Text className="mt-5">{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
