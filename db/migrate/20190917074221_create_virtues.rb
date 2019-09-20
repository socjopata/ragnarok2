class CreateVirtues < ActiveRecord::Migration[6.0]
  def change
    create_table :virtues do |t|
      t.string :name, index: true, unique: true
      t.string :internal_name, index: true, unique: true
      t.text :description
      t.references :hero, foreign_key: true
    end
  end
end
