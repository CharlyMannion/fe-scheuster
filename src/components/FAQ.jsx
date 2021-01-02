import React from "react";
import { Link } from "@reach/router";

const FAQ = () => {
  return (
    <body>
      <h1>FAQs:</h1>
      <p>
        <strong>How do I contact goldenshoe.co.uk?</strong>
      </p>
      <p>
        All of our contact information can be found on our{" "}
        <Link to="/contact" key="contact">
          Contact Us
        </Link>{" "}
        page.
      </p>
      <p>
        <strong>How do I make a complaint?</strong>
      </p>
      <p>
        Golden Shoe tries its best to ensure that you do not have any complaints
        - in the rare occasion that you do, please contact{" "}
        <a href="online@goldenshoe.co.uk">online@goldenshoe.co.uk</a> who will
        try and resolve any issues. If your dispute remains unresolved, you may
        be eligible to use the European Commission's Online Dispute Resolution
        platform which can be found at{" "}
        <a href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a>
      </p>
      <p>
        <strong>Do you offer student discount?</strong>
      </p>
      <p>We do not offer student discount.</p>
      <p>
        <strong>Can I get help placing my order?</strong>
      </p>
      <p>
        If you would like help placing your order contact a member of our Online
        Advice team who will be happy to place your order over the phone on
        03454 501865.
      </p>
      <p>
        <strong>Can I return my online order to a store?</strong>
      </p>
      <p>
        In order to protect our staff and customers and to ensure social
        distancing is adhered to, you will not be able to return or refund
        orders in store. Please use the free returns labels provided with your
        order.
      </p>
      <p>
        <strong>What currencies do you accept?</strong>
      </p>
      <p>Payment is made in Sterling (GBP).</p>
      <p><strong>How do I know what size to buy?</strong></p>
      <p>The shoes on  <a href="https://goldenshoe.netlify.app/">goldenshoe.co.uk</a> are sized according to the country of manufacture. This may be EU, US and UK. Individual sizing information is available on the page for each shoe.</p>
    </body>
  );
};

export default FAQ;
