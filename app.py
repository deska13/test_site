from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_client')
def add_client():
    return render_template('add_client.html')

@app.route('/order')
def order():
    return render_template('order.html')

@app.route('/client/<int:id>/')
def user_profile(id):
    return "Profile page of user #{}".format(id)

if __name__ == "__main__":
    app.run(debug=True)