import React from "react";

import AppTextInput from "./AppTextInput";
import ErrorMeesage from "./ErrorMeesage";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMeesage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
