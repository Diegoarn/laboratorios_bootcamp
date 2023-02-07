import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationsSchema = {
  field: {
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],

    message: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationsSchema);
