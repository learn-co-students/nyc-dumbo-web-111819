require 'pry'

class Instructor

  attr_reader :name, :full_name

  def initialize(name_arg, full_name)
    @name = name_arg
    @full_name = full_name
  end

  def introduce
    "Hello, I'm #{ self.full_name }!"
  end

end

eric = Instructor.new("Eric", "Eric Kim")












binding.pry
