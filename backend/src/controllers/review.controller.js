import { createReview, getAllReviews } from "../services/review.service.js"

const createReviews = async (req, res) => {
    const user = req.user
    try {
        const review = await createReview(req.body, user)
        return res.status(201).send(review)
        
    } catch (error) {
        return res.status(500).send({error : error.message})
    }
}

const getAllReview = async (req, res) => {
    const productId = req.params.productId
    const user = req.user
    try {
        const review = await getAllReviews(productId)
        return res.status(201).send(review)
        
    } catch (error) {
        return res.status(500).send({error : error.message})
    }
}

export { createReviews, getAllReview}