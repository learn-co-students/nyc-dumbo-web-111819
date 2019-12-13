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
    garden_params = params.require(:garden).permit(:name, :location, :staff_count)
    Garden.create(garden_params)

    redirect_to gardens_path
  end

  # get '/gardens/:id/edit'
  def edit
    @garden = Garden.find_by(id: params[:id])

    render :edit
  end

  # patch '/gardens/:id'
  def update
    @garden = Garden.find_by(id: params[:id])
    garden_params = params.require(:garden).permit(:name, :location, :staff_count)
    @garden.update(garden_params)
    
    # redirect_to "/gardens/#{@garden.id}"
    # redirect_to garden_path(@garden)
    redirect_to @garden
  end

end
