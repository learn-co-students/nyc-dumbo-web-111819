class ToysController < ApplicationController

  def index
    # @toys = Toy.order(:id)
    @toys = Toy.all
    render json: @toys
  end

  def create
    @toy = Toy.create(create_toy_params)
    if @toy.valid?
      render json: @toy, status: 201
    else
      render json: @toy.errors.full_messages, status: 422
    end
  end

  def update
    @toy = Toy.find(params[:id])
    @toy.update(edit_toy_params)
    render json: @toy
  end

  def destroy
    @toy = Toy.find(params[:id])
    @toy.destroy
    render json: {message: "IT HAS BEEN DELETED YAY", toy: @toy}
  end

  def random
    @random_toy = Toy.all.sample
    render json: @random_toy
  end


  private
  def edit_toy_params
    params.permit(:likes)
  end

  def create_toy_params
    params.permit(:likes, :image, :name)
  end


end
