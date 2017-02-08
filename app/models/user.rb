class User < ApplicationRecord
  has_many :hiders, class_name: "Game"
  has_many :seekers, class_name: "Game"
end
