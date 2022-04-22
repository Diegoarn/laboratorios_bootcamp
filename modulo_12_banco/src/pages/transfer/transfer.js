import { getIbanList, insertTransfer } from './transfer.api';
import { setAccountOptions } from './transfer.helpers';
import { history } from '../../core/router';
import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors } from '../../common/helpers';
import { formValidation } from './transfer.validations';

let transferObj = {
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    date: {
        day: '',
        month: '',
        year: '',
    },
    email: '',
};

const params = history.getParams();

getIbanList().then(accountList => {
    setAccountOptions(accountList, params.id);
}
);

onUpdateField('iban', event => {
    const value = event.target.value;
    transferObj = { ...transferObj, iban: value };
    formValidation.validateField('iban', transferObj.iban).then(result => {
        onSetError('iban', result);
        });

});

onUpdateField('name', event => {
    const value = event.target.value;
    transferObj = { ...transferObj, name: value };
    formValidation.validateField('name', transferObj.name).then(result => {
        onSetError('name', result);
        });

});

onUpdateField('amount', event => {
    const value = event.target.value;
    transferObj = { ...transferObj, amount: value };
    formValidation.validateField('amount', transferObj.amount).then(result => {
        onSetError('amount', result);
        });

});

onUpdateField('concept', event => {
    const value = event.target.value;
    transferObj = { ...transferObj, concept: value };

});

onUpdateField('notes', event => {
    const value = event.target.value;
    transferObj = { ...transferObj, notes: value };
});

onUpdateField('day', event => {
    const value = event.target.value;
    transferObj.date = {...transferObj.date, day: value};
    formValidation.validateField('day', transferObj.date.day).then(result => {
        onSetError('day', result);
        });
});

onUpdateField('month', event => {
    const value = event.target.value;
    transferObj.date = {...transferObj.date, month: value};
    formValidation.validateField('month',transferObj.date.month).then(result => {
        onSetError('month', result);
        });
});

onUpdateField('year', event => {
    const value = event.target.value;
    transferObj.date = {...transferObj.date, year: value};
    formValidation.validateField('year', transferObj.date.year).then(result => {
        onSetError('year', result);
        });
});

onUpdateField('email', event => {
    const value = event.target.value;
    transferObj = { ...transferObj, email: value };
    formValidation.validateField('email', transferObj.email).then(result => {
        onSetError('email', result);
        });
});

const onSave = () => {
 insertTransfer(transferObj); 
};

onSubmitForm('transfer-button', () => {
    formValidation.validateForm(transferObj).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave();
        }
    });
});

