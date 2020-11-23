class ColoniesController < ApplicationController
    def index
      @colonies = Colony.all
      render json: @colonies
    end
  
    def show
      @colony = Colony.find(params[:id])
      render json: @colony ,include: :cats, status: :ok
    end
  
  
end
