class StaticPagesController < ApplicationController
  skip_before_action :ensure_login, only: [:login]
  before_action :ensure_logged_out, only: [:login]
end
