class Dog < ApplicationRecord
    has_many :employees, dependent: :destroy

    validates :name, presence: true
    validates :breed, presence: true
    validates :age, presence: true 
    
    # numericality: {only_integer: true}
end
