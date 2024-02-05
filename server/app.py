from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
    host="localhost",
    user="austsolay",
    password="000000",
    database="olay"
)

@app.route('/data', methods=['GET'])
def get_data():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users")
    data = cursor.fetchall()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
