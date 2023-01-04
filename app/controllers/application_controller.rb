class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/collection" do
    collection = Collection.all
    collection.to_json
  end

  get "/collector" do
    collector = Collector.all
    collector.to_json 
  end
  
  private
  def current_user
    Collector.first
  end
end
