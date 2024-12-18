import axios from '../utils/axios';

export async function allTransaction(customerId) {
  const transactionList = await axios.get(`customer/${customerId}/transactions`, {});
  return transactionList;
}

export async function addTransaction(transactionInfo) {
  const addedTransactionDetails = await axios.post('/transactions', transactionInfo);
  return addedTransactionDetails;
}

export async function editTransaction(transactionId, newTransactionInfo) {
  const updatedTransactionDetails = await axios.put(`/transactions/${transactionId}`, newTransactionInfo);
  return updatedTransactionDetails;
}

export async function deleteTransaction(transactionId) {
  await axios.delete(`/transactions/${transactionId}`, {});
}

export async function restoreTransaction(transactionId) {
  await axios.patch(`/transactions/${transactionId}/restore`, {});
}


export async function forceDeleteTransaction(transactionId) {
  await axios.delete(`/transactions/${transactionId}/force`, {});
}
