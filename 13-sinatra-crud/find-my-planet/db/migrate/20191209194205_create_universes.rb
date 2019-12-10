class CreateUniverses < ActiveRecord::Migration
  def change
    create_table :universes do |t|
      t.integer :size
      t.string :name
      t.boolean :fair
      t.string :color
      
    end
  end
end
