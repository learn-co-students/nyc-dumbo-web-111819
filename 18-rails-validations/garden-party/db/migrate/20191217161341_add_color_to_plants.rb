class AddColorToPlants < ActiveRecord::Migration[6.0]
  def change
    add_column :plants, :color, :string
  end
end
