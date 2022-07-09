class CreateExpensetags < ActiveRecord::Migration[6.1]
  def change
    create_table :expensetags do |t|
      t.integer :expense_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
