class AddGardenerToGarden < ActiveRecord::Migration[6.0]
  def change
    add_reference :gardens, :gardener, null: true, foreign_key: true
  end
end
