class OrdersController < ApplicationController

  def create
    @user = User.find_or_create_by(name: params[:username])
    @user.buyBurgers(params[:arrayOfIds])
    # @the_newly_created_order = Order.create(user: @user)
    #
    # params[:arrayOfIds].each do |b_id|
    #   BurgerOrder.create(burger_id: b_id, order: @the_newly_created_order)
    # end
    #
    # arrayOfBurgerObjs = params[:arrayOfIds].map { |b_id| Burger.find(b_id) }
    # price = arrayOfBurgerObjs.pluck(:price).sum
    # amountLeft = @user.amount - price
    # @user.update(amount: amountLeft)
    render json: @user

  end

end
