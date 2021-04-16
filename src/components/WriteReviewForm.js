/*
 *
 * Title: write review form
 * Description: write review form
 * Author: Shah Arafat
 * Date: 17-04-2021
 *
 */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaRegCommentAlt } from 'react-icons/fa';
import { writeReviewFormSchema } from '../helpers/schemas';

const WriteReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(writeReviewFormSchema),
  });

  // execute when form submits
  const submit = (data) => {
    console.log(data);
    console.log('submit');
  };

  return (
    <div className="p-4 bg-color rounded-md shadow-xl mt-3">
      <h2 className="text-gray-100 text-xl">Review Details</h2>

      <form className="mt-3" onSubmit={handleSubmit(submit)}>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div>
            <label htmlFor="review" className="text-green-400 ">
              Review
            </label>
            <textarea
              id="review"
              placeholder="Review must be minimum 20 character long."
              className="fr-color pl-1 w-full py-3 mt-2 text-gray-100"
              cols="30"
              rows="10"
              {...register('reviewText')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.reviewText?.message}</p>
          </div>

          <div>
            <label htmlFor="rating" className="text-green-400 block">
              Rate us (between 1 to 5)
            </label>
            <select className="w-1/2 px-3 py-2 mt-2" id="rating" {...register('stars')}>
              <option value="1" defaultValue>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p className="text-sm text-red-500 mt-1">{errors.stars?.message}</p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 mt-6 py-2 px-3 flex items-center text-white"
        >
          {' '}
          <FaRegCommentAlt className="inline-block mr-2" /> Submit Review
        </button>
      </form>
    </div>
  );
};

export default WriteReviewForm;
