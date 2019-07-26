class CreateParameters < ActiveRecord::Migration[6.0]
  def change
    create_table :parameters do |t|
      t.integer :value
      t.string :name
      t.string :type
      t.references :hero, foreign_key: true
    end
  end
end
