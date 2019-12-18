class EmployeesController < ApplicationController
    before_action :get_employee, only: [:show, :edit]
  
    def index
      @employees = Employee.all
    end
  
    def new
      @employee = Employee.new(employee_params)
      @errors = flash[:errors]
    end
  
    def create
      if @employee.create(employee_params)
        flash[:success] = "Good job filling out the form!"
        redirect_to @employee
      else
        flash[:errors] = @employee.errors.full_messages
        render :new
      end
    end
   
    def update
      if get_employee.update(employee_params)
        redirect_to @employee
      else
        render :edit
      end
    end
  
    def destroy
      @employee = Employee.destroy(params[:id])
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