class PlantsController < ApplicationController

  def new
    # model
    @plant = Plant.new

    # response
    render :new
  end

  def create
    # model
    plant_params = params.require(:plant).permit(:name, :smell, :leaf_count, :garden_id)
    plant = Plant.create(plant_params)

    # redirect
    # we want to redirect to the garden show page that this plant belongs to
    # so we want to go to "/gardens/#{plant.garden.id}"
    # we can use the path helper to make this link
    redirect_to garden_path(plant.garden)
  end
end
