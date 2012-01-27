class AddUserToTable < ActiveRecord::Migration
  def change
    add_column :tables, :user, :string
  end
end
