class ExpensesController < ApplicationController

    def create
        user = User.find_by(id: session[:user_id])
        if session[:user_id]
            expense = user.expenses.create(expense_params)
            if expense.valid?
                render json: expense, status: :created
            else
                render json: {error: "Invalid expense"}, status: :unprocessable_entity
            end
        else
            render json: {error: "Not logged in"}, status: :unauthorized
        end
    end

    private

    def expense_params
        params.permit(:description, :amount, :date)
    end

end
