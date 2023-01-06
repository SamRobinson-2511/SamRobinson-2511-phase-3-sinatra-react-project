class CollectorsController < ApplicationController

    get '/collectors/:id' do 
        collector = Collector.find(params[:id])
        collector.to_json 
    end
end


    