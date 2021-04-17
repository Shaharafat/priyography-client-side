/*
 *
 * Title: store actions
 * Description: sttore action
 * Author: Shah Arafat
 * Date: 17-04-2021
 *
 */
import {
  ADD_SINGLE_REVIEW,
  ADD_SINGLE_SERVICE,
  DELETE_SINGLE_SERVICE,
  GET_ALL_ORDERS,
  GET_ALL_SERVICES,
  GET_ALL_USERS,
  GET_USERS_ORDERS,
  UPDATE_ORDER_STATUS,
  UPDATE_USER_ROLE
} from './constants';

export const updateUserRoleOnStore = (id, role, state, dispatch) => {
  const users = state.users.map((user) => (user._id === id ? { ...user, role: role } : user));

  dispatch({ type: UPDATE_USER_ROLE, payload: { users } });
};

export const storeAllUser = (users, dispatch) => {
  dispatch({ type: GET_ALL_USERS, payload: { users } });
};

export const storeAllOrder = (orders, dispatch) => {
  dispatch({ type: GET_ALL_ORDERS, payload: { orders } });
};

export const updateOrderStatusOnStore = (id, status, state, dispatch) => {
  const orders = state.orders.map((order) => (order._id === id ? { ...order, status } : order));

  dispatch({ type: UPDATE_ORDER_STATUS, payload: { orders } });
};

export const storeAllServices = (services, dispatch) => {
  dispatch({ type: GET_ALL_SERVICES, payload: { services } });
};

export const updateServiceAfterDeleteOnStore = (id, state, dispatch) => {
  const services = state.services.filter((service) => service._id !== id);

  dispatch({ type: DELETE_SINGLE_SERVICE, payload: { services } });
  console.log(updated);
};

export const updateStoreWithNewService = (service, state, dispatch) => {
  const services = [service, ...state.services];
  dispatch({ type: ADD_SINGLE_SERVICE, payload: { services } });
};

export const updateStoreWithNewReview = (review, state, dispatch) => {
  const reviews = [review, ...state.reviews];
  dispatch({ type: ADD_SINGLE_REVIEW, payload: { reviews } });
};

export const storeUserOrders = (orders, dispatch) => {
  dispatch({ type: GET_USERS_ORDERS, payload: { orders } });
};
