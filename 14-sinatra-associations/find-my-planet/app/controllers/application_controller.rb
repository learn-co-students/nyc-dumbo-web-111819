require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  # root
  get "/" do
    # response
    erb(:cheese)
  end

  # index
  get '/universes' do
    # model
    @universes = Universe.all
    @cheese = "🧀"
    
    # response
    erb :index
  end

  # new
  get '/universes/new' do
    # model

    # response
    erb :new
  end

  # custom route!
  get '/universes/deleted' do
    erb :deleted
  end
  
  # show
  get '/universes/:id' do
    # model
    @universe = Universe.find_by(id: params[:id])
    @universe_emoji = "🤠"

    # response
    erb :show
  end

  # create
  post '/universes' do
    # model 
    universe = Universe.create(params[:universe])
    
    # response
    redirect "/universes/#{universe.id}"
  end

  # edit
  get '/universes/:id/edit' do
    # model
    @universe = Universe.find_by(id: params[:id])

    # response
    erb :edit
  end

  # update
  put '/universes/:id' do
    # model
    universe = Universe.find_by(id: params[:id])
    universe.update(params[:universe])

    # response
    redirect "/universes/#{universe.id}"
  end

  # destroy
  delete '/universes/:id' do
    # model
    universe = Universe.find_by(id: params[:id])
    universe.destroy

    # response
    redirect "/universes/deleted"
  end

end
