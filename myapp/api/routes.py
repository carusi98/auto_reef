from flask import Blueprint
from flask import request

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/getdata')
def getdata():
    return {
        'Temp': '87', 'LED_on':'active', 'LED_off':'', 'NIGHT_on':'active', 'NIGHT_off':'',
        'HEAT_on':'active', 'HEAT_off':''       
        }

@api.route('/postdata', methods=["POST"])
def postdata():
        action = {'action' : request.json['action']}
        print(action)
        
        return {
            'Switch1' : 'off',
            'Switch2' : 'off',
            'Switch3' : action['action']
                
            }
