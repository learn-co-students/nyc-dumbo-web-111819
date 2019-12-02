class CreateUserJokes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_jokes do |t|
      t.integer :joke_id
      t.integer :user_id

      t.timestamps
    end
  end
end
