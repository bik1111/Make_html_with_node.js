import socket

HOST, PORT = '', 9000

listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
listen_socket.bind((HOST, PORT))
listen_socket.listen(1)
print ('Serving HTTP on port', PORT, '...')
while True:
    client_connection, client_address = listen_socket.accept()
    request = str(client_connection.recv(1024),'utf-8')
    print (request)

    http_response = """\
HTTP/1.1 200 OK

<html><head><title>My Python Server</title></head><body><H1 style = " color:blue"> Hello world! </H1></body></html>
"""
    client_connection.sendall(bytes(http_response,'utf-8'))
    client_connection.close()


