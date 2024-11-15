from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit_data():
    name = request.json.get('name')
    return jsonify({"message": f"{name}!"})

if __name__ == '__main__':
    app.run(debug=True)
