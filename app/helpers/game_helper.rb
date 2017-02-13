module GameHelper
  def has_user?(username)
    p "username inside game helper is ", username
    User.find_by(username: username)
  end

  def assign_hider(hider)
    @game.hider = hider
  end

  def game_requests(user)
     Game.where(seeker_id: user, game_over?: nil)
  end

  def pending_requests(user)
     Game.where(hider_id: user,  game_over?: nil)
  end
end
