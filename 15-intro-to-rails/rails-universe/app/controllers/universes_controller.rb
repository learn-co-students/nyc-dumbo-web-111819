class UniversesController < ApplicationController

  # index
  # get '/universes' do
  #   # model
  #   @universes = Universe.all
    
  #   # response
  #   erb :"universes/index"
  # end

  def index
    # model
    @universes = Universe.all

    byebug
    
    # response
    render :index
  end

  def show
    # model 
    @universe = Universe.find_by(id: params[:id])

    # response
    render :show
  end

end