class CreateImplants < ActiveRecord::Migration[6.0]
  def change
    create_table :implants do |t|
      t.string :name, index: true, unique: true
      t.string :internal_name, index: true, unique: true
      t.text :description
      t.text :construction
      t.string :kind, null: false #Midgard, Alfheim...
      t.integer :neurostability_cost, default: 0, null: false
      t.integer :money_cost, default: 0, null: false
    end
  end
end
