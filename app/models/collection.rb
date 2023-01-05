class Collection < ActiveRecord::Base
    belongs_to :collector
    has_many :records, through: :collector
end