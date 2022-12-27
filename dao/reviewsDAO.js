import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return;
        }
        try {
            reviews = await conn.db('reviews').collection('reviews');
        } catch (e) {
            console.error(`Unable to established collection handles in userDAO: ${e}`);
        }
    }

    static async addReview(movieId, user, review) {
        try {
            const reviewDoc = {
                movieId: movieId,
                user: user,
                review: review
            };
            console.log('Adding review...');
            return await review.insertOne(reviewDoc);
        } catch (e) {
            console.error(`Unable to post review: ${e}`);
            return {error: e};
        }
    }

    static async getReview(reviewId) {
        try {
            return await reviews.findOne({_id: ObjectId(reviewId)});
        } catch (e) {
            console.error(`Unable to get review: ${e}`);
            return {error: e};
        }
    }

    static async updateReview(reviewId, user, review) {
        try {
            return await reviews.updateOne({
                    _id: ObjectId(reviewId)
                },
                {$set: {user: user, review: review}}
            );
        } catch (e) {
            console.error(`Unable to update review: ${e}`);
            return {error: e};
        }
    }

    static async deleteReview(reviewId) {
        try {
            return await reviews.deleteOne({
                _id: ObjectId(reviewId)
            });
        } catch (e) {
            console.error(`Unable to delete review: ${e}`);
            return {error: e};
        }
    }

    static async getReviewsByMovieId(movieId) {
        try {
            const cursor = await reviews.find({
                movieId: parseInt(movieId)
            });
            return cursor.toArray();
        } catch (e) {
            console.error(`Unable to get review: ${e}`);
            return {error: e};
        }
    }

}