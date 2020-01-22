class BurgersController < ApplicationController

  def create
    @burger = Burger.create(burger_params)
    render json: @burger
  end

  private

  def burger_params
    params.permit(:name, :image, :description, :price, :category_id)
  end

end
