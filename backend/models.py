from config import db

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(80), unique=False, nullable=False)
    lastname = db.Column(db.String(80), unique=False, nullable=False)
    role = db.Column(db.Enum('admin','employee','maintenance'), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    
    def to_json(self): 
        return {
            "id": self.id,
            "firstName": self.firstname,
            "lastName": self.lastname,
            "role": self.role,
            "email": self.email,
            "password": self.password
        }
        
