from enum import unique
from flask_sqlalchemy import SQLAlchemy
import flask_login


db = SQLAlchemy()
class Image_User(db.Model, flask_login.mixins.UserMixin):
    __tablename__ = 'User_Image' # Name of the table in our database
    # Defining the columns
    imageId = db.Column(db.Integer, primary_key=True,)
    image = db.Column(db.String(80),unique=False, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('App_User.userId'))
    def get_id(self):
        return db.text_type(self.imageId)


class App_User(db.Model, flask_login.mixins.UserMixin):
    __tablename__ = 'App_User' # Name of the table in our database
    # Defining the columns
    userId = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email=db.Column(db.String(80), unique=True,nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    mobilePhone = db.Column(db.String(80), unique=False, nullable=True)
    def get_id(self):
        return chr(self.userId)