class Record < ActiveRecord::Base
    belongs_to :store
    belongs_to :collector

end