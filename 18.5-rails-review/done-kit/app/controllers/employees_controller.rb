class EmployeesController < ApplicationController
    before_action :get_employee, only: [:show, :edit, :destroy]
  
    def index
      @employees = Employee.all
    end
  
    def new
      @employee = Employee.new
      @errors = flash[:errors]
    end
  
    def create
      @employee = Employee.create(employee_params)
      if @employee.save
        flash[:success] = "Good job filling out the form!"
        redirect_to @employee
      else
        flash[:errors] = @employee.errors.full_messages
        redirect_to employee_new_path
      end
    end
   
    def update
      if get_employee.update(employee_params)
        redirect_to @employee
      else
        redirect_to employee_edit_path
      end
    end
  
    def destroy
        @employee.destroy
        redirect_to employees_path
    end
  
  private
  
    def employee_params
      params.require(:employee).permit(:first_name, :last_name, :alias, :title, :office, :img_url, :dog_id)
    end
  
    def get_employee
      @employee = Employee.find(params[:id])
    end
  
  end