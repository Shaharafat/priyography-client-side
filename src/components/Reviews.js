/*
 *
 * Title: Review
 * Description: Review
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import axios from 'axios';
import React, { useEffect } from 'react';
import { ReviewCard } from '.';
import { storeAllReviews } from '../store/actions';
import { LOADING_END, LOADING_START } from '../store/constants';
import { useStore } from '../store/Store';

const Reviews = () => {
  const { state, dispatch } = useStore();

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/reviews');
      const { success, reviews } = response.data;

      if (success) {
        // update store
        storeAllReviews(reviews, dispatch);
      }
    } catch (error) {
      // error message from server
      console.error(error.response?.data?.message);
    }
  };

  // get all review list
  useEffect(() => {
    dispatch({ type: LOADING_START });
    fetchReviews();
    dispatch({ type: LOADING_END });
    console.log(state);
  }, []);

  return (
    <div className="container-area bg-color py-12">
      <h1 className="text-center text-gray-100 text-4xl font-bold pt-8 font-passion-one">
        Reviews
      </h1>
      <div className=" py-8 grid gap-4 justify-items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {state.reviews.map((review) => (
          <ReviewCard key={review._id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
