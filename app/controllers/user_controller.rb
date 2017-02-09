class UserController < ApplicationController

  def index
    @user = User.find_by_id(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    login(@user)
    redirect_to @user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :online?)
  end
end
