import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;
const urltransfer = `${process.env.BASE_API_URL}/transfer`;

export const getIbanList = () => Axios.get(url).then(({ data }) =>
data);
export const insertTransfer = transfer =>
Axios.post(`${urltransfer}`, transfer).then(({ data }) => data);
