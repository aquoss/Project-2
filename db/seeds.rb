require 'ffaker'

User.destroy_all
Game.destroy_all

user_data = []
15.times do
  username = FFaker::Name.first_name
  email = FFaker::Internet.free_email
  user_data << {
    username: username,
    email: email,
    password: 'a'
  }
end
user = User.create(user_data)

# game_data = []
# 30.times do
#   game_data << {
#     hider_location:
#   }
# end
