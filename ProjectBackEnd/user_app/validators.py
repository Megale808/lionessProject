from django.core.exceptions import ValidationError
import re


def validate_password(value):
    error_message = 'Password must contain at least one uppercase letter,one lowercase letter, one digit, one special character and be at least 8 characters long'
    
    regex = r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
    
    approved_password = re.match(regex, value)
    if approved_password:
        return value
    else:
        raise ValidationError(error_message, params={'value': value})

def validate_phone(value):
    error_message = 'Phone number must be in the format XXX-XXX-XXXX'
    
    regex = r'^\d{3}-\d{3}-\d{4}$'
    
    approved_phone = re.match(regex, value)
    if approved_phone:
        return value
    else:
        raise ValidationError(error_message, params={'value': value})
    

def validate_first_name(value):
    error_message = 'First Letter of First Name must be capitalized, Ex: John'
    
    regex = r'^[A-Z][a-z]*$'
    approved_first_name = re.match(regex, value)
    if approved_first_name:
        return value
    else:
        raise ValidationError(error_message, params={'value': value})

def validate_last_name(value):
    error_message = 'First Letter of Last Name must be capitalized, Ex: Doe'
    
    regex = r'^[A-Z][a-z]*$'
    approved_last_name = re.match(regex, value)
    if approved_last_name:
        return value
    else:
        raise ValidationError(error_message, params={'value': value})