from flask import Flask, render_template, request


app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/index')
def index():
    return render_template("index.html")
@app.route('/thanks')
def thanks():
    return render_template("thanks.html")



if __name__ == '__main__':
    app.run(debug=True, port=3000)