/*
 *
 * Title: write your review
 * Description: write your review
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import React from 'react';
import { WriteReviewForm } from '../components';

const WriteReview = () => {
  return (
    <>
      <div className="min-h-screen fr-color px-6 py-4">
        <div className="bg-color rounded-md px-2 py-3 shadow-lg">
          <h1 className="font-bold text-2xl text-green-300">Write a Review</h1>
        </div>
        <WriteReviewForm />
      </div>
    </>
  );
};

export default WriteReview;
