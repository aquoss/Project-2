class GameController < ApplicationController
  def index
  end

  def new
    @game = Game.new
  end

  def create
    game = Game.new(game_params)
    user = session[:user_id]
    p "game is ", game
    if(has_user?(game.hider_id))

    elsif(game.save)
      redirect_to user_path(user)
    else
      redirect_to game_new_path
    end
    # if (has_user?(game.hider_id) && game.save)
    #   redirect_to user_path(user)
    #
    # end
  end


  private

  def game_params
    params.require(:game).permit(:game_duration, :wager, :hider_lat, :hider_lng, :hider_id)
  end
end
