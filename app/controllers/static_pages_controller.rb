class StaticPagesController < ApplicationController
  skip_before_action :ensure_login, only: [:login]
end
