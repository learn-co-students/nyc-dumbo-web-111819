class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :smell
      t.integer :leaf_count
      t.belongs_to :garden, null: false, foreign_key: true

      t.timestamps
    end
  end
end
