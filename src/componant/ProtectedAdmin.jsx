import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function ProtectedAdmin({ children }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("roleBycrypt");
  useEffect(() => {
    if ( role !== "admin") {
      navigate("/");
    } 
  });

  return  role === "admin" ? children : null;
}
