class CreateAdvantagesAndRequirements < ActiveRecord::Migration[6.0]
  def change
    create_table :advantages do |t|
      t.string :name, index: true, unique: true
      t.string :internal_name, index: true, unique: true
      t.text :description
      t.string :kind, null: false # melee, ranged, general...
      t.integer :pd_cost, default: 0
      t.integer :use_again_cost
    end

    create_table :requirements do |t|
      t.string :check_applies_to
      t.string :name
      t.string :value
      t.bigint :entity_id
      t.string :entity_type
    end

    add_index :requirements, [:entity_id, :entity_type]
  end
end
