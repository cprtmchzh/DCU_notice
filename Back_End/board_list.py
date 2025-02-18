import urllib.request
from flask_cors import CORS
from bs4 import BeautifulSoup
from flask import Flask, jsonify, request

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app)

@app.route("/notice", methods = ["GET"])
def notice():
    url = request.args.get("url")
    req = urllib.request.Request(url)
    sourcecode = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(sourcecode, "html.parser")
    notice_list = []
    
    board_list = soup.select("#main_contents > div.layout > div > div > div.board_list > table > tbody > tr")
    
    for board in board_list:
        title = board.find("a")
        if title is not None:
            if title.find(class_="notice") is not None:
                type = "공지"
            else:
                type = board.select_one("td:nth-child(1)").text
            
            name = title.text.strip()
            writer = board.find(class_="writer").next_element.text
            date = board.select_one("td:nth-child(5)").text
            hyperlink = "https://www.cu.ac.kr" + title.attrs['href']
            
            new_notice = {"type": type, "name": name, "writer": writer, "date": date, "hyperlink": hyperlink}
            notice_list.append(new_notice)
            
        else:
            continue
        
    return jsonify(notice_list)
    
    
@app.route("/dormitory", methods = ["GET"])
def dormitory():
    url = request.args.get("url")
    req = urllib.request.Request(url)
    sourcecode = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(sourcecode, "html.parser")
    notice_list = []
    
    board_list = soup.select("#bd_163_0 > div > table > tbody > tr")
    
    for board in board_list:
        type = board.find(class_="no").text.strip()
        name = board.find(class_="title").text.strip()
        writer = board.find(class_="author").text.strip()
        date = board.find(class_="time").text.strip()
        
        #bd_163_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(10) > td.title > a
        
        hyperlink = board.select_one("td.title > a").attrs['href']
        
        new_notice = {"type": type, "name": name, "writer": writer, "date": date, "hyperlink": hyperlink}
        notice_list.append(new_notice)
        
    return jsonify(notice_list)

if __name__ == '__main__':
    app.run(port=5000, debug=True)