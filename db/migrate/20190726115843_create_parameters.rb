class CreateParameters < ActiveRecord::Migration[6.0]
  def change
    create_table :parameters do |t|
      t.integer :value
      t.string :name
      t.string :type
      t.string :bonus_type, default: ""
      t.bigint :entity_id
      t.string :entity_type
    end

    add_index :parameters, [:entity_id, :entity_type]
  end
end
