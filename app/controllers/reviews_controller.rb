class ReviewsController < ApplicationController

    get "/reviews" do
        Review.all.to_json
    end

    get "/reviews/:id" do
        Reviews.find(params[:id]).to_json
    end

    get '/records/:id/reviews' do
        record = Record.find(params[:id])
        reviews = record.reviews
        reviews.to_json 
    end

    post "/reviews/" do
        review = Review.create(
            rating: params[:rating],
            comment: params[:comment],
            record_id: params[:record_id],
            collector_id: params[:collector_id]
        )
        review.to_json 
    end

    patch '/reviews/:id' do 
        review = Review.find(params[:id])
        review.update(
            rating: params[:rating],
            comment: params[:comment],
        )
        review.to_json 
    end

    delete '/records/reviews/:id' do
        reviews = Review.all
        review = reviews.find(params[:id])
        review.destroy
        review.to_json 
    end
    
end

