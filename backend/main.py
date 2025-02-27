from flask import Flask, request, jsonify
from config import app, db
from models import Users

@app.route("/users", methods=["GET"])
def get_users():
    users = Users.query.all()
    users_json = list(map(lambda x: x.to_json(), users))
    return jsonify({"users": users_json})

@app.route("/create_users", methods=["POST"])
def create_user():
    firstname = request.json.get("firstName")
    lastname = request.json.get("lastName")
    email = request.json.get("email")
    password = request.json.get("password")
    role = request.json.get("role")
    
    if not firstname or not lastname or not email or not password or not role:
        return (
            jsonify({"error": "All fields are required"}), 400,  #400 is a bad request\
        )

    new_user = Users(firstname=firstname, lastname=lastname, email=email, password=password, role=role)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    return jsonify({"message": "User created successfully"}), 201 #Message means created


@app.route("/update_user/<int:user_id>", methods=["Patch"])
def update_user(user_id):
    users = Users.query.get(user_id)

    if not users:
        return jsonify({"message": "User not found"}), 404 #contact not found
    
    data = request.json
    users.firstname = data.get("firstName", users.firstname)
    users.lastname = data.get("firstName", users.lastname)
    users.email = data.get("email", users.email)
    users.role = data.get("firstName", users.role)
    users.password = data.get("firstName", users.password)

    db.session.commit()
    return jsonify({"message": "User updated successfully"}), 200 #Success


@app.route("/delete_user/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    users = Users.query.get(user_id)

    if not users:
        return jsonify({"message": "User not found"}), 404

    db.session.delete(users)
    db.session.commit()
    
    return jsonify({"message": "User deleted Successfully"}), 200 


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)

    
