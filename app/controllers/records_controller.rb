require 'pry'
class RecordsController < ApplicationController

    get '/records' do 
        records = Record.all.order(:album_name)
        records.to_json
    end

    get '/records/:id' do 
        record = Record.find(params[:id])
        record.to_json
    end
    
    post "/records" do
       record = Record.create(params)
        record.to_json   
    end

    patch '/records/:id' do 
        record = Record.find(params[:id])
        record.update(
            artist_name: params[:artist_name], 
            artist_first_name: params[:artist_first_name],
            artist_last_name: params[:artist_last_name], 
            album_name: params[:album_name], 
            label: params[:label], 
            release_date: params[:release_date], 
            genre: params[:genre],
            cat_num: params[:cat_num], 
            image_url: params[:image_url],    
            )
            record.to_json 
        end

    delete '/records/:id' do
        record = Record.find(params[:id])
        record.destroy
        record.to_json
    end


end