class GameController < ApplicationController
  def index
  end

  def new
    @game = Game.new
  end

  def create
    game = Game.new(game_params)
    game[:hider_id] = session[:user_id]
    user = session[:user_id]
    p "game is ", game.seeker_id
    if(has_user? game.seeker_id)
      game[:seeker_id] = get_user_id(game.seeker_id)

    end
    if (game.save)
      redirect_to user_path(user)
    else
      redirect_to game_new_path
    end
  end

  def show
    @game = Game.find(params[:id])
    @timer = true
  end

  def over
    game = Game.find(params[:id])
    if game.update(game_over?: true)
      flash[:notice] = "Game Over has been added!"
      redirect_to user_path(game.hider)
    end

  end

  def accept
    p "params are ", params
    game = Game.find_by_id(params[:game][:game_id])
    p "game is ", game
    if game.update(game_accepted?: true)
      redirect_to game_path(game)
    end
  end


  private

  def game_params
    params.require(:game).permit(:game_duration, :wager, :hider_lat, :hider_lng, :seeker_id, :hider_id)
  end
end
