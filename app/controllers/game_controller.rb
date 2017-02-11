class GameController < ApplicationController
  def index
  end

  def new
    @game = Game.new
  end

  def create
    game = Game.new(game_params)
    user = sessions[:user_id]
    if game.save
      redirect_to user_path(user)
    else
      redirect_to new_game_path
    end
  end


  private

  def game_params
    params.require(:game).permit(:game_duration, :wager, :hider_lat, :hider_lng)
  end
end
