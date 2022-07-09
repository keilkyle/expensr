class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.string :description
      t.datetime :date
      t.float :amount
      t.integer :user_id

      t.timestamps
    end
  end
end
