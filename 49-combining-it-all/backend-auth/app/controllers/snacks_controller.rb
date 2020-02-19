class SnacksController < ApplicationController

  def index
    @snacks = Snack.all
    render json: @snacks
  end

end
