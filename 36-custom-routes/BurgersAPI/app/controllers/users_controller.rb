class UsersController < ApplicationController

  def history

    @found_user = User.find_by(name: params[:chicken])
    if @found_user
      render json: @found_user
    else

      render json: {error: "No user with that name exists"}, status: 404
    end

  end

end
