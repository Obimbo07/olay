from wtforms import Form, StringField, PasswordField, validators

class SignUpForm(Form):
    username = StringField('Username', validators=[validators.DataRequired()])
    password = PasswordField('Password', validators=[validators.DataRequired()])
