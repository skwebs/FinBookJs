import axios from '../utils/axios';

export async function allCustomer() {
  const customerList = await axios.get('/customers', {});
  return customerList;
}

export async function addCustomer(customerInfo) {
  const addedCustomerDetails = await axios.post('/customers', customerInfo);
  return addedCustomerDetails;
}

export async function updateCustomer(customerId, newCustomerInfo) {
  const updatedCustomerDetails = await axios.put(`/customers/${customerId}`, newCustomerInfo);
  return updatedCustomerDetails;
}

export async function deleteCustomer(customerId) {
  await axios.delete(`/customers/${customerId}`, {});
}

export async function restoreCustomer(customerId) {
  await axios.patch(`/customers/${customerId}/restore`, {});
}


export async function forceDeleteCustomer(customerId) {
  await axios.delete(`/customers/${customerId}/force`, {});
}
