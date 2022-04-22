export const mapMovementsListFromApitoVm = movementList =>
    Array.isArray(movementList)
        ? movementList.map(movement => mapMovementsFromApitoVm(movement))
        : [];



const mapMovementsFromApitoVm = (movement) =>{
    return {
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction:new Date(movement.realTransaction).toLocaleDateString(),
        description: movement.description,
        amount:`${movement.amount} €` ,
        balance: `${movement.balance} €`,
        id: movement.id,
        accountId: movement.accountId,
    }
}
