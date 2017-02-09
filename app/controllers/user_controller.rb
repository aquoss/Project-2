class UserController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      login(@user)
      redirect_to @user
    else
      redirect_to '/'
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :online?)
  end
end
