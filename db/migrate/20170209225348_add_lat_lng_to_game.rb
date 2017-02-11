class AddLatLngToGame < ActiveRecord::Migration[5.0]
  def change
    add_column :games, :hider_lat, :real
    add_column :games, :hider_lng, :real
    add_column :games, :seeker_lat, :real
    add_column :games, :seeker_lng, :real
  end
end
