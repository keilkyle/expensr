class CreateExpensetags < ActiveRecord::Migration[6.1]
  def change
    create_table :expensetags do |t|
      t.string :expense_id
      t.string :tag_id

      t.timestamps
    end
  end
end
