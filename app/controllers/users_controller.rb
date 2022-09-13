class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user
        else
            render json: {error:"User not found"}, status: :not_found
        end
    end

    def create
        new_user = User.new(user_create_params)

        if new_user.save
            render json: new_user
        else
            render json: {errors: new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def user_create_params
        params.permit(:username, :password)
    end

end
