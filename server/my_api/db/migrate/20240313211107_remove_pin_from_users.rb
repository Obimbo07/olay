class RemovePinFromUsers < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :pin, :string
  end
end
