class ApplicationController < ActionController::Base
  before_action :set_counter
  before_action :current_user

  private 

  def current_user
    @gardener = Gardener.find_by(id: session[:gardener_id])
  end

  def set_counter
    # if session[:counter] == nil
    #   session[:counter] = 3
    # end
    
    session[:counter] ||= 3
  end
end
