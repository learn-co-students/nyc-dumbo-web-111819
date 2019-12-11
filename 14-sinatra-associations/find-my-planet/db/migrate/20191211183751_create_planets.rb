class CreatePlanets < ActiveRecord::Migration
  def change
    create_table :planets do |t|
      t.string :name
      t.boolean :has_life
      t.integer :age
      t.string :weather
      t.integer :universe_id

      t.timestamps null: false
    end
  end
end
