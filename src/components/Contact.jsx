import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>Contact US</h1>
      <form>
        <input type="text" placeholder="Full Name" required></input>
        <input type="email" placeholder="Type Your E-Mail" required></input>
        <textarea placeholder="Write Here..." name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
