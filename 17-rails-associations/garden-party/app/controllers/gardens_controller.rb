class GardensController < ApplicationController

  # get '/gardens'
  def index
    # model
    @gardens = Garden.all

    # response
    render :index
  end

  # get '/gardens/:id'
  def show
    # model
    @garden = Garden.find_by(id: params[:id])

    # response
    render :show
  end

  # get "/gardens/new"
  def new
    # model
    @garden = Garden.new

    # response
    render :new
  end

  # post '/gardens'
  def create
    # model
    garden_params = params.require(:garden).permit(:name, :location, :staff_count)
    Garden.create(garden_params)

    # response
    redirect_to gardens_path
  end

  # get '/gardens/:id/edit'
  def edit
    # model
    @garden = Garden.find_by(id: params[:id])

    # response
    render :edit
  end

  # patch '/gardens/:id'
  def update
    # model
    @garden = Garden.find_by(id: params[:id])
    garden_params = params.require(:garden).permit(:name, :location, :staff_count)
    @garden.update(garden_params)
    
    # response
    redirect_to @garden
  end

end
