class User < ApplicationRecord
  has_many :hiders, class_name: "Game"
  has_many :seekers, class_name: "Game"
  has_many :games
  has_secure_password
  validates :username, uniqueness: true
  def self.confirm(params)
    @user = User.find_by({email: params[:email]})
    @user ? @user.authenticate(params[:password]) : false
  end

  mount_uploader :profile_photo, ProfilePhotoUploader

end
