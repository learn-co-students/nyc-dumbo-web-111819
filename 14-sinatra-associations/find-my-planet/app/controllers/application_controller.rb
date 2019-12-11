require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  helpers do
    
    def header(text)
      "<h1>#{text}</h1>"
    end

    def link_to(text, path)
      "<a href='#{path}'>#{text}</a>"
    end 

  end

  # root
  get "/" do
    # response
    erb(:cheese)
  end

  
end
