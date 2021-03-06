class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: {error: "errorrrrrr"}, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            user.destroy
            session.delete :user_id
            head :no_content
        else
            render json: {error: "User not found"}, status: :unauthorized
        end 
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update(user_params)
            render json: user, status: :accepted
        else
            render json: {errors: "errorrrrrr"}, status: :unauthorized
        end
    end

    private
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :email)
    end

end
