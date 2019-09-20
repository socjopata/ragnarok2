# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_20_070521) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "advantages", force: :cascade do |t|
    t.string "name"
    t.string "internal_name"
    t.text "description"
    t.string "kind", null: false
    t.integer "pd_cost", default: 0
    t.integer "use_again_cost"
  end

  create_table "heroes", force: :cascade do |t|
    t.string "name"
  end

  create_table "parameters", force: :cascade do |t|
    t.integer "value"
    t.string "name"
    t.string "type"
    t.string "bonus_type", default: ""
    t.bigint "entity_id"
    t.string "entity_type"
    t.index ["entity_id", "entity_type"], name: "index_parameters_on_entity_id_and_entity_type"
  end

  create_table "requirements", force: :cascade do |t|
    t.string "check_applies_to"
    t.string "name"
    t.string "value"
    t.bigint "entity_id"
    t.string "entity_type"
    t.index ["entity_id", "entity_type"], name: "index_requirements_on_entity_id_and_entity_type"
  end

  create_table "virtues", force: :cascade do |t|
    t.string "name"
    t.string "internal_name"
    t.text "description"
    t.bigint "hero_id"
    t.index ["hero_id"], name: "index_virtues_on_hero_id"
  end

  add_foreign_key "virtues", "heroes"
end
