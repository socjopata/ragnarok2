class CreateHeroes < ActiveRecord::Migration[6.0]
  def change
    create_table :heroes do |t|
      t.string :name
    end
  end
end
