from flask import Blueprint, render_template
import time
from .api_call import GPIO


site = Blueprint('site',
    __name__,
    static_folder = "static",
    template_folder = "templates")

@site.route('/')
def index():
    #pull API
    page_content = GPIO() 
    return render_template('index.html',page_content=page_content)



