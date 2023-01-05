class Collector < ActiveRecord::Base
    has_many :records
    has_many :reviews, through: :records


end