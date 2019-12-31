class Gardener < ApplicationRecord
  has_many :gardens
  
  has_secure_password

  validates :username, uniqueness: true

  # sign up
  # def password=(plaintext_password)
  #   # encrypt the password
  #   encrypted_pw = BCrypt::Password.create(plaintext_password)
  #   # save it to the password_digest field
  #   self.password_digest = encrypted_pw
  # end

  # # login
  # def authenticate(plaintext_password)
  #   # get the encrypted password out of the database
  #   bc_pw = BCrypt::Password.new(self.password_digest)
  #   # check if it matches the plaintext password
  #   bc_pw == plaintext_password
  # end
end
