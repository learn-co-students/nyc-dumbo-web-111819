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
    @errors = flash[:errors]

    # response
    render :new
  end

  # post '/gardens'
  def create
    # model
    garden_params = params.require(:garden).permit(:name, :location, :staff_count, :length, :width)

    @garden = Garden.create(garden_params)

    # if the garden is valid, redirect to the garden path
    if @garden.valid?
      # response
      flash[:success] = "Good job filling out the form!"
      redirect_to gardens_path
    else
      # otherwise, send an error message and redirect to the new page so they fill out the form again
      flash[:errors] = @garden.errors.full_messages
      redirect_to new_garden_path
    end
  end

  # get '/gardens/:id/edit'
  def edit
    # model
    @garden = Garden.find_by(id: params[:id])

    # response
    render :edit
  end

  # patch '/gardens/:id'
  def update
    # model
    @garden = Garden.find_by(id: params[:id])
    garden_params = params.require(:garden).permit(:name, :location, :staff_count, :length, :width)
    @garden.update(garden_params)
    
    # response
    redirect_to @garden
  end

  def destroy
    garden = Garden.find_by(id: params[:id])
    garden.destroy

    # response
    redirect_to gardens_path
  end

end
