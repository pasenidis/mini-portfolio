from http.server import HTTPServer, CGIHTTPRequestHandler
server_data = ("0.0.0.0", 3000)
server = HTTPServer(server_data, CGIHTTPRequestHandler)
server.serve_forever()