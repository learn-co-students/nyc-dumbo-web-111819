class Employee < ApplicationRecord
    belongs_to :dog

    validates :first_name, presence: true, uniqueness: true
    validates :last_name, presence: true, uniqueness: true
    validates :alias, presence: true, uniqueness: true
    validates :title, presence: true, uniqueness: true
  
    def name
      first_name + " " + last_name
    end
    
end
