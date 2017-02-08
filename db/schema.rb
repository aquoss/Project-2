ActiveRecord::Schema.define(version: 20170208220942) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.string   "hider_id"
    t.string   "seeker_id"
    t.string   "hider_location"
    t.string   "seeker_location"
    t.boolean  "game_accepted?"
    t.integer  "game_duration"
    t.string   "winner"
    t.string   "loser"
    t.boolean  "game_over?"
    t.integer  "hints_remaining"
    t.string   "wager"
    t.boolean  "request_cancelled?"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.boolean  "online?"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
