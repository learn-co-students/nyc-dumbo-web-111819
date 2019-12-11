require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
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
    erb :index
  end

  get '/universes/new' do
    # model

    # response
    erb :new
  end

  get '/universes/deleted' do
    erb :deleted
  end
  
  # Task 2: show details for ONE specific universe
  get '/universes/:id' do
    # binding.pry
    # model
    @universe = Universe.find_by(id: params[:id])
    @universe_emoji = "🤠"

    # response
    erb :show
  end

  post '/universes' do
    # model 
    # universe = Universe.create(name: params[:name_field], size: params[:size_field], color: params[:color_field])
    universe = Universe.create(params[:universe])
    
    # response?
    # erb :show
    redirect "/universes/#{universe.id}"
  end

  get '/universes/:id/edit' do
    @universe = Universe.find_by(id: params[:id])

    erb :edit
  end

  put '/universes/:id' do
    # get the instance
    universe = Universe.find_by(id: params[:id])
    # update the record in the database
    universe.update(params[:universe])

    # response
    redirect "/universes/#{universe.id}"
  end

  delete '/universes/:id' do
    # find the universe
    universe = Universe.find_by(id: params[:id])
    # delete it
    universe.destroy

    # response
    redirect "/universes/deleted"
  end

  # get '/universes/2' do
  #   # model
  #   @universe = Universe.find_by(id: 2)

  #   # response
  #   erb :show
  # end

end
