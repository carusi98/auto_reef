import requests
import json
import urllib.request


def GPIO():
    url = 'http://127.0.0.1:9000/api/getdata'
    json_object = urllib.request.urlopen(url)
    data = json.load(json_object)
    return data