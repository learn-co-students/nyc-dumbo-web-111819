class UniversesController < ApplicationController

  # index
  get '/universes' do
    # model
    @universes = Universe.all
    @cheese = "🧀"
    
    # response
    erb :"universes/index"
  end

  # new
  get '/universes/new' do
    # model

    # response
    erb :"universes/new"
  end

  # custom route!
  get '/universes/deleted' do
    erb :"universes/deleted"
  end

  # show
  get '/universes/:id' do
    # model
    @universe = Universe.find_by(id: params[:id])
    @universe_emoji = "🤠"

    # response
    erb :"universes/show"
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
    erb :"universes/edit"
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