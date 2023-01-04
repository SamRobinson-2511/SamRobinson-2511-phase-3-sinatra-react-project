class CollectorsController < ApplicationController
    # crud API 

    #read 
    #read all resources (models)

    get "/records" do
       Record.all.to_json
    end
    #read single resource
    
    get "/records/:id" do
        Record.find(params[:id]).to_json
    end

    post "/records" do
        record = Record.create(params)
        record.collector = current_user
        record.to_json

    end
            # artist_name: params[:artist_name], 
            # artist_first_name: params[:artist_first_name],
            # artist_last_name: params[:artist_last_name], 
            # album_name: params[:album_name] , 
            # label: params[:label], 
            # release_date: params, 
            # cat_num: params[:cat_num], 
            # collector_id: params[:collector_id], 
            # store_id: params[:store_id]        
            # ).to_json  

    #update existing record

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
    end
       


  

    #delete single resource
    delete '/records/:id' do
      records = Record.find(param[:id])
      records.destroy
      records.to_json
    end

    
    
end