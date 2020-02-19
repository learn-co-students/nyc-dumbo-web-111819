class UserSnacksController < ApplicationController
  before_action :authorized, only: [:create]

  def create
    @user_snack = UserSnack.create(user: @user, snack_id: params[:snack_id])
    render json: SnackSerializer.new(@user_snack.snack).as_json.merge({user_snack_id: @user_snack.id})
  end

end
