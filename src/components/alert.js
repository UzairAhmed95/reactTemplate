import React from "react";
import { Message } from "rsuite";

const AlertMessage = ({ message, variant }) => {
  return <Message type={variant} description={message} />;
};

export default AlertMessage;
