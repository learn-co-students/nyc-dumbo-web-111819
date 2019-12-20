class PlantsController < ApplicationController

  def new
    @plant = Plant.new
    @gardens = Garden.all
    @errors = flash[:errors]
  end

  def create
    plant = Plant.create(plant_params)
    if plant.valid?
      redirect_to garden_path(plant.garden)
    else
      flash[:errors] = plant.errors.full_messages
      redirect_to new_plant_path
    end
  end

  private

  def plant_params
    params.require(:plant).permit(:name, :smell, :leaf_count, :garden_id, :color)
  end
end
