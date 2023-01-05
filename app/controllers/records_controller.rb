class RecordsController < ApplicationController

    get '/records' do 
        records = Record.all.order(:title)
        records.to_json
    end

    get '/records/:id' do 
        record = Record.find(params[:id])
        record.to_json
    end

    delete '/records/:id' do
        record = Record.find(params[:id])
        record.destroy_all
        record.to_json
    end


end