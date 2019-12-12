class PlanetsController < ApplicationController
  get '/universes' do
    @universes = Universe.all

    erb :"planets/index"
  end

  get '/universes/new' do
     erb :"planets/new"
  end

  post '/universe' do
    universe = Universe.create(params[:universe])
    redirect "/universes"
  end

end