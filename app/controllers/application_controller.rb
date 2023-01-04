class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/collection" do
  end

  get "/collector" do
  end

  get "/record" do
    records = Record.all
    records.to_json
  end

end

