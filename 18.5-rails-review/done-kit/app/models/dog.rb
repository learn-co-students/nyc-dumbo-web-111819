class Dog < ApplicationRecord
    has_many :employees, :dependent => :delete_all

    validates :name, presence: true

    def employee_count
        self.employees.count
    end
    
end
