require 'rails_helper'

RSpec.describe TweetsController, :type => :controller do
  describe "GET #index" do
    it "returns tweets json" do
      get :index, username: "evilhag"
      expect(response).to be_success
    end
  end
end
