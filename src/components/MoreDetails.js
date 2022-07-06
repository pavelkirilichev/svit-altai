import { useState } from "react";
import styles from "../module_styles/MoreDetails.css";

const orders = [
  {
    num_order: 1,
    id_order: 121123,
    date: "12.12.2022",
    adress: "куда-то",
    summ: "2120",
    status: "Ожидает подтверждения",
  },
  {
    num_order: 2,
    id_order: 121124,
    date: "13.12.2022",
    adress: "куда-то подальше отсюда",
    summ: "3700",
    status: "В обработке",
  },
];

function MoreDetails() {
  console.log(styles);
  return <div className="main">тест</div>;
}

export default MoreDetails;
