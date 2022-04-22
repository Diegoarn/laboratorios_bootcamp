import { getMovementsList } from './movements.api';
import {addMovementRows} from './movements.helpers'
import { history } from '../../core/router';
import {mapMovementsListFromApitoVm} from './movements.mappers';


const params = history.getParams();
const isEditMode = Boolean(params.id);

getMovementsList().then(movementList => {
if (isEditMode) {
    const movementsFilter = movements => movements.filter(movement => movement.accountId === params.id);
    var lista = movementsFilter(movementList);
    addMovementRows(mapMovementsListFromApitoVm(lista));
} else {
    addMovementRows(mapMovementsListFromApitoVm(movementList));
}
});


