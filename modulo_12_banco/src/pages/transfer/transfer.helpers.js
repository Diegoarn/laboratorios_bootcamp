const getOption = account => {
  const option = document.createElement('option');
  option.value = account.id;
  option.textContent = account.iban;
  return option;
};

export const setAccountOptions = (accounts, selectedId) => {
  const select = document.getElementById('select-account');

  const option1 = document.createElement('option');
  option1.value = 0;
  option1.textContent = "Seleccione una cuenta";
  select.appendChild(option1);

  accounts.forEach(account => {
    const option = getOption(account);
    select.appendChild(option);
  });

  if (selectedId) {
    select.value = selectedId;
  }

  return select;
};
