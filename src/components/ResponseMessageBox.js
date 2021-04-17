/*
 *
 * Title: Message Box
 * Description: Message Box
 * Author: Shah Arafat
 * Date: 17-04-2021
 *
 */
import { FaTimes } from 'react-icons/fa';

const ResponseMessageBox = ({ isSuccess, message, handler }) => {
  return (
    <div
      className={`flex justify-between items-center py-3 px-2 ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      } `}
    >
      <h1 className={`text-md font-semibold ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>
        {message}
      </h1>
      <FaTimes
        onClick={() => handler('')}
        className={`inline-block ${isSuccess ? 'text-green-700' : 'text-red-700'}`}
      />
    </div>
  );
};

export default ResponseMessageBox;
