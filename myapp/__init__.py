from flask import Flask, render_template


from .api.routes import api
from .site.routes import site

app = Flask(
    "myapp",
    template_folder = "templates",
    static_folder = "static"
)


# register blueprints
app.register_blueprint(api)
app.register_blueprint(site)


# show url_map
print(app.url_map)


