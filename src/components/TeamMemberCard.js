/*
 *
 * Title: Team member
 * Description: Single Team member
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import React from 'react';

const TeamMemberCard = ({ name, image, position }) => {
  return (
    <div className="bg-color shadow-xl p-4 rounded-md flex flex-col items-center">
      <img src={image} alt={image} className="rounded-full drop-shadow-md w-2/3 " />
      <h1 className="mt-4 text-green-500 text-2xl">{name}</h1>
      <h1 className="mt-2 text-gray-300 text-lg">{position}</h1>
    </div>
  );
};

export default TeamMemberCard;
