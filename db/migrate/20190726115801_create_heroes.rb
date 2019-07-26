class CreateHeroes < ActiveRecord::Migration[6.0]
  def change
    create_table :heros do |t|
      t.string :name
    end
  end
end
