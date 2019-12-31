class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def reset_counter
    session[:counter] = 3
    # response
    # redirect_to gardens_path
    redirect_back(fallback_location: gardens_path)
  end

  def new
    @errors = flash[:errors]
    # render :new
  end

  def create
    # find the user instance
    user = Gardener.find_by(username: params[:session][:username])
    # use .authenicate to check their plaintext password against the encrypted password
    if user && user.authenticate(params[:session][:password])
      # save their id to session[:gardener_id]
      session[:gardener_id] = user.id
      # redirect somewhere
      redirect_to gardens_path
    else
      flash[:errors] = ["Invalid username or password"]
      redirect_to login_path
    end
  end

  def destroy
    session.delete(:gardener_id)
    # response
    redirect_to login_path
  end

end