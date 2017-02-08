class Game < ApplicationRecord
  belongs_to :seeker, class_name: "User"
  belongs_to :hider, class_name: "User"
end
