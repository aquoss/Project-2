class UserController < ApplicationController
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
