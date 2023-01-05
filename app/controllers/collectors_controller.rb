class CollectorsController < ApplicationController

    private
    def current_user
      Collector.first
    end

    get "/records" do
       Record.all.to_json
    end
    
    get "/records/:id" do
        Record.find(params[:id]).to_json
    end

    post "/records" do
        record = Record.create(params)
        record.collector = current_user
        record.to_json

    end
         

    patch "/records/:id" do
        record = Record.find(params[:id])
        record.update(
            artist_name: params[:artist_name], 
            artist_first_name: params[:artist_first_name],
            artist_last_name: params[:artist_last_name], 
            album_name: params[:album_name], 
            label: params[:label], 
            release_date: params[:release_date], 
            cat_num: params[:cat_num], 
            collector_id: params[:collector_id], 
            store_id: params[:store_id]
        )
        record.to_json 
    end
       

    delete '/records/:id' do
      records = Record.find(param[:id])
      records.destroy
      records.to_json
    end
end