class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :professor_name, :screaming_name
  has_many :classrooms #uses the serializer for classrooms
  # has_many :assignments

  def screaming_name
    self.object.name.upcase
  end

end
