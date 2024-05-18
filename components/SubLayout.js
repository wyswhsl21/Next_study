import React from "react";
import style from "./SubLayout.module.css";

export default function SubLayout({ children }) {
  return (
    <div>
      <div className="SubLayout">{children}</div>
      <footer className={style.footer}>@kimjaewoo</footer>
    </div>
  );
}
