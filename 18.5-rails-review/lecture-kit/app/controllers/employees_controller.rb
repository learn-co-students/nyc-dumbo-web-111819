class EmployeesController < ApplicationController
    before_action :get_employee, only: [:edit, :update, :destroy]

    def index
        @employees = Employee.all        
    end

    def show
        @employee = Employee.find(params[:id])
    end

    def new
        @employee = Employee.new 
        @errors = flash[:errors]     
    end

    def create 
        @employee = Employee.create(employee_params)
        if !@employee.valid?
            flash[:errors] = @employee.errors.full_messages
            redirect_to "/employees/new"
        else 
            flash[:success] = "Yay!"
            redirect_to "/employees/#{@employee.id}"
        end
    end

    def update
        if get_employee.update(employee_params)
            redirect_to employee_path(@employee)
        else 
            redirect_to edit_employee_path(@employee)
        end
    end

    def destroy
        @employee.destroy
        redirect_to employees_path
    end

    private

    def get_employee
        @employee = Employee.find(params[:id])
    end

    def employee_params
        params.require(:employee).permit(:first_name, :last_name, :alias, :title, :office, :img_url, :dog_id)
    end

end
