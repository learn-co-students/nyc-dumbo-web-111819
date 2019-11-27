class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.string :console
      t.string :bio
      # t.boolean :deleted fake delete

      t.timestamps
      # create_at, updated_at
    end
  end
end
