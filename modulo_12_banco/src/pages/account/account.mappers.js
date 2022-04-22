export const mapAccountVmToApi = account => ({
    id: account.id,
    type: account.type,
    name: account.alias,
});
export const mapAccountApiToVm = account => ({
    id: account.id,
    type: account.type,
    alias: account.name,
});


