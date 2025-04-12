import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import OrderDetailsDialog from "../components/OrderDetails";
import OrderList from "../components/OrderList";

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(`${API_BASE_URL}/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("주문 목록 불러오기 실패:", err);
      }
    };

    fetchOrders();
  }, []);

  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order);
    setOrderDialogOpen(true);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        주문 목록
      </Typography>
      <OrderList orders={orders} onViewDetails={handleViewOrderDetails} />
      <OrderDetailsDialog
        open={orderDialogOpen}
        onClose={() => setOrderDialogOpen(false)}
        order={selectedOrder}
      />
    </Container>
  );
};

export default AdminOrdersPage;
