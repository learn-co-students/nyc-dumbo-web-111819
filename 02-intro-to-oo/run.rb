require 'pry'

class BankAccount
  attr_reader :account_number # <= getter only
  # attr_writer :balance  # <= setter only
  attr_accessor :balance  # <= getter and setter

  @@all = []

  def initialize(account_number, balance)
    local_variable = "something"
    @balance = balance
    @account_number = account_number

    @@all << self
  end

  def deposit(amount)
    self.balance += amount
  end

  def withdraw(amount)
    self.balance = self.balance - amount
  end

  def self.all
    @@all
  end

  def self.find_by_account_number(account_number)
    self.all.find do |bank_account_instance|
      bank_account_instance.account_number == account_number
    end
  end

  # def withdraw # <= getter
  #   @withdraw
  # end

  # def balance=(new_amount) # <= setter
  #   @balance = new_amount
  # end

  # def account_number
  #   @account_number
  # end


end # end of BankAccount class

BankAccount.new(123, 2000)
BankAccount.new(321, 1000)

# b1.deposit(100)

all_bank_accounts = BankAccount.all

binding.pry
"pls work"