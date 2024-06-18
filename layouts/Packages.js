"use client";

import React, { useEffect } from "react";

function Packages() {
  React.useEffect(() => {
    const toggler = document.querySelector(".toggler");
    const basicPrice = document.getElementById("basic-price-annual");
    const proPrice = document.getElementById("pro-price-annual");
    const masterPrice = document.getElementById("master-price-annual");

    toggler.addEventListener(
      "change",
      () => {
        if (toggler.checked) {
          basicPrice.innerHTML = "$19.99";
          proPrice.innerHTML = "$24.99";
          masterPrice.innerHTML = "$39.99";
        } else {
          basicPrice.innerHTML = "$199.99";
          proPrice.innerHTML = "$249.99";
          masterPrice.innerHTML = "$399.99";
        }
      },
      []
    );
  });
  return (
    <>
      <div class="toggle-row">
        Annually
        <label class="switch">
          <input type="checkbox" class="toggler" />
          <span class="slider round"></span>
        </label>
        Monthly
      </div>
      <div class="container">
        <div class="price-basic">
          Basic <br />
          <span id="basic-price-annual">$199.99</span>
          <hr />
          500 GB Storage
          <hr />
          2 Users Allowed
          <hr />
          Send up to 3 GB
          <hr />
          <span class="button-white"> LEARN MORE </span>
        </div>
        <div class="price-pro">
          Professional <br />
          <span id="pro-price-annual">$249.99</span>
          <hr />
          1 TB Storage
          <hr />
          5 Users Allowed
          <hr />
          Send up to 10 GB
          <hr />
          <span class="button-blue"> LEARN MORE </span>
        </div>
        <div class="price-master">
          Master <br />
          <span id="master-price-annual">$399.99</span>
          <hr />
          2 TB Storage
          <hr />
          10 Users Allowed
          <hr />
          Send up to 20 GB
          <hr />
          <span class="button-white"> LEARN MORE </span>
        </div>
      </div>
      ;
    </>
  );
}

export default Packages;
