class PlantsController < ApplicationController

  def new
    # model
    @plant = Plant.new
    @gardens = Garden.all

    # response
    render :new
  end

  def create
    # model
    plant_params = params.require(:plant).permit(:name, :smell, :leaf_count, :garden_id)
    plant = Plant.create(plant_params)

    # redirect
    redirect_to garden_path(plant.garden)
  end
end
