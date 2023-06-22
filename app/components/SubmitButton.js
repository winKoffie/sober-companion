import React from "react";
import AppButton from "./AppButton";

function SubmitButton({ title, handleSubmit }) {
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
