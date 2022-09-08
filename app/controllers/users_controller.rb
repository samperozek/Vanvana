class UsersController < ApplicationController

    def index
        render json: User.all
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
