import React from "react";
import Footer from "../../components/Sheared/Footer/Footer";
import Menubar from "../../components/Sheared/Menubar/Menubar";
import { Link } from "react-router-dom";

const PaymentRoute = () => {
  return (
    <div>
      <Menubar></Menubar>
      <h1 className="mt-5">Choice your payment method</h1>
      <div className="payments">
        <div className="d-flex align-items-center justify-content-center p-5">
          <Link to="/bkashPayment">
            <img
              className="payment-logo"
              src="https://www.logo.wine/a/logo/BKash/BKash-bKash2-Logo.wine.svg"
              alt=""
            />
          </Link>
          <Link to="stripPayment">
            <img
              className="payment-logo"
              src="https://quasarn.com/wp-content/uploads/2021/01/Stripe.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PaymentRoute;
