class ApplicationController < ActionController::Base
  before_action :set_counter

  private 

  def set_counter
    # if session[:counter] == nil
    #   session[:counter] = 3
    # end
    
    session[:counter] ||= 3
  end
end
