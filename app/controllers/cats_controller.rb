class CatsController < ApplicationController
  before_action :set_cat, only: [:show, :update, :destroy]

  def index
    @cats = Cat.all
    render json: @cats, include: :colonies, status: :ok
  end

  def show
    @cat = Cat.find(params[:id])
    render json: @cat, include: :colonies, status: :ok
  end

  def create
    @cat =  Cat.new(cat_params)
    if @cat.save
    render json: @cat, status: :created
    else
      render json: @cat.errors, status: :unprocessable_entity
    end
  end

  def update
    if @cat.update(cat_params)
    render json: @cat
    else 
      render json: @cat.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @cat.destroy
  end

  private
  def set_cat
    @cat = Cat.find(params[:id])
  end

  def cat_params
    params.require(:cat).permit(:name, :breed, :img_url)
  end


end
