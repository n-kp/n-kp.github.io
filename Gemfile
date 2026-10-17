# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 7.6"

# Run the deployment link checks on Linux (GitHub Actions).
# Windows authoring and preview do not require libcurl for HTMLProofer.
gem "html-proofer", "~> 5.0", group: :test, platforms: :ruby

platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", :platforms => [:windows]
