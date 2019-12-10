require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    # response
    erb(:cheese)
  end

  # Task 1: show a list of all the universes
  # requests
  get '/universes' do
    # model
    @universes = Universe.all
    @cheese = "🧀"
    
    # response
    erb(:universes)
  end

  # Task 2: show details for ONE specific universe


end
