"use client"
import { useAppSelector } from "@/store";

import React from "react";
import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";

export const WidgetsGrid = () => {
  const count = useAppSelector( state => state.counter.count)
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget title={count.toString()} href={"/dashboard/counter"} 
      label="Counter"
      subtitle="Counter products"
      icon={<IoCafeOutline size={20} className="text-blue-500" />}/>
    </div>
  );
};
