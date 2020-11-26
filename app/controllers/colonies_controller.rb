class ColoniesController < ApplicationController
  before_action :set_colony, only: [ :show, :update, :destroy]
  
  def index
      @colonies = Colony.all
      render json: @colonies, include: :cats, status: :ok
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
  
    def create
      @colony =  Colony.new(colony_params)
      if @colony.save
      render json: @colony, status: :created
      else
        render json: @colony.errors, status: :unprocessable_entity
      end
    end

      # DELETE /colonies/1
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
