class TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    render json: @teachers
  end


  def show
    @teacher = Teacher.find(params[:id])
    render json: {cool: true, teacher: TeacherSerializer.new(@teacher)}
    # only: [:id, :name, :subject], include: {assignments: {only: [:id, :name]}}
  end

end
