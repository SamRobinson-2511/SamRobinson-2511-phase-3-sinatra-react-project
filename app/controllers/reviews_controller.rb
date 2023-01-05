class ReviewsController < ApplicationController

    get "/reviews" do
        Review.all.to_json
    end

    get "/reviews/:id" do
        Reviews.find(params[:id])
    end

    post "/reviews/:id" do
        review = Record.create(params)
        review.collector = current_user
        review.to_json
    end

end