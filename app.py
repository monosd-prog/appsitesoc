from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')  # Путь который будет показывать что будет выводиться на главной странице


@app.route('/about')
def about():
    return render_template('about.html')  # Путь который будет показывать что будет выводиться на главной странице


if __name__ == '__main__':
    app.run(debug=True)  # После разработке заменить на false
