class CreateAccounts < ActiveRecord::Migration[7.1]
  def change
    create_table :accounts do |t|
      t.string :name
      t.integer :balance
      t.string :history
      t.references :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
