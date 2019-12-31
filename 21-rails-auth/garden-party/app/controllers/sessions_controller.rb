class SessionsController < ApplicationController

  def reset_counter
    session[:counter] = 3
    # response
    # redirect_to gardens_path
    redirect_back(fallback_location: gardens_path)
  end

end