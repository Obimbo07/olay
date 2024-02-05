from flask import Blueprint, request, jsonify
from .forms import SignUpForm
from app import db

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def sign_up():
    form = SignUpForm(request.json)
    if form.validate():
        username = form.username.data
        password = form.password.data
        # Perform database operations to save user
        return jsonify({'message': 'User signed up successfully'}), 201
    else:
        return jsonify({'errors': form.errors}), 400
