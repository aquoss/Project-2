module GameHelper
  def has_user?(username)
    p "username inside game helper is ", username
    User.find_by(username: username)
  end

  def assign_hider(hider)
    @game.hider = hider
  end
end
