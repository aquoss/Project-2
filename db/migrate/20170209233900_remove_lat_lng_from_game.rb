class RemoveLatLngFromGame < ActiveRecord::Migration[5.0]
  def change
    remove_column :games, :seeker_lat, :float
    remove_column :games, :seeker_lng, :float
  end
end
