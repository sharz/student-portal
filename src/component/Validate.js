export default function(values) {
  const errors = {};
  const requiredFields = [
    "userName",
    "first_name",
    "last_name",
    "avatar",
    "contact",
    "rollName",
    "email",
    "password",
    "retypePassword"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.userName && values.userName.length <= 3
  ) {
    errors.userName = "Must be greater than 3 characters";
  }
  if (
    values.userName && values.userName.length >= 15
  ) {
    errors.userName = "Must be 15 characters or less";
  }
  if (
    values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  if (
    values.contact &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contact)
  ) {
    errors.email = "Invalid contact Number";
  }
  if (values.password !== values.retypePassword
  ) {
    errors.retypePassword = "password doesnt match";
  }
  return errors;
}
