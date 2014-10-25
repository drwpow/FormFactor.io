# --------------------------------------
#   Config
# --------------------------------------

# ----- Middleman ----- #

# activate :livereload, :grace_period => 2

# ----- Site ----- #

set :site_url, 'http://formfactor.io/'

# ----- Assets ----- #

set :css_dir, 'assets/stylesheets'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

# ----- Code ----- #

activate :syntax
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, footnotes: true, smartypants: true, tables: true

# --------------------------------------
#   Helpers
# --------------------------------------


# --------------------------------------
#   Production
# --------------------------------------

# ----- Output ----- #

set :haml, {attr_wrapper: '"'}

::Compass.configuration.sass_options = { :line_comments => false }

# ----- Optimization ----- #

configure :build do
  activate :minify_javascript
  activate :relative_assets
  activate :gzip
end

# ----- Prefixing ----- #

activate :autoprefixer do |config|
  config.browsers = ['last 1 version', 'Explorer >= 10']
  config.cascade  = false
end
