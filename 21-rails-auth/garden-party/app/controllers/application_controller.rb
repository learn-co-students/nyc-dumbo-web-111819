class ApplicationController < ActionController::Base
  before_action :set_counter
  before_action :current_user
  before_action :authorized

  # helper_method :current_user

  private 

  def authorized
    if @logged_in_gardener
      # just continue with the request
    else
      redirect_to login_path
    end
  end

  def current_user
    @logged_in_gardener = Gardener.find_by(id: session[:gardener_id])
  end

  def set_counter
    # if session[:counter] == nil
    #   session[:counter] = 3
    # end
    
    session[:counter] ||= 3
  end
end
