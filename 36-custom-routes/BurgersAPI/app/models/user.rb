class User < ApplicationRecord
  has_many :orders


  def buyBurgers(arrayOfIds)
    the_newly_created_order = Order.create(user: self)

    arrayOfIds.each do |b_id|
      BurgerOrder.create(burger_id: b_id, order: the_newly_created_order)
    end

    arrayOfBurgerObjs = arrayOfIds.map { |b_id| Burger.find(b_id) }
    price = arrayOfBurgerObjs.pluck(:price).sum
    amountLeft = self.amount - price
    self.update(amount: amountLeft)
  end

end
