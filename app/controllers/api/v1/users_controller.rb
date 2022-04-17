class Api::V1::UsersController < ApplicationController
  def index
    @videos = Video.order(created_at: :desc).page(params[:page_no]).per(params[:per_page])
    render json: @videos.map { |video|
      video.as_json.merge({ image_url: url_for(video.clip) })
    }
  end
end
