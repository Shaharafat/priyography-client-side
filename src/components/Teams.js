/*
 *
 * Title: Team
 * Description: Teams section
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */

import React from 'react';
import { TeamMemberCard } from '.';
import teamMembers from '../helpers/teamsData';

const Teams = () => {
  return (
    <div className="container-area fr-color py-12">
      <h1 className="text-center text-gray-100 text-4xl font-bold pt-8 font-passion-one">
        OUR TEAMS
      </h1>
      <div className=" py-8 grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.image} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
