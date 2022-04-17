class Api::V1::UsersController < ApplicationController
  def index
    @videos = Video.all
    render json: @videos.map { |video|
      video.as_json.merge({ image_url: url_for(video.clip) })
    }
  end
end
