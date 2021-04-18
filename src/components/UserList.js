/*
 *
 * Title: User List
 * Description: User List
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ResponseMessageBox, SingleUser } from '.';
import { storeAllUser } from '../store/actions';
import { LOADING_END, LOADING_START } from '../store/constants';
import { useStore } from '../store/Store';

const UserList = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { state, dispatch } = useStore();

  // get all users from server
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`, {
        headers: { x_auth_token: localStorage.getItem('x_auth_token') }
      });

      const { success, users } = response.data;
      if (success) {
        // update store
        storeAllUser(users, dispatch);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message);
    }
  };

  // get all user list
  useEffect(() => {
    dispatch({ type: LOADING_START });
    fetchUsers();
    dispatch({ type: LOADING_END });
  }, []);

  return (
    <div>
      <div className="min-h-screen fr-color px-6 py-4">
        <div className="bg-color rounded-md px-2 py-3 shadow-lg">
          <h1 className="font-bold text-2xl text-green-300">All Users</h1>
        </div>

        <div className="bg-color rounded-md px-2 mt-3 py-3 shadow-lg">
          {/* show error message */}
          {errorMessage && (
            <ResponseMessageBox
              isSuccess={false}
              message={errorMessage}
              handler={setErrorMessage}
            />
          )}
          {/* show success message */}
          {successMessage && (
            <ResponseMessageBox
              isSuccess={true}
              message={successMessage}
              handler={setSuccessMessage}
            />
          )}

          {/* User Table */}
          <table
            className="w-full table-auto mt-6 p-2 fr-color rounded-md text-gray-100 divide-y divide-gray-400
          "
          >
            <thead>
              <tr>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Username</th>
                <th className="px-3 py-2">Email</th>
                <th className="px-3 py-2">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-300 ">
              {state.users.map((user) => (
                <SingleUser
                  key={user._id}
                  user={user}
                  setSuccess={setSuccessMessage}
                  setError={setErrorMessage}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
