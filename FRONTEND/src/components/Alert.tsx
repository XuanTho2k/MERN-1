import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

import React from "react";

const Alert = () => {
  return (
    <Alert>
      icon
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
};

export default Alert;
