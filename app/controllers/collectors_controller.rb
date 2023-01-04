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
end