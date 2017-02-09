class RemoveLocationFromGame < ActiveRecord::Migration[5.0]
  def change
    remove_column :games, :hider_location, :string
    remove_column :games, :seeker_location, :string
  end
end
