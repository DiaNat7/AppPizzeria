import React, { createContext, useContext, useState } from "react";

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (tipo, tamano, cantidad) => {
    const nuevaOrden = {
      id: Date.now().toString(),
      tipo,
      tamano,
      cantidad,
    };
    setOrders((prev) => [...prev, nuevaOrden]);
  };

  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, clearOrders }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrdersContext);
}
