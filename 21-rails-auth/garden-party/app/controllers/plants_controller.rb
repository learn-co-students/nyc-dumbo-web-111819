class PlantsController < ApplicationController
  before_action :set_plant, only: :show
  before_action :set_garden, only: [:new, :create]

  # get '/gardens/:garden_id/plants/new'
  def new
    @plant = Plant.new
    @valid_colors = Plant.valid_colors
    @errors = flash[:errors]
  end

  # post '/gardens/:garden_id/plants'
  def create
    plant = @garden.plants.create(plant_params)
    if plant.valid?
      redirect_to garden_path(@garden)
    else
      flash[:errors] = plant.errors.full_messages
      redirect_to new_garden_plant_path(@garden)
    end
  end

  # get '/plants/:id'
  def show
  end

  private

  def set_garden
    @garden = Garden.find(params[:garden_id])
  end

  def set_plant
    @plant = Plant.find(params[:id])
  end

  def plant_params
    params.require(:plant).permit(:color, :x, :y, :width, :length, :emoji)
  end
end
