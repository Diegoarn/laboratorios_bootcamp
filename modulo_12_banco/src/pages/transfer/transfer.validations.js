
import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { minNumber } from '@lemoncode/fonk-min-number-validator';
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';


const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: iban.validator,
        message: 'No es un IBAN válido',
      },
    ],
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
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: minNumber.validator,
        customArgs: { minValue: 0, inclusive: false },
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      }
    ],
    day: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: rangeNumber.validator,
        customArgs: {
          strictTypes: false,
          min: {
            value: 1,
            inclusive: true,
          },
          max: {
            value: 31,
            inclusive: true,
          },
        },
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: rangeNumber.validator,
        customArgs: {
          strictTypes: false,
          min: {
            value: 1,
            inclusive: true,
          },
          max: {
            value: 12,
            inclusive: true,
          },
        },
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: minNumber.validator,
        customArgs: { minValue: 2022, inclusive: true },
      },
    ],
  },
};


export const formValidation = createFormValidation(validationSchema);
