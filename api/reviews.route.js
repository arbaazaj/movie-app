import express from 'express';
import reviewsController from '../api/reviews.controller.js';
const router = express.Router();


//router.route('/').get((req, res) => res.send('Hello world!'));
router.route('/movie/:id').get(reviewsController.apiGetReviews);
router.route('/new').get(reviewsController.apiPostReview);
router.route('/:id')
    .get(reviewsController.apiGetReview)
    .put(reviewsController.apiUpdateReview)
    .delete(reviewsController.apiDeleteReview);

export default router;