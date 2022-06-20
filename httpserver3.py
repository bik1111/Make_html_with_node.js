
# Name: httpserver3.py
# Client: http://localhost:8095

from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import parse_qs, urlparse #qs = query string 

class testHTTPServer_RequestHandler(SimpleHTTPRequestHandler):

    def do_GET(self):
        url = self.path
        form = parse_qs(urlparse(url).query)
        print(form)

        super().do_GET()
        print("do_get")

port = 8095 
httpd = HTTPServer(('', port), testHTTPServer_RequestHandler)
print("Starting simple_httpd on port: " + str(httpd.server_port))
httpd.serve_forever()