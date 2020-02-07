class SnacksController < ApplicationController

  before_action :authorized, only: [:create]

  def index
    @snacks = Snack.all
    render json: @snacks
  end


  def create
    # byebug
    @snack = Snack.create(name: params[:name], user: @user)
    render json: @snack
  end

end
