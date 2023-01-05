class Collector < ActiveRecord::Base
    has_many :reviews
    has_many :records, through: :reviews

end