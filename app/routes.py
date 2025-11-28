from flask import Blueprint, render_template, session, redirect, url_for
from functools import wraps

routes = Blueprint("routes", __name__)

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "uid" not in session:
            return redirect(url_for("routes.login"))
        return f(*args, **kwargs)
    return decorated_function

@routes.route("/")
def home():
    return redirect(url_for("routes.dashboard"))

@routes.route("/login")
def login():
    return render_template("login.html")

@routes.route("/register")
def register():
    return render_template("register.html")

@routes.route("/dashboard")
@login_required
def dashboard():
    return render_template("dashboard.html")

@routes.route("/writer")
@login_required
def writer():
    return render_template("writer.html")

@routes.route("/summarizer")
@login_required
def summarizer():
    return render_template("summarizer.html")

@routes.route("/code-explain")
@login_required
def code_explain():
    return render_template("code_explain.html")

@routes.route("/grammar")
@login_required
def grammar():
    return render_template("grammar.html")

@routes.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("routes.login"))
