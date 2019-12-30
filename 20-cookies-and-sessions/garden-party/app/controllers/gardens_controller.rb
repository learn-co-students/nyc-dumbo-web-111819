class GardensController < ApplicationController
  before_action :set_garden, only: [:show, :edit, :update, :destroy]

  # get '/gardens'
  def index
    @gardens = Garden.all
  end

  # get '/gardens/:id'
  def show
    # set_garden
  end

  # get "/gardens/new"
  def new
    @garden = Garden.new
    @errors = flash[:errors]
  end

  # post '/gardens'
  def create
    @garden = Garden.create(garden_params)
    if @garden.valid?
      redirect_to gardens_path
    else
      flash[:errors] = @garden.errors.full_messages
      redirect_to new_garden_path
    end
  end

  # get '/gardens/:id/edit'
  def edit
  end

  # patch '/gardens/:id'
  def update
    @garden.update(garden_params)
    
    redirect_to @garden
  end

  # delete '/gardens/:id'
  def destroy
    @garden.destroy

    redirect_to gardens_path
  end

  private

  def set_garden
    @garden = Garden.find_by(id: params[:id])
  end

  def garden_params
    params.require(:garden).permit(:name, :location, :staff_count, :length, :width)
  end
end
