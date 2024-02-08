from flask import Blueprint, request, jsonify
from .models import db, User, Account, Fund, Investment

api = Blueprint('api', __name__)

@api.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    phone_number = data.get('phone_number')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'message': 'Missing username, email, or password'}), 400

    user = User(username=username, email=email, phone_number=phone_number, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

# @api.route('/add-funds/<int:user_id>', methods=['POST'])
# def add_funds(user_id):
#     data = request.json
#     amount = data.get('amount')

#     if not amount:
#         return jsonify({'message': 'Missing amount'}), 400

#     user = User.query.get(user_id)
#     if not user:
#         return jsonify({'message': 'User not found'}), 404

#     account = Account.query.filter_by(user_id=user_id).first()
#     if not account:
#         return jsonify({'message': 'User does not have an account yet'}), 404

#     account.balance += amount
#     db.session.commit()

#     return jsonify({'message': 'Funds added successfully'}), 200

# @api.route('/invest/<int:user_id>', methods=['POST'])
# def invest(user_id):
#     data = request.json
#     fund_id = data.get('fund_id')
#     amount = data.get('amount')

#     if not fund_id or not amount:
#         return jsonify({'message': 'Missing fund_id or amount'}), 400

#     user = User.query.get(user_id)
#     if not user:
#         return jsonify({'message': 'User not found'}), 404

#     account = Account.query.filter_by(user_id=user_id).first()
#     if not account:
#         return jsonify({'message': 'User does not have an account yet'}), 404

#     fund = Fund.query.get(fund_id)
#     if not fund:
#         return jsonify({'message': 'Fund not found'}), 404

#     if amount > account.balance:
#         return jsonify({'message': 'Insufficient funds'}), 400

#     investment = Investment(account_id=account.id, fund_id=fund_id, amount=amount)
#     account.balance -= amount
#     db.session.add(investment)
#     db.session.commit()

#     return jsonify({'message': 'Investment successful'}), 200
