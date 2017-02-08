class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :hider_id
      t.string :seeker_id
      t.string :hider_location
      t.string :seeker_location
      t.boolean :game_accepted?
      t.integer :game_duration
      t.string :winner
      t.string :loser
      t.boolean :game_over?
      t.integer :hints_remaining
      t.string :wager
      t.boolean :request_cancelled?

      t.timestamps
    end
  end
end
