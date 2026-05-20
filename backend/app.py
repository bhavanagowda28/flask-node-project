from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/api/data', methods=['POST'])
def receive_data():

    data = request.json

    name = data.get('name')
    email = data.get('email')

    print("Received Data:")
    print(name)
    print(email)

    return jsonify({
        "message": "Data received successfully"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)




