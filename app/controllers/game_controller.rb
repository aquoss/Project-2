class GameController < ApplicationController
  def index
  end

  def new
    @game = Game.new
  end

  def create
    game = Game.new(game_params)
    user = session[:user_id]
    p "game is ", game.seeker_id
    if(has_user?(game.seeker_id) && game.save)
      redirect_to user_path(user)
    else
      redirect_to game_new_path
    end
    # if (has_user?(game.hider_id) && game.save)
    #   redirect_to user_path(user)
    #
    # end
  end

  def show
    @game = Game.find(params[:id])
  end

  def update
    @game = Game.find(params[:id])
    if @game.update_attributes(params[:game_over?])
      flash[:notice] = "Game Over has been added!"
      redirect_to user_path(user)
    end
  end


  private

  def game_params
    params.require(:game).permit(:game_duration, :wager, :hider_lat, :hider_lng, :seeker_id, :hider_id)
  end
end
