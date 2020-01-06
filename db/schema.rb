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

ActiveRecord::Schema.define(version: 2020_01_06_115143) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "advantages", force: :cascade do |t|
    t.string "name"
    t.string "internal_name"
    t.text "description"
    t.string "kind", null: false
    t.integer "pd_cost", default: 0, null: false
    t.integer "use_again_cost"
    t.index ["internal_name"], name: "index_advantages_on_internal_name"
    t.index ["name"], name: "index_advantages_on_name"
  end

  create_table "heroes", force: :cascade do |t|
    t.string "name"
  end

  create_table "hexeris", force: :cascade do |t|
    t.string "name"
    t.string "internal_name"
    t.text "description"
    t.string "sophistication", null: false
    t.string "range", null: false
    t.string "kind", null: false
    t.integer "mana_cost", default: 0, null: false
    t.integer "casting_difficulty", default: 0, null: false
    t.index ["internal_name"], name: "index_hexeris_on_internal_name"
    t.index ["name"], name: "index_hexeris_on_name"
  end

  create_table "implants", force: :cascade do |t|
    t.string "name"
    t.string "internal_name"
    t.text "description"
    t.text "construction"
    t.string "kind", null: false
    t.integer "neurostability_cost", default: 0, null: false
    t.integer "money_cost", default: 0, null: false
    t.index ["internal_name"], name: "index_implants_on_internal_name"
    t.index ["name"], name: "index_implants_on_name"
  end

  create_table "melee_weapons", force: :cascade do |t|
    t.string "name", null: false
    t.string "internal_name", null: false
    t.string "family", null: false
    t.string "kind", null: false
    t.string "rarity", null: false
    t.string "dmg", null: false
    t.integer "balance", default: 0, null: false
    t.integer "defense", default: 0, null: false
    t.integer "money_cost", default: 0
    t.text "special_rules"
    t.index ["internal_name"], name: "index_melee_weapons_on_internal_name"
    t.index ["name"], name: "index_melee_weapons_on_name"
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
    t.index ["internal_name"], name: "index_virtues_on_internal_name"
    t.index ["name"], name: "index_virtues_on_name"
  end

  add_foreign_key "virtues", "heroes"
end
