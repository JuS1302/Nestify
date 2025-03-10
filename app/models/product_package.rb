class ProductPackage < ApplicationRecord
  belongs_to :product
  belongs_to :package


  after_save :increase_package_total, if: :saved_change_to_id?
  before_destroy :decrease_package_total

  def increase_package_total
    self.package.update(budget: self.package.budget + self.product.price)
  end

  def decrease_package_total
    self.package.update(budget: self.package.budget - self.product.price)
  end
end
