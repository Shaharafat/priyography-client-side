/*
 *
 * Title: Single Review card
 * Description: single review card
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ userName, reviewText, stars }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="fr-color shadow-xl p-4 rounded-md flex flex-col items-center">
      <h1 className="mt-2 text-gray-300 text-lg">{reviewText}</h1>
      <h1 className=" text-green-500 text-lg mt-auto">{userName}</h1>
      {/* stars */}
      <div className="flex mt-1">
        {arr.map((items) =>
          stars >= items ? (
            <FaStar key={items} className="inline-block mx-1 text-yellow-500" />
          ) : (
            <FaStar key={items} className="inline-block mx-1 text-gray-400" />
          )
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
