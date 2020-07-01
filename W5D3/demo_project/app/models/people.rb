class People < ApplicationRecord
  validates :name, presence: true
  validates :house_id, presence: true

  
end