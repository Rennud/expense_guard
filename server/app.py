import os
from flask import Flask, request, jsonify, url_for 
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


# Create flask app
app = Flask( __name__)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')
jwt = JWTManager(app)

CORS(app)

# Create a route to authenticate your users and return JWTs. 
# The create_access_token() function is used to actually generate the JWT.
@app.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@app.route("/profile", methods=["GET"])
@jwt_required()
def user_profile():
    # I can get email from access_token
    email = get_jwt_identity()
    dictionary = {
        "message": "Welcome in your profile " + email
    }

    return jsonify(dictionary)