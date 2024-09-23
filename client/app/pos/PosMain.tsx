"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

const PosMain = () => {
  useEffect(() => {
    const check = sessionStorage.getItem("key");
    if (check != "true") {
      redirect("/");
    }
  }, []);
  return <></>;
};

export default PosMain;
