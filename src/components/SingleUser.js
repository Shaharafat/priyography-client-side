/*
 *
 * Title: Single User info
 * Description: Single user
 * Author: Shah Arafat
 * Date: 17-04-2021
 *
 */
import axios from 'axios';
import React, { useState } from 'react';
import { updateUserRoleOnStore } from '../store/actions';
import { useStore } from '../store/Store';

const SingleUser = ({ user, setSuccess, setError }) => {
  const { _id: id, firstName, lastName, username, email, role } = user;
  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [userRole, setUserRole] = useState('');
  const { state, dispatch } = useStore();

  // change user role and show update button
  const changeRole = async (value) => {
    setShowUpdateButton(true);
    setUserRole(value);
  };

  // update user when update button clicks
  const updateUser = async (id, role) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/users/updateRole/${id}`,
        {
          role
        },
        {
          headers: { x_auth_token: localStorage.getItem('x_auth_token') }
        }
      );

      const { success, message } = response.data;
      // set success message
      if (success) {
        setSuccess(message);
        setShowUpdateButton(false);
      }

      // update on store
      updateUserRoleOnStore(id, role, state, dispatch);
    } catch (error) {
      // set error message
      setError(error.response?.data?.message);
    }
  };

  return (
    <tr className="table-row text-center">
      <td className="px-3 py-2">{firstName + ' ' + lastName}</td>
      <td className="px-3 py-2">{username}</td>
      <td className="px-3 py-2">{email}</td>
      <td className="px-3 py-2">
        <select
          value={role}
          onChange={(e) => changeRole(e.target.value)}
          className={` rounded-sm px-1 py-2 text-white ${
            role === 'admin' ? 'bg-green-500' : 'bg-yellow-500'
          }`}
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
      </td>
      <td className="px-3 py-2">
        <button
          onClick={() => updateUser(id, userRole)}
          className={`${
            showUpdateButton ? '' : 'hidden'
          } bg-green-500 hover:bg-green-600 px-3 py-2`}
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default SingleUser;
