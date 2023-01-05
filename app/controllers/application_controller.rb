class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
#   # Add your routes here
#   get "/collection" do

#     collection = Collection.all
#     collection.to_json
#   end

#   get "/collector" do
#     collector = Collector.all
#     collector.to_json 
#   end

#   get "/records" do
#     records = Record.all
#     records.to_json
#   end

#   get "/records" do
#       records = Record.all(param[:id])
#       records.to_json
#   end

#   delete '/records' do 
#     records = Record.find(param[:id])
#     records.destroy 
#     records.to_json
#   end
  
end

