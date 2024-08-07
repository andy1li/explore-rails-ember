class CoursesController < ApplicationController
  def index
    render jsonapi: Course.all
  end

  def show
    user = Course.find(params[:id])
    render jsonapi: user
  end
end
