class ColoniesController < ApplicationController
  before_action :set_colony, only: [ :show, :update, :destroy]
  
  def index
      @colonies = Colony.all
      render json: @colonies
  end
  
    def show
      @colony = Colony.find(params[:id])
      render json: @colony ,include: :cats, status: :ok
    end
  
    def update
      if @colony.update(colony_params)
      render json: @colony
      else 
        render json: @colony.errors, status: :unprocessable_entity
      end
    end
  
      # DELETE /cats/1
      def destroy
        @colony.destroy
      end
    
      private
    def set_colony
      @colony = Colony.find(params[:id])
    end
  
    def colony_params
      params.require(:colony).permit(:name, :borough)
    end
  
  
end
