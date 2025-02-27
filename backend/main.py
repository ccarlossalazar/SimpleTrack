from flask import Flask, request, jsonify
from config import app, db
from models import Users

@app.route("/users", methods=["GET"])
def get_users():
    users = Users.query.all()
    users_json = list(map(lambda x: x.to_json(), users))
    return jsonify({"users": users_json})


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)

    
