module GameHelper
  def has_user?(username)
    p "username inside game helper is ", username
    User.find_by(username: username)
  end
  def get_user_id(username)
    user = User.find_by(username: username)
    user.id
  end
  def assign_hider(hider)
    @game.hider = hider
  end

  def game_requests(user)
     Game.where(seeker_id: user, game_over?: nil)
  end

  def total_requests(id)
    Game.where(seeker_id: id, game_over?: nil).length
  end
  def pending_requests(user)
    games =
     Game.where(hider_id: user,  game_over?: nil)
  end

  def total_pending(id)
    Game.where(hider_id: id, game_over?: nil).length
  end
  def games_won(id)
    p "id is ", id
     game = Game.where(winner: id)
     p "bets won games are ", game
     game
  end

  def games_lost(id)
    Game.where(loser: id)
  end
end
