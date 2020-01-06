class CreateRangedWeapons < ActiveRecord::Migration[6.0]
  def change
    create_table :ranged_weapons do |t|
      t.string :name, index: true, unique: true, null: false
      t.string :internal_name, index: true, unique: true, null: false
      t.string :family, null: false
      t.string :kind, null: false
      t.string :rarity, null: false
      t.string :dmg, null: false
      t.integer :accuracy, default: 0, null: false
      t.string :attacks_capability, null: false
      t.integer :money_cost, default: 0

      t.text :special_rules
    end
  end
end
