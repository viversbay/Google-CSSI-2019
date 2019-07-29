from google.appengine.ext import ndb

class MemeInfo(ndb.Model):
    topLine = ndb.StringProperty(required=True)
    bottomLine = ndb.StringProperty(required=True)
    memeUrl = ndb.StringProperty(required=True)

    
