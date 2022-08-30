class VansController < ApplicationController

    def index
        render json: Van.all
    end
end
