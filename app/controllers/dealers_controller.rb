class DealersController < ApplicationController

    def index
        render json: Dealer.all
    end
end
