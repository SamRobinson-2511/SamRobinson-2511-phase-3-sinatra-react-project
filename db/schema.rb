# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_04_152632) do

  create_table "collections", force: :cascade do |t|
    t.string "artist_name"
    t.string "artist_first_name"
    t.string "artist_last_name"
    t.string "album_name"
    t.string "label"
    t.string "release_date"
    t.string "cat_num"
    t.string "date_purchased"
    t.float "purchase_price"
    t.integer "collector_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["collector_id"], name: "index_collections_on_collector_id"
  end

  create_table "collectors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "user_name"
    t.string "email"
    t.string "phone"
    t.integer "zip_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "records", force: :cascade do |t|
    t.string "artist_name"
    t.string "artist_first_name"
    t.string "artist_last_name"
    t.string "album_name"
    t.string "label"
    t.string "release_date"
    t.string "cat_num"
    t.integer "collector_id"
    t.integer "store_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["collector_id"], name: "index_records_on_collector_id"
    t.index ["store_id"], name: "index_records_on_store_id"
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "country"
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
