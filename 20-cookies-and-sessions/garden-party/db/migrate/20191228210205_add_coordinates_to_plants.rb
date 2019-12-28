class AddCoordinatesToPlants < ActiveRecord::Migration[6.0]
  def change
    remove_column :plants, :name, :string
    remove_column :plants, :smell, :string
    remove_column :plants, :leaf_count, :integer
    add_column :plants, :x, :integer
    add_column :plants, :y, :integer
    add_column :plants, :width, :integer
    add_column :plants, :length, :integer
    add_column :plants, :emoji, :string
  end
end
