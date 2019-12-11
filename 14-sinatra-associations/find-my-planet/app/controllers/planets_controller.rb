class PlanetsController < ApplicationController

  get '/planets/new' do
    # model
    @universes = Universe.all.order(name: :desc)

    # response
    erb :"planets/new"
  end

  post '/planets' do
    planet = Planet.create(params[:planet])

    # response?
    redirect "/universes/#{planet.universe_id}"
  end

end
