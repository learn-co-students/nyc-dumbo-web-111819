class CreateGardens < ActiveRecord::Migration[6.0]
  def change
    create_table :gardens do |t|
      t.integer :length
      t.integer :width
      t.string :location
      t.integer :staff_count

      t.timestamps
    end
  end
end
