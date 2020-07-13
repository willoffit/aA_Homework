class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validate :password_cannot_be_blank
  validates :password, length: { minimum: 6 , allow_nil: true }
  before_validation :generate_session_token, :ensure_session_token!, :reset_session_token!
  
  def password_cannot_be_blank
    unless :password.present?
      errors.add("Password cannot be blank")
    end
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end


end
