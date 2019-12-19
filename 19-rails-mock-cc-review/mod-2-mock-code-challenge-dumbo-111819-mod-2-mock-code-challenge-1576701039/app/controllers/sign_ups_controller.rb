class SignUpsController < ApplicationController
  
  def new
    @signup = SignUp.new
    @campers = Camper.all
    @activities = Activity.all
    
    @errors = flash[:errors]
  end

  def create
    signup = SignUp.create(signup_params)
    # SignUp.create(time: params[:sign_up][:time], camper_id: params[:sign_up][:camper_id])
    if signup.valid?
      redirect_to camper_path(signup.camper)
    else
      flash[:errors] = signup.errors.full_messages
      redirect_to new_sign_up_path # /sign_ups/new
    end
  end

  private

  def signup_params
    params.require(:sign_up).permit(:time, :camper_id, :activity_id)
  end
end
