class CreateMeleeWeapons < ActiveRecord::Migration[6.0]
  def change
    create_table :melee_weapons do |t|
      t.string :name, index: true, unique: true, null: false
      t.string :internal_name, index: true, unique: true, null: false
      t.string :family, null: false
      t.string :kind, null: false
      t.string :rarity, null: false
      t.string :dmg, null: false
      t.integer :balance, default: 0, null: false
      t.integer :defense, default: 0, null: false
      t.integer :money_cost, default: 0

      t.text :special_rules
    end
  end
end
