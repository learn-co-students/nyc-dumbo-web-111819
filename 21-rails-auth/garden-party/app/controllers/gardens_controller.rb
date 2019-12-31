class GardensController < ApplicationController
  before_action :set_garden, only: [:show, :edit, :update, :destroy]
  before_action :authorized_gardener, only: [:show, :edit, :update, :destroy]

  def my_gardens
    @gardens = @logged_in_gardener.gardens
    render :index
  end

  # get '/gardens'
  def index
    @gardens = Garden.all
  end

  # get '/gardens/:id'
  def show
    # set_garden
    session[:counter] = session[:counter] - 1
  end

  # get "/gardens/new"
  def new
    @garden = Garden.new
    @errors = flash[:errors]
    # render :new
  end

  # post '/gardens'
  def create
    @garden = @logged_in_gardener.gardens.create(garden_params)
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

  def authorized_gardener
    redirect_to gardens_path unless @garden.gardener == @logged_in_gardener
  end

  def set_garden
    @garden = Garden.find_by(id: params[:id])
  end

  def garden_params
    params.require(:garden).permit(:name, :location, :staff_count, :length, :width)
  end
end
