class Collector < ActiveRecord::Base
    has_many :records
    has_many :stores, through: :records

end