class CreateHexeris < ActiveRecord::Migration[6.0]
  def change
    create_table :hexeris do |t|
      t.string :name, index: true, unique: true
      t.string :internal_name, index: true, unique: true
      t.text :description
      t.string :sophistication, null: false
      t.string :range, null: false
      t.string :kind, null: false #Seidr, Alfheim...
      t.integer :mana_cost, default: 0, null: false
      t.integer :casting_difficulty, default: 0, null: false


    end
  end
end
