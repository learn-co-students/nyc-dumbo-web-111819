class GardenersController < ApplicationController

  def new
    @gardener = Gardener.new
  end

  def create
    # create a user and encrypt
    user = Gardener.create(user_params)
    # save the id to the session
    session[:gardener_id] = user.id
    
    # response?
    redirect_to gardens_path
  end

  private

  def user_params
    params.require(:gardener).permit(:username, :password)
  end
end
