class VansController < ApplicationController

    def index
        render json: Van.all
    end

    def create
        new_van = Van.new(user_create_params)

        if new_van.save
            render json: new_van
        else
            render json: {errors: new_van.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        van_to_destroy = Van.find_by(id: params[:id])

        if van_to_destroy
            van_to_destroy.destroy
            head :no_content
            render json: Van.all
        else
            render json: {error: "Activity not found"}, status: :not_found
        end
    end

    private

    def user_create_params
        params.permit(:year, :make, :model, :price, :imageURL, :van, :dealer_id, :user_id)
    end

end
