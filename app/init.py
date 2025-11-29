from flask import Flask
from app.routes import routes
from app.api import api
from app.models import db

from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    @app.context_processor
    def inject_config():
        return dict(config=app.config)

    db.init_app(app)
    
    with app.app_context():
        db.create_all()

    app.register_blueprint(routes)
    app.register_blueprint(api)

    return app
