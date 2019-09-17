class CreateVirtues < ActiveRecord::Migration[6.0]
  def change
    create_table :virtues do |t|
      t.string :name
      t.string :internal_name
      t.text :description
      t.references :hero, foreign_key: true
    end
  end
end
