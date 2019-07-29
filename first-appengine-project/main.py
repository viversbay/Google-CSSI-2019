import webapp2  #connecting to the google app engine yaml file
import jinja2 #connets to the html files
import os #apple operating system
from models import MemeInfo

from google.appengine.api import urlfetch
import json


#jinja2.Environment is a constructor

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


# the handler section

#meme_templates = ["https://i.imgflip.com/2/1ur9b0.jpg", "https://i.imgflip.com/2/30b1gx.jpg", "https://i.imgflip.com/2/2kbn1e.jpg"]

class MainPage(webapp2.RequestHandler):
    def get(self):  # for a get request
        api_url = "https://api.imgflip.com/get_memes"
        imgflip_response = urlfetch.fetch(api_url).content
        imgflip_response_json = json.loads(imgflip_response)
        print(imgflip_response_json['data']['memes'])
        meme_templates = []
        for meme in imgflip_response_json['data']['memes']:
            meme_templates.append(meme["url"])

        meme_dictionary = {
            "imgs" : meme_templates
        }
        welcome_template = jinja_env.get_template('welcome.html')
        self.response.write(welcome_template.render(meme_dictionary))

class ResultPage(webapp2.RequestHandler):
    def get(self):
        pass
    def post(self):
        top_line = self.request.get("top-line")
        bottom_line = self.request.get("bottom-line")
        meme_url = self.request.get("template")
        meme_store = MemeInfo(topLine = top_line, bottomLine = bottom_line, memeUrl = meme_url)
        meme_store.put()
        data_dictionary = {
            "top" : top_line,
            "bottom" : bottom_line,
            "url" : meme_url
        }
        result_template = jinja_env.get_template('result.html')
        self.response.write(result_template.render(data_dictionary))

class AllMemes(webapp2.RequestHandler):
    def get(self):
        allmemes_template = jinja_env.get_template("allmemes.html")


        data_dictionary = {
            "all_memes" : MemeInfo.query().fetch()
        }
        self.response.write(allmemes_template.render(data_dictionary))





# the handler section
# class SupportPage(webapp2.RequestHandler):
#     def get(self):
#         self.response.headers['Content-Type'] = 'text/plain'
#         self.response.write('Sorry I am unable to help')








# the app configuration section
app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/result', ResultPage),
    ('/allmemes', AllMemes)
    # ('/support', SupportPage),
     #this maps the root url to the Main Page Handler
], debug=True)
